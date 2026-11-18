import { expect, test } from "@playwright/test";

const render = async (page: import("@playwright/test").Page, markup: string) => {
  await page.goto(`/tests/visual/harness.html?markup=${encodeURIComponent(markup)}`);
  await page.waitForFunction(() => Boolean(customElements.get("super-button")));
  await page.evaluate(() => document.fonts.ready);
  return page.locator("#stage");
};

test.describe("hand-drawn visual baseline", () => {
  test("button variants keep the shared sketch vocabulary", async ({ page }) => {
    const stage = await render(
      page,
      `<super-button variant="primary">主要</super-button>
       <super-button variant="secondary">次要</super-button>
       <super-button variant="danger">危险</super-button>
       <super-button variant="ghost">幽灵</super-button>`,
    );

    await expect(stage).toHaveScreenshot("button-variants.png");
  });

  test("button sizes stay proportional", async ({ page }) => {
    const stage = await render(
      page,
      `<super-button size="large">大</super-button>
       <super-button size="medium">中</super-button>
       <super-button size="small">小</super-button>`,
    );

    await expect(stage).toHaveScreenshot("button-sizes.png");
  });
});
