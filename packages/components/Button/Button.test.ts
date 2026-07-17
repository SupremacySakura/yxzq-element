import { afterEach, describe, expect, it, vi } from "vitest";
import {
  defineSuperButton,
  SUPER_BUTTON_TAG,
  SuperButton,
} from "./index.js";

const mountButton = async (content = "自定义按钮") => {
  defineSuperButton();
  const element = document.createElement(SUPER_BUTTON_TAG);
  element.textContent = content;
  document.body.append(element);
  await element.updateComplete;
  return element;
};

afterEach(() => {
  document.body.replaceChildren();
});

describe("SuperButton", () => {
  it("registers the super-button tag idempotently", () => {
    expect(defineSuperButton()).toBe(SuperButton);
    expect(defineSuperButton()).toBe(SuperButton);
    expect(customElements.get(SUPER_BUTTON_TAG)).toBe(SuperButton);
  });

  it("renders consumer content through its default slot", async () => {
    const element = await mountButton();
    const button = element.shadowRoot?.querySelector("button");
    const slot = element.shadowRoot?.querySelector<HTMLSlotElement>(
      "slot:not([name])",
    );

    expect(button?.getAttribute("part")).toBe("button");
    expect(button?.getAttribute("type")).toBe("button");
    expect(slot?.assignedNodes().map((node) => node.textContent).join(""))
      .toBe("自定义按钮");
  });

  it("provides stable defaults and reflects visual options", async () => {
    const element = await mountButton();

    expect(element.variant).toBe("primary");
    expect(element.size).toBe("medium");
    expect(element.shape).toBe("default");

    element.variant = "success";
    element.size = "large";
    element.shape = "pill";
    await element.updateComplete;

    expect(element.getAttribute("variant")).toBe("success");
    expect(element.getAttribute("size")).toBe("large");
    expect(element.getAttribute("shape")).toBe("pill");
  });

  it("supports prefix and suffix icon slots", async () => {
    const element = await mountButton();
    const prefix = document.createElement("span");
    prefix.slot = "prefix";
    prefix.textContent = "☆";
    const suffix = document.createElement("span");
    suffix.slot = "suffix";
    suffix.textContent = "→";
    element.append(prefix, suffix);
    await element.updateComplete;

    const prefixSlot = element.shadowRoot?.querySelector<HTMLSlotElement>(
      'slot[name="prefix"]',
    );
    const suffixSlot = element.shadowRoot?.querySelector<HTMLSlotElement>(
      'slot[name="suffix"]',
    );

    expect(prefixSlot?.assignedElements()).toEqual([prefix]);
    expect(suffixSlot?.assignedElements()).toEqual([suffix]);
  });

  it("disables interaction while disabled or loading", async () => {
    const element = await mountButton();
    const onClick = vi.fn();
    element.addEventListener("click", onClick);

    element.click();
    expect(onClick).toHaveBeenCalledTimes(1);

    element.disabled = true;
    await element.updateComplete;
    element.click();
    expect(onClick).toHaveBeenCalledTimes(1);

    element.disabled = false;
    element.loading = true;
    element.loadingText = "提交中...";
    await element.updateComplete;
    element.click();

    const button = element.shadowRoot?.querySelector("button");
    const spinner = element.shadowRoot?.querySelector('[part="spinner"]');
    const label = element.shadowRoot?.querySelector('[part="label"]');

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(button?.disabled).toBe(true);
    expect(button?.getAttribute("aria-busy")).toBe("true");
    expect(spinner).not.toBeNull();
    expect(label?.textContent).toBe("提交中...");
  });

  it("forwards an accessible label to the internal button", async () => {
    const element = await mountButton("");
    element.accessibleLabel = "收藏";
    element.shape = "square";
    await element.updateComplete;

    const button = element.shadowRoot?.querySelector("button");
    expect(button?.getAttribute("aria-label")).toBe("收藏");
  });
});
