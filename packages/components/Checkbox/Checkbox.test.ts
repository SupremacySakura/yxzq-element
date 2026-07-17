import { afterEach, describe, expect, it, vi } from "vitest";
import {
  defineSuperCheckbox,
  SUPER_CHECKBOX_TAG,
  SuperCheckbox,
} from "./index.js";

const mountCheckbox = async (content = "选项") => {
  defineSuperCheckbox();
  const element = document.createElement(SUPER_CHECKBOX_TAG);
  element.textContent = content;
  document.body.append(element);
  await element.updateComplete;
  return element;
};

afterEach(() => {
  document.body.replaceChildren();
});

describe("SuperCheckbox", () => {
  it("registers the super-checkbox tag idempotently", () => {
    expect(defineSuperCheckbox()).toBe(SuperCheckbox);
    expect(defineSuperCheckbox()).toBe(SuperCheckbox);
    expect(customElements.get(SUPER_CHECKBOX_TAG)).toBe(SuperCheckbox);
  });

  it("renders slotted labels and reflects selection options", async () => {
    const element = await mountCheckbox("苹果");
    const slot = element.shadowRoot?.querySelector<HTMLSlotElement>(
      "slot:not([name])",
    );

    expect(element.checked).toBe(false);
    expect(element.indeterminate).toBe(false);
    expect(element.variant).toBe("default");
    expect(element.size).toBe("medium");
    expect(element.validation).toBe("none");
    expect(slot?.assignedNodes().map((node) => node.textContent).join(""))
      .toBe("苹果");

    element.checked = true;
    element.size = "large";
    await element.updateComplete;
    expect(element.getAttribute("checked")).toBe("");
    expect(element.getAttribute("size")).toBe("large");
  });

  it("clears indeterminate state and emits a composed change event", async () => {
    const element = await mountCheckbox();
    const onChange = vi.fn();
    element.indeterminate = true;
    element.name = "agreement";
    element.value = "accepted";
    element.addEventListener("super-checkbox-change", onChange);
    await element.updateComplete;

    expect(element.shadowRoot?.querySelector<HTMLInputElement>("input")
      ?.indeterminate).toBe(true);

    element.click();
    await element.updateComplete;

    expect(element.checked).toBe(true);
    expect(element.indeterminate).toBe(false);
    expect(onChange).toHaveBeenCalledTimes(1);
    const event = onChange.mock.calls[0]?.[0];
    expect(event.detail).toMatchObject({
      checked: true,
      indeterminate: false,
      name: "agreement",
      value: "accepted",
    });
    expect(event.bubbles).toBe(true);
    expect(event.composed).toBe(true);
  });

  it("supports card presentation, semantic fields and consumer slots", async () => {
    const element = await mountCheckbox("定期推送");
    element.variant = "card";
    element.required = true;
    element.name = "notifications";
    element.value = "digest";

    const icon = document.createElement("span");
    icon.slot = "icon";
    icon.textContent = "✉";
    const description = document.createElement("span");
    description.slot = "description";
    description.textContent = "每周发送一次摘要";
    element.append(icon, description);
    await element.updateComplete;

    const input = element.shadowRoot?.querySelector<HTMLInputElement>("input");
    const slots = Array.from(
      element.shadowRoot?.querySelectorAll<HTMLSlotElement>("slot") ?? [],
    );
    expect(input).toMatchObject({
      required: true,
      name: "notifications",
      value: "digest",
    });
    expect(element.getAttribute("variant")).toBe("card");
    expect(slots.flatMap((slot) => slot.assignedElements())).toContain(icon);
    expect(slots.flatMap((slot) => slot.assignedElements())).toContain(description);
    expect(element.shadowRoot?.querySelector('[part="mark"]')).not.toBeNull();
    expect(input?.getAttribute("aria-describedby")).toContain(
      "super-checkbox-description",
    );
    expect(input?.getAttribute("aria-labelledby")).toBe("super-checkbox-label");
  });

  it("does not emit a user change event for programmatic updates", async () => {
    const element = await mountCheckbox();
    const onChange = vi.fn();
    element.addEventListener("super-checkbox-change", onChange);

    element.checked = true;
    element.indeterminate = true;
    await element.updateComplete;

    expect(onChange).not.toHaveBeenCalled();
  });

  it("blocks disabled interaction before and after rendering", async () => {
    defineSuperCheckbox();
    const element = document.createElement(SUPER_CHECKBOX_TAG);
    const onChange = vi.fn();
    element.disabled = true;
    element.addEventListener("super-checkbox-change", onChange);
    document.body.append(element);

    element.click();
    await element.updateComplete;
    element.click();

    expect(element.checked).toBe(false);
    expect(onChange).not.toHaveBeenCalled();
    expect(element.shadowRoot?.querySelector("input")?.disabled).toBe(true);
  });

  it("forwards accessible state, helper semantics, focus and blur", async () => {
    const element = await mountCheckbox("");
    element.setAttribute("aria-label", "同意协议");
    element.validation = "error";
    element.helperText = "请先同意协议";
    await element.updateComplete;

    const input = element.shadowRoot?.querySelector("input");
    const helper = element.shadowRoot?.querySelector('[part="helper"]');
    expect(input?.getAttribute("aria-label")).toBe("同意协议");
    expect(input?.hasAttribute("aria-labelledby")).toBe(false);
    expect(input?.getAttribute("aria-invalid")).toBe("true");
    expect(helper?.getAttribute("role")).toBe("alert");
    expect(helper?.hasAttribute("aria-live")).toBe(false);

    element.focus();
    expect(element.shadowRoot?.activeElement).toBe(input);
    element.blur();
    expect(element.shadowRoot?.activeElement).toBeNull();
  });
});
