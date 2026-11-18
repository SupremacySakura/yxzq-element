import { expect, test } from "@playwright/test";

test.describe("table, menu and steps", () => {
  test("table keeps the sketch vocabulary", async ({ page }) => {
    await page.goto("/tests/visual/harness.html");
    await page.waitForFunction(() => Boolean(customElements.get("super-table")));
    await page.evaluate(() => {
      const host = document.querySelector("#stage") as HTMLElement;
      host.innerHTML = `<super-table selectable striped></super-table>`;
      const table = host.querySelector("super-table") as HTMLElement & {
        columns: unknown[];
        rows: unknown[];
      };
      table.columns = [
        { key: "name", title: "名称" },
        { key: "status", title: "状态" },
        { key: "updated", title: "更新时间", sortable: true },
      ];
      table.rows = [
        { id: "1", name: "组件文档", status: "已完成", updated: "2026-11-18" },
        { id: "2", name: "视觉回归", status: "进行中", updated: "2026-11-17" },
      ];
    });
    await page.evaluate(() => document.fonts.ready);

    await expect(page.locator("#stage")).toHaveScreenshot("table.png");
  });

  test("menu and steps keep the sketch vocabulary", async ({ page }) => {
    await page.goto("/tests/visual/harness.html");
    await page.waitForFunction(() => Boolean(customElements.get("super-menu")));
    await page.evaluate(() => {
      const host = document.querySelector("#stage") as HTMLElement;
      host.innerHTML = `<super-menu active="overview"></super-menu>
        <super-steps active="1"></super-steps>`;
      const menu = host.querySelector("super-menu") as HTMLElement & {
        items: unknown[];
      };
      menu.items = [
        { key: "overview", label: "概览", icon: "◈" },
        { key: "components", label: "组件", icon: "▤" },
        { key: "settings", label: "设置", icon: "⚙" },
      ];
      const steps = host.querySelector("super-steps") as HTMLElement & {
        items: unknown[];
      };
      steps.items = [
        { title: "填写信息" },
        { title: "确认方案" },
        { title: "完成" },
      ];
    });
    await page.evaluate(() => document.fonts.ready);

    await expect(page.locator("#stage")).toHaveScreenshot("menu-steps.png");
  });
});
