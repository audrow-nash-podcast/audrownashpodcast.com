import { useState } from "preact/hooks";

type HeaderProps = {
  currentPage: "home" | "about" | "contact" | "listen";
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
        <h1 class="text-2xl font-bold">
          <a href="/" class="hover:underline">Audrow Nash Podcast</a>
        </h1>

        <button
          class="lg:hidden z-50"
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
              d={isMenuOpen
                ? "M6 18L18 6M6 6l12 12"
                : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        <div
          class={`${
            isMenuOpen
              ? "fixed inset-0 bg-gray-800 bg-opacity-95 text-white"
              : "hidden"
          } lg:relative lg:bg-transparent lg:block ${
            !isTransparent && !isMenuOpen ? "lg:text-gray-800" : "lg:text-white"
          }`}
        >
          <ul class="flex flex-col lg:flex-row items-center justify-center h-full space-y-8 lg:space-y-0 lg:space-x-8">
            <li>
              <a
                href="/"
                class={`text-2xl lg:text-base hover:underline ${
                  currentPage === "home" ? "font-bold" : ""
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                class={`text-2xl lg:text-base hover:underline ${
                  currentPage === "about" ? "font-bold" : ""
                }`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                class={`text-2xl lg:text-base hover:underline ${
                  currentPage === "contact" ? "font-bold" : ""
                }`}
              >
                Get in Touch
              </a>
            </li>
            <li>
              <a
                href="https://episodes.fm/1716486786"
                class={`text-2xl lg:text-base hover:underline ${
                  currentPage === "listen" ? "font-bold" : ""
                }`}
              >
                Where to Listen?
              </a>
            </li>
          </ul>
          {isMenuOpen && (
            <div class="absolute bottom-16 left-0 right-0 text-center">
              <a
                href="#subscribe"
                class="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition-colors duration-300"
              >
                Subscribe
              </a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
