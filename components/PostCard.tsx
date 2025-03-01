import { Post } from "../utils/posts.ts";

type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps) {
  const isNotPublished = !post.published_at || post.published_at > new Date();

  return (
    <li class="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 max-w-2xl mx-auto">
      <a
        href={`/posts/${post.slug}`}
        class="block h-full"
      >
        <div class="flex flex-col md:flex-row justify-center items-center">
          <div class="p-6 md:p-8">
            <h3 class="text-2xl font-bold mb-3">{post.title}</h3>
            <p class="text-gray-600 mb-4 line-clamp-2">{post.snippet}</p>
            <div class="flex items-center justify-between">
              <p class="text-sm text-gray-500">
                {post.published_at?.toDateString() || "No date"}
              </p>
              <div class="flex items-center space-x-2">
                {isNotPublished && (
                  <span class="text-xs text-white bg-yellow-500 px-2 py-1 rounded">
                    Not published yet
                  </span>
                )}
                {post.hasTranscript && (
                  <span class="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
                    Transcript included
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </a>
    </li>
  );
}
