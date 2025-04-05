import { memo } from "preact/compat";
import { useSignal } from "@preact/signals";
import { PageName } from "../types.ts";
import { SubscribePopup } from "./SubscribePopup.tsx";
import { MENU_ITEMS } from "../constants.ts";

type HeaderProps = {
  currentPage: PageName;
  isTransparent?: boolean;
};

export const Header = memo(HeaderComponent);

function HeaderComponent({ currentPage, isTransparent = false }: HeaderProps) {
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
              {MENU_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    class={`text-base hover:underline ${
                      currentPage === item.page ? "font-bold" : ""
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <button
            type="button"
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
                type="button"
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
            {MENU_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  class={`text-2xl hover:underline ${
                    currentPage === item.page ? "font-bold" : ""
                  }`}
                  onClick={() => isMenuOpen.value = false}
                  aria-label={`Go to ${item.label} page`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div
            class={`${
              isMenuOpen.value ? "absolute bottom-16 left-0 right-0" : ""
            } text-center lg:hidden mt-8`}
          >
            <button
              type="button"
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
            type="button"
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
