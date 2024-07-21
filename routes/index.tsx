import { Head } from "$fresh/runtime.ts";
import { Header } from "../islands/Header.tsx";
import { Footer } from "../components/Footer.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Audrow Nash Podcast</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div class="min-h-screen bg-white text-gray-800 font-sans">
        <div class="relative">
          <div class="absolute top-0 left-0 right-0 z-10">
            <Header currentPage="home" isTransparent={true} />
          </div>
          <section class="w-full h-[600px] bg-[url('/banner.png')] bg-cover bg-center relative">
            <div class="absolute inset-0 bg-black bg-opacity-20"></div>
            <div class="absolute bottom-0 left-0 right-0">
              <div class="max-w-3xl mx-auto px-4 pb-8">
                <h2 class="text-4xl sm:text-5xl md:text-5xl font-bold text-center text-white">
                  Exploring the frontiers of robotics, one conversation at a
                  time
                </h2>
                <div class="mb-4" />
                <p class="text-md sm:text-base md:text-xl text-center text-white">
                  Subscribe below to never miss an episode.
                </p>
                <div class="mb-4" />
              </div>
            </div>
          </section>
        </div>

        <main>
          <section class="w-full bg-gray-800 py-8">
            <div class="max-w-6xl mx-auto px-4">
              <div class="flex flex-wrap justify-center gap-4">
                <a
                  href="#"
                  class="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-colors duration-300 text-sm md:text-base"
                >
                  Listen on Apple Podcasts
                </a>
                <a
                  href="#"
                  class="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-colors duration-300 text-sm md:text-base"
                >
                  Listen on Google Podcasts
                </a>
                <a
                  href="#"
                  class="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-colors duration-300 text-sm md:text-base"
                >
                  Listen on Spotify
                </a>
              </div>
            </div>
          </section>

          <section class="mx-4 mt-12">
            <h3 class="text-3xl font-bold mb-6">Latest episodes</h3>
            <div class="bg-gray-100 p-6 rounded-lg">
              <h4 class="text-xl font-bold mb-2">Coming soon</h4>
              <p>
                This is Audrow Nash Podcast, a brand new site by Audrow Nash
                that's just getting started. Things will be up and running here
                shortly, but you can subscribe in the meantime if you'd like to
                stay up to date and receive emails when new content is
                published.
              </p>
              <p class="mt-4 text-gray-600">June 05, 2024</p>
            </div>
          </section>

          <section class="mx-4 mt-12">
            <h3 class="text-2xl font-bold mb-4">
              Don't miss an insight. Subscribe for episode recaps and
              opportunities.
            </h3>
            <form class="flex">
              <input
                type="email"
                placeholder="jamie@example.com"
                class="flex-grow px-4 py-2 rounded-l-full border-2 border-r-0 border-gray-300 focus:outline-none focus:border-gray-500"
              />
              <button
                type="submit"
                class="bg-black text-white px-6 py-2 rounded-r-full hover:bg-gray-800"
              >
                Subscribe
              </button>
            </form>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
