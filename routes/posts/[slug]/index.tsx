import { Handlers, PageProps } from "$fresh/server.ts";
import { getPost, Post } from "../../../utils/posts.ts";
import { PageLayout } from "../../../components/PageLayout.tsx";

export const handler: Handlers<{ post: Post; shareImagePath: string } | null> =
  {
    async GET(_, ctx) {
      const post = await getPost(ctx.params.slug);
      if (!post) {
        return ctx.renderNotFound();
      }
      const shareImagePath = post.cover.rect || post.cover.square;
      return ctx.render({ post, shareImagePath });
    },
  };

export default function PostPage(
  { data: { post } }: PageProps<{ post: Post; shareImagePath: string }>,
) {
  return (
    <PageLayout
      title={post.title}
      currentPage="posts"
      includeSubscribeCta={true}
    >
      <div class="mb-8">
        <a
          href="/posts"
          class="text-secondary hover:text-primary transition duration-300"
        >
          ← Back to Posts
        </a>
      </div>
      <article class="prose prose-lg lg:prose-xl mx-auto">
        <h1>{post.title}</h1>
        <p class="text-gray-600">
          {post.published_at ? post.published_at.toDateString() : "No date"}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </PageLayout>
  );
}
