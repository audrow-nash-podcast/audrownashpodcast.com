import { Handlers, PageProps } from "$fresh/server.ts";
import { getPost, Post } from "../../../utils/posts.ts";
import { PageLayout } from "../../../components/PageLayout.tsx";

export const handler: Handlers<{ post: Post } | null> = {
  async GET(_, ctx) {
    const post = await getPost(ctx.params.slug);
    if (!post) {
      return ctx.renderNotFound();
    }
    return ctx.render({ post });
  },
};

export default function TranscriptPage(
  { data: { post } }: PageProps<{ post: Post }>,
) {
  return (
    <PageLayout
      title={`Transcript: ${post.title}`}
      currentPage="posts"
    >
      <div class="mb-8">
        <a
          href={`/posts/${post.slug}`}
          class="text-secondary hover:text-primary transition duration-300"
        >
          ← Back to Post
        </a>
      </div>
      <article class="prose prose-lg lg:prose-xl mx-auto">
        <h1>Transcript: {post.title}</h1>
        {post.hasTranscript ? (
          <>
            <h2>Table of Contents</h2>
            <ul dangerouslySetInnerHTML={{ __html: post.tableOfContents }} />
            <h2>Interview</h2>
            <div dangerouslySetInnerHTML={{ __html: post.transcript }} />
          </>
        ) : (
          <p>No transcript available for this episode.</p>
        )}
      </article>
    </PageLayout>
  );
}
