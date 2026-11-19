import { defineConfig, devices } from "@playwright/test";

const htmlUrl = "http://127.0.0.1:5200/contract.html";
const vueUrl = "http://127.0.0.1:5201/contract.html";
const reactUrl = "http://127.0.0.1:5202/contract.html";

const contractUse = {
  viewport: { width: 960, height: 720 },
  deviceScaleFactor: 1,
  locale: "zh-CN",
  timezoneId: "Asia/Shanghai",
};

export default defineConfig({
  testDir: "./tests/contract",
  testMatch: /.*\.spec\.ts/,
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI
    ? [
        ["github"],
        ["html", { outputFolder: "playwright-report/contract", open: "never" }],
      ]
    : "list",
  timeout: 30_000,
  expect: {
    timeout: 5_000,
  },
  use: {
    ...contractUse,
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "off",
  },
  webServer: [
    {
      command:
        "SUPER_CONTRACT_SOURCE=1 pnpm exec vite --port 5200 --strictPort --host 127.0.0.1",
      cwd: "./packages/play",
      url: htmlUrl,
      reuseExistingServer: !process.env.CI,
      timeout: 120_000,
    },
    {
      command:
        "SUPER_CONTRACT_SOURCE=1 pnpm exec vite --port 5201 --strictPort --host 127.0.0.1",
      cwd: "./examples/vue",
      url: vueUrl,
      reuseExistingServer: !process.env.CI,
      timeout: 120_000,
    },
    {
      command:
        "SUPER_CONTRACT_SOURCE=1 pnpm exec vite --port 5202 --strictPort --host 127.0.0.1",
      cwd: "./examples/react",
      url: reactUrl,
      reuseExistingServer: !process.env.CI,
      timeout: 120_000,
    },
  ],
  projects: [
    {
      name: "html-chromium",
      metadata: { framework: "html", browser: "chromium" },
      use: { ...devices["Desktop Chrome"], baseURL: htmlUrl },
    },
    {
      name: "vue-chromium",
      metadata: { framework: "vue", browser: "chromium" },
      use: { ...devices["Desktop Chrome"], baseURL: vueUrl },
    },
    {
      name: "react-chromium",
      metadata: { framework: "react", browser: "chromium" },
      use: { ...devices["Desktop Chrome"], baseURL: reactUrl },
    },
    {
      name: "html-firefox",
      metadata: { framework: "html", browser: "firefox" },
      use: { ...devices["Desktop Firefox"], baseURL: htmlUrl },
    },
    {
      name: "html-webkit",
      metadata: { framework: "html", browser: "webkit" },
      use: { ...devices["Desktop Safari"], baseURL: htmlUrl },
    },
    {
      name: "vue-firefox",
      metadata: { framework: "vue", browser: "firefox" },
      use: { ...devices["Desktop Firefox"], baseURL: vueUrl },
    },
    {
      name: "react-firefox",
      metadata: { framework: "react", browser: "firefox" },
      use: { ...devices["Desktop Firefox"], baseURL: reactUrl },
    },
    {
      name: "vue-webkit",
      metadata: { framework: "vue", browser: "webkit" },
      use: { ...devices["Desktop Safari"], baseURL: vueUrl },
    },
    {
      name: "react-webkit",
      metadata: { framework: "react", browser: "webkit" },
      use: { ...devices["Desktop Safari"], baseURL: reactUrl },
    },
    {
      name: "html-mobile",
      metadata: { framework: "html", browser: "chromium" },
      testMatch: /mobile\.spec\.ts/,
      use: { ...devices["Pixel 7"], baseURL: htmlUrl },
    },
  ],
});
