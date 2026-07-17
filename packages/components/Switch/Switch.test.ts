import { afterEach, describe, expect, it, vi } from "vitest";
import {
  defineSuperSwitch,
  SUPER_SWITCH_TAG,
  SuperSwitch,
} from "./index.js";

const mountSwitch = async (content = "自动同步") => {
  defineSuperSwitch();
  const element = document.createElement(SUPER_SWITCH_TAG);
  element.textContent = content;
  document.body.append(element);
  await element.updateComplete;
  return element;
};

afterEach(() => {
  document.body.replaceChildren();
});

describe("SuperSwitch", () => {
  it("registers the super-switch tag idempotently", () => {
    expect(defineSuperSwitch()).toBe(SuperSwitch);
    expect(defineSuperSwitch()).toBe(SuperSwitch);
    expect(customElements.get(SUPER_SWITCH_TAG)).toBe(SuperSwitch);
  });

  it("renders slotted labels and reflects public state", async () => {
    const element = await mountSwitch();
    const slot = element.shadowRoot?.querySelector<HTMLSlotElement>(
      "slot:not([name])",
    );

    expect(element.checked).toBe(false);
    expect(element.size).toBe("medium");
    expect(element.validation).toBe("none");
    expect(slot?.assignedNodes().map((node) => node.textContent).join(""))
      .toBe("自动同步");

    element.checked = true;
    element.size = "large";
    await element.updateComplete;
    expect(element.getAttribute("checked")).toBe("");
    expect(element.getAttribute("size")).toBe("large");
  });

  it("toggles and emits a composed switch change event", async () => {
    const element = await mountSwitch();
    element.name = "sync";
    element.value = "enabled";
    const onChange = vi.fn();
    element.addEventListener("super-switch-change", onChange);

    element.click();
    await element.updateComplete;

    expect(element.checked).toBe(true);
    expect(onChange).toHaveBeenCalledTimes(1);
    const event = onChange.mock.calls[0]?.[0];
    expect(event.detail).toMatchObject({
      checked: true,
      name: "sync",
      value: "enabled",
    });
    expect(event.bubbles).toBe(true);
    expect(event.composed).toBe(true);
  });

  it("forwards semantic fields and description content", async () => {
    const element = await mountSwitch("消息提醒");
    element.required = true;
    element.name = "notifications";
    element.value = "daily";
    const description = document.createElement("span");
    description.slot = "description";
    description.textContent = "开启后接收每日摘要";
    element.append(description);
    await element.updateComplete;

    const input = element.shadowRoot?.querySelector<HTMLInputElement>("input");
    expect(input).toMatchObject({
      required: true,
      name: "notifications",
      value: "daily",
    });
    expect(input?.getAttribute("aria-checked")).toBe("false");
    expect(input?.getAttribute("aria-describedby")).toContain(
      "super-switch-description",
    );
    expect(input?.getAttribute("aria-labelledby")).toBe("super-switch-label");
    expect(element.shadowRoot?.querySelector('[part="description"]'))
      .not.toBeNull();
  });

  it("supports consumer-provided state labels and thumb icons", async () => {
    const element = await mountSwitch("");
    const checkedLabel = document.createElement("span");
    checkedLabel.slot = "checked-label";
    checkedLabel.textContent = "开启";
    const uncheckedLabel = document.createElement("span");
    uncheckedLabel.slot = "unchecked-label";
    uncheckedLabel.textContent = "关闭";
    const checkedIcon = document.createElement("span");
    checkedIcon.slot = "checked-icon";
    checkedIcon.textContent = "✓";
    const uncheckedIcon = document.createElement("span");
    uncheckedIcon.slot = "unchecked-icon";
    uncheckedIcon.textContent = "×";
    element.append(checkedLabel, uncheckedLabel, checkedIcon, uncheckedIcon);
    await element.updateComplete;

    const assigned = Array.from(
      element.shadowRoot?.querySelectorAll<HTMLSlotElement>("slot") ?? [],
    ).flatMap((slot) => slot.assignedElements());
    expect(assigned).toEqual([
      uncheckedIcon,
      checkedIcon,
      uncheckedLabel,
      checkedLabel,
    ]);
  });

  it("blocks disabled interaction before and after rendering", async () => {
    defineSuperSwitch();
    const element = document.createElement(SUPER_SWITCH_TAG);
    const onChange = vi.fn();
    element.disabled = true;
    element.addEventListener("super-switch-change", onChange);
    document.body.append(element);

    element.click();
    await element.updateComplete;
    element.click();

    expect(element.checked).toBe(false);
    expect(onChange).not.toHaveBeenCalled();
    expect(element.shadowRoot?.querySelector("input")?.disabled).toBe(true);
  });

  it("forwards switch role, accessible state, helper, focus and blur", async () => {
    const element = await mountSwitch("");
    element.setAttribute("aria-label", "自动同步");
    element.validation = "info";
    element.helperText = "开启后将自动同步";
    await element.updateComplete;

    const input = element.shadowRoot?.querySelector("input");
    const helper = element.shadowRoot?.querySelector('[part="helper"]');
    expect(input?.getAttribute("role")).toBe("switch");
    expect(input?.getAttribute("aria-label")).toBe("自动同步");
    expect(input?.hasAttribute("aria-labelledby")).toBe(false);
    expect(helper?.getAttribute("aria-live")).toBe("polite");

    element.focus();
    expect(element.shadowRoot?.activeElement).toBe(input);
    element.blur();
    expect(element.shadowRoot?.activeElement).toBeNull();
  });

  it("does not emit a user event for programmatic updates", async () => {
    const element = await mountSwitch();
    const onChange = vi.fn();
    element.addEventListener("super-switch-change", onChange);

    element.checked = true;
    await element.updateComplete;

    expect(onChange).not.toHaveBeenCalled();
    expect(element.shadowRoot?.querySelector("input")?.getAttribute("aria-checked"))
      .toBe("true");
  });
});
