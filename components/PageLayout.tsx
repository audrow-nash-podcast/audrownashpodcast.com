import { Head } from "$fresh/runtime.ts";
import { Header } from "../islands/Header.tsx";
import { Footer } from "../components/Footer.tsx";
import { PageName } from "../types.ts";
import { SubscribeCta } from "../islands/SubscribeCta.tsx";

type PageLayoutProps = {
  title: string;
  currentPage: PageName;
  children: preact.ComponentChildren;
  includeSubscribeCta?: boolean;
  ogImage?: string;
};

export function PageLayout(
  { title, currentPage, children, includeSubscribeCta = false, ogImage }:
    PageLayoutProps,
) {
  return (
    <>
      <Head>
        <title>{title} - Audrow Nash Podcast</title>
        {ogImage && <meta property="og:image" content={ogImage} />}
      </Head>
      <div class="min-h-screen flex flex-col bg-white text-gray-800 font-sans">
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
