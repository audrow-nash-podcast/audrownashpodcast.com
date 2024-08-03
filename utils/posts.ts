import { extractYaml as extract } from "@std/front-matter";
import { marked } from "marked";
import { PostFrontmatter, PostFrontmatterSchema } from "./schemas.ts";

export interface Post extends PostFrontmatter {
  slug: string;
  content: string;
  hasTranscript: boolean;
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

async function processPost(
  slug: string,
  content: string,
): Promise<Post> {
  const { attrs, body } = extract(content);

  try {
    const validatedAttrs = PostFrontmatterSchema.parse(attrs);

    // Load transcript if it exists
    let transcriptHtml = "";
    try {
      const transcript = await Deno.readTextFile(`./transcripts/${slug}.md`);
      transcriptHtml = await marked(transcript);
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
      ...validatedAttrs,
    };
  } catch (error) {
    throw new Error(`Error parsing frontmatter for ${slug}: ${error}`);
  }
}

export async function getPosts(): Promise<Post[]> {
  const files = Deno.readDir("./posts");
  const posts: Post[] = [];

  for await (const file of files) {
    if (file.isFile && file.name.endsWith(".md")) {
      const content = await Deno.readTextFile(`./posts/${file.name}`);
      const slug = file.name.replace(".md", "");
      const post = await processPost(slug, content);
      posts.push(post);
    }
  }

  return posts.sort((a, b) =>
    b.published_at.getTime() - a.published_at.getTime()
  );
}

export async function getPost(slug: string): Promise<Post | null> {
  try {
    const content = await Deno.readTextFile(`./posts/${slug}.md`);
    return await processPost(slug, content);
  } catch {
    return null;
  }
}
