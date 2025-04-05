import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Header } from "../islands/Header.tsx";
import { Footer } from "../components/Footer.tsx";
import { getPosts, Post } from "../utils/posts.ts";
import { PostCard } from "../components/PostCard.tsx";
import { GLOBAL_ANNOUNCEMENT, SOCIAL_LINKS } from "../constants.ts";
import { SubscribeCta } from "../islands/SubscribeCta.tsx";
import { AnnouncementBanner } from "../islands/AnnouncementBanner.tsx";

export const handler: Handlers<Post[]> = {
  async GET(_, ctx) {
    const allPosts = await getPosts();
    const recentPosts = allPosts.slice(0, 3);
    return ctx.render(recentPosts);
  },
};

export default function Home({ data: recentPosts }: PageProps<Post[]>) {
  return (
    <>
      <Head>
        <title>Audrow Nash Podcast</title>
      </Head>

      <div class="min-h-screen bg-white text-gray-800 font-sans">
        {GLOBAL_ANNOUNCEMENT && <AnnouncementBanner {...GLOBAL_ANNOUNCEMENT} />}
        <div class="relative">
          <div class="absolute top-0 left-0 right-0 z-10">
            <Header currentPage="home" isTransparent />
          </div>
          <section class="w-full h-[600px] bg-[url('/banner.png')] bg-cover bg-center relative">
            <img
              src="/banner.png"
              alt="Banner"
              class="w-full h-full object-cover"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-black bg-opacity-20"></div>
            <div class="absolute bottom-0 left-0 right-0">
              <div class="max-w-4xl mx-auto px-4 pb-8">
                <h2 class="text-4xl sm:text-5xl md:text-5xl font-bold text-center text-white">
                  Exploring the frontiers of
                  robotics,<br class="hidden md:inline" />{" "}
                  one conversation at a time
                </h2>
                <div class="mb-6" />
                <p class="text-md sm:text-base md:text-xl text-center text-gray-300">
                  Subscribe below to never miss an episode.
                </p>
                <div class="mb-8" />
              </div>
            </div>
          </section>
        </div>

        <section class="w-full bg-gray-800 py-8">
          <div class="max-w-4xl mx-auto px-8">
            <div class="flex flex-col items-center md:items-start md:flex-row md:justify-between gap-8 md:gap-12">
              <div class="flex flex-col md:items-center items-start md:flex-row md:justify-between gap-8 md:gap-12">
                <SocialLink
                  platform="X"
                  action="Watch"
                />
                <SocialLink
                  platform="YOUTUBE"
                  action="Watch"
                />
                <SocialLink
                  platform="SPOTIFY"
                  action="Listen"
                />
                <SocialLink
                  platform="APPLE_PODCASTS"
                  action="Listen"
                />
              </div>
            </div>
          </div>
        </section>

        <div class="bg-slate-100">
          <main class="max-w-4xl mx-auto px-4">
            <section class="px-4 pt-16">
              <h3 class="text-3xl font-bold mb-6">Recent posts</h3>
              <ul class="space-y-8">
                {recentPosts.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </ul>
              <div class="mt-8 text-center">
                <a
                  href="/posts"
                  class="inline-block bg-secondary hover:bg-primary text-white font-bold py-2 px-4 rounded transition duration-300"
                >
                  View all posts
                </a>
              </div>
            </section>

            <section class="px-4 pt-16">
              <SubscribeCta />
            </section>
          </main>
        </div>

        <Footer />
      </div>
    </>
  );
}

type SocialLinkProps = {
  platform: keyof typeof SOCIAL_LINKS;
  action: "Watch" | "Listen";
};

function SocialLink({ platform, action }: SocialLinkProps) {
  const { url, displayName, icon } = SOCIAL_LINKS[platform];
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center text-white hover:text-gray-300 transition-colors duration-300"
    >
      {icon && (
        <img
          src={icon}
          alt={displayName}
          class={`w-12 h-12 mr-4 ${platform === "X" ? "rounded-lg" : ""}`}
          loading="lazy"
        />
      )}
      <div class="flex flex-col items-start">
        <span class="text-sm text-gray-400">{action} on</span>
        <span class="text-xl font-bold">{displayName}</span>
      </div>
    </a>
  );
}
