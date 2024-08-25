import { type PageProps } from "$fresh/server.ts";
import { Post } from "../utils/posts.ts";

export default function App(pageProps: PageProps & { data?: unknown }) {
  const { data, url, Component } = pageProps;

  const THEME_COLOR = "#3A7E99";
  const DEFAULT_SHARE_IMAGE = "/share.png";
  const DEFAULT_SHARE_X_IMAGE = "/share-x.png";
  const DEFAULT_DESCRIPTION =
    "Join Audrow Nash for in-depth conversations with robotics experts, exploring cutting-edge technologies and the future of intelligent machines.";

  const domain = url.origin;
  const post = data?.post as Post | undefined;
  const shareImage = post?.cover.rect
    ? `${domain}${post.cover.rect}`
    : `${domain}${DEFAULT_SHARE_IMAGE}`;
  const shareXImage = post?.cover.rect
    ? `${domain}${post.cover.rect}`
    : `${domain}${DEFAULT_SHARE_X_IMAGE}`;
  const title = post?.title
    ? `${data.post.title} - Audrow Nash Podcast`
    : "Audrow Nash Podcast";
  const description = data?.post?.snippet || DEFAULT_DESCRIPTION;

  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta
          name="description"
          content={description}
        />
        <meta
          name="keywords"
          content="robotics, AI, podcast, technology, engineering, Audrow Nash"
        />
        <meta name="author" content="Audrow Nash" />
        <meta
          property="og:title"
          content={title}
        />
        <meta
          property="og:description"
          content={description}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={domain} />
        <meta property="og:image" content={shareImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={title}
        />
        <meta name="twitter:image" content={shareXImage} />
        <meta
          name="twitter:description"
          content={description}
        />
        <link rel="canonical" href={domain} />
        <meta name="theme-color" content={THEME_COLOR} />
        <style>
          {`
          @font-face {
            font-family: 'Bebas Neue';
            src: url('/fonts/BebasNeue-Regular.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
        `}
        </style>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
