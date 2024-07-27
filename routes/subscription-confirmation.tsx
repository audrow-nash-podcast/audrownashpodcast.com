import { PageLayout } from "../components/PageLayout.tsx";

export default function SubscriptionConfirmation() {
  return (
    <PageLayout title="Subscription Confirmed" currentPage={undefined}>
      <div class="max-w-3xl mx-auto text-center px-4 py-12">
        <h2 class="text-5xl font-extrabold mb-8 text-gray-700">
          Subscription Confirmed!
        </h2>
        <div class="mb-10">
          <img
            src="/cover.png"
            alt="Audrow Nash Podcast Cover"
            class="w-48 h-48 mx-auto rounded-xl shadow-lg"
          />
        </div>
        <p class="text-xl mb-10 text-gray-700 leading-relaxed">
          Thank you for subscribing to the Audrow Nash Podcast newsletter.
          You're now all set to receive the latest updates, insights, and
          episode notifications.
        </p>
        <div class="space-y-6">
          <p class="text-lg text-gray-600">
            While you wait for the next update, why not check out some of our
            recent episodes?
          </p>
          <a
            href="/posts"
            class="inline-block bg-secondary hover:bg-primary text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-md"
          >
            Browse Episodes
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
