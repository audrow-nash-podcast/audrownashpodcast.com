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
            src={post.cover}
            alt={`Cover image for ${post.title}`}
            class="w-full md:max-w-60 h-full object-cover"
            loading="lazy"
          />
          <div class="p-6 md:p-8">
            <h3 class="text-2xl font-bold mb-3">{post.title}</h3>
            <p class="text-gray-600 mb-4 line-clamp-3">{post.snippet}</p>
            <p class="text-sm text-gray-500">
              {post.publishedAt.toDateString()}
            </p>
          </div>
        </div>
      </a>
    </li>
  );
}
