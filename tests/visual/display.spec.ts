import { expect, test } from "@playwright/test";

const render = async (page: import("@playwright/test").Page, markup: string) => {
  await page.goto(`/tests/visual/harness.html?markup=${encodeURIComponent(markup)}`);
  await page.waitForFunction(() => Boolean(customElements.get("super-card")));
  await page.evaluate(() => document.fonts.ready);
  return page.locator("#stage");
};

test.describe("B1 display components", () => {
  test("tags and badges share the sketch vocabulary", async ({ page }) => {
    const stage = await render(
      page,
      `<super-tag variant="primary">主要</super-tag>
       <super-tag variant="success">成功</super-tag>
       <super-tag variant="danger" closable>可关闭</super-tag>
       <super-badge value="12" status="danger"><span>消息</span></super-badge>
       <super-badge dot status="success"><span>在线</span></super-badge>
       <super-avatar size="medium" icon="手"></super-avatar>`,
    );

    await expect(stage).toHaveScreenshot("tag-badge-avatar.png");
  });

  test("cards, dividers and spacing keep consistent surfaces", async ({ page }) => {
    const stage = await render(
      page,
      `<super-space direction="vertical" size="medium">
         <super-card variant="outlined" size="small">
           <span slot="header">卡片标题</span>
           卡片正文内容
         </super-card>
         <super-divider variant="hand-drawn">分割</super-divider>
         <super-card variant="filled" size="small" hoverable>悬停卡片</super-card>
       </super-space>`,
    );

    await expect(stage).toHaveScreenshot("card-divider-space.png");
  });
});
