import { type PageProps } from "$fresh/server.ts";
import { BASE_URL, THEME_COLOR } from "../constants.ts";

export default function App({ Component }: PageProps) {
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
        <meta property="og:url" content={BASE_URL} />
        <link rel="canonical" href={BASE_URL} />
        <meta property="og:image" content={`${BASE_URL}/share-image.png`} />
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
