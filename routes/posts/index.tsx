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
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl font-bold mb-8">All Posts</h2>
        <ul class="space-y-8">
          {posts.map((post) => <PostCard key={post.slug} post={post} />)}
        </ul>
      </div>
    </PageLayout>
  );
}
