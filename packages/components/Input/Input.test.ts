import { afterEach, describe, expect, it, vi } from "vitest";
import {
  defineSuperInput,
  SUPER_INPUT_TAG,
  SuperInput,
} from "./index.js";

const mountInput = async () => {
  defineSuperInput();
  const element = document.createElement(SUPER_INPUT_TAG);
  document.body.append(element);
  await element.updateComplete;
  return element;
};

const getInput = (element: SuperInput) =>
  element.shadowRoot?.querySelector<HTMLInputElement>("input");

afterEach(() => {
  document.body.replaceChildren();
});

describe("SuperInput", () => {
  it("registers the super-input tag idempotently", () => {
    expect(defineSuperInput()).toBe(SuperInput);
    expect(defineSuperInput()).toBe(SuperInput);
    expect(customElements.get(SUPER_INPUT_TAG)).toBe(SuperInput);
  });

  it("provides stable defaults and reflects visual state", async () => {
    const element = await mountInput();

    expect(element.value).toBe("");
    expect(element.type).toBe("text");
    expect(element.size).toBe("medium");
    expect(element.validation).toBe("none");
    expect(element.clearLabel).toBe("清空输入");
    expect(element.decrementLabel).toBe("减少数值");
    expect(element.incrementLabel).toBe("增加数值");
    expect(element.passwordShowLabel).toBe("显示密码");
    expect(element.passwordHideLabel).toBe("隐藏密码");

    element.size = "large";
    element.validation = "success";
    await element.updateComplete;

    expect(element.getAttribute("size")).toBe("large");
    expect(element.getAttribute("validation")).toBe("success");
  });

  it("synchronizes typed values and emits a composed super-input event", async () => {
    const element = await mountInput();
    const onInput = vi.fn();
    element.addEventListener("super-input", onInput);
    const input = getInput(element);

    expect(input).toBeDefined();
    if (!input) return;

    input.value = "手绘输入";
    input.dispatchEvent(new InputEvent("input", { bubbles: true, composed: true }));

    expect(element.value).toBe("手绘输入");
    expect(onInput).toHaveBeenCalledTimes(1);
    const inputEvent = onInput.mock.calls[0]?.[0];
    expect(inputEvent.detail.value).toBe("手绘输入");
    expect(inputEvent.bubbles).toBe(true);
    expect(inputEvent.composed).toBe(true);
  });

  it("emits the public super-change contract with the current value", async () => {
    const element = await mountInput();
    const onChange = vi.fn();
    element.addEventListener("super-change", onChange);
    const input = getInput(element);

    expect(input).toBeDefined();
    if (!input) return;

    input.value = "已确认内容";
    input.dispatchEvent(new Event("change", { bubbles: true, composed: true }));

    expect(onChange).toHaveBeenCalledTimes(1);
    const changeEvent = onChange.mock.calls[0]?.[0];
    expect(changeEvent.detail.value).toBe("已确认内容");
    expect(changeEvent.detail.originalEvent.type).toBe("change");
    expect(changeEvent.bubbles).toBe(true);
    expect(changeEvent.composed).toBe(true);
  });

  it("clears editable content and reports the previous value", async () => {
    const element = await mountInput();
    element.value = "待清空";
    element.clearable = true;
    const onClear = vi.fn();
    element.addEventListener("super-clear", onClear);
    await element.updateComplete;

    const clearButton = element.shadowRoot?.querySelector<HTMLButtonElement>(
      '[part="clear-button"]',
    );
    clearButton?.click();
    await element.updateComplete;

    expect(element.value).toBe("");
    expect(getInput(element)?.value).toBe("");
    expect(onClear.mock.calls[0]?.[0].detail.previousValue).toBe("待清空");
  });

  it("toggles password visibility without changing its value", async () => {
    const element = await mountInput();
    const onVisibility = vi.fn();
    element.addEventListener("super-password-visibility", onVisibility);
    element.type = "password";
    element.revealable = true;
    element.value = "secret";
    await element.updateComplete;

    const toggle = element.shadowRoot?.querySelector<HTMLButtonElement>(
      '[part="password-toggle"]',
    );
    expect(getInput(element)?.type).toBe("password");

    toggle?.click();
    await element.updateComplete;

    expect(getInput(element)?.type).toBe("text");
    expect(element.value).toBe("secret");
    expect(onVisibility).toHaveBeenCalledTimes(1);
    const showEvent = onVisibility.mock.calls[0]?.[0];
    expect(showEvent.detail.visible).toBe(true);
    expect(showEvent.bubbles).toBe(true);
    expect(showEvent.composed).toBe(true);

    element.shadowRoot?.querySelector<HTMLButtonElement>(
      '[part="password-toggle"]',
    )?.click();
    await element.updateComplete;

    expect(getInput(element)?.type).toBe("password");
    expect(onVisibility).toHaveBeenCalledTimes(2);
    expect(onVisibility.mock.calls[1]?.[0].detail.visible).toBe(false);
  });

  it("renders multiline content, helper text and character count", async () => {
    const element = await mountInput();
    element.multiline = true;
    element.value = "四个字符";
    element.maxLength = 20;
    element.showCount = true;
    element.validation = "error";
    element.helperText = "请输入正确内容";
    await element.updateComplete;

    const textarea = element.shadowRoot?.querySelector("textarea");
    const helper = element.shadowRoot?.querySelector('[part="helper"]');
    const count = element.shadowRoot?.querySelector('[part="count"]');

    expect(textarea?.getAttribute("aria-invalid")).toBe("true");
    expect(helper?.getAttribute("role")).toBe("alert");
    expect(helper?.getAttribute("aria-live")).toBeNull();
    expect(helper?.textContent).toBe("请输入正确内容");
    expect(count?.textContent).toBe("4/20");

    element.validation = "info";
    await element.updateComplete;

    const infoHelper = element.shadowRoot?.querySelector('[part="helper"]');
    expect(infoHelper?.getAttribute("role")).toBeNull();
    expect(infoHelper?.getAttribute("aria-live")).toBe("polite");
  });

  it("supports prefix, suffix and action slots", async () => {
    const element = await mountInput();
    const prefix = document.createElement("span");
    prefix.slot = "prefix";
    prefix.textContent = "¥";
    const suffix = document.createElement("span");
    suffix.slot = "suffix";
    suffix.textContent = ".00";
    const action = document.createElement("button");
    action.slot = "action";
    action.textContent = "搜索";
    element.append(prefix, suffix, action);
    await element.updateComplete;

    const slots = element.shadowRoot?.querySelectorAll<HTMLSlotElement>("slot");
    const assigned = Array.from(slots ?? []).flatMap((slot) => slot.assignedElements());

    expect(assigned).toEqual([prefix, suffix, action]);
  });

  it("steps number values using the built-in hand-drawn controls", async () => {
    const element = await mountInput();
    element.type = "number";
    element.value = "2";
    element.step = "2";
    await element.updateComplete;

    const increment = element.shadowRoot?.querySelector<HTMLButtonElement>(
      ".step-button.increment",
    );
    increment?.click();
    await element.updateComplete;

    expect(element.value).toBe("4");
    expect(getInput(element)?.value).toBe("4");
  });

  it("allows consumers to localize every built-in action label", async () => {
    const element = await mountInput();
    element.type = "number";
    element.value = "1";
    element.clearable = true;
    element.clearLabel = "Clear value";
    element.decrementLabel = "Decrease value";
    element.incrementLabel = "Increase value";
    element.passwordShowLabel = "Show password";
    element.passwordHideLabel = "Hide password";
    await element.updateComplete;

    expect(
      element.shadowRoot?.querySelector(".step-button.decrement")
        ?.getAttribute("aria-label"),
    ).toBe("Decrease value");
    expect(
      element.shadowRoot?.querySelector(".step-button.increment")
        ?.getAttribute("aria-label"),
    ).toBe("Increase value");
    expect(
      element.shadowRoot?.querySelector('[part="clear-button"]')
        ?.getAttribute("aria-label"),
    ).toBe("Clear value");

    element.type = "password";
    element.revealable = true;
    await element.updateComplete;

    const passwordToggle = element.shadowRoot?.querySelector<HTMLButtonElement>(
      '[part="password-toggle"]',
    );
    expect(passwordToggle?.getAttribute("aria-label")).toBe("Show password");

    passwordToggle?.click();
    await element.updateComplete;
    expect(
      element.shadowRoot?.querySelector('[part="password-toggle"]')
        ?.getAttribute("aria-label"),
    ).toBe("Hide password");
  });

  it("forwards disabled, readonly, required and accessible attributes", async () => {
    const element = await mountInput();
    element.disabled = true;
    element.readOnly = true;
    element.required = true;
    element.accessibleLabel = "搜索关键词";
    await element.updateComplete;

    const input = getInput(element);
    expect(input?.disabled).toBe(true);
    expect(input?.readOnly).toBe(true);
    expect(input?.required).toBe(true);
    expect(input?.getAttribute("aria-label")).toBe("搜索关键词");
  });
});
