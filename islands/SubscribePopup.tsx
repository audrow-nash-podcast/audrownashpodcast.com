import { computed, signal } from "@preact/signals";
import { BUTTONDOWN_NEWSLETTER_NAME } from "../constants.ts";

const firstName = signal("");
const email = signal("");
const lastName = signal("");

const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export function SubscribePopup(
  { isOpen, onClose }: { isOpen: boolean; onClose: () => void },
) {
  const isFormValid = computed(() =>
    firstName.value.trim().length >= 2 && isValidEmail(email.value.trim())
  );

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    if (isFormValid.value) {
      globalThis.open(
        `https://buttondown.email/${BUTTONDOWN_NEWSLETTER_NAME}`,
        "popupwindow",
      );
      (e.target as HTMLFormElement).submit();
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 text-gray-800">
      <div class="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative -mt-[16.67vh]">
        <button
          onClick={onClose}
          class="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition duration-300"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <img
          src="/cover.png"
          alt="Logo"
          class="w-24 h-24 mx-auto mb-2"
          loading="lazy"
        />
        <h3 class="text-xl font-semibold mb-4 text-center">
          Audrow Nash Podcast
        </h3>
        <form
          action={`https://buttondown.email/${BUTTONDOWN_NEWSLETTER_NAME}/api/emails/embed-subscribe/${BUTTONDOWN_NEWSLETTER_NAME}`}
          method="post"
          target="popupwindow"
          onSubmit={handleSubmit}
          class="space-y-4"
        >
          <div class="space-y-2">
            <label
              htmlFor="bd-first-name"
              class="block text-sm font-medium text-gray-700 text-left"
            >
              First Name *
            </label>
            <input
              id="bd-first-name"
              type="text"
              name="metadata__first_name"
              placeholder="Isaac"
              value={firstName}
              onInput={(e) =>
                firstName.value = (e.target as HTMLInputElement).value}
              class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-secondary"
              required
            />
          </div>
          <div class="space-y-2">
            <label
              htmlFor="bd-last-name"
              class="block text-sm font-medium text-gray-700 text-left"
            >
              Last Name (optional)
            </label>
            <input
              id="bd-last-name"
              type="text"
              name="metadata__last_name"
              placeholder="Asimov"
              value={lastName}
              onInput={(e) =>
                lastName.value = (e.target as HTMLInputElement).value}
              class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-secondary"
            />
          </div>
          <div class="space-y-2">
            <label
              htmlFor="bd-email"
              class="block text-sm font-medium text-gray-700 text-left"
            >
              Email *
            </label>
            <input
              id="bd-email"
              type="email"
              name="email"
              placeholder="isaac.asimov@foundation.gal"
              value={email}
              onInput={(e) =>
                email.value = (e.target as HTMLInputElement).value}
              class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-secondary"
              required
            />
          </div>
          <div class="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              class="px-4 py-2 text-gray-600 hover:text-gray-800 transition duration-300"
            >
              Cancel
            </button>
            <div class="relative group">
              <button
                type="submit"
                disabled={!isFormValid.value}
                class={`bg-secondary hover:bg-primary text-white font-bold py-2 px-4 rounded transition duration-300 ${
                  !isFormValid.value ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Subscribe
              </button>
              {!isFormValid.value && (
                <div class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Please provide a valid first name (at least 2 characters) and
                  email address.
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
