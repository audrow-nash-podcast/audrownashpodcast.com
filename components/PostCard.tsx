import { Post } from "../utils/posts.ts";

type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps) {
  const isNotPublished = !post.published_at || post.published_at > new Date();
  const imageUrl = post.cover.rect;

  // Create optimized image URLs for different sizes
  const optimizedImageUrl = imageUrl ? `${imageUrl}?w=400&q=80` : "";
  const optimizedImageUrlLarge = imageUrl ? `${imageUrl}?w=800&q=80` : "";

  return (
    <li class="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <a
        href={`/posts/${post.slug}`}
        class="block h-full"
      >
        <div class="flex flex-col md:flex-row md:h-[240px]">
          {imageUrl && (
            <div class="md:w-[320px] relative shrink-0 bg-white flex items-center justify-center">
              <img
                src={optimizedImageUrl}
                srcset={`${optimizedImageUrl} 400w, ${optimizedImageUrlLarge} 800w`}
                sizes="(max-width: 768px) 100vw, 320px"
                alt={post.title}
                class="w-full h-[240px] md:h-full object-contain px-4 rounded-lg"
                loading="lazy"
                width="320"
                height="240"
              />
            </div>
          )}
          <div class="flex-1 px-6 py-6 md:px-8 md:py-8">
            <h3 class="text-2xl font-bold mb-3 text-gray-900">{post.title}</h3>
            <p class="text-gray-600 mb-6 line-clamp-2">{post.snippet}</p>
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
