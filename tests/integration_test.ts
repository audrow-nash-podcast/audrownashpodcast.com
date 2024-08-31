import { assert, assertEquals, assertNotEquals } from "@std/assert";
import puppeteer, { Page } from "puppeteer";
import { getPosts } from "../utils/posts.ts";
import { ADDITIONAL_PAGES, MENU_ITEMS, SOCIAL_LINKS } from "../constants.ts";

const BASE_URL = "http://localhost:8000";

// Links to websites that frequently have rate limits or other issues
const LINKS_TO_SKIP = [
  SOCIAL_LINKS.SPOTIFY.url,
  "https://www.linkedin.com", // any linked in page
];

async function checkLinksAndImagesOnPage(
  page: Page,
  url: string,
  pageName: string,
  checkedLinks: Map<string, boolean>,
) {
  await page.goto(url);

  const links = await page.$$eval(
    "a",
    (anchors) =>
      anchors.map((a) => a.href).filter((href) => href.startsWith("http")),
  );

  const images = await page.$$eval(
    "img",
    (imgs) =>
      imgs.map((img) => img.src).filter((src) => src.startsWith("http")),
  );

  const checkPromises = [...links, ...images].map(async (resource) => {
    if (
      checkedLinks.has(resource) ||
      LINKS_TO_SKIP.some((link) => resource.includes(link))
    ) {
      return;
    }

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);
      const response = await fetch(resource, { signal: controller.signal });
      clearTimeout(timeoutId);
      await response.body?.cancel();

      assert(
        response.status < 400,
        `Broken resource found on ${pageName} page: ${resource} (status: ${response.status})`,
      );

      checkedLinks.set(resource, true);
    } catch (error) {
      if (error.name === "AbortError") {
        console.warn(`Timeout while fetching ${resource}`);
      } else {
        throw new Error(`Failed to fetch ${resource}: ${error.message}`);
      }
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

async function isServerRunning() {
  try {
    const response = await fetch(BASE_URL);
    return response.status === 200;
  } catch {
    return false;
  }
}

Deno.test({
  name: "Server is running",
  fn: async () => {
    const running = await isServerRunning();
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
  // TODO: Remove these after fixing the leaky fetch calls
  sanitizeResources: false,
  sanitizeOps: false,
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
  // TODO: Remove these after fixing the leaky fetch calls
  sanitizeOps: false,
  sanitizeResources: false,
});
