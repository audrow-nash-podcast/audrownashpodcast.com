export const BASE_URL = "http://localhost:8000";

const MAX_RETRIES = 30;
const RETRY_INTERVAL = 1000; // 1 second

export async function isServerReady(baseUrl: string = BASE_URL) {
  try {
    const response = await fetch(baseUrl);
    await response.text(); // Ensure the response is fully read
    return response.status === 200;
  } catch {
    return false;
  }
}

export async function waitForServer() {
  for (let i = 0; i < MAX_RETRIES; i++) {
    if (await isServerReady(BASE_URL)) {
      console.log("Server is ready!");
      Deno.exit(0);
    }
    await new Promise((resolve) => setTimeout(resolve, RETRY_INTERVAL));
  }
  console.error("Server did not become ready in time");
  Deno.exit(1);
}

if (import.meta.main) {
  waitForServer();
  console.log("Server is ready!");
}
