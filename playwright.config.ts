import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/",
  fullyParallel: true,
  retries: 2,
  workers: 1,
  reporter: [["list"], ["html"]],
  timeout: 30000,
  expect: { timeout: 30000 },
  use: {
    baseURL: "https://www.facebook.com",
    headless: true,
    screenshot: "on",
    video: "on",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
