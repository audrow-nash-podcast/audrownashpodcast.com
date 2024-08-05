# Audrow Nash Podcast Website

This is the official website for the Audrow Nash Podcast, built using Fresh, a
next-generation web framework for Deno.

## Project Overview

The Audrow Nash Podcast website is designed to showcase podcast episodes,
provide information about the host, and offer ways for listeners to get in touch
and subscribe to the podcast.

## Technologies Used

- [Deno](https://deno.land/) - A secure runtime for JavaScript and TypeScript
- [Fresh](https://fresh.deno.dev/) - A next-generation web framework for Deno
- [Preact](https://preactjs.com/) - A fast 3kB alternative to React with the
  same modern API
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Marked](https://marked.js.org/) - A markdown parser and compiler
- [Buttondown](https://buttondown.email/) - Email newsletter service
- [Puppeteer](https://pptr.dev/) - A Node.js library for controlling headless
  Chrome or Chromium

## Getting Started

### Prerequisites

Make sure you have Deno installed. If not, you can install it from
https://deno.land/manual/getting_started/installation

### Running the Project

1. Clone the repository
2. Navigate to the project directory
3. Start the development server:

```
deno task start
```

This command will watch the project directory and restart as necessary.

For development with all posts visible (including unpublished ones), use:

```
deno task dev
```

This command sets the `SHOW_ALL_POSTS` environment variable to true.

### Setting Environment Variables

> Currently, environment variables are needed for scripts, not deploying or
> previewing the website. You can skip this if you only want to run the website.

To set up the environment variables for the project:

1. Copy the `.env-example` file in the root directory to a new file named
   `.env`:

```
cp .env-example .env
```

2. Open the `.env` file and update the values as needed. The file contains
   important configuration settings for the project, such as API keys.

3. Make sure not to commit your `.env` file to version control. It's already
   included in the `.gitignore` file to prevent accidental commits.

Remember to update your `.env` file whenever you add new environment variables
to the project. If you add new variables, make sure to update the `.env-example`
file as well, so other developers know what variables are required.

## Project Structure

- `routes/`: Contains the main page components (index, about, contact, posts,
  etc.)
- `islands/`: Interactive components that use client-side JavaScript
- `components/`: Reusable UI components
- `static/`: Static assets like images, icons, and global CSS
- `utils/`: Utility functions for handling posts and other operations
- `posts/`: Markdown files for blog posts
- `transcripts/`: Transcripts for podcast episodes
- `fresh.gen.ts`: Auto-generated file mapping routes and islands

## Deployment

To build the project for production:

```
deno task build
```

To preview the production build:

```
deno task preview
```

The project is set up for continuous deployment using GitHub Actions. When
changes are pushed to the main branch, the site is automatically deployed to
Deno Deploy.

## Features

- Responsive design using Tailwind CSS
- Dynamic routing for blog posts
- Newsletter subscription using Buttondown
- Social media integration
- SEO optimization

## Scripts

### Schedule Post on Buttondown

To schedule a post on Buttondown for newsletter distribution:

```
deno task upload-newsletter <path-to-markdown-file>
```

This script reads the markdown file, processes its content, and interacts with
the Buttondown API. If a `published_at` date is set in the frontmatter, it
schedules the newsletter for that date. If no date is set, it creates a draft
newsletter. The script uses the following:

- Frontmatter data for newsletter metadata
- Markdown content for the newsletter body
- Buttondown API for creating drafts or scheduling newsletters

## Testing

This website uses Puppeteer for integration tests. To run the tests, you must
first start the server with:

```
deno task start
```

Once the server is running, you can run the integration tests with:

```
deno task test:integration
```

Or simply:

```
deno task test
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[MIT License](LICENSE)
