import { expect, test } from "@playwright/test";

const open = async (page: import("@playwright/test").Page, markup: string) => {
  await page.goto("/tests/visual/harness.html");
  await page.waitForFunction(() => Boolean(customElements.get("super-dialog")));
  await page.evaluate((inner) => {
    const host = document.querySelector("#stage") as HTMLElement;
    host.innerHTML = inner;
  }, markup);
  await page.evaluate(() => document.fonts.ready);
  return page.locator("#stage");
};

test.describe("overlay components", () => {
  test("dialog keeps the sketch vocabulary", async ({ page }) => {
    await open(
      page,
      `<super-dialog title="确认操作" open>对话框正文内容</super-dialog>`,
    );
    await expect(page).toHaveScreenshot("dialog-open.png");
  });

  test("drawer keeps the sketch vocabulary", async ({ page }) => {
    await open(
      page,
      `<super-drawer title="筛选条件" placement="right" open>抽屉正文内容</super-drawer>`,
    );
    await expect(page).toHaveScreenshot("drawer-open.png");
  });

  test("message keeps the sketch vocabulary", async ({ page }) => {
    await open(
      page,
      `<super-message message="保存成功" type="success" open></super-message>`,
    );
    await expect(page).toHaveScreenshot("message-open.png");
  });
});
