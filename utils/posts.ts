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

export async function getPosts(): Promise<Post[]> {
  const files = Deno.readDir("./posts");
  const posts: Post[] = [];

  for await (const file of files) {
    if (file.isFile && file.name.endsWith(".md")) {
      const content = await Deno.readTextFile(`./posts/${file.name}`);
      const { attrs, body } = extract(content);
      const html = await marked(body);

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
    const html = await marked(body);

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
