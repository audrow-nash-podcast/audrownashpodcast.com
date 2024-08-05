import { marked } from "marked";
import { parseArgs } from "@std/cli/parse-args";
import { extractYaml as extract } from "@std/front-matter";
import {
  EnvSchema,
  PostFrontmatter,
  PostFrontmatterSchema,
} from "../schemas.ts";
import { loadSync } from "@std/dotenv";

type EmailData =
  & {
    subject: string;
    body: string;
    slug: string;
  }
  & (
    | { status: "draft"; publish_date: null }
    | { status: "scheduled" | "sent"; publish_date: string }
  );

class ButtondownAPI {
  private apiUrl = "https://api.buttondown.email/v1/emails";
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  private async makeRequest(method: string, data: EmailData) {
    const response = await fetch(this.apiUrl, {
      method,
      headers: {
        "Authorization": `Token ${this.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  }

  async createDraftEmail(
    frontmatter: PostFrontmatter,
    mdContent: string,
    slug: string,
  ) {
    const emailData: EmailData = {
      subject: frontmatter.title,
      body: mdContent,
      slug,
      status: "draft",
      publish_date: null,
    };

    try {
      const result = await this.makeRequest("POST", emailData);
      console.log("Draft email created successfully:", result);
      return result;
    } catch (error) {
      console.error("Error creating draft email:", error);
      throw error;
    }
  }

  async scheduleEmail(
    frontmatter: PostFrontmatter,
    mdContent: string,
    slug: string,
    publishDate: Date,
  ) {
    const emailData: EmailData = {
      subject: frontmatter.title,
      body: mdContent,
      slug,
      status: "scheduled",
      publish_date: publishDate.toISOString(),
    };

    try {
      const result = await this.makeRequest("POST", emailData);
      console.log("Email scheduled successfully:", result);
      return result;
    } catch (error) {
      console.error("Error scheduling email:", error);
      throw error;
    }
  }
}

async function readAndProcessMarkdownFile(
  filePath: string,
): Promise<
  { frontmatter: PostFrontmatter; htmlContent: string; slug: string }
> {
  const slug = filePath.split("/").pop()?.split(".")[0];
  if (!slug) {
    throw new Error("No slug found in file path");
  }
  try {
    const content = await Deno.readTextFile(filePath);
    const { attrs, body } = extract(content);

    const frontmatter = PostFrontmatterSchema.parse(attrs);
    const processedBody = await marked(body);

    return { frontmatter, htmlContent: processedBody, slug };
  } catch (error) {
    console.error(`Error reading or processing file: ${error.message}`);
    throw error;
  }
}

async function main() {
  const envResult = EnvSchema.safeParse(loadSync());
  if (!envResult.success) {
    console.error("Error: .env file is invalid");
    console.log(envResult.error);
    Deno.exit(1);
  }
  const env = envResult.data;

  const args = parseArgs(Deno.args);
  if (args._.length !== 1) {
    console.error(
      "Please provide exactly one argument: the path to the post markdown file.",
    );
    Deno.exit(1);
  }

  const filePath = args._[0] as string;

  try {
    const { frontmatter, htmlContent, slug } = await readAndProcessMarkdownFile(
      filePath,
    );
    const api = new ButtondownAPI(env.BUTTONDOWN_API_KEY);

    if (frontmatter.published_at) {
      await api.scheduleEmail(
        frontmatter,
        htmlContent,
        slug,
        frontmatter.published_at,
      );
      console.log("Email scheduled successfully");
    } else {
      await api.createDraftEmail(frontmatter, htmlContent, slug);
      console.log("Draft email created successfully");
    }
  } catch (error) {
    console.error("Failed to create or schedule email:", error);
    Deno.exit(1);
  }
}

await main();
