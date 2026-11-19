import { afterEach, describe, expect, it, vi } from "vitest";
import {
  defineSuperDatePicker,
  SUPER_DATE_PICKER_TAG,
  SuperDatePicker,
  type SuperDatePickerChangeDetail,
  type SuperDatePickerOpenChangeDetail,
} from "./index.js";

const settle = async (element: SuperDatePicker): Promise<void> => {
  await element.updateComplete;
  await Promise.resolve();
  await element.updateComplete;
};

const waitForControlledRollback = async (
  element: SuperDatePicker,
): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, 30));
  await settle(element);
};

const mountPicker = async (
  configure?: (element: SuperDatePicker) => void,
): Promise<SuperDatePicker> => {
  defineSuperDatePicker();
  const element = document.createElement(SUPER_DATE_PICKER_TAG);
  configure?.(element);
  document.body.append(element);
  await settle(element);
  return element;
};

const getTrigger = (element: SuperDatePicker) =>
  element.shadowRoot?.querySelector<HTMLButtonElement>(".trigger");

const openPanel = async (element: SuperDatePicker): Promise<void> => {
  getTrigger(element)?.click();
  await settle(element);
};

const getCell = (element: SuperDatePicker, key: string) =>
  element.shadowRoot?.querySelector<HTMLButtonElement>(
    `.cell[data-key="${key}"]`,
  );

const getTitle = (element: SuperDatePicker) =>
  element.shadowRoot?.querySelector(".title")?.textContent?.trim();

const localTodayKey = (): string => {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
};

afterEach(() => {
  document.body.replaceChildren();
});

describe("SuperDatePicker", () => {
  it("registers super-date-picker idempotently and exposes stable defaults", async () => {
    expect(defineSuperDatePicker()).toBe(SuperDatePicker);
    expect(defineSuperDatePicker()).toBe(SuperDatePicker);
    expect(customElements.get(SUPER_DATE_PICKER_TAG)).toBe(SuperDatePicker);

    const element = await mountPicker();
    expect(element.value).toBe("");
    expect(element.mode).toBe("date");
    expect(element.size).toBe("medium");
    expect(element.validation).toBe("none");
    expect(element.placeholder).toBe("选择日期");
    expect(element.startPlaceholder).toBe("开始日期");
    expect(element.endPlaceholder).toBe("结束日期");
    expect(element.todayLabel).toBe("今天");
    expect(element.clearLabel).toBe("清空");
    expect(element.firstDayOfWeek).toBe(1);
    expect(element.locale).toBe("zh-CN");
    expect(getTrigger(element)?.getAttribute("aria-haspopup")).toBe("dialog");
    expect(getTrigger(element)?.getAttribute("aria-controls")).toBe("popup");

    await openPanel(element);
    const popup = element.shadowRoot?.querySelector<HTMLElement>(".popup");
    expect(popup?.id).toBe("popup");
    expect(popup?.getAttribute("aria-label")).toBe("选择日期");
  });

  it("picks a day, emits a composed change event and closes the panel", async () => {
    const element = await mountPicker((picker) => {
      picker.value = "2026-07-15";
      picker.name = "deadline";
    });
    const onChange = vi.fn();
    element.addEventListener("super-date-picker-change", onChange);
    const onOpenChange = vi.fn();
    element.addEventListener("super-date-picker-open-change", onOpenChange);

    await openPanel(element);
    expect(getTitle(element)).toBe("2026年7月");
    expect(getCell(element, "2026-07-15")?.getAttribute("aria-pressed")).toBe(
      "true",
    );

    getCell(element, "2026-07-24")?.click();
    await settle(element);

    expect(element.value).toBe("2026-07-24");
    expect(onChange).toHaveBeenCalledTimes(1);
    const event = onChange.mock.calls[0]?.[0] as CustomEvent<
      SuperDatePickerChangeDetail
    >;
    expect(event.detail.value).toBe("2026-07-24");
    expect(event.detail.name).toBe("deadline");
    expect(event.detail.mode).toBe("date");
    expect(event.bubbles).toBe(true);
    expect(event.composed).toBe(true);
    expect(element.open).toBe(false);
    expect(element.shadowRoot?.activeElement).toBe(getTrigger(element));
    const lastOpenChange = onOpenChange.mock.calls.at(-1)?.[0] as CustomEvent<
      SuperDatePickerOpenChangeDetail
    >;
    expect(lastOpenChange.detail).toMatchObject({ open: false, reason: "select" });
  });

  it("links range selection, orders the pair and restarts on the next click", async () => {
    const element = await mountPicker((picker) => {
      picker.mode = "range";
      picker.value = ["2026-07-10", "2026-07-12"];
    });
    const onChange = vi.fn();
    element.addEventListener("super-date-picker-change", onChange);

    await openPanel(element);
    expect(
      element.shadowRoot?.querySelector<HTMLElement>('.popup[data-layout="range"]'),
    ).not.toBeNull();
    expect(element.shadowRoot?.querySelectorAll(".panels .panel")).toHaveLength(
      2,
    );
    const titles = Array.from(
      element.shadowRoot?.querySelectorAll(".title") ?? [],
      (title) => title.textContent?.trim(),
    );
    expect(titles).toEqual(["2026年7月", "2026年8月"]);

    getCell(element, "2026-07-20")?.click();
    await settle(element);
    expect(onChange).not.toHaveBeenCalled();
    expect(element.open).toBe(true);

    getCell(element, "2026-07-08")?.click();
    await settle(element);
    expect(onChange).toHaveBeenCalledTimes(1);
    const event = onChange.mock.calls[0]?.[0] as CustomEvent<
      SuperDatePickerChangeDetail
    >;
    expect(event.detail.value).toEqual(["2026-07-08", "2026-07-20"]);
    expect(element.value).toEqual(["2026-07-08", "2026-07-20"]);
    expect(element.open).toBe(false);

    await openPanel(element);
    getCell(element, "2026-07-25")?.click();
    await settle(element);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(element.open).toBe(true);
  });

  it("highlights the hovered range preview while picking", async () => {
    const element = await mountPicker((picker) => {
      picker.mode = "range";
      picker.value = ["2026-07-10", "2026-07-12"];
    });

    await openPanel(element);
    getCell(element, "2026-07-15")?.click();
    await settle(element);

    const hoverTarget = getCell(element, "2026-07-18");
    hoverTarget?.dispatchEvent(
      new MouseEvent("mouseenter", { bubbles: true, composed: true }),
    );
    await settle(element);

    expect(getCell(element, "2026-07-16")?.hasAttribute("data-in-range")).toBe(
      true,
    );
    expect(getCell(element, "2026-07-18")?.getAttribute("aria-pressed")).toBe(
      "true",
    );
    expect(getCell(element, "2026-07-20")?.hasAttribute("data-in-range")).toBe(
      false,
    );
  });

  it("picks months and years in their dedicated modes", async () => {
    const monthPicker = await mountPicker((picker) => {
      picker.mode = "month";
      picker.value = "2026-03";
    });
    const onMonthChange = vi.fn();
    monthPicker.addEventListener("super-date-picker-change", onMonthChange);

    await openPanel(monthPicker);
    expect(getTitle(monthPicker)).toBe("2026年");
    getCell(monthPicker, "2026-11")?.click();
    await settle(monthPicker);

    expect(monthPicker.value).toBe("2026-11");
    expect(
      (onMonthChange.mock.calls[0]?.[0] as CustomEvent).detail.value,
    ).toBe("2026-11");
    expect(monthPicker.open).toBe(false);

    const yearPicker = await mountPicker((picker) => {
      picker.mode = "year";
      picker.value = "2026";
    });
    await openPanel(yearPicker);
    getCell(yearPicker, "2020")?.click();
    await settle(yearPicker);
    expect(yearPicker.value).toBe("2020");
    expect(yearPicker.open).toBe(false);
  });

  it("anchors the year panel and roving tabindex to the selected year", async () => {
    const element = await mountPicker((picker) => {
      picker.mode = "year";
      picker.value = "2005";
    });

    await openPanel(element);

    expect(getTitle(element)).toBe("2004 – 2015");
    expect(getCell(element, "2005")?.getAttribute("aria-pressed")).toBe(
      "true",
    );
    expect(getCell(element, "2005")?.getAttribute("tabindex")).toBe("0");
    expect(getCell(element, "2005")?.hasAttribute("data-active")).toBe(true);
  });

  it("handles leap days and calendar navigation boundaries", async () => {
    const element = await mountPicker();

    element.value = "2024-02-29";
    await settle(element);
    expect(element.value).toBe("2024-02-29");

    element.value = "2023-02-29";
    await settle(element);
    expect(element.value).toBe("");

    element.value = "0000-01-01";
    await settle(element);
    expect(element.value).toBe("");

    element.value = "2026-12-15";
    await openPanel(element);
    element.shadowRoot?.querySelector<HTMLButtonElement>(
      `[aria-label="${element.nextMonthLabel}"]`,
    )?.click();
    await settle(element);
    expect(getTitle(element)).toBe("2027年1月");

    const yearPicker = await mountPicker((picker) => {
      picker.mode = "year";
      picker.value = "2005";
    });
    await openPanel(yearPicker);
    yearPicker.shadowRoot?.querySelector<HTMLButtonElement>(
      `[aria-label="${yearPicker.nextYearLabel}"]`,
    )?.click();
    await settle(yearPicker);
    expect(getTitle(yearPicker)).toBe("2016 – 2027");
  });

  it("clamps navigation at the first supported calendar year", async () => {
    const element = await mountPicker((picker) => {
      picker.value = "0001-01-01";
    });

    await openPanel(element);
    element.shadowRoot?.querySelector<HTMLButtonElement>(
      `[aria-label="${element.prevMonthLabel}"]`,
    )?.click();
    await settle(element);

    expect(getTitle(element)).toBe("1年1月");
    expect(getCell(element, "0001-01-01")).not.toBeNull();
  });

  it("respects min, max and disabledDate constraints", async () => {
    const element = await mountPicker((picker) => {
      picker.value = "2026-07-15";
      picker.min = "2026-07-10";
      picker.max = "2026-07-20";
      picker.disabledDate = (date: Date) => date.getDate() === 18;
    });
    const onChange = vi.fn();
    element.addEventListener("super-date-picker-change", onChange);

    await openPanel(element);
    expect(getCell(element, "2026-07-05")?.disabled).toBe(true);
    expect(getCell(element, "2026-07-25")?.disabled).toBe(true);
    expect(getCell(element, "2026-07-18")?.disabled).toBe(true);
    expect(getCell(element, "2026-07-12")?.disabled).toBe(false);

    getCell(element, "2026-07-05")?.click();
    getCell(element, "2026-07-18")?.click();
    await settle(element);
    expect(onChange).not.toHaveBeenCalled();
    expect(element.value).toBe("2026-07-15");
  });

  it("supports the today button, clear actions and shortcuts", async () => {
    const element = await mountPicker((picker) => {
      picker.value = "2026-07-15";
      picker.clearable = true;
      picker.shortcuts = [
        { label: "元旦", value: "2026-01-01" },
        { label: "年中", value: () => "2026-06-30" },
      ];
    });
    const onChange = vi.fn();
    const onClear = vi.fn();
    const onOpenChange = vi.fn();
    element.addEventListener("super-date-picker-change", onChange);
    element.addEventListener("super-date-picker-clear", onClear);
    element.addEventListener("super-date-picker-open-change", onOpenChange);

    await openPanel(element);
    element.shadowRoot?.querySelector<HTMLButtonElement>(".today-button")
      ?.click();
    await settle(element);
    expect(element.value).toBe(localTodayKey());
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(
      (onOpenChange.mock.calls.at(-1)?.[0] as CustomEvent).detail,
    ).toMatchObject({ open: false, reason: "today" });
    expect(element.shadowRoot?.activeElement).toBe(getTrigger(element));

    await openPanel(element);
    const shortcuts = Array.from(
      element.shadowRoot?.querySelectorAll<HTMLButtonElement>(".shortcut") ??
        [],
    );
    expect(shortcuts.map((button) => button.textContent?.trim())).toEqual([
      "元旦",
      "年中",
    ]);
    shortcuts[1]?.click();
    await settle(element);
    expect(element.value).toBe("2026-06-30");
    expect(
      (onOpenChange.mock.calls.at(-1)?.[0] as CustomEvent).detail,
    ).toMatchObject({ open: false, reason: "shortcut" });
    expect(element.shadowRoot?.activeElement).toBe(getTrigger(element));

    await openPanel(element);
    element.shadowRoot?.querySelector<HTMLButtonElement>(".clear-action")
      ?.click();
    await settle(element);
    expect(element.value).toBe("");
    expect(onClear).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledTimes(3);
    expect(
      (onOpenChange.mock.calls.at(-1)?.[0] as CustomEvent).detail,
    ).toMatchObject({ open: false, reason: "clear" });
    expect(element.shadowRoot?.activeElement).toBe(getTrigger(element));

    element.value = "2026-07-15";
    await settle(element);
    element.shadowRoot?.querySelector<HTMLButtonElement>(".clear-button")
      ?.click();
    await settle(element);
    expect(element.value).toBe("");
    expect(onClear).toHaveBeenCalledTimes(2);
    expect(element.open).toBe(false);
  });

  it("rejects shortcuts blocked by min, max or disabledDate", async () => {
    const element = await mountPicker((picker) => {
      picker.value = "2026-07-15";
      picker.min = "2026-07-10";
      picker.max = "2026-07-20";
      picker.disabledDate = (date: Date) => date.getDate() === 18;
      picker.shortcuts = [
        { label: "越过下界", value: "2026-07-01" },
        { label: "禁用日期", value: "2026-07-18" },
        { label: "可选日期", value: "2026-07-19" },
      ];
    });
    const onChange = vi.fn();
    element.addEventListener("super-date-picker-change", onChange);

    await openPanel(element);
    const shortcuts = Array.from(
      element.shadowRoot?.querySelectorAll<HTMLButtonElement>(".shortcut") ??
        [],
    );
    shortcuts[0]?.click();
    shortcuts[1]?.click();
    await settle(element);
    expect(element.value).toBe("2026-07-15");
    expect(element.open).toBe(true);
    expect(onChange).not.toHaveBeenCalled();

    shortcuts[2]?.click();
    await settle(element);
    expect(element.value).toBe("2026-07-19");
    expect(element.open).toBe(false);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("closes on outside pointerdown and Escape with open-change events", async () => {
    const element = await mountPicker((picker) => {
      picker.value = "2026-07-15";
    });
    const onOpenChange = vi.fn();
    element.addEventListener("super-date-picker-open-change", onOpenChange);

    await openPanel(element);
    document.body.dispatchEvent(
      new MouseEvent("pointerdown", { bubbles: true, composed: true }),
    );
    await settle(element);
    expect(element.open).toBe(false);
    expect(
      (onOpenChange.mock.calls.at(-1)?.[0] as CustomEvent).detail,
    ).toMatchObject({ open: false, reason: "outside" });

    await openPanel(element);
    getTrigger(element)?.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Escape",
        bubbles: true,
        composed: true,
      }),
    );
    await settle(element);
    expect(element.open).toBe(false);
    expect(
      (onOpenChange.mock.calls.at(-1)?.[0] as CustomEvent).detail,
    ).toMatchObject({ open: false, reason: "escape" });
  });

  it("treats programmatic value assignment as silent and syncs the view", async () => {
    const element = await mountPicker();
    const onChange = vi.fn();
    element.addEventListener("super-date-picker-change", onChange);

    element.value = "2026-07-24";
    await settle(element);
    expect(onChange).not.toHaveBeenCalled();

    await openPanel(element);
    expect(getTitle(element)).toBe("2026年7月");
    expect(getCell(element, "2026-07-24")?.getAttribute("aria-pressed")).toBe(
      "true",
    );
  });

  it("keeps an attribute-initialized value uncontrolled", async () => {
    defineSuperDatePicker();
    const element = document.createElement(SUPER_DATE_PICKER_TAG);
    element.setAttribute("value", "2026-07-15");
    document.body.append(element);
    await settle(element);

    await openPanel(element);
    getCell(element, "2026-07-24")?.click();
    await settle(element);
    await waitForControlledRollback(element);

    expect(element.value).toBe("2026-07-24");
  });

  it("restores an externally controlled value after a user selection", async () => {
    const element = await mountPicker();
    element.value = "2026-07-15";
    await settle(element);

    await openPanel(element);
    getCell(element, "2026-07-24")?.click();
    await settle(element);

    expect(element.value).toBe("2026-07-24");

    await waitForControlledRollback(element);

    expect(element.value).toBe("2026-07-15");
  });

  it("restores a controlled range as a copied array", async () => {
    const element = await mountPicker((picker) => {
      picker.mode = "range";
    });
    const committed = ["2026-07-10", "2026-07-12"];
    element.value = committed;
    await settle(element);
    committed[0] = "2025-01-01";

    await openPanel(element);
    getCell(element, "2026-07-20")?.click();
    await settle(element);
    getCell(element, "2026-07-08")?.click();
    await settle(element);

    expect(element.value).toEqual(["2026-07-08", "2026-07-20"]);

    await waitForControlledRollback(element);

    expect(element.value).toEqual(["2026-07-10", "2026-07-12"]);
    expect(element.value).not.toBe(committed);
  });

  it("stays closed while disabled", async () => {
    const element = await mountPicker((picker) => {
      picker.disabled = true;
    });
    const onOpenChange = vi.fn();
    element.addEventListener("super-date-picker-open-change", onOpenChange);

    await openPanel(element);
    expect(element.open).toBe(false);
    expect(onOpenChange).not.toHaveBeenCalled();
    expect(getTrigger(element)?.disabled).toBe(true);
  });

  it("rotates weekday headers with first-day-of-week and supports arrow keys", async () => {
    const element = await mountPicker((picker) => {
      picker.value = "2026-07-15";
    });

    await openPanel(element);
    const defaultWeekdays = Array.from(
      element.shadowRoot?.querySelectorAll(".weekday") ?? [],
      (weekday) => weekday.textContent?.trim(),
    );
    expect(defaultWeekdays[0]).toBe("一");
    expect(defaultWeekdays[6]).toBe("日");

    const grid = element.shadowRoot?.querySelector(".grid");
    grid?.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "ArrowRight",
        bubbles: true,
        composed: true,
      }),
    );
    await settle(element);
    expect(getCell(element, "2026-07-16")?.hasAttribute("data-active")).toBe(
      true,
    );

    const sundayPicker = await mountPicker((picker) => {
      picker.value = "2026-07-15";
      picker.firstDayOfWeek = 0;
    });
    await openPanel(sundayPicker);
    const sundayFirst = Array.from(
      sundayPicker.shadowRoot?.querySelectorAll(".weekday") ?? [],
      (weekday) => weekday.textContent?.trim(),
    );
    expect(sundayFirst[0]).toBe("日");
  });

  it("localizes weekday, month and year labels through locale", async () => {
    const element = await mountPicker((picker) => {
      picker.locale = "en-US";
      picker.value = "2026-07-15";
    });

    await openPanel(element);
    const weekdays = Array.from(
      element.shadowRoot?.querySelectorAll(".weekday") ?? [],
      (weekday) => weekday.textContent?.trim(),
    );
    expect(weekdays).toEqual(["M", "T", "W", "T", "F", "S", "S"]);
    expect(getTitle(element)).toBe("July 2026");
    expect(
      element.shadowRoot?.querySelector(".grid")?.getAttribute("aria-label"),
    ).toBe("July 2026");

    const monthPicker = await mountPicker((picker) => {
      picker.locale = "en-US";
      picker.mode = "month";
      picker.value = "2026-07";
    });
    await openPanel(monthPicker);
    expect(getTitle(monthPicker)).toBe("2026");
    expect(getCell(monthPicker, "2026-07")?.textContent?.trim()).toBe("Jul");
  });
});
