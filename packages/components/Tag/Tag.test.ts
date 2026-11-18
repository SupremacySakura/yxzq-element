import { afterEach, describe, expect, it, vi } from "vitest";
import { defineSuperTag, SUPER_TAG_TAG, SuperTag } from "./index.js";

const mountTag = async (content = "手绘标签") => {
  defineSuperTag();
  const element = document.createElement(SUPER_TAG_TAG);
  element.textContent = content;
  document.body.append(element);
  await element.updateComplete;
  return element;
};

afterEach(() => {
  document.body.replaceChildren();
});

describe("SuperTag", () => {
  it("registers the super-tag tag idempotently", () => {
    expect(defineSuperTag()).toBe(SuperTag);
    expect(defineSuperTag()).toBe(SuperTag);
    expect(customElements.get(SUPER_TAG_TAG)).toBe(SuperTag);
  });

  it("provides stable defaults and reflects visual options", async () => {
    const element = await mountTag();

    expect(element.variant).toBe("default");
    expect(element.size).toBe("medium");
    expect(element.closable).toBe(false);
    expect(element.value).toBe("");
    expect(element.closeLabel).toBe("移除标签");

    element.variant = "danger";
    element.size = "large";
    element.closable = true;
    await element.updateComplete;

    expect(element.getAttribute("variant")).toBe("danger");
    expect(element.getAttribute("size")).toBe("large");
    expect(element.hasAttribute("closable")).toBe(true);
  });

  it("renders consumer content through its default slot", async () => {
    const element = await mountTag("前端");
    const slot = element.shadowRoot?.querySelector<HTMLSlotElement>(
      "slot:not([name])",
    );

    expect(slot?.assignedNodes().map((node) => node.textContent).join(""))
      .toBe("前端");
  });

  it("exposes the tag and label parts", async () => {
    const element = await mountTag();
    const tag = element.shadowRoot?.querySelector('[part="tag"]');
    const label = element.shadowRoot?.querySelector('[part="label"]');

    expect(tag).not.toBeNull();
    expect(label).not.toBeNull();
  });

  it("switches size through the reflected attribute", async () => {
    const element = await mountTag();

    element.size = "small";
    await element.updateComplete;

    expect(element.getAttribute("size")).toBe("small");
  });

  it("dispatches a composed close event with the public value", async () => {
    const element = await mountTag();
    element.value = "frontend";
    element.closable = true;
    await element.updateComplete;

    const onClose = vi.fn();
    document.body.addEventListener("super-tag-close", onClose);
    const close = element.shadowRoot?.querySelector<HTMLButtonElement>(
      '[part="close"]',
    );
    close?.click();

    expect(onClose).toHaveBeenCalledTimes(1);
    const event = onClose.mock.calls[0]?.[0] as CustomEvent<{ value: string }>;
    expect(event.bubbles).toBe(true);
    expect(event.composed).toBe(true);
    expect(event.detail).toEqual({ value: "frontend" });
  });

  it("does not render close controls unless closable", async () => {
    const element = await mountTag();
    expect(element.shadowRoot?.querySelector('[part="close"]')).toBeNull();

    element.closable = true;
    await element.updateComplete;
    expect(element.shadowRoot?.querySelector('[part="close"]')).not.toBeNull();
  });

  it("uses a localizable accessible name for the close button", async () => {
    const element = await mountTag();
    element.closable = true;
    element.closeLabel = "删除此标签";
    await element.updateComplete;

    const close = element.shadowRoot?.querySelector('[part="close"]');
    expect(close?.getAttribute("aria-label")).toBe("删除此标签");
    expect(close?.getAttribute("type")).toBe("button");
  });

  it("keeps the close control keyboard-focusable and semantically a button", async () => {
    const element = await mountTag();
    element.closable = true;
    await element.updateComplete;

    const close = element.shadowRoot?.querySelector<HTMLButtonElement>(
      '[part="close"]',
    );

    close?.focus();
    expect(element.shadowRoot?.activeElement).toBe(close);
    expect(close?.tagName).toBe("BUTTON");
    expect(close?.getAttribute("aria-label")).toBe("移除标签");
  });
});
