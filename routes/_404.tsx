import { PageLayout } from "../components/PageLayout.tsx";

export default function Error404() {
  return (
    <PageLayout title="404 - Page not found" currentPage="404">
      <div class="flex items-center justify-center min-h-[calc(100vh-200px)] px-4">
        <div class="text-center">
          <h1 class="text-6xl font-bold mb-4">404</h1>
          <h2 class="text-3xl font-semibold mb-6">Oops! Page not found</h2>
          <p class="text-xl mb-8">
            It seems this page has been deactivated by a rogue AI. Don't worry,
            we're sending in a rescue bot!
          </p>
          <a
            href="/"
            class="bg-secondary hover:bg-primary text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Return to Home Base
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
