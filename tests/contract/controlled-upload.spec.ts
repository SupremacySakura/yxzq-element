import { expect, test } from "@playwright/test";
import type { Page } from "@playwright/test";
import type { ContractDebugApi } from "./types";

async function open(page: Page): Promise<void> {
  await page.goto("/contract.html?tag=super-upload");
  await page.waitForFunction(() => window.__SUPER_CONTRACT__?.ready === true);
  await page.evaluate(async () => {
    await window.__SUPER_CONTRACT__?.patch({
      attributes: { "aria-label": "上传文件", multiple: false },
    });
  });
}

async function resetEvents(page: Page): Promise<void> {
  await page.evaluate(() => window.__SUPER_CONTRACT__?.resetEvents());
}

async function fileListNames(page: Page): Promise<string[]> {
  return page.locator("super-upload").evaluate(
    (element) =>
      (element as HTMLElement & { fileList: File[] }).fileList.map(
        (file) => file.name,
      ),
  );
}

test.describe("controlled upload fileList", () => {
  test.beforeEach(() => {
    const { browser, framework } = test.info().project.metadata;
    test.skip(
      browser !== "chromium" ||
        (framework !== "react" && framework !== "vue"),
      "Upload controlled rendering is covered in the Vue and React Chromium projects",
    );
  });

  test("@controlled replaces the selected file in single mode", async ({ page }) => {
    await open(page);
    await resetEvents(page);

    const input = page.locator('super-upload input[type="file"]');
    await input.setInputFiles({
      name: "first.png",
      mimeType: "image/png",
      buffer: Buffer.from("first"),
    });
    await expect(
      page.locator("super-upload").getByText("first.png"),
    ).toBeVisible();

    await input.setInputFiles({
      name: "second.png",
      mimeType: "image/png",
      buffer: Buffer.from("second"),
    });
    await expect(
      page.locator("super-upload").getByText("second.png"),
    ).toBeVisible();

    await expect.poll(() => fileListNames(page)).toEqual(["second.png"]);
    const changes = await page.evaluate(() => {
      const api = window.__SUPER_CONTRACT__ as ContractDebugApi;
      return api.events
        .filter((event) => event.name === "super-upload-change")
        .map((event) =>
          (event.detail as { fileList: File[] }).fileList.map(
            (file) => file.name,
          ),
        );
    });
    expect(changes).toEqual([["first.png"], ["second.png"]]);
  });

  test("@controlled rolls a rejected removal back to the controlled fileList", async ({
    page,
  }) => {
    await open(page);
    await page.evaluate(async () => {
      const first = new File(["first"], "first.png", {
        type: "image/png",
        lastModified: 1,
      });
      const second = new File(["second"], "second.png", {
        type: "image/png",
        lastModified: 2,
      });
      await window.__SUPER_CONTRACT__?.patch({
        properties: { fileList: [first, second] },
      });
    });
    await resetEvents(page);

    await page.locator('super-upload [part="remove-button"]').first().click();

    const removedFileList = await page.evaluate(() => {
      const api = window.__SUPER_CONTRACT__ as ContractDebugApi;
      const remove = api.events.find(
        (event) => event.name === "super-upload-remove",
      );
      return (
        remove?.detail as { fileList?: File[] } | undefined
      )?.fileList?.map((file) => file.name);
    });
    expect(removedFileList).toEqual(["second.png"]);
    await expect.poll(() => fileListNames(page)).toEqual([
      "first.png",
      "second.png",
    ]);
  });
});
