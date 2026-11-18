import { expect, test } from "@playwright/test";

const render = async (page: import("@playwright/test").Page, markup: string) => {
  await page.goto(`/tests/visual/harness.html?markup=${encodeURIComponent(markup)}`);
  await page.waitForFunction(() => Boolean(customElements.get("super-progress")));
  await page.evaluate(() => document.fonts.ready);
  return page.locator("#stage");
};

test.describe("feedback and navigation components", () => {
  test("progress, skeleton and empty share the sketch vocabulary", async ({
    page,
  }) => {
    const stage = await render(
      page,
      `<super-progress value="62" show-text></super-progress>
       <super-skeleton variant="text" rows="2" animated></super-skeleton>
       <super-empty description="暂无数据"></super-empty>`,
    );

    await expect(stage).toHaveScreenshot("progress-skeleton-empty.png");
  });

  test("tabs, breadcrumb and pagination keep consistent surfaces", async ({
    page,
  }) => {
    await page.goto("/tests/visual/harness.html");
    await page.waitForFunction(() => Boolean(customElements.get("super-tabs")));
    const stage = page.locator("#stage");
    await page.evaluate(() => {
      const host = document.querySelector("#stage") as HTMLElement;
      host.innerHTML = `
        <super-tabs active="one"></super-tabs>
        <super-breadcrumb></super-breadcrumb>
        <super-pagination total="120" page="2" page-size="10" show-total></super-pagination>
        <super-slider value="40" min="0" max="100"></super-slider>
        <super-rate value="3"></super-rate>`;
      const tabs = host.querySelector("super-tabs") as HTMLElement & {
        items: unknown[];
      };
      tabs.items = [
        { key: "one", label: "概览" },
        { key: "two", label: "详情" },
      ];
      const crumbs = host.querySelector("super-breadcrumb") as HTMLElement & {
        items: unknown[];
      };
      crumbs.items = [
        { label: "首页", href: "#" },
        { label: "组件" },
        { label: "当前", current: true },
      ];
    });
    await page.evaluate(() => document.fonts.ready);

    await expect(stage).toHaveScreenshot("tabs-breadcrumb-pagination.png");
  });
});
