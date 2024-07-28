import { signal } from "@preact/signals";
import { SubscribePopup } from "./SubscribePopup.tsx";

const isOpen = signal(false);

export function SubscribeCta() {
  const handleClick = (e: Event) => {
    e.preventDefault();
    isOpen.value = true;
  };

  return (
    <div class="border-t-4 border-b-4 border-gray-800 py-16 max-w-4xl mx-auto">
      <h3 class="text-3xl sm:text-4xl font-bold pb-6 text-center max-w-3xl mx-auto">
        Don't miss an insight. Subscribe for episode recaps and opportunities.
      </h3>
      <div class="md:pb-4" />
      <div class="flex justify-center">
        <div class="flex flex-col sm:flex-row mb-4 max-w-lg w-full gap-4 sm:gap-0">
          <input
            type="email"
            name="email"
            id="bd-email"
            placeholder="isaac.asimov@foundation.gal"
            class="flex-grow px-6 py-3 rounded-full sm:rounded-r-none text-lg border-2 border-gray-300 focus:outline-none focus:border-gray-500 cursor-pointer"
            aria-label="Enter your email"
            onClick={handleClick}
            readOnly
          />
          <input
            type="submit"
            value="Subscribe"
            class="bg-secondary text-white px-8 py-3 rounded-full sm:rounded-l-none text-lg font-semibold hover:bg-secondary transition-colors duration-300 cursor-pointer"
            onClick={handleClick}
          />
        </div>
      </div>
      <SubscribePopup
        isOpen={isOpen.value}
        onClose={() => isOpen.value = false}
      />
    </div>
  );
}