import { extractYaml as extract } from "@std/front-matter";
import { marked } from "marked";
import { PostFrontmatter, PostFrontmatterSchema } from "../schemas.ts";

export interface Post extends PostFrontmatter {
  slug: string;
  content: string;
  hasTranscript: boolean;
  transcript: string;
  tableOfContents: string;
}

function embedTranscriptHtml(transcriptHtml?: string): string {
  if (!transcriptHtml) return "";
  return `<details class="mt-4">
    <summary class="cursor-pointer font-semibold">Full transcript</summary>
    <div class="mt-2 bg-gray-100 rounded border border-gray-500 p-4">
      <div style="height: 50vh; overflow-y: auto; padding: 1rem;">${transcriptHtml}</div></div>
  </details>`;
}

function embedMedia(content: string, transcriptHtml?: string): string {
  const youtubeRegex =
    /(?:https?:\/\/(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)(?:&\S*)?)|(?:https?:\/\/youtu\.be\/([a-zA-Z0-9_-]+))/g;
  content = content.replace(youtubeRegex, (_match, videoId1, videoId2) => {
    const videoId = videoId1 || videoId2;
    const embedHtml =
      `<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
      <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>`;

    return embedHtml + embedTranscriptHtml(transcriptHtml);
  });

  const xRegex = /https?:\/\/(?:www\.)?(?:twitter|x)\.com\/\w+\/status\/(\d+)/g;
  content = content.replace(xRegex, (_match, tweetId) => {
    const embedHtml = `<div class="w-full max-w-full overflow-hidden">
      <blockquote class="twitter-tweet" data-media-max-width="2000"><a href="https://twitter.com/x/status/${tweetId}"></a></blockquote>
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </div>`;

    return embedHtml + embedTranscriptHtml(transcriptHtml);
  });

  return content;
}

function generateTableOfContents(content: string): { toc: string; processedContent: string } {
  const headers: { id: string; text: string; level: number }[] = [];
  let idCounter = 0;

  const processedContent = content.replace(/<h([2-6])>(.*?)<\/h\1>/g, (_match, level, text) => {
    const id = `section-${++idCounter}`;
    headers.push({ id, text, level: parseInt(level) });
    return `<h${level} id="${id}">${text}</h${level}>`;
  });

  const toc = headers.map(header =>
    `<li class="ml-${(header.level - 2) * 4}"><a href="#${header.id}" class="text-secondary hover:text-primary">${header.text}</a></li>`
  ).join('\n');

  return { toc, processedContent };
}

async function processPost(
  slug: string,
  content: string,
): Promise<Post> {
  const { attrs, body } = extract(content);

  try {
    const validatedAttrs = PostFrontmatterSchema.parse(attrs);

    // Load transcript if it exists
    let transcriptHtml = "";
    let tableOfContents = "";
    try {
      const transcript = await Deno.readTextFile(`./transcripts/${slug}.md`);
      const { toc, processedContent } = generateTableOfContents(await marked(transcript));
      transcriptHtml = processedContent;
      tableOfContents = toc;
    } catch {
      // Transcript file doesn't exist, continue without it
    }

    // Process blockquotes to avoid double quoting
    const processedBody = body.replace(/^(> .*(?:\n> .*)*)/gm, (match) => {
      const quoteContent = match.replace(/^> /gm, "").trim();
      return `<blockquote class="border-l-4 pl-4 py-2 italic text-gray-600">${quoteContent}</blockquote>`;
    });

    // Append links to the bottom of the content if they exist
    let contentWithLinks = processedBody;
    if (validatedAttrs.links && validatedAttrs.links.length > 0) {
      contentWithLinks += "\n\n## Episode Links\n\n";
      validatedAttrs.links.forEach((link) => {
        contentWithLinks += `- [${link.text}](${link.url})\n`;
      });
    }

    const embedMediaContent = embedMedia(contentWithLinks, transcriptHtml);
    const html = await marked(embedMediaContent);

    return {
      slug,
      content: html,
      hasTranscript: !!transcriptHtml,
      transcript: transcriptHtml,
      tableOfContents,
      ...validatedAttrs,
    };
  } catch (error) {
    throw new Error(`Error parsing frontmatter for ${slug}: ${error}`);
  }
}

export async function getPosts(): Promise<Post[]> {
  const files = Deno.readDir("./posts");
  const posts: Post[] = [];
  const showAllPosts = Deno.env.get("SHOW_ALL_POSTS") === "true";

  for await (const file of files) {
    if (file.isFile && file.name.endsWith(".md")) {
      const content = await Deno.readTextFile(`./posts/${file.name}`);
      const slug = file.name.replace(".md", "");
      const post = await processPost(slug, content);

      // Include the post if showAllPosts is true or if it's published
      if (
        showAllPosts || !post.published_at || post.published_at <= new Date()
      ) {
        posts.push(post);
      }
    }
  }

  return posts.sort((a, b) => {
    if (!a.published_at && !b.published_at) return 0;
    if (!a.published_at) return 1;
    if (!b.published_at) return -1;
    return b.published_at.getTime() - a.published_at.getTime();
  });
}

export async function getPost(slug: string): Promise<Post | null> {
  try {
    const content = await Deno.readTextFile(`./posts/${slug}.md`);
    return await processPost(slug, content);
  } catch {
    return null;
  }
}
