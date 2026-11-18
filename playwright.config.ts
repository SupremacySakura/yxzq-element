import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/visual",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? "github" : "list",
  snapshotDir: "./tests/visual/__snapshots__",
  expect: {
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.02,
      animations: "disabled",
    },
  },
  use: {
    ...devices["Desktop Chrome"],
    viewport: { width: 900, height: 700 },
    deviceScaleFactor: 1,
    baseURL: "http://127.0.0.1:5199",
  },
  webServer: {
    command: "pnpm exec vite --port 5199 --strictPort --host 127.0.0.1",
    url: "http://127.0.0.1:5199/tests/visual/harness.html",
    reuseExistingServer: !process.env.CI,
    timeout: 60_000,
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
