import { extractYaml as extract } from "@std/front-matter";
import { marked } from "marked";
import { PostFrontmatter, PostFrontmatterSchema } from "./schemas.ts";

export interface Post extends PostFrontmatter {
  slug: string;
  content: string;
}

function embedMedia(content: string): string {
  const youtubeRegex =
    /(?:https?:\/\/(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)(?:&\S*)?)|(?:https?:\/\/youtu\.be\/([a-zA-Z0-9_-]+))/g;
  content = content.replace(youtubeRegex, (_match, videoId1, videoId2) => {
    const videoId = videoId1 || videoId2;
    return `<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden;">
      <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>`;
  });

  const xRegex = /https?:\/\/(?:www\.)?(?:twitter|x)\.com\/\w+\/status\/(\d+)/g;
  content = content.replace(xRegex, (_match, tweetId) => {
    // TODO: Find a better solution to this. It seems `data-media-max-width` is needed to make the tweet embed responsive.
    // And the larger value seems to be needed to support the embed expanding to the full width of the container.
    // Note that `100%` doesn't seem to work.
    return `<div class="w-full max-w-full overflow-hidden">
      <blockquote class="twitter-tweet" data-media-max-width="2000"><a href="https://twitter.com/x/status/${tweetId}"></a></blockquote>
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </div>`;
  });

  return content;
}

export async function getPosts(): Promise<Post[]> {
  const files = Deno.readDir("./posts");
  const posts: Post[] = [];

  for await (const file of files) {
    if (file.isFile && file.name.endsWith(".md")) {
      const content = await Deno.readTextFile(`./posts/${file.name}`);
      const { attrs, body } = extract(content);

      try {
        const validatedAttrs = PostFrontmatterSchema.parse(attrs);
        const processedBody = embedMedia(body);
        const html = await marked(processedBody);

        posts.push({
          slug: file.name.replace(".md", ""),
          content: html,
          ...validatedAttrs,
        });
      } catch (error) {
        console.error(`Error parsing frontmatter for ${file.name}:`, error);
      }
    }
  }

  return posts.sort((a, b) =>
    b.published_at.getTime() - a.published_at.getTime()
  );
}

export async function getPost(slug: string): Promise<Post | null> {
  try {
    const content = await Deno.readTextFile(`./posts/${slug}.md`);
    const { attrs, body } = extract(content);

    try {
      const validatedAttrs = PostFrontmatterSchema.parse(attrs);
      const processedBody = embedMedia(body);
      const html = await marked(processedBody);

      return {
        slug,
        content: html,
        ...validatedAttrs,
      };
    } catch (error) {
      console.error(`Error parsing frontmatter for ${slug}.md:`, error);
      return null;
    }
  } catch {
    return null;
  }
}
