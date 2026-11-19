import { expect, test } from "@playwright/test";
import type { Page } from "@playwright/test";
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

async function resetEvents(page: Page): Promise<void> {
  await page.evaluate(() => window.__SUPER_CONTRACT__?.resetEvents());
}

async function readOpen(page: Page, tag: string): Promise<boolean> {
  return page.locator(tag).evaluate(
    (element) => (element as HTMLElement & { open: boolean }).open,
  );
}

async function eventDetail(
  page: Page,
  name: string,
): Promise<Record<string, unknown> | undefined> {
  return page.evaluate((eventName) => {
    const api = window.__SUPER_CONTRACT__ as ContractDebugApi;
    return api.events.find((event) => event.name === eventName)?.detail as
      | Record<string, unknown>
      | undefined;
  }, name);
}

test.describe("controlled overlays", () => {
  test.beforeEach(() => {
    const { browser, framework } = test.info().project.metadata;
    test.skip(
      browser !== "chromium" ||
        (framework !== "react" && framework !== "vue"),
      "Controlled overlay rendering is covered in the Vue and React Chromium projects",
    );
  });

  test("@controlled dialog restores a rejected close and re-locks page scroll", async ({
    page,
  }) => {
    await open(page, "super-dialog", {
      properties: { title: "编辑资料", open: true },
      children: ["内容"],
    });
    await resetEvents(page);

    await page.locator('super-dialog [part="close"]').click();

    expect(await eventDetail(page, "super-dialog-close")).toEqual({
      reason: "close-button",
    });
    await expect
      .poll(() => readOpen(page, "super-dialog"))
      .toBe(true);
    await expect
      .poll(() =>
        page.evaluate(() =>
          document.body.hasAttribute("data-super-scroll-lock"),
        ),
      )
      .toBe(true);
  });

  test("@controlled drawer restores a rejected close and re-locks page scroll", async ({
    page,
  }) => {
    await open(page, "super-drawer", {
      properties: { title: "筛选条件", open: true },
      children: ["内容"],
    });
    await resetEvents(page);

    await page.locator('super-drawer [part="close"]').click();

    expect(await eventDetail(page, "super-drawer-close")).toEqual({
      reason: "close-button",
    });
    await expect
      .poll(() => readOpen(page, "super-drawer"))
      .toBe(true);
    await expect
      .poll(() =>
        page.evaluate(() =>
          document.body.hasAttribute("data-super-scroll-lock"),
        ),
      )
      .toBe(true);
  });

  test("@controlled dropdown restores a rejected Escape close", async ({
    page,
  }) => {
    await open(page, "super-dropdown", {
      properties: {
        open: true,
        items: [{ key: "edit", label: "编辑" }],
      },
      children: [{ tag: "button", children: ["更多操作"] }],
    });
    await resetEvents(page);

    await page.keyboard.press("Escape");

    expect(
      await eventDetail(page, "super-dropdown-open-change"),
    ).toMatchObject({ open: false });
    await expect
      .poll(() => readOpen(page, "super-dropdown"))
      .toBe(true);
  });

  test("@controlled popover restores a rejected Escape close", async ({
    page,
  }) => {
    await open(page, "super-popover", {
      properties: { open: true, content: "提示内容" },
      children: [{ tag: "button", children: ["打开浮层"] }],
    });
    await resetEvents(page);

    await page.keyboard.press("Escape");

    expect(
      await eventDetail(page, "super-popover-open-change"),
    ).toMatchObject({ open: false });
    await expect
      .poll(() => readOpen(page, "super-popover"))
      .toBe(true);
  });

  test("@controlled popconfirm restores a rejected Escape close", async ({
    page,
  }) => {
    await open(page, "super-popconfirm", {
      properties: { open: true, title: "确认删除？" },
      children: [{ tag: "button", children: ["删除"] }],
    });
    await resetEvents(page);

    await page.keyboard.press("Escape");

    expect(
      await eventDetail(page, "super-popconfirm-open-change"),
    ).toMatchObject({ open: false });
    await expect
      .poll(() => readOpen(page, "super-popconfirm"))
      .toBe(true);
  });

  test("@controlled tooltip restores a rejected Escape close", async ({
    page,
  }) => {
    await open(page, "super-tooltip", {
      properties: { open: true, content: "说明" },
      children: [{ tag: "button", children: ["悬停我"] }],
    });
    await resetEvents(page);

    await page.keyboard.press("Escape");

    expect(
      await eventDetail(page, "super-tooltip-open-change"),
    ).toMatchObject({ open: false });
    await expect
      .poll(() => readOpen(page, "super-tooltip"))
      .toBe(true);
  });

  test("@controlled autocomplete restores rejected open and value changes", async ({
    page,
  }) => {
    await open(page, "super-autocomplete", {
      attributes: { "aria-label": "城市" },
      properties: {
        items: ["北京", "上海"],
        open: true,
        value: "北京",
      },
    });
    await resetEvents(page);

    const input = page.locator('super-autocomplete input[role="combobox"]');
    await input.press("Escape");
    expect(
      await eventDetail(page, "super-autocomplete-open-change"),
    ).toMatchObject({ open: false });
    await expect
      .poll(() => readOpen(page, "super-autocomplete"))
      .toBe(true);

    await resetEvents(page);
    await input.fill("上海");
    expect(
      await eventDetail(page, "super-autocomplete-input"),
    ).toMatchObject({ value: "上海" });
    await expect(input).toHaveValue("北京");
    await expect
      .poll(() =>
        page.locator("super-autocomplete").evaluate(
          (element) => (element as HTMLElement & { value: string }).value,
        ),
      )
      .toBe("北京");
  });

  test("@controlled select restores a rejected Escape close", async ({
    page,
  }) => {
    await open(page, "super-select", {
      attributes: { "aria-label": "城市" },
      properties: { open: true },
    });
    await resetEvents(page);

    const combobox = page.locator('super-select [role="combobox"]');
    await combobox.focus();
    await page.keyboard.press("Escape");

    expect(
      await eventDetail(page, "super-select-open-change"),
    ).toMatchObject({ open: false });
    await expect
      .poll(() => readOpen(page, "super-select"))
      .toBe(true);
  });

  test("@controlled date picker restores a rejected Escape close", async ({
    page,
  }) => {
    await open(page, "super-date-picker", {
      attributes: { "aria-label": "日期" },
      properties: { open: true, value: "2026-11-19" },
    });
    await resetEvents(page);

    await page.locator('super-date-picker [part="trigger"]').focus();
    await page.keyboard.press("Escape");

    expect(
      await eventDetail(page, "super-date-picker-open-change"),
    ).toMatchObject({ open: false });
    await expect
      .poll(() => readOpen(page, "super-date-picker"))
      .toBe(true);
  });

  test("@controlled time picker restores a rejected Escape close", async ({
    page,
  }) => {
    await open(page, "super-time-picker", {
      attributes: { "aria-label": "时间" },
      properties: { open: true, value: "09:30" },
    });
    await resetEvents(page);

    await page.locator('super-time-picker [part="trigger"]').focus();
    await page.keyboard.press("Escape");

    expect(
      await eventDetail(page, "super-time-picker-open-change"),
    ).toMatchObject({ open: false });
    await expect
      .poll(() => readOpen(page, "super-time-picker"))
      .toBe(true);
  });

  test("@controlled dialog accepts a close committed by the parent", async ({
    page,
  }) => {
    await open(page, "super-dialog", {
      properties: { title: "编辑资料", open: true },
      children: ["内容"],
    });
    await page.evaluate(() => {
      const host = document.querySelector("super-dialog");
      host?.addEventListener(
        "super-dialog-close",
        () => {
          (host as HTMLElement & { open: boolean }).open = false;
        },
        { once: true },
      );
    });

    await page.locator('super-dialog [part="close"]').click();
    await page.evaluate(async () => {
      await new Promise<void>((resolve) => {
        requestAnimationFrame(() => resolve());
      });
    });

    expect(await readOpen(page, "super-dialog")).toBe(false);
  });
});
