import { useSignal } from "@preact/signals";
import { PageName } from "../types.ts";
import { SubscribePopup } from "./SubscribePopup.tsx";

type HeaderProps = {
  currentPage: PageName;
  isTransparent?: boolean;
};

export function Header({ currentPage, isTransparent = false }: HeaderProps) {
  const isMenuOpen = useSignal(false);
  const isSubscribePopupOpen = useSignal(false);

  const baseClasses = "py-4 w-full";
  const bgClasses = isTransparent
    ? "bg-transparent text-white"
    : "bg-gray-100 text-gray-800";
  const menuOpenClasses = isMenuOpen.value ? "text-white" : "";

  return (
    <header
      class={`${baseClasses} ${bgClasses} ${menuOpenClasses} relative z-50`}
    >
      <nav class="mx-auto px-8 flex flex-wrap justify-between items-center">
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
            onClick={() => isMenuOpen.value = !isMenuOpen.value}
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
            isMenuOpen.value
              ? "fixed inset-0 bg-slate-700 text-white pt-20"
              : "hidden"
          } lg:relative lg:bg-transparent lg:flex lg:items-center lg:w-auto ${
            !isTransparent && !isMenuOpen.value
              ? "lg:text-gray-800"
              : "lg:text-white"
          }`}
        >
          {isMenuOpen.value && (
            <div class="absolute top-4 left-0 right-0 flex justify-between items-center px-8">
              <h1 class="text-3xl font-bold font-bebas">
                <a href="/" class="hover:underline">Audrow Nash Podcast</a>
              </h1>
              <button
                onClick={() => isMenuOpen.value = false}
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
                onClick={() => isMenuOpen.value = false}
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
                onClick={() => isMenuOpen.value = false}
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
                onClick={() => isMenuOpen.value = false}
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
                onClick={() => isMenuOpen.value = false}
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
                onClick={() => isMenuOpen.value = false}
                aria-label="Go to Contact page"
              >
                Contact
              </a>
            </li>
          </ul>
          <div
            class={`${
              isMenuOpen.value ? "absolute bottom-16 left-0 right-0" : ""
            } text-center lg:hidden mt-8`}
          >
            <button
              onClick={() => isSubscribePopupOpen.value = true}
              class="bg-secondary hover:bg-primary text-white font-bold text-xl py-4 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
            >
              Subscribe
            </button>
            <SubscribePopup
              isOpen={isSubscribePopupOpen.value}
              onClose={() => isSubscribePopupOpen.value = false}
            />
          </div>
        </div>

        <div class="hidden lg:block">
          <button
            onClick={() => isSubscribePopupOpen.value = true}
            class="bg-secondary text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl hover:bg-primary relative overflow-hidden group"
          >
            <span class="relative z-10 px-6">Subscribe</span>
            <span class="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 ease-in-out">
            </span>
          </button>
          <SubscribePopup
            isOpen={isSubscribePopupOpen.value}
            onClose={() => isSubscribePopupOpen.value = false}
          />
        </div>
      </nav>
    </header>
  );
}
