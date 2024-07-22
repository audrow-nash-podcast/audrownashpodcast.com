import { PageLayout } from "../components/PageLayout.tsx";
import { SOCIAL_LINKS } from "../constants.ts";

export default function WhereToFind() {
  return (
    <PageLayout title="Where to Find" currentPage="where-to-find">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl font-bold mb-4 text-center">
          Where to Find the Podcast
        </h2>
        <p class="text-center text-gray-600 mb-8">
          Listen to the Audrow Nash Podcast on your favorite platforms and stay connected through social media.
        </p>

        <div class="space-y-8">
          <section class="bg-gray-100 rounded-lg p-8 shadow-md">
            <h3 class="text-2xl font-bold mb-6">
              Full Episodes and Discussions
            </h3>
            <ul class="space-y-4">
              <PlatformLink
                icon={SOCIAL_LINKS.X.icon}
                alt={SOCIAL_LINKS.X.displayName}
                href={SOCIAL_LINKS.X.url}
                text="𝕏 (Twitter): Full episodes, clips, and discussions"
              />
              <PlatformLink
                icon={SOCIAL_LINKS.YOUTUBE.icon}
                alt={SOCIAL_LINKS.YOUTUBE.displayName}
                href={SOCIAL_LINKS.YOUTUBE.url}
                text="YouTube: Full episodes and extended clips"
              />
              <PlatformLink
                icon={SOCIAL_LINKS.SPOTIFY.icon}
                alt={SOCIAL_LINKS.SPOTIFY.displayName}
                href={SOCIAL_LINKS.SPOTIFY.url}
                text="Spotify: Full episodes to listen or watch"
              />
            </ul>
          </section>

          <section class="bg-gray-100 rounded-lg p-8 shadow-md">
            <h3 class="text-2xl font-bold mb-6">
              Listen on Your Favorite Platform
            </h3>
            <ul class="space-y-4">
              <PlatformLink
                icon={SOCIAL_LINKS.APPLE_PODCASTS.icon}
                alt={SOCIAL_LINKS.APPLE_PODCASTS.displayName}
                href={SOCIAL_LINKS.APPLE_PODCASTS.url}
                text="Apple Podcasts"
              />
              <PlatformLink
                icon={SOCIAL_LINKS.SPOTIFY.icon}
                alt={SOCIAL_LINKS.SPOTIFY.displayName}
                href={SOCIAL_LINKS.SPOTIFY.url}
                text="Spotify"
              />
              <PlatformLink
                icon={SOCIAL_LINKS.EPISODES_FM.icon}
                alt={SOCIAL_LINKS.EPISODES_FM.displayName}
                href={SOCIAL_LINKS.EPISODES_FM.url}
                text="All other podcasting apps (via episodes.fm)"
              />
            </ul>
          </section>
        </div>
      </div>
    </PageLayout>
  );
}

export interface PlatformLinkProps {
  icon: string;
  alt: string;
  href: string;
  text: string;
}

function PlatformLink({ icon, alt, href, text }: PlatformLinkProps) {
  return (
    <li class="flex items-center">
      <img src={icon} alt={alt} class="w-6 h-6 mr-3 rounded-lg" />
      <a
        href={href}
        class="text-blue-600 hover:text-blue-800 transition-colors duration-300"
      >
        {text}
      </a>
    </li>
  );
}