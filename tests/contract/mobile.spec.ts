import { expect, test } from "@playwright/test";
import type { Page } from "@playwright/test";
import { COMPONENTS } from "./manifest";
import type { ContractDebugApi, ContractMount } from "./types";

async function open(
  page: Page,
  tag: string,
  patch?: ContractMount,
): Promise<void> {
  await page.goto(`/contract.html?tag=${encodeURIComponent(tag)}`);
  await page.waitForFunction(() => window.__SUPER_CONTRACT__?.ready === true);
  if (patch) {
    await page.evaluate(async (nextPatch) => {
      await window.__SUPER_CONTRACT__?.patch(nextPatch);
    }, patch);
  }
}

async function pageOverflow(page: Page): Promise<{
  viewport: number;
  scroll: number;
  offenders: string[];
}> {
  return page.evaluate(() => {
    const viewport = document.documentElement.clientWidth;
    const scroll = document.documentElement.scrollWidth;
    const offenders = [...document.body.querySelectorAll<HTMLElement>("*")]
      .filter((element) => {
        const style = getComputedStyle(element);
        if (style.position === "fixed" || style.display === "none") {
          return false;
        }
        const rect = element.getBoundingClientRect();
        return rect.width > 0 && (rect.right > viewport + 1 || rect.left < -1);
      })
      .slice(0, 8)
      .map((element) => element.localName);
    return { viewport, scroll, offenders };
  });
}

async function expectNoHorizontalOverflow(
  page: Page,
  label: string,
): Promise<void> {
  const overflow = await pageOverflow(page);
  expect(
    overflow.scroll,
    `${label}: page ${overflow.scroll}px wider than ${overflow.viewport}px (${overflow.offenders.join(", ")})`,
  ).toBeLessThanOrEqual(overflow.viewport + 1);
}

test.describe("mobile layout", () => {
  test("@mobile every component mounts without page overflow", async ({
    page,
  }) => {
    test.setTimeout(120_000);
    expect(COMPONENTS).toHaveLength(36);

    for (const component of COMPONENTS) {
      await open(page, component.tag);
      await expectNoHorizontalOverflow(page, component.tag);
      const errors = await page.evaluate(
        () => (window.__SUPER_CONTRACT__ as ContractDebugApi).errors,
      );
      expect(errors, component.tag).toEqual([]);
    }
  });

  test("@mobile dialog and drawer stay inside the viewport", async ({
    page,
  }) => {
    await open(page, "super-dialog", {
      properties: { open: true, title: "移动端对话框" },
    });
    const dialog = page.locator('super-dialog [part="dialog"]');
    await expect(dialog).toBeVisible();
    const dialogBox = await dialog.boundingBox();
    expect(dialogBox?.x ?? -1).toBeGreaterThanOrEqual(0);
    expect((dialogBox?.x ?? 0) + (dialogBox?.width ?? 0)).toBeLessThanOrEqual(
      page.viewportSize()?.width ?? 0,
    );
    await expectNoHorizontalOverflow(page, "super-dialog open");

    await open(page, "super-drawer", {
      properties: { open: true, title: "移动端抽屉" },
    });
    const drawer = page.locator('super-drawer [part="drawer"]');
    await expect(drawer).toBeVisible();
    const drawerBox = await drawer.boundingBox();
    expect(drawerBox?.x ?? -1).toBeGreaterThanOrEqual(0);
    expect((drawerBox?.x ?? 0) + (drawerBox?.width ?? 0)).toBeLessThanOrEqual(
      page.viewportSize()?.width ?? 0,
    );
    await expectNoHorizontalOverflow(page, "super-drawer open");
  });

  test("@mobile select popup and notification fit the viewport", async ({
    page,
  }) => {
    await open(page, "super-select", {
      attributes: { "aria-label": "城市" },
    });
    await page.locator('super-select [role="combobox"]').click();
    const listbox = page.locator('super-select [role="listbox"]');
    await expect(listbox).toBeVisible();
    const listboxBox = await listbox.boundingBox();
    expect(listboxBox?.x ?? -1).toBeGreaterThanOrEqual(0);
    expect(
      (listboxBox?.x ?? 0) + (listboxBox?.width ?? 0),
    ).toBeLessThanOrEqual(page.viewportSize()?.width ?? 0);
    await expectNoHorizontalOverflow(page, "super-select open");

    await open(page, "super-notification", {
      properties: {
        open: true,
        title: "移动端通知",
        message: "通知内容应该保持在屏幕内。",
        duration: 0,
      },
    });
    const notification = page.locator(
      'super-notification [part="notification"]',
    );
    await expect(notification).toBeVisible();
    const notificationBox = await notification.boundingBox();
    expect(notificationBox?.x ?? -1).toBeGreaterThanOrEqual(0);
    expect(
      (notificationBox?.x ?? 0) + (notificationBox?.width ?? 0),
    ).toBeLessThanOrEqual(page.viewportSize()?.width ?? 0);
    await expectNoHorizontalOverflow(page, "super-notification open");
  });
});
