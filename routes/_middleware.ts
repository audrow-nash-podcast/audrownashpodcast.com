import { FreshContext } from "$fresh/server.ts";

export async function handler(req: Request, ctx: FreshContext) {
  const url = new URL(req.url);

  // Handle image optimization for post cover images
  if (
    url.pathname.startsWith("/posts/") &&
    (url.pathname.endsWith("-rect.png") || url.pathname.endsWith("-square.png"))
  ) {
    try {
      const imagePath = `./static${url.pathname}`;
      const file = await Deno.readFile(imagePath);

      // Set cache headers
      const headers = new Headers({
        "Cache-Control": "public, max-age=31536000",
        "Content-Type": "image/png",
      });

      // For now, just return the original image
      // In the future, we can add actual image optimization here
      return new Response(file, { headers });
    } catch (e) {
      console.error("Error serving image:", e);
      return ctx.next();
    }
  }

  return ctx.next();
}
