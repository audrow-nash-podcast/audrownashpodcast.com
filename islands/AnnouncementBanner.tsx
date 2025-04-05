import { useEffect, useState } from "preact/hooks";
import { JSX } from "preact";

type AnnouncementBannerProps = {
  message: string;
  link?: {
    text: string;
    url: string;
  };
  isVisible?: boolean;
  // Unique ID to track different announcements in localStorage
  id: string;
  // How long to remember the dismissal (in days)
  dismissDuration?: number;
};

export function AnnouncementBanner({
  message,
  link,
  isVisible = true,
  id,
  dismissDuration = 7, // Default to 7 days
}: AnnouncementBannerProps) {
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if announcement was dismissed
    const dismissedUntil = localStorage.getItem(`announcement-${id}`);
    if (dismissedUntil) {
      const dismissedUntilDate = new Date(dismissedUntil);
      if (dismissedUntilDate > new Date()) {
        setIsDismissed(true);
      } else {
        // Clear expired dismissal
        localStorage.removeItem(`announcement-${id}`);
      }
    }
  }, [id]);

  const handleDismiss = (e: JSX.TargetedMouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Set dismissal expiry date
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + dismissDuration);
    localStorage.setItem(`announcement-${id}`, expiryDate.toISOString());
    setIsDismissed(true);
  };

  if (!isVisible || isDismissed) return null;

  return (
    <div class="bg-secondary text-white px-4 py-3 relative">
      <div class="max-w-4xl mx-auto flex items-center justify-center text-center">
        <p class="text-sm font-medium">
          {message}
          {link && (
            <a
              href={link.url}
              class="ml-2 underline hover:text-primary transition-colors"
            >
              {link.text} →
            </a>
          )}
        </p>
        <button
          onClick={handleDismiss}
          class="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors"
          aria-label="Dismiss announcement"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
