import { MenuItem, SocialLinks } from "./types.ts";
import { Announcement } from "./types.ts";

export const SOCIAL_LINKS: SocialLinks = {
  X: {
    url: "https://x.com/audrow",
    displayName: "𝕏",
    icon: "/icons/x.jpeg",
  },
  YOUTUBE: {
    url: "https://www.youtube.com/@audrow",
    displayName: "YouTube",
    icon: "/icons/youtube.svg",
  },
  SPOTIFY: {
    url: "https://open.spotify.com/show/74jWpWiLwsasY2QHtDcl8I",
    displayName: "Spotify",
    icon: "/icons/spotify.svg",
  },
  APPLE_PODCASTS: {
    url:
      "https://podcasts.apple.com/us/podcast/audrow-nash-podcast/id1716486786",
    displayName: "Apple Podcasts",
    icon: "/icons/apple.svg",
  },
  EPISODES_FM: {
    url: "https://episodes.fm/1716486786",
    displayName: "Episodes.fm",
    icon: "/icons/episodesfm.png",
  },
  LINKEDIN: {
    url: "https://www.linkedin.com/in/audrow/",
    displayName: "LinkedIn",
    icon: "/icons/linkedin.svg",
  },
};

export const CONTACT_EMAILS = {
  INTERVIEW: "interview@audrownashpodcast.com",
  JOB_SEARCH: "jobsearch@audrownashpodcast.com",
  MENTOR: "mentor@audrownashpodcast.com",
  SPONSOR: "sponsor@audrownashpodcast.com",
  GENERAL: "hello@audrownashpodcast.com",
};

export const MENU_ITEMS: MenuItem[] = [
  { href: "/", label: "Home", page: "home" },
  { href: "/where-to-find", label: "Where to Find", page: "where-to-find" },
  { href: "/posts", label: "Posts", page: "posts" },
  { href: "https://jobs.audrownashpodcast.com", label: "Jobs", page: "jobs" },
  { href: "/about", label: "About", page: "about" },
  { href: "/contact", label: "Contact", page: "contact" },
];

export const ADDITIONAL_PAGES: MenuItem[] = [
  {
    href: "/subscription-confirmation",
    label: "Subscription Confirmation",
    page: undefined,
  },
  { href: "/non-existent-page", label: "404 Page", page: undefined },
];

export const BUTTONDOWN_NEWSLETTER_NAME = "audrow";

export const THEME_COLOR = "#3A7E99";
export const DEFAULT_SHARE_IMAGE = "/share.png";
export const DEFAULT_SHARE_X_IMAGE = "/share-x.png";
export const DEFAULT_DESCRIPTION =
  "Join Audrow Nash for in-depth conversations with robotics experts, exploring cutting-edge technologies and the future of intelligent machines.";

export const GLOBAL_ANNOUNCEMENT: Announcement = {
  message: "Looking for robotics jobs? Check out our new specialized job board",
  link: {
    text: "Browse robotics startup jobs",
    url: "https://jobs.audrownashpodcast.com",
  },
  isVisible: true,
  id: "jobs-board-launch-2024",
};
