type AnnouncementBannerProps = {
  message: string;
  link?: {
    text: string;
    url: string;
  };
  isVisible?: boolean;
};

export function AnnouncementBanner({
  message,
  link,
  isVisible = true,
}: AnnouncementBannerProps) {
  if (!isVisible) return null;

  return (
    <div class="bg-secondary text-white px-4 py-3">
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
      </div>
    </div>
  );
}
