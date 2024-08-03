import { Post } from "../utils/posts.ts";

type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <li class="bg-white shadow-md rounded-lg overflow-hidden">
      <a
        href={`/posts/${post.slug}`}
        class="block hover:bg-gray-50 transition duration-150 ease-in-out"
      >
        <div class="flex flex-col md:flex-row">
          <img
            src={post.cover.square}
            alt={`Cover image for ${post.title}`}
            class="w-full md:max-w-60 h-full object-cover"
            loading="lazy"
          />
          <div class="p-6 md:p-8">
            <h3 class="text-2xl font-bold mb-3">{post.title}</h3>
            <p class="text-gray-600 mb-4 line-clamp-2">{post.snippet}</p>
            <div class="flex items-center justify-between">
              <p class="text-sm text-gray-500">
                {post.published_at.toDateString()}
              </p>
              {post.hasTranscript && (
                <span class="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
                  Transcript included
                </span>
              )}
            </div>
          </div>
        </div>
      </a>
    </li>
  );
}
