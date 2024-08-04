const MAX_RETRIES = 30;
const RETRY_INTERVAL = 1000; // 1 second

async function isServerReady() {
  try {
    const response = await fetch("http://localhost:8000");
    return response.status === 200;
  } catch {
    return false;
  }
}

async function waitForServer() {
  for (let i = 0; i < MAX_RETRIES; i++) {
    if (await isServerReady()) {
      console.log("Server is ready!");
      Deno.exit(0);
    }
    await new Promise((resolve) => setTimeout(resolve, RETRY_INTERVAL));
  }
  console.error("Server did not become ready in time");
  Deno.exit(1);
}

waitForServer();
