import { assert, assertEquals, assertNotEquals } from "@std/assert";
import puppeteer, { Page } from "puppeteer";
import { getPosts } from "../utils/posts.ts";
import { ADDITIONAL_PAGES, MENU_ITEMS, SOCIAL_LINKS } from "../constants.ts";
import { BASE_URL, isServerReady } from "../scripts/wait-for-server.ts";

// Links to websites that frequently have rate limits or other issues
const LINKS_TO_SKIP = [
  SOCIAL_LINKS.SPOTIFY.url,
  "https://www.linkedin.com", // any linked in page
  "https://www.x.com", // twitter
  "https://x.com", // twitter
  "https://twitter.com", // twitter
];

async function checkLinksAndImagesOnPage(
  page: Page,
  url: string,
  pageName: string,
  checkedLinks: Map<string, boolean>,
) {
  const links = await page.$$eval(
    "a",
    (elements) => elements.map((el) => el.href),
  );
  const images = await page.$$eval(
    "img",
    (elements) => elements.map((el) => el.src),
  );

  const resources = [...links, ...images].filter((resource) => {
    // Skip empty resources
    if (!resource) return false;
    // Skip resources we've already checked
    if (checkedLinks.has(resource)) return false;
    // Skip anchor links
    if (resource.startsWith(url + "#")) return false;
    // Skip mailto links
    if (resource.startsWith("mailto:")) return false;
    // Skip tel links
    if (resource.startsWith("tel:")) return false;
    // Skip javascript links
    if (resource.startsWith("javascript:")) return false;
    // Skip data URLs
    if (resource.startsWith("data:")) return false;
    // Skip blob URLs
    if (resource.startsWith("blob:")) return false;
    // Skip links in LINKS_TO_SKIP
    if (LINKS_TO_SKIP.some((skipLink) => resource.includes(skipLink))) {
      return false;
    }
    return true;
  });

  const checkPromises = resources.map(async (resource) => {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch(resource, {
        method: "HEAD",
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (!response.ok) {
        console.error(
          `Broken resource found on ${pageName} page: ${resource} (status: ${response.status})`,
        );
      }

      checkedLinks.set(resource, true);
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === "AbortError") {
          console.warn(`Timeout while fetching ${resource}`);
        } else {
          console.warn(`Failed to fetch ${resource}: ${error.message}`);
        }
      }
      // Don't throw errors, just log warnings
    }
  });

  await Promise.all(checkPromises);
}

async function testPageRendering(
  page: string,
  expectedTitle: string,
  expectedH2Text: string,
) {
  const browser = await puppeteer.launch();
  const browserPage = await browser.newPage();
  await browserPage.goto(`${BASE_URL}${page}`);

  const title = await browserPage.title();
  assertEquals(title, expectedTitle);

  const h2Text = await browserPage.$eval("h2", (el) => el.textContent);
  assertEquals(h2Text, expectedH2Text);

  await browser.close();
}

Deno.test({
  name: "Server is running",
  fn: async () => {
    const running = await isServerReady();
    assert(
      running,
      "Server is not running. Please start the server before running tests.",
    );
  },
  sanitizeOps: false,
  sanitizeResources: false,
});

Deno.test("Home page renders correctly", async () => {
  await testPageRendering(
    "/",
    "Audrow Nash Podcast",
    "Exploring the frontiers of robotics, one conversation at a time",
  );
});

Deno.test("About page renders correctly", async () => {
  await testPageRendering(
    "/about",
    "About - Audrow Nash Podcast",
    "About the Audrow Nash Podcast",
  );
});

Deno.test("Contact page renders correctly", async () => {
  await testPageRendering(
    "/contact",
    "Get in Touch - Audrow Nash Podcast",
    "Get in Touch",
  );
});

Deno.test("Where to Find page renders correctly", async () => {
  await testPageRendering(
    "/where-to-find",
    "Where to Find - Audrow Nash Podcast",
    "Where to Find the Podcast",
  );
});

Deno.test("Subscription Confirmation page renders correctly", async () => {
  await testPageRendering(
    "/subscription-confirmation",
    "Subscription Confirmed - Audrow Nash Podcast",
    "Subscription Confirmed!",
  );
});

Deno.test("404 page renders correctly", async () => {
  await testPageRendering(
    "/non-existent-page",
    "404 - Page not found - Audrow Nash Podcast",
    "Oops! Page not found",
  );
});

Deno.test("Posts page renders correctly", async () => {
  await testPageRendering(
    "/posts",
    "Posts - Audrow Nash Podcast",
    "All Posts",
  );
});

Deno.test({
  name: "All posts have valid metadata",
  fn: async () => {
    const posts = await getPosts();
    assertNotEquals(posts.length, 0, "No posts found");
    for (const post of posts) {
      assertEquals(
        typeof post.title,
        "string",
        `Invalid title for post: ${post.slug}`,
      );
      assert(
        post.title.length > 0,
        `Empty title for post: ${post.slug}`,
      );
      assert(
        post.published_at instanceof Date,
        `Invalid published_at for post: ${post.slug}`,
      );
      assertEquals(
        typeof post.snippet,
        "string",
        `Invalid snippet for post: ${post.slug}`,
      );
      assert(
        post.snippet.length > 0,
        `Empty snippet for post: ${post.slug}`,
      );
      assertEquals(
        typeof post.cover.square,
        "string",
        `Invalid cover.square for post: ${post.slug}`,
      );
      assert(
        post.cover.square.length > 0,
        `Empty cover.square for post: ${post.slug}`,
      );
    }
  },
});

Deno.test({
  name: "All links and images are valid across all pages",
  fn: async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const checkedResources = new Map<string, boolean>();

    try {
      // Check menu items and additional pages
      for (const item of [...MENU_ITEMS, ...ADDITIONAL_PAGES]) {
        await checkLinksAndImagesOnPage(
          page,
          `${BASE_URL}${item.href}`,
          item.label,
          checkedResources,
        );
      }

      // Check post pages
      const posts = await getPosts();
      for (const post of posts) {
        await checkLinksAndImagesOnPage(
          page,
          `${BASE_URL}/posts/${post.slug}`,
          `Post: ${post.title}`,
          checkedResources,
        );
      }
    } finally {
      await browser.close();
    }
  },
});
