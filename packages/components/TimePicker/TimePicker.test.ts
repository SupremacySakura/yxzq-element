import { afterEach, describe, expect, it, vi } from "vitest";
import {
  defineSuperTimePicker,
  SUPER_TIME_PICKER_TAG,
  SuperTimePicker,
  type SuperTimePickerChangeDetail,
  type SuperTimePickerClearDetail,
  type SuperTimePickerOpenChangeDetail,
} from "./index.js";

const settle = async (element: SuperTimePicker): Promise<void> => {
  await element.updateComplete;
  await Promise.resolve();
  await element.updateComplete;
};

const mountPicker = async (
  configure?: (element: SuperTimePicker) => void,
): Promise<SuperTimePicker> => {
  defineSuperTimePicker();
  const element = document.createElement(SUPER_TIME_PICKER_TAG);
  configure?.(element);
  document.body.append(element);
  await settle(element);
  return element;
};

const getTrigger = (element: SuperTimePicker) =>
  element.shadowRoot?.querySelector<HTMLButtonElement>(".trigger");

const openPanel = async (element: SuperTimePicker): Promise<void> => {
  getTrigger(element)?.click();
  await settle(element);
};

const getCell = (
  element: SuperTimePicker,
  unit: string,
  value: string,
  group = 0,
) =>
  element.shadowRoot?.querySelector<HTMLButtonElement>(
    `.group[data-group="${group}"] .cell[data-unit="${unit}"][data-value="${value}"]`,
  );

const getColumns = (element: SuperTimePicker, group = 0) =>
  Array.from(
    element.shadowRoot?.querySelectorAll(
      `.group[data-group="${group}"] .column`,
    ) ?? [],
    (column) => (column as HTMLElement).dataset["unit"],
  );

afterEach(() => {
  document.body.replaceChildren();
});

describe("SuperTimePicker", () => {
  it("registers super-time-picker idempotently and exposes stable defaults", async () => {
    expect(defineSuperTimePicker()).toBe(SuperTimePicker);
    expect(defineSuperTimePicker()).toBe(SuperTimePicker);
    expect(customElements.get(SUPER_TIME_PICKER_TAG)).toBe(SuperTimePicker);

    const element = await mountPicker();
    expect(element.value).toBe("");
    expect(element.format).toBe("HH:mm");
    expect(element.size).toBe("medium");
    expect(element.validation).toBe("none");
    expect(element.placeholder).toBe("选择时间");
    expect(element.startPlaceholder).toBe("开始时间");
    expect(element.endPlaceholder).toBe("结束时间");
    expect(element.clearLabel).toBe("清空");
    expect(element.confirmLabel).toBe("确定");
    expect(element.amLabel).toBe("上午");
    expect(element.pmLabel).toBe("下午");
    expect(getTrigger(element)?.getAttribute("aria-haspopup")).toBe("dialog");
    expect(getTrigger(element)?.getAttribute("aria-controls")).toBe("popup");

    await openPanel(element);
    const popup = element.shadowRoot?.querySelector<HTMLElement>(".popup");
    expect(popup?.id).toBe("popup");
    expect(popup?.getAttribute("aria-label")).toBe("选择时间");
  });

  it("emits composed change events on cell picks and closes on confirm", async () => {
    const element = await mountPicker((picker) => {
      picker.name = "meeting";
    });
    const onChange = vi.fn();
    element.addEventListener("super-time-picker-change", onChange);
    const onOpenChange = vi.fn();
    element.addEventListener("super-time-picker-open-change", onOpenChange);

    await openPanel(element);
    expect(getColumns(element)).toEqual(["hour", "minute"]);

    getCell(element, "hour", "9")?.click();
    await settle(element);
    expect(element.value).toBe("09:00");
    expect(element.open).toBe(true);

    getCell(element, "minute", "30")?.click();
    await settle(element);
    expect(element.value).toBe("09:30");
    expect(onChange).toHaveBeenCalledTimes(2);

    const event = onChange.mock.calls.at(-1)?.[0] as CustomEvent<
      SuperTimePickerChangeDetail
    >;
    expect(event.detail.value).toBe("09:30");
    expect(event.detail.name).toBe("meeting");
    expect(event.bubbles).toBe(true);
    expect(event.composed).toBe(true);

    element.shadowRoot?.querySelector<HTMLButtonElement>(".confirm-button")
      ?.click();
    await settle(element);
    expect(element.open).toBe(false);
    expect(element.shadowRoot?.activeElement).toBe(getTrigger(element));
    expect(
      (onOpenChange.mock.calls.at(-1)?.[0] as CustomEvent<
        SuperTimePickerOpenChangeDetail
      >).detail,
    ).toMatchObject({ open: false, reason: "confirm" });
  });

  it("renders a second column and second values with HH:mm:ss", async () => {
    const element = await mountPicker((picker) => {
      picker.format = "HH:mm:ss";
    });
    await openPanel(element);
    expect(getColumns(element)).toEqual(["hour", "minute", "second"]);

    getCell(element, "hour", "8")?.click();
    getCell(element, "minute", "5")?.click();
    getCell(element, "second", "7")?.click();
    await settle(element);
    expect(element.value).toBe("08:05:07");
    expect(getTrigger(element)?.textContent?.trim()).toBe("08:05:07");
  });

  it("supports the 12-hour clock with a period column", async () => {
    const element = await mountPicker((picker) => {
      picker.format = "hh:mm A";
    });
    const onChange = vi.fn();
    element.addEventListener("super-time-picker-change", onChange);

    await openPanel(element);
    expect(getColumns(element)).toEqual(["hour", "minute", "period"]);

    getCell(element, "hour", "2")?.click();
    getCell(element, "minute", "30")?.click();
    getCell(element, "period", "pm")?.click();
    await settle(element);

    expect(element.value).toBe("14:30");
    expect(getTrigger(element)?.textContent?.trim()).toBe("02:30 PM");
    expect(
      getCell(element, "period", "pm")?.getAttribute("aria-pressed"),
    ).toBe("true");

    getCell(element, "period", "am")?.click();
    await settle(element);
    expect(element.value).toBe("02:30");
    expect(getTrigger(element)?.textContent?.trim()).toBe("02:30 AM");
  });

  it("handles the 12 AM and 12 PM boundaries in both value and display", async () => {
    const element = await mountPicker((picker) => {
      picker.format = "hh:mm A";
      picker.value = "00:30";
    });

    expect(getTrigger(element)?.textContent?.trim()).toBe("12:30 AM");
    await openPanel(element);
    expect(getCell(element, "hour", "12")?.getAttribute("aria-pressed")).toBe(
      "true",
    );
    expect(getCell(element, "period", "am")?.getAttribute("aria-pressed"))
      .toBe("true");

    getCell(element, "hour", "12")?.click();
    await settle(element);
    expect(element.value).toBe("00:30");

    getCell(element, "period", "pm")?.click();
    await settle(element);
    expect(element.value).toBe("12:30");
    expect(getTrigger(element)?.textContent?.trim()).toBe("12:30 PM");
  });

  it("honors minute-step when building the minute column", async () => {
    const element = await mountPicker((picker) => {
      picker.minuteStep = 15;
    });
    await openPanel(element);
    const labels = Array.from(
      element.shadowRoot?.querySelectorAll(
        '.group[data-group="0"] .cell[data-unit="minute"]',
      ) ?? [],
      (cell) => cell.textContent?.trim(),
    );
    expect(labels).toEqual(["00", "15", "30", "45"]);
  });

  it("honors hour-step and second-step when building their columns", async () => {
    const element = await mountPicker((picker) => {
      picker.format = "HH:mm:ss";
      picker.hourStep = 6;
      picker.secondStep = 20;
    });
    await openPanel(element);

    const hourLabels = Array.from(
      element.shadowRoot?.querySelectorAll(
        '.group[data-group="0"] .cell[data-unit="hour"]',
      ) ?? [],
      (cell) => cell.textContent?.trim(),
    );
    const secondLabels = Array.from(
      element.shadowRoot?.querySelectorAll(
        '.group[data-group="0"] .cell[data-unit="second"]',
      ) ?? [],
      (cell) => cell.textContent?.trim(),
    );
    expect(hourLabels).toEqual(["00", "06", "12", "18"]);
    expect(secondLabels).toEqual(["00", "20", "40"]);
  });

  it("edits range ends independently and swaps an inverted pair", async () => {
    const element = await mountPicker((picker) => {
      picker.range = true;
    });
    const onChange = vi.fn();
    element.addEventListener("super-time-picker-change", onChange);

    await openPanel(element);
    const titles = Array.from(
      element.shadowRoot?.querySelectorAll(".group-title") ?? [],
      (title) => title.textContent?.trim(),
    );
    expect(titles).toEqual(["开始", "结束"]);

    getCell(element, "hour", "9", 0)?.click();
    getCell(element, "minute", "0", 0)?.click();
    await settle(element);
    expect(element.value).toEqual(["09:00", ""]);

    getCell(element, "hour", "8", 1)?.click();
    getCell(element, "minute", "0", 1)?.click();
    await settle(element);
    expect(element.value).toEqual(["08:00", "09:00"]);
    const event = onChange.mock.calls.at(-1)?.[0] as CustomEvent<
      SuperTimePickerChangeDetail
    >;
    expect(event.detail.value).toEqual(["08:00", "09:00"]);
    expect(getTrigger(element)?.textContent?.replace(/\s+/g, " ").trim())
      .toBe("08:00 ~ 09:00");
  });

  it("supports shortcuts and clear actions", async () => {
    const element = await mountPicker((picker) => {
      picker.clearable = true;
      picker.value = "09:30";
      picker.shortcuts = [
        { label: "中午", value: "12:00" },
        { label: "下班", value: () => "18:30" },
      ];
    });
    const onChange = vi.fn();
    const onClear = vi.fn();
    const onOpenChange = vi.fn();
    element.addEventListener("super-time-picker-change", onChange);
    element.addEventListener("super-time-picker-clear", onClear);
    element.addEventListener("super-time-picker-open-change", onOpenChange);

    await openPanel(element);
    const shortcuts = Array.from(
      element.shadowRoot?.querySelectorAll<HTMLButtonElement>(".shortcut") ??
        [],
    );
    expect(shortcuts.map((button) => button.textContent?.trim())).toEqual([
      "中午",
      "下班",
    ]);
    shortcuts[1]?.click();
    await settle(element);
    expect(element.value).toBe("18:30");
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(
      (onOpenChange.mock.calls.at(-1)?.[0] as CustomEvent).detail,
    ).toMatchObject({ open: false, reason: "shortcut" });

    await openPanel(element);
    element.shadowRoot?.querySelector<HTMLButtonElement>(".clear-action")
      ?.click();
    await settle(element);
    expect(element.value).toBe("");
    expect(onClear).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledTimes(2);
    const clearEvent = onClear.mock.calls[0]?.[0] as CustomEvent<
      SuperTimePickerClearDetail
    >;
    expect(clearEvent.detail.name).toBe("");
    expect(clearEvent.detail.originalEvent).toBeInstanceOf(MouseEvent);
    expect(clearEvent.bubbles).toBe(true);
    expect(clearEvent.composed).toBe(true);
    expect(
      (onOpenChange.mock.calls.at(-1)?.[0] as CustomEvent).detail,
    ).toMatchObject({ open: false, reason: "clear" });
    expect(element.shadowRoot?.activeElement).toBe(getTrigger(element));

    element.value = "09:30";
    await settle(element);
    element.shadowRoot?.querySelector<HTMLButtonElement>(".clear-button")
      ?.click();
    await settle(element);
    expect(element.value).toBe("");
    expect(onClear).toHaveBeenCalledTimes(2);
    expect(element.open).toBe(false);
  });

  it("does not expose or emit clear actions for empty single or range values", async () => {
    const element = await mountPicker((picker) => {
      picker.clearable = true;
    });
    const onChange = vi.fn();
    const onClear = vi.fn();
    element.addEventListener("super-time-picker-change", onChange);
    element.addEventListener("super-time-picker-clear", onClear);

    await openPanel(element);
    expect(element.shadowRoot?.querySelector(".clear-action")).toBeNull();
    expect(element.shadowRoot?.querySelector(".clear-button")).toBeNull();

    element.range = true;
    element.value = ["", ""];
    await settle(element);
    expect(element.shadowRoot?.querySelector(".clear-action")).toBeNull();
    expect(element.shadowRoot?.querySelector(".clear-button")).toBeNull();
    expect(onClear).not.toHaveBeenCalled();
    expect(onChange).not.toHaveBeenCalled();
  });

  it("closes on outside pointerdown and Escape with open-change events", async () => {
    const element = await mountPicker();
    const onOpenChange = vi.fn();
    element.addEventListener("super-time-picker-open-change", onOpenChange);

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

    await openPanel(element);
    const confirm = element.shadowRoot?.querySelector<HTMLButtonElement>(
      ".confirm-button",
    );
    confirm?.focus();
    confirm?.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Escape",
        bubbles: true,
        composed: true,
      }),
    );
    await settle(element);
    expect(element.open).toBe(false);
    expect(element.shadowRoot?.activeElement).toBe(getTrigger(element));
    expect(
      (onOpenChange.mock.calls.at(-1)?.[0] as CustomEvent).detail,
    ).toMatchObject({ open: false, reason: "escape" });
  });

  it("treats programmatic value assignment as silent", async () => {
    const element = await mountPicker();
    const onChange = vi.fn();
    element.addEventListener("super-time-picker-change", onChange);

    element.value = "09:30";
    await settle(element);
    expect(onChange).not.toHaveBeenCalled();
    expect(getTrigger(element)?.textContent?.trim()).toBe("09:30");

    element.value = "not-a-time";
    await settle(element);
    expect(element.value).toBe("");
    expect(onChange).not.toHaveBeenCalled();
  });

  it("stays closed while disabled", async () => {
    const element = await mountPicker((picker) => {
      picker.disabled = true;
    });
    const onOpenChange = vi.fn();
    element.addEventListener("super-time-picker-open-change", onOpenChange);

    await openPanel(element);
    expect(element.open).toBe(false);
    expect(onOpenChange).not.toHaveBeenCalled();
    expect(getTrigger(element)?.disabled).toBe(true);
  });

  it("moves focus with arrow keys inside the columns", async () => {
    const element = await mountPicker((picker) => {
      picker.value = "09:00";
    });
    await openPanel(element);

    const selected = getCell(element, "hour", "9");
    selected?.focus();
    selected?.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "ArrowDown",
        bubbles: true,
        composed: true,
      }),
    );
    await settle(element);
    expect(
      element.shadowRoot?.activeElement?.getAttribute("data-value"),
    ).toBe("10");
  });

  it("keeps an off-step column keyboard reachable", async () => {
    const element = await mountPicker((picker) => {
      picker.minuteStep = 15;
      picker.value = "09:07";
    });
    await openPanel(element);

    expect(getCell(element, "minute", "0")?.getAttribute("tabindex")).toBe(
      "0",
    );
    expect(getCell(element, "minute", "0")?.getAttribute("aria-pressed"))
      .toBe("false");
  });

  it("removes its outside-pointer listener when disconnected", async () => {
    const element = await mountPicker();
    await openPanel(element);
    expect(element.open).toBe(true);

    element.remove();
    document.body.dispatchEvent(
      new MouseEvent("pointerdown", { bubbles: true, composed: true }),
    );
    await settle(element);

    expect(element.open).toBe(true);
  });
});
