import { Handlers, PageProps } from "$fresh/server.ts";
import { getPost, Post } from "../../utils/posts.ts";
import { PageLayout } from "../../components/PageLayout.tsx";

export const handler: Handlers<Post | null> = {
  async GET(_, ctx) {
    const post = await getPost(ctx.params.slug);
    if (!post) {
      return ctx.renderNotFound();
    }
    return ctx.render(post);
  },
};

export default function PostPage({ data: post }: PageProps<Post>) {
  return (
    <PageLayout title={post.title} currentPage="posts">
      <article class="prose prose-lg lg:prose-xl mx-auto">
        <h1>{post.title}</h1>
        <p class="text-gray-600">{post.publishedAt.toDateString()}</p>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </PageLayout>
  );
}