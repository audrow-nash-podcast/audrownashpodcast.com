import { Head } from "$fresh/runtime.ts";
import { Header } from "../islands/Header.tsx";
import { Footer } from "../components/Footer.tsx";
import FoldingSection from "../islands/FoldingSection.tsx";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Get in Touch - Audrow Nash Podcast</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div class="min-h-screen bg-white text-gray-800 font-sans">
        <Header currentPage="contact" />

        <main class="max-w-screen-xl mx-auto px-4 py-12">
          <h2 class="text-4xl font-bold mb-8">Get in Touch</h2>

          <div class="space-y-4">
            <FoldingSection title="Want to be on the podcast?">
              <p>
                I'm happy to schedule an intro call to see if it's a good fit.
              </p>
              <p>
                Send an email to{" "}
                <a
                  href="mailto:interview@audrownashpodcast.com"
                  class="text-blue-600 hover:underline"
                >
                  interview@audrownashpodcast.com
                </a>.
              </p>
            </FoldingSection>

            <FoldingSection title="Looking for a robotics job or a mentor?">
              <p>I'm happy to see if I can help.</p>
              <p>
                Send an email to{" "}
                <a
                  href="mailto:jobsearch@audrownashpodcast.com"
                  class="text-blue-600 hover:underline"
                >
                  jobsearch@audrownashpodcast.com
                </a>{" "}
                or<br />
                <a
                  href="mailto:mentor@audrownashpodcast.com"
                  class="text-blue-600 hover:underline"
                >
                  mentor@audrownashpodcast.com
                </a>.
              </p>
            </FoldingSection>

            <FoldingSection title="Sponsor the podcast?">
              <p>I'm happy to schedule a call to see if it's a good fit.</p>
              <p>
                Send an email to{" "}
                <a
                  href="mailto:sponsor@audrownashpodcast.com"
                  class="text-blue-600 hover:underline"
                >
                  sponsor@audrownashpodcast.com
                </a>.
              </p>
            </FoldingSection>

            <FoldingSection title="Connect on social?">
              <p>I'm happy to connect. I'm on</p>
              <ul class="list-disc list-inside">
                <li>
                  <a href="#" class="text-blue-600 hover:underline">𝕏</a>
                </li>
                <li>
                  <a href="#" class="text-blue-600 hover:underline">LinkedIn</a>
                </li>
                <li>
                  <a href="#" class="text-blue-600 hover:underline">YouTube</a>
                </li>
              </ul>
              <p>I'm most active on 𝕏, but I try to reply on all of them.</p>
            </FoldingSection>

            <FoldingSection title="Something else?">
              <p>I'm curious.</p>
              <p>
                Feel free to send an email to{" "}
                <a
                  href="mailto:hello@audrownashpodcast.com"
                  class="text-blue-600 hover:underline"
                >
                  hello@audrownashpodcast.com
                </a>.
              </p>
            </FoldingSection>
          </div>

          <div class="mt-12">
            <img
              src="/cato-at-computer.jpeg"
              alt="My dog Cato, hard at work"
              class="w-full max-w-2xl mx-auto mb-4"
            />
            <p class="text-center text-sm text-gray-600">
              My dog Cato, hard at work.
            </p>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
