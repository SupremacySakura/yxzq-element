import { afterEach, describe, expect, it } from "vitest";
import {
  defineSuperButton,
  SUPER_BUTTON_TAG,
  SuperButton,
} from "./index.js";

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
    defineSuperButton();
    const element = document.createElement(SUPER_BUTTON_TAG);
    element.textContent = "自定义按钮";
    document.body.append(element);

    await element.updateComplete;

    const button = element.shadowRoot?.querySelector("button");
    const slot = element.shadowRoot?.querySelector("slot");

    expect(button?.getAttribute("part")).toBe("button");
    expect(slot?.assignedNodes().map((node) => node.textContent).join(""))
      .toBe("自定义按钮");
  });
});
