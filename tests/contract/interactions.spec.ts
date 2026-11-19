import { expect, test } from "@playwright/test";
import type { Page } from "@playwright/test";
import type {
  ContractDebugApi,
  ContractMount,
} from "./types";

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

async function recordedEvents(
  page: Page,
): Promise<Array<{ name: string; detail: unknown }>> {
  return page.evaluate(() => {
    const api = window.__SUPER_CONTRACT__ as ContractDebugApi;
    return api.events.map(({ name, detail }) => ({ name, detail }));
  });
}

async function resetEvents(page: Page): Promise<void> {
  await page.evaluate(() => window.__SUPER_CONTRACT__?.resetEvents());
}

async function pressTab(page: Page): Promise<void> {
  const browser = test.info().project.metadata.browser;
  // macOS Safari/WebKit only moves focus between controls with Option+Tab
  // unless the user enables full keyboard access.
  await page.keyboard.press(
    browser === "webkit" && process.platform === "darwin" ? "Alt+Tab" : "Tab",
  );
}

async function deepActiveElement(page: Page): Promise<{
  tag: string;
  label: string;
}> {
  return page.evaluate(() => {
    let active = document.activeElement as HTMLElement | null;
    while (active?.shadowRoot?.activeElement) {
      active = active.shadowRoot.activeElement as HTMLElement;
    }
    return {
      tag: active?.localName ?? "",
      label:
        active?.getAttribute("aria-label") ??
        active?.textContent?.trim() ??
        "",
    };
  });
}

test.describe("high-risk interactions", () => {
  test("@interaction controlled select rejects a framework rerender rollback", async ({
    page,
  }) => {
    test.skip(
      test.info().project.metadata.framework === "html",
      "Native HTML has no virtual-DOM property diff to reproduce this case",
    );

    await open(page, "super-select", {
      attributes: { "aria-label": "城市" },
      properties: { value: "beijing" },
    });
    await resetEvents(page);

    const combobox = page.locator('super-select [role="combobox"]');
    await combobox.focus();
    await page.keyboard.press("Enter");
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter");

    const changeEvent = await page.evaluate(() => {
      const api = window.__SUPER_CONTRACT__ as ContractDebugApi;
      return api.events.find((event) => event.name === "super-select-change")
        ?.detail as { value?: string; values?: string[] } | undefined;
    });
    expect(changeEvent?.value).toBe("shanghai");
    expect(changeEvent?.values).toEqual(["shanghai"]);

    await page.evaluate(async () => {
      await window.__SUPER_CONTRACT__?.patch({
        properties: { value: "beijing" },
      });
    });

    await expect
      .poll(
        () =>
          page.locator("super-select").evaluate(
            (element) => (element as HTMLElement & { value: string }).value,
          ),
        {
          message:
            "A framework rerender with the unchanged controlled value must restore the old value",
        },
      )
      .toBe("beijing");
  });

  test("@interaction controlled input rejects a framework rerender rollback", async ({
    page,
  }) => {
    test.skip(
      test.info().project.metadata.framework === "html",
      "Native HTML already writes an explicitly assigned value",
    );

    await open(page, "super-input", {
      attributes: { "aria-label": "内容" },
      properties: { value: "旧值" },
    });
    await resetEvents(page);

    const input = page.locator('super-input input[aria-label="内容"]');
    await input.fill("新值");

    const eventValue = await page.evaluate(() => {
      const api = window.__SUPER_CONTRACT__ as ContractDebugApi;
      return (
        api.events.find((event) => event.name === "super-input")?.detail as
          | { value?: string }
          | undefined
      )?.value;
    });
    expect(eventValue).toBe("新值");

    await page.evaluate(async () => {
      await window.__SUPER_CONTRACT__?.patch({
        properties: { value: "旧值" },
      });
    });

    await expect
      .poll(() =>
        page.locator("super-input").evaluate(
          (element) => (element as HTMLElement & { value: string }).value,
        ),
      )
      .toBe("旧值");
  });

  test("@interaction select supports keyboard selection and reports detail", async ({
    page,
  }) => {
    await open(page, "super-select", {
      attributes: { "aria-label": "城市" },
    });
    await resetEvents(page);

    const combobox = page.locator('super-select [role="combobox"]');
    await combobox.focus();
    await page.keyboard.press("Enter");
    await expect(page.locator("super-select")).toHaveAttribute("open", "");
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter");

    await expect(page.locator("super-select")).not.toHaveAttribute(
      "open",
      "",
    );
    const value = await page.locator("super-select").evaluate(
      (element) => (element as HTMLElement & { value: string }).value,
    );
    expect(value).toBe("shanghai");

    const events = await recordedEvents(page);
    expect(events.some((event) => event.name === "super-select-open-change")).toBe(
      true,
    );
    expect(events.some((event) => event.name === "super-select-change")).toBe(
      true,
    );
  });

  test("@interaction autocomplete filters with keyboard and selects an item", async ({
    page,
  }) => {
    await open(page, "super-autocomplete", {
      attributes: { placeholder: "城市", "aria-label": "城市" },
      properties: { items: ["北京", "上海", "广州"] },
    });
    await resetEvents(page);

    const input = page.locator('super-autocomplete input[role="combobox"]');
    await input.fill("上");
    await input.press("ArrowDown");
    await input.press("Enter");

    await expect(input).toHaveValue("上海");
    const events = await recordedEvents(page);
    expect(
      events.some((event) => event.name === "super-autocomplete-input"),
    ).toBe(true);
    expect(
      events.some((event) => event.name === "super-autocomplete-change"),
    ).toBe(true);
  });

  test("@interaction dialog traps focus across nested Shadow Roots", async ({
    page,
  }) => {
    await open(page, "super-dialog", {
      properties: { title: "编辑资料" },
      children: [
        {
          tag: "super-input",
          attributes: { placeholder: "姓名", "aria-label": "姓名" },
        },
      ],
    });

    await page.evaluate(() => {
      const trigger = document.createElement("button");
      trigger.id = "dialog-trigger";
      trigger.textContent = "打开";
      document.body.prepend(trigger);
      trigger.focus();
    });
    await page.evaluate(async () => {
      document
        .querySelector("super-dialog")
        ?.addEventListener("super-dialog-close", (event) => {
          (event.currentTarget as HTMLElement & { open: boolean }).open = false;
        });
      await window.__SUPER_CONTRACT__?.patch({ properties: { open: true } });
    });

    await page.keyboard.press("Tab");
    const firstActive = await deepActiveElement(page);
    expect(firstActive.tag).not.toBe("body");

    await page.keyboard.press("Tab");
    const secondActive = await deepActiveElement(page);
    expect(secondActive.tag).toBe("input");
    expect(secondActive.label).toBe("姓名");

    await page.keyboard.press("Escape");
    await expect(page.locator("super-dialog")).not.toHaveAttribute("open", "");
    const restored = await page.evaluate(
      () => document.activeElement?.id ?? "",
    );
    expect(restored).toBe("dialog-trigger");
  });

  test("@interaction popover opens, closes with Escape and restores focus", async ({
    page,
  }) => {
    await open(page, "super-popover", {
      properties: { content: "提示内容", trigger: "click" },
      children: [{ tag: "button", children: ["打开浮层"] }],
    });

    const trigger = page.getByRole("button", { name: "打开浮层" });
    await trigger.focus();
    await trigger.click();
    await expect(page.locator("super-popover")).toHaveAttribute("open", "");

    await page.keyboard.press("Escape");
    await expect(page.locator("super-popover")).not.toHaveAttribute("open", "");
    const active = await deepActiveElement(page);
    expect(active.tag).toBe("button");
    expect(active.label).toContain("打开浮层");
  });

  test("@interaction date picker opens by keyboard and Escape restores focus", async ({
    page,
  }) => {
    await open(page, "super-date-picker", {
      attributes: { "aria-label": "日期" },
      properties: { value: "2026-11-19" },
    });

    const trigger = page.locator('super-date-picker [part="trigger"]');
    await trigger.focus();
    await page.keyboard.press("Enter");
    await expect(page.locator("super-date-picker")).toHaveAttribute("open", "");
    await page.keyboard.press("Escape");
    await expect(page.locator("super-date-picker")).not.toHaveAttribute(
      "open",
      "",
    );
    const active = await deepActiveElement(page);
    expect(active.tag).toBe("button");
    expect(active.label).toBe("日期");
  });

  test("@interaction time picker opens by keyboard and Escape restores focus", async ({
    page,
  }) => {
    await open(page, "super-time-picker", {
      attributes: { "aria-label": "时间" },
      properties: { value: "09:30" },
    });

    const trigger = page.locator('super-time-picker [part="trigger"]');
    await trigger.focus();
    await page.keyboard.press("Enter");
    await expect(page.locator("super-time-picker")).toHaveAttribute("open", "");
    await page.keyboard.press("Escape");
    await expect(page.locator("super-time-picker")).not.toHaveAttribute(
      "open",
      "",
    );
    const active = await deepActiveElement(page);
    expect(active.tag).toBe("button");
    expect(active.label).toBe("时间");
  });

  test("@interaction tooltip interactive content remains keyboard reachable", async ({
    page,
  }) => {
    await open(page, "super-tooltip", {
      properties: {
        content: "",
        interactive: true,
        trigger: "hover",
        delay: 0,
      },
      children: [
        {
          tag: "button",
          attributes: { id: "tooltip-trigger" },
          children: ["悬停我"],
        },
        {
          tag: "button",
          attributes: { slot: "content", id: "tooltip-action" },
          children: ["提示内操作"],
        },
      ],
    });

    await page.locator("#tooltip-trigger").hover();
    await expect(page.locator("super-tooltip")).toHaveAttribute("open", "");

    await page.locator("#tooltip-trigger").focus();
    await pressTab(page);
    const active = await deepActiveElement(page);
    expect(active.tag).toBe("button");
    expect(active.label).toContain("提示内操作");

    await page.keyboard.press("Escape");
    await expect(page.locator("super-tooltip")).not.toHaveAttribute("open", "");
  });

  test("@interaction popconfirm confirms, reports detail and can be cancelled", async ({
    page,
  }) => {
    await open(page, "super-popconfirm", {
      properties: { title: "确认删除？", content: "删除后不可恢复" },
      children: [{ tag: "button", children: ["删除"] }],
    });
    await resetEvents(page);

    await page.getByRole("button", { name: "删除", exact: true }).click();
    await expect(page.locator("super-popconfirm")).toHaveAttribute("open", "");
    await page.getByRole("button", { name: "确定", exact: true }).click();

    await expect(page.locator("super-popconfirm")).not.toHaveAttribute(
      "open",
      "",
    );
    const events = await recordedEvents(page);
    expect(
      events.some((event) => event.name === "super-popconfirm-confirm"),
    ).toBe(true);
    expect(
      events.some((event) => event.name === "super-popconfirm-open-change"),
    ).toBe(true);

    await page.locator("super-popconfirm").evaluate((element) => {
      element.addEventListener(
        "super-popconfirm-confirm",
        (event) => event.preventDefault(),
        { once: true },
      );
    });
    await page.getByRole("button", { name: "删除", exact: true }).click();
    await page.getByRole("button", { name: "确定", exact: true }).click();
    await expect(page.locator("super-popconfirm")).toHaveAttribute("open", "");
  });

  test("@interaction dropdown supports keyboard selection", async ({ page }) => {
    await open(page, "super-dropdown", {
      properties: {
        items: [
          { key: "edit", label: "编辑" },
          { key: "delete", label: "删除", danger: true },
        ],
      },
      children: [{ tag: "button", children: ["更多操作"] }],
    });
    await resetEvents(page);

    const trigger = page.getByRole("button", { name: "更多操作" });
    await trigger.focus();
    await trigger.press("ArrowDown");
    await expect(page.getByRole("menu")).toBeVisible();
    await page.getByRole("menuitem", { name: "编辑" }).click();

    await expect(page.getByRole("menu")).toHaveCount(0);
    const events = await recordedEvents(page);
    expect(
      events.some(
        (event) =>
          event.name === "super-dropdown-select" &&
          (event.detail as { key?: string }).key === "edit",
      ),
    ).toBe(true);
  });

  test("@interaction menu supports roving keyboard selection", async ({
    page,
  }) => {
    await open(page, "super-menu", {
      properties: {
        active: "overview",
        items: [
          { key: "overview", label: "概览" },
          { key: "settings", label: "设置" },
        ],
      },
    });
    await resetEvents(page);

    const first = page.getByRole("menuitem", { name: "概览" });
    await first.focus();
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter");

    const events = await recordedEvents(page);
    expect(
      events.some(
        (event) =>
          event.name === "super-menu-select" &&
          (event.detail as { key?: string }).key === "settings",
      ),
    ).toBe(true);
  });

  test("@interaction table sorts and selects rows", async ({ page }) => {
    await open(page, "super-table", {
      attributes: { selectable: true, "aria-label": "组件表" },
      properties: {
        columns: [
          { key: "name", title: "名称" },
          { key: "status", title: "状态", sortable: true },
        ],
        rows: [
          { id: "1", name: "组件文档", status: "已完成" },
          { id: "2", name: "视觉回归", status: "进行中" },
        ],
      },
    });
    await resetEvents(page);

    await page.getByRole("button", { name: /状态/ }).click();
    await page
      .locator('super-table input[aria-label="选择此行"]')
      .first()
      .check({ force: true });

    const events = await recordedEvents(page);
    expect(
      events.some(
        (event) =>
          event.name === "super-table-sort" &&
          (event.detail as { key?: string; direction?: string }).key ===
            "status" &&
          (event.detail as { direction?: string }).direction === "asc",
      ),
    ).toBe(true);
    expect(
      events.some(
        (event) =>
          event.name === "super-table-select" &&
          Array.isArray(
            (event.detail as { selectedKeys?: string[] }).selectedKeys,
          ) &&
          (event.detail as { selectedKeys: string[] }).selectedKeys.length ===
            1,
      ),
    ).toBe(true);
  });

  test("@interaction upload exposes File objects through all events", async ({
    page,
  }) => {
    await open(page, "super-upload", {
      attributes: { "aria-label": "上传文件" },
    });
    await resetEvents(page);

    await page
      .locator('super-upload input[type="file"]')
      .setInputFiles({
        name: "contract.png",
        mimeType: "image/png",
        buffer: Buffer.from("contract"),
      });

    await expect(
      page.locator("super-upload").getByText("contract.png"),
    ).toBeVisible();
    const value = await page.locator("super-upload").evaluate(
      (element) => (element as HTMLElement & { value: string[] }).value,
    );
    expect(value).toEqual(["contract.png"]);

    const changeFileNames = await page.evaluate(() => {
      const api = window.__SUPER_CONTRACT__ as ContractDebugApi;
      const change = api.events.find(
        (event) => event.name === "super-upload-change",
      );
      return (
        change?.detail as { fileList?: File[] } | undefined
      )?.fileList?.map((file) => file.name);
    });
    expect(changeFileNames).toEqual(["contract.png"]);
  });

  test("@interaction form submits a schema-driven Web Component field", async ({
    page,
  }) => {
    await open(page, "super-form", {
      properties: {
        schema: {
          fields: [
            {
              field: "name",
              label: "姓名",
              component: "super-input",
              props: { placeholder: "请输入姓名" },
            },
          ],
        },
        value: { name: "张三" },
      },
    });
    await resetEvents(page);

    await page.getByRole("button", { name: "提交", exact: true }).click();
    const events = await recordedEvents(page);
    const submit = events.find(
      (event) => event.name === "super-form-submit",
    );
    expect(submit).toBeTruthy();
    expect(
      (submit?.detail as { values?: { name?: string } }).values?.name,
    ).toBe("张三");
  });

  test("@interaction drawer traps focus and restores it after Escape", async ({
    page,
  }) => {
    await open(page, "super-drawer", {
      properties: { title: "筛选条件" },
      children: [
        {
          tag: "super-input",
          attributes: { placeholder: "关键词", "aria-label": "关键词" },
        },
      ],
    });

    await page.evaluate(() => {
      const trigger = document.createElement("button");
      trigger.id = "drawer-trigger";
      trigger.textContent = "打开";
      document.body.prepend(trigger);
      trigger.focus();
    });
    await page.evaluate(async () => {
      document
        .querySelector("super-drawer")
        ?.addEventListener("super-drawer-close", (event) => {
          (event.currentTarget as HTMLElement & { open: boolean }).open = false;
        });
      await window.__SUPER_CONTRACT__?.patch({ properties: { open: true } });
    });

    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    const active = await deepActiveElement(page);
    expect(active.tag).toBe("input");
    expect(active.label).toBe("关键词");

    await page.keyboard.press("Escape");
    await expect(page.locator("super-drawer")).not.toHaveAttribute("open", "");
    const restored = await page.evaluate(
      () => document.activeElement?.id ?? "",
    );
    expect(restored).toBe("drawer-trigger");
  });
});
