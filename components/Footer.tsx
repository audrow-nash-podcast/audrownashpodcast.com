import { SOCIAL_LINKS } from "../constants.ts";

export function Footer() {
  return (
    <footer class="bg-gray-100 py-16">
      <div class="max-w-4xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 justify-items-center text-center md:text-left">
          <div>
            <h3 class="text-lg font-semibold mb-4">About</h3>
            <ul class="space-y-2">
              <li>
                <a href="/about" class="text-gray-600 hover:text-gray-800">
                  About Audrow
                </a>
              </li>
              <li>
                <a href="/contact" class="text-gray-600 hover:text-gray-800">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/audrow-nash-podcast/audrownashpodcast.com"
                  class="text-gray-600 hover:text-gray-800"
                >
                  Site Github
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Listen</h3>
            <ul class="space-y-2">
              <li>
                <a
                  href="/where-to-find"
                  class="text-gray-600 hover:text-gray-800"
                >
                  Where to Find
                </a>
              </li>
              <li>
                <a
                  href="https://podcasters.spotify.com/pod/show/audrow1"
                  class="text-gray-600 hover:text-gray-800"
                >
                  All Episodes
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Jobs</h3>
            <ul class="space-y-2">
              <li>
                <a
                  href="https://jobs.audrownashpodcast.com"
                  class="text-gray-600 hover:text-gray-800"
                >
                  Browse Jobs
                </a>
              </li>
              <li>
                <a
                  href="https://jobs.audrownashpodcast.com/jobs/new"
                  class="text-gray-600 hover:text-gray-800"
                >
                  Post a Job
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-4">Connect</h3>
            <ul class="space-y-2">
              <li>
                <a
                  href={SOCIAL_LINKS.X.url}
                  class="text-gray-600 hover:text-gray-800"
                >
                  {SOCIAL_LINKS.X.displayName}
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.LINKEDIN.url}
                  class="text-gray-600 hover:text-gray-800"
                >
                  {SOCIAL_LINKS.LINKEDIN.displayName}
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.YOUTUBE.url}
                  class="text-gray-600 hover:text-gray-800"
                >
                  {SOCIAL_LINKS.YOUTUBE.displayName}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-12 text-center">
          <p class="text-gray-600">Happily made in San Antonio.</p>
          <p class="mt-2 text-sm text-gray-500">
            © {new Date().getFullYear()}{" "}
            Audrow Nash Podcast. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
