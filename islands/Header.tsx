import { useState } from "preact/hooks";
import { PageName } from "../types.ts";

type HeaderProps = {
  currentPage: PageName;
  isTransparent?: boolean;
};

export function Header({ currentPage, isTransparent = false }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const baseClasses = "py-4 w-full";
  const bgClasses = isTransparent
    ? "bg-transparent text-white"
    : "bg-gray-100 text-gray-800";
  const menuOpenClasses = isMenuOpen ? "text-white" : "";

  return (
    <header
      class={`${baseClasses} ${bgClasses} ${menuOpenClasses} relative z-50`}
    >
      <nav class="max-w-screen-xl mx-auto px-4 flex flex-wrap justify-between items-center">
        <div class="flex items-center justify-between w-full lg:w-auto">
          <div class="flex items-center space-x-8">
            <h1 class="text-3xl font-bold font-bebas">
              <a href="/" class="hover:underline">Audrow Nash Podcast</a>
            </h1>
            <ul class="hidden lg:flex items-center space-x-8">
              <li>
                <a
                  href="/"
                  class={`text-base hover:underline ${
                    currentPage === "home" ? "font-bold" : ""
                  }`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/where-to-find"
                  class={`text-base hover:underline ${
                    currentPage === "where-to-find" ? "font-bold" : ""
                  }`}
                >
                  Where to Find
                </a>
              </li>
              <li>
                <a
                  href="/posts"
                  class={`text-base hover:underline ${
                    currentPage === "posts" ? "font-bold" : ""
                  }`}
                >
                  Posts
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  class={`text-base hover:underline ${
                    currentPage === "about" ? "font-bold" : ""
                  }`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  class={`text-base hover:underline ${
                    currentPage === "contact" ? "font-bold" : ""
                  }`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <button
            class="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div
          class={`${
            isMenuOpen
              ? "fixed inset-0 bg-secondary text-white pt-20"
              : "hidden"
          } lg:relative lg:bg-transparent lg:flex lg:items-center lg:w-auto ${
            !isTransparent && !isMenuOpen ? "lg:text-gray-800" : "lg:text-white"
          }`}
        >
          {isMenuOpen && (
            <div class="absolute top-4 left-4 right-4 flex justify-between items-center">
              <h1 class="text-3xl font-bold font-bebas">
                <a href="/" class="hover:underline">Audrow Nash Podcast</a>
              </h1>
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          )}
          <ul class="flex flex-col items-center justify-center h-full space-y-8 lg:hidden">
            <li>
              <a
                href="/"
                class={`text-2xl hover:underline ${
                  currentPage === "home" ? "font-bold" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
                aria-label="Go to Home page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/where-to-find"
                class={`text-2xl hover:underline ${
                  currentPage === "where-to-find" ? "font-bold" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
                aria-label="Go to Where to Find page"
              >
                Where to Find
              </a>
            </li>
            <li>
              <a
                href="/posts"
                class={`text-2xl hover:underline ${
                  currentPage === "posts" ? "font-bold" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
                aria-label="Go to Posts page"
              >
                Posts
              </a>
            </li>
            <li>
              <a
                href="/about"
                class={`text-2xl hover:underline ${
                  currentPage === "about" ? "font-bold" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
                aria-label="Go to About page"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                class={`text-2xl hover:underline ${
                  currentPage === "contact" ? "font-bold" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
                aria-label="Go to Contact page"
              >
                Contact
              </a>
            </li>
          </ul>
          <div
            class={`${
              isMenuOpen ? "absolute bottom-16 left-0 right-0" : ""
            } text-center lg:hidden mt-8`}
          >
            <a
              href="#subscribe"
              class="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-colors duration-300 inline-block"
            >
              Subscribe
            </a>
          </div>
        </div>

        <div class="hidden lg:block">
          <a
            href="#subscribe"
            class="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-colors duration-300"
          >
            Subscribe
          </a>
        </div>
      </nav>
    </header>
  );
}
