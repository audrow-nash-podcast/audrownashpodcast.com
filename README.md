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

## Project Structure

- `routes/`: Contains the main page components (index, about, contact, posts,
  etc.)
- `islands/`: Interactive components that use client-side JavaScript
- `components/`: Reusable UI components
- `static/`: Static assets like images, icons, and global CSS
- `utils/`: Utility functions for handling posts and other operations
- `posts/`: Markdown files for blog posts
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

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[MIT License](LICENSE)
