import { afterEach, describe, expect, it, vi } from "vitest";
import {
  defineSuperRadio,
  SUPER_RADIO_TAG,
  SuperRadio,
} from "./index.js";

const mountRadio = async (content = "选项") => {
  defineSuperRadio();
  const element = document.createElement(SUPER_RADIO_TAG);
  element.textContent = content;
  document.body.append(element);
  await element.updateComplete;
  return element;
};

afterEach(() => {
  document.body.replaceChildren();
});

describe("SuperRadio", () => {
  it("registers the super-radio tag idempotently", () => {
    expect(defineSuperRadio()).toBe(SuperRadio);
    expect(defineSuperRadio()).toBe(SuperRadio);
    expect(customElements.get(SUPER_RADIO_TAG)).toBe(SuperRadio);
  });

  it("renders slotted labels and reflects public state", async () => {
    const element = await mountRadio("支付宝");
    const slot = element.shadowRoot?.querySelector<HTMLSlotElement>(
      "slot:not([name])",
    );

    expect(element.checked).toBe(false);
    expect(element.variant).toBe("default");
    expect(element.size).toBe("medium");
    expect(element.validation).toBe("none");
    expect(slot?.assignedNodes().map((node) => node.textContent).join(""))
      .toBe("支付宝");

    element.checked = true;
    element.size = "small";
    await element.updateComplete;
    expect(element.getAttribute("checked")).toBe("");
    expect(element.getAttribute("size")).toBe("small");
  });

  it("coordinates same-name radios and emits a composed change event", async () => {
    const first = await mountRadio("微信");
    const second = await mountRadio("支付宝");
    first.name = "payment";
    second.name = "payment";
    first.value = "wechat";
    second.value = "alipay";
    first.checked = true;
    const onChange = vi.fn();
    second.addEventListener("super-radio-change", onChange);
    await Promise.all([first.updateComplete, second.updateComplete]);

    const firstInput = first.shadowRoot?.querySelector<HTMLInputElement>("input");
    const secondInput = second.shadowRoot?.querySelector<HTMLInputElement>("input");
    expect(firstInput?.tabIndex).toBe(0);
    expect(secondInput?.tabIndex).toBe(-1);

    second.click();
    await Promise.all([first.updateComplete, second.updateComplete]);

    expect(first.checked).toBe(false);
    expect(second.checked).toBe(true);
    expect(first.shadowRoot?.querySelector<HTMLInputElement>("input")?.tabIndex)
      .toBe(-1);
    expect(second.shadowRoot?.querySelector<HTMLInputElement>("input")?.tabIndex)
      .toBe(0);
    expect(onChange).toHaveBeenCalledTimes(1);
    const event = onChange.mock.calls[0]?.[0];
    expect(event.detail).toMatchObject({
      checked: true,
      value: "alipay",
      name: "payment",
    });
    expect(event.bubbles).toBe(true);
    expect(event.composed).toBe(true);
  });

  it("supports button and card variants with semantic fields and slots", async () => {
    const element = await mountRadio("高级版");
    element.variant = "card";
    element.required = true;
    element.name = "plan";
    element.value = "pro";

    const icon = document.createElement("span");
    icon.slot = "icon";
    icon.textContent = "♕";
    const description = document.createElement("span");
    description.slot = "description";
    description.textContent = "更多功能";
    element.append(icon, description);
    await element.updateComplete;

    const input = element.shadowRoot?.querySelector<HTMLInputElement>("input");
    expect(input).toMatchObject({ required: true, name: "plan", value: "pro" });
    expect(element.getAttribute("variant")).toBe("card");
    expect(element.shadowRoot?.querySelector('[part="dot"]')).not.toBeNull();
    expect(input?.getAttribute("aria-describedby")).toContain(
      "super-radio-description",
    );
    expect(input?.getAttribute("aria-labelledby")).toBe("super-radio-label");

    element.variant = "button";
    await element.updateComplete;
    expect(element.getAttribute("variant")).toBe("button");
  });

  it("keeps same-name radios in different forms independent", async () => {
    defineSuperRadio();
    const firstForm = document.createElement("form");
    const secondForm = document.createElement("form");
    const first = document.createElement(SUPER_RADIO_TAG);
    const second = document.createElement(SUPER_RADIO_TAG);
    first.name = "plan";
    second.name = "plan";
    firstForm.append(first);
    secondForm.append(second);
    document.body.append(firstForm, secondForm);
    await Promise.all([first.updateComplete, second.updateComplete]);

    first.click();
    second.click();
    await Promise.all([first.updateComplete, second.updateComplete]);

    expect(first.checked).toBe(true);
    expect(second.checked).toBe(true);
  });

  it("reconciles checked state when moved into a same-name form group", async () => {
    defineSuperRadio();
    const firstForm = document.createElement("form");
    const secondForm = document.createElement("form");
    const first = document.createElement(SUPER_RADIO_TAG);
    const second = document.createElement(SUPER_RADIO_TAG);
    first.name = "plan";
    second.name = "plan";
    first.checked = true;
    second.checked = true;
    const onChange = vi.fn();
    first.addEventListener("super-radio-change", onChange);
    second.addEventListener("super-radio-change", onChange);
    firstForm.append(first);
    secondForm.append(second);
    document.body.append(firstForm, secondForm);
    await Promise.all([first.updateComplete, second.updateComplete]);

    firstForm.append(second);
    expect([first.checked, second.checked]).toEqual([false, true]);
    await Promise.resolve();
    await Promise.all([first.updateComplete, second.updateComplete]);

    expect(first.checked).toBe(false);
    expect(second.checked).toBe(true);
    expect(first.shadowRoot?.querySelector<HTMLInputElement>("input")?.tabIndex)
      .toBe(-1);
    expect(second.shadowRoot?.querySelector<HTMLInputElement>("input")?.tabIndex)
      .toBe(0);
    expect(onChange).not.toHaveBeenCalled();
  });

  it("reconciles checked state when reconnected to a same-name shadow root", async () => {
    defineSuperRadio();
    const firstHost = document.createElement("div");
    const secondHost = document.createElement("div");
    const firstRoot = firstHost.attachShadow({ mode: "open" });
    const secondRoot = secondHost.attachShadow({ mode: "open" });
    const first = document.createElement(SUPER_RADIO_TAG);
    const second = document.createElement(SUPER_RADIO_TAG);
    first.name = "plan";
    second.name = "plan";
    first.checked = true;
    second.checked = true;
    firstRoot.append(first);
    secondRoot.append(second);
    document.body.append(firstHost, secondHost);
    await Promise.all([first.updateComplete, second.updateComplete]);

    firstRoot.append(second);
    expect([first.checked, second.checked]).toEqual([false, true]);
    await Promise.resolve();
    await Promise.all([first.updateComplete, second.updateComplete]);

    expect(first.checked).toBe(false);
    expect(second.checked).toBe(true);
    expect(first.shadowRoot?.querySelector<HTMLInputElement>("input")?.tabIndex)
      .toBe(-1);
    expect(second.shadowRoot?.querySelector<HTMLInputElement>("input")?.tabIndex)
      .toBe(0);
  });

  it("reassigns the tab stop when the selected radio is removed", async () => {
    const first = await mountRadio("A");
    const second = await mountRadio("B");
    first.name = "letters";
    second.name = "letters";
    first.checked = true;
    await Promise.all([first.updateComplete, second.updateComplete]);

    first.remove();
    await Promise.resolve();
    await second.updateComplete;

    expect(second.shadowRoot?.querySelector<HTMLInputElement>("input")?.tabIndex)
      .toBe(0);
  });

  it("does not emit change when selection is updated programmatically", async () => {
    const element = await mountRadio();
    const onChange = vi.fn();
    element.addEventListener("super-radio-change", onChange);

    element.checked = true;
    await element.updateComplete;

    expect(onChange).not.toHaveBeenCalled();
  });

  it("loops arrow navigation and skips disabled radios", async () => {
    const first = await mountRadio("A");
    const second = await mountRadio("B");
    const third = await mountRadio("C");
    [first, second, third].forEach((radio) => {
      radio.name = "letters";
    });
    first.checked = true;
    second.disabled = true;
    const onChange = vi.fn();
    third.addEventListener("super-radio-change", onChange);
    await Promise.all([
      first.updateComplete,
      second.updateComplete,
      third.updateComplete,
    ]);

    const input = first.shadowRoot?.querySelector("input");
    input?.dispatchEvent(new KeyboardEvent("keydown", {
      key: "ArrowRight",
      bubbles: true,
    }));
    await Promise.all([
      first.updateComplete,
      second.updateComplete,
      third.updateComplete,
    ]);

    expect(first.checked).toBe(false);
    expect(second.checked).toBe(false);
    expect(third.checked).toBe(true);
    expect(third.shadowRoot?.activeElement).toBe(
      third.shadowRoot?.querySelector("input"),
    );
    expect(onChange).toHaveBeenCalledTimes(1);

    third.shadowRoot?.querySelector("input")?.dispatchEvent(
      new KeyboardEvent("keydown", { key: "ArrowRight", bubbles: true }),
    );
    await Promise.all([first.updateComplete, third.updateComplete]);

    expect(first.checked).toBe(true);
    expect(third.checked).toBe(false);
    expect(first.shadowRoot?.activeElement).toBe(
      first.shadowRoot?.querySelector("input"),
    );
  });

  it("does not select a disabled radio", async () => {
    const element = await mountRadio();
    const onChange = vi.fn();
    element.disabled = true;
    element.addEventListener("super-radio-change", onChange);
    await element.updateComplete;

    element.click();

    expect(element.checked).toBe(false);
    expect(onChange).not.toHaveBeenCalled();
  });

  it("forwards accessible state, validation helper, focus and blur", async () => {
    const element = await mountRadio("");
    element.setAttribute("aria-label", "银行卡");
    element.validation = "error";
    element.helperText = "请选择支付方式";
    await element.updateComplete;

    const input = element.shadowRoot?.querySelector("input");
    const helper = element.shadowRoot?.querySelector('[part="helper"]');
    expect(input?.getAttribute("aria-label")).toBe("银行卡");
    expect(input?.hasAttribute("aria-labelledby")).toBe(false);
    expect(input?.getAttribute("aria-invalid")).toBe("true");
    expect(helper?.getAttribute("role")).toBe("alert");

    element.focus();
    expect(element.shadowRoot?.activeElement).toBe(input);
    element.blur();
    expect(element.shadowRoot?.activeElement).toBeNull();
  });
});
