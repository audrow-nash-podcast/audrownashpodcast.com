import { Handlers, PageProps } from "$fresh/server.ts";
import { getPosts, Post } from "../../utils/posts.ts";
import { PageLayout } from "../../components/PageLayout.tsx";
import { PostCard } from "../../components/PostCard.tsx";

export const handler: Handlers<Post[]> = {
  async GET(_, ctx) {
    const posts = await getPosts();
    return ctx.render(posts);
  },
};

export default function PostsIndex({ data: posts }: PageProps<Post[]>) {
  return (
    <PageLayout title="Posts" currentPage="posts">
      <h2 class="text-4xl font-bold mb-8">Posts</h2>
      <ul class="space-y-8">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </ul>
    </PageLayout>
  );
}