import { Head } from "$fresh/runtime.ts";
import { Header } from "../islands/Header.tsx";
import { Footer } from "../components/Footer.tsx";

type PageLayoutProps = {
  title: string;
  currentPage: "home" | "about" | "contact" | "listen";
  children: preact.ComponentChildren;
};

export function PageLayout({ title, currentPage, children }: PageLayoutProps) {
  return (
    <>
      <Head>
        <title>{title} - Audrow Nash Podcast</title>
      </Head>
      <div class="min-h-screen bg-white text-gray-800 font-sans">
        <Header currentPage={currentPage} />

        <main class="max-w-4xl mx-auto px-4 py-12">
          {children}
        </main>

        <Footer />
      </div>
    </>
  );
}
