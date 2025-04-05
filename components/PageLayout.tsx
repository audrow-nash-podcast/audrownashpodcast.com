import { Head } from "$fresh/runtime.ts";
import { Header } from "../islands/Header.tsx";
import { Footer } from "../components/Footer.tsx";
import { Announcement, PageName } from "../types.ts";
import { SubscribeCta } from "../islands/SubscribeCta.tsx";
import { AnnouncementBanner } from "./AnnouncementBanner.tsx";
import { GLOBAL_ANNOUNCEMENT } from "../constants.ts";

type PageLayoutProps = {
  title: string;
  currentPage: PageName;
  children: preact.ComponentChildren;
  includeSubscribeCta?: boolean;
  announcement?: Announcement | false; // false will hide the announcement, undefined will use global
};

export function PageLayout(
  {
    title,
    currentPage,
    children,
    includeSubscribeCta = false,
    announcement,
  }: PageLayoutProps,
) {
  // If announcement is undefined, use global. If false, show nothing.
  const announcementToShow = announcement === undefined
    ? GLOBAL_ANNOUNCEMENT
    : announcement || undefined;

  return (
    <>
      <Head>
        <title>{title} - Audrow Nash Podcast</title>
      </Head>
      <div class="min-h-screen flex flex-col bg-white text-gray-800 font-sans">
        {announcementToShow && <AnnouncementBanner {...announcementToShow} />}
        <Header currentPage={currentPage} />

        <main class="flex-grow max-w-4xl w-full mx-auto px-8 py-12">
          {children}
        </main>

        {includeSubscribeCta && (
          <div class="mb-12">
            <SubscribeCta />
          </div>
        )}

        <Footer />
      </div>
    </>
  );
}
