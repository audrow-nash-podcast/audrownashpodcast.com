import { Head } from "$fresh/runtime.ts";
import { Header } from "../islands/Header.tsx";
import { Footer } from "../components/Footer.tsx";
import { PageName } from "../types.ts";

type PageLayoutProps = {
  title: string;
  currentPage: PageName;
  children: preact.ComponentChildren;
};

export function PageLayout({ title, currentPage, children }: PageLayoutProps) {
  return (
    <>
      <Head>
        <title>{title} - Audrow Nash Podcast</title>
      </Head>
      <div class="min-h-screen flex flex-col bg-white text-gray-800 font-sans">
        <Header currentPage={currentPage} />

        <main class="flex-grow max-w-4xl w-full mx-auto px-4 py-12">
          {children}
        </main>

        <Footer />
      </div>
    </>
  );
}
