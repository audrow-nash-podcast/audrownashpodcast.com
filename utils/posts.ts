import { extractYaml as extract } from "@std/front-matter";
import { marked } from "marked";

export interface Post {
  slug: string;
  title: string;
  publishedAt: Date;
  content: string;
  snippet: string;
  cover: string;
}

function embedMedia(content: string): string {
  const youtubeRegex =
    /https?:\/\/(?:www\.)?youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)(?:&\S*)?/g;
  content = content.replace(youtubeRegex, (_match, videoId) => {
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
      const processedBody = embedMedia(body);
      const html = await marked(processedBody);

      posts.push({
        slug: file.name.replace(".md", ""),
        title: attrs.title as string,
        publishedAt: new Date(attrs.published_at as string),
        content: html,
        snippet: attrs.snippet as string,
        cover: attrs.cover as string,
      });
    }
  }

  return posts.sort((a, b) =>
    b.publishedAt.getTime() - a.publishedAt.getTime()
  );
}

export async function getPost(slug: string): Promise<Post | null> {
  try {
    const content = await Deno.readTextFile(`./posts/${slug}.md`);
    const { attrs, body } = extract(content);
    const processedBody = embedMedia(body);
    const html = await marked(processedBody);

    return {
      slug,
      title: attrs.title as string,
      publishedAt: new Date(attrs.published_at as string),
      content: html,
      snippet: attrs.snippet as string,
      cover: attrs.cover as string,
    };
  } catch {
    return null;
  }
}
