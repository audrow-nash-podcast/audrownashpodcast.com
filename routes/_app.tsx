import { type PageProps } from "$fresh/server.ts";

export default function App({ Component, url }: PageProps) {
  const domain = url.origin;
  const THEME_COLOR = "#3A7E99";

  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Audrow Nash Podcast - Exploring the Frontiers of Robotics</title>
        <meta
          name="description"
          content="Join Audrow Nash for in-depth conversations with robotics experts, exploring cutting-edge technologies and the future of intelligent machines."
        />
        <meta
          name="keywords"
          content="robotics, AI, podcast, technology, engineering, Audrow Nash"
        />
        <meta name="author" content="Audrow Nash" />
        <meta
          property="og:title"
          content="Audrow Nash Podcast - Exploring the Frontiers of Robotics"
        />
        <meta
          property="og:description"
          content="Join Audrow Nash for in-depth conversations with robotics experts, exploring cutting-edge technologies and the future of intelligent machines."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={domain} />
        <meta property="og:image" content={`${domain}/share-x.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Audrow Nash Podcast - Exploring the Frontiers of Robotics"
        />
        <meta name="twitter:image" content={`${domain}/share.png`} />
        <meta
          name="twitter:description"
          content="Join Audrow Nash for in-depth conversations with robotics experts, exploring cutting-edge technologies and the future of intelligent machines."
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
