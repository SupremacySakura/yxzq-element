import { afterEach, describe, expect, it } from "vitest";
import { defineSuperEmpty, SUPER_EMPTY_TAG, SuperEmpty } from "./index.js";

const mountEmpty = async (content?: string) => {
  defineSuperEmpty();
  const element = document.createElement(SUPER_EMPTY_TAG);
  if (content) {
    element.textContent = content;
  }
  document.body.append(element);
  await element.updateComplete;
  return element;
};

afterEach(() => {
  document.body.replaceChildren();
});

describe("SuperEmpty", () => {
  it("registers the super-empty tag idempotently", () => {
    expect(defineSuperEmpty()).toBe(SuperEmpty);
    expect(defineSuperEmpty()).toBe(SuperEmpty);
    expect(customElements.get(SUPER_EMPTY_TAG)).toBe(SuperEmpty);
  });

  it("provides stable defaults and reflects primitive options", async () => {
    const element = await mountEmpty();

    expect(element.description).toBe("暂无数据");
    expect(element.size).toBe("medium");
    expect(element.image).toBe("");

    element.description = "还没有收藏";
    element.size = "small";
    element.image = "https://example.com/empty.svg";
    await element.updateComplete;

    expect(element.getAttribute("description")).toBe("还没有收藏");
    expect(element.getAttribute("size")).toBe("small");
    expect(element.getAttribute("image")).toBe(
      "https://example.com/empty.svg",
    );
  });

  it("announces the empty state through role=status", async () => {
    const element = await mountEmpty();
    const empty = element.shadowRoot?.querySelector('[part="empty"]');

    expect(empty?.getAttribute("role")).toBe("status");
    expect(
      element.shadowRoot?.querySelector('[part="illustration"]')
        ?.getAttribute("aria-hidden"),
    ).toBe("true");
  });

  it("renders the description attribute as text", async () => {
    const element = await mountEmpty();
    expect(
      element.shadowRoot?.querySelector('[part="description"]')?.textContent,
    ).toContain("暂无数据");

    element.description = "这里空空如也";
    await element.updateComplete;

    expect(
      element.shadowRoot?.querySelector('[part="description"]')?.textContent,
    ).toContain("这里空空如也");
  });

  it("prefers the image attribute over the custom illustration slot", async () => {
    const element = await mountEmpty();
    const custom = document.createElement("span");
    custom.textContent = "自定义插画";
    element.append(custom);
    element.image = "https://example.com/empty.png";
    await element.updateComplete;

    const image = element.shadowRoot?.querySelector<HTMLImageElement>(
      '[part="image"]',
    );

    expect(image?.getAttribute("src")).toBe(
      "https://example.com/empty.png",
    );
    expect(image?.getAttribute("alt")).toBe("");
    expect(element.shadowRoot?.querySelector("slot:not([name])")).toBeNull();
  });

  it("uses the default slot as the custom illustration", async () => {
    const element = await mountEmpty();
    const custom = document.createElement("span");
    custom.textContent = "自定义插画";
    element.append(custom);
    await element.updateComplete;

    const slot = element.shadowRoot?.querySelector<HTMLSlotElement>(
      "slot:not([name])",
    );
    expect(slot?.assignedElements()).toEqual([custom]);
  });

  it("reveals the action slot only when it has content", async () => {
    const element = await mountEmpty();
    const action = element.shadowRoot?.querySelector<HTMLElement>(
      '[part="action"]',
    );
    expect(action?.hidden).toBe(true);

    const button = document.createElement("button");
    button.slot = "action";
    button.textContent = "去逛逛";
    element.append(button);
    await element.updateComplete;
    await element.updateComplete;

    const slot = element.shadowRoot?.querySelector<HTMLSlotElement>(
      'slot[name="action"]',
    );
    expect(slot?.assignedElements()).toEqual([button]);
    expect(action?.hidden).toBe(false);
  });

  it("exposes the documented parts", async () => {
    const element = await mountEmpty();

    for (const part of ["empty", "illustration", "description", "action"]) {
      expect(
        element.shadowRoot?.querySelector(`[part="${part}"]`),
        part,
      ).not.toBeNull();
    }
  });
});
