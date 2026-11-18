import { afterEach, describe, expect, it } from "vitest";
import {
  defineSuperAvatar,
  SUPER_AVATAR_TAG,
  SuperAvatar,
} from "./index.js";

const mountAvatar = async (content?: string) => {
  defineSuperAvatar();
  const element = document.createElement(SUPER_AVATAR_TAG);
  if (content !== undefined) {
    element.textContent = content;
  }
  document.body.append(element);
  await element.updateComplete;
  return element;
};

afterEach(() => {
  document.body.replaceChildren();
});

describe("SuperAvatar", () => {
  it("registers the super-avatar tag idempotently", () => {
    expect(defineSuperAvatar()).toBe(SuperAvatar);
    expect(defineSuperAvatar()).toBe(SuperAvatar);
    expect(customElements.get(SUPER_AVATAR_TAG)).toBe(SuperAvatar);
  });

  it("provides stable defaults and reflects visual options", async () => {
    const element = await mountAvatar();

    expect(element.src).toBe("");
    expect(element.alt).toBe("");
    expect(element.size).toBe("medium");
    expect(element.shape).toBe("circle");
    expect(element.icon).toBe("人");
    expect(element.fallback).toBe("");

    element.src = "/avatar.png";
    element.alt = "张三";
    element.size = "large";
    element.shape = "square";
    element.icon = "张";
    element.fallback = "?";
    await element.updateComplete;

    expect(element.getAttribute("src")).toBe("/avatar.png");
    expect(element.getAttribute("alt")).toBe("张三");
    expect(element.getAttribute("size")).toBe("large");
    expect(element.getAttribute("shape")).toBe("square");
    expect(element.getAttribute("icon")).toBe("张");
    expect(element.getAttribute("fallback")).toBe("?");
  });

  it("renders the image with its public alt text", async () => {
    const element = await mountAvatar();
    element.src = "/avatar.png";
    element.alt = "张三";
    await element.updateComplete;

    const image = element.shadowRoot?.querySelector<HTMLImageElement>(
      '[part="image"]',
    );
    expect(image?.src).toContain("/avatar.png");
    expect(image?.alt).toBe("张三");
  });

  it("exposes the avatar and image parts", async () => {
    const element = await mountAvatar();
    element.src = "/avatar.png";
    await element.updateComplete;

    expect(element.shadowRoot?.querySelector('[part="avatar"]')).not.toBeNull();
    expect(element.shadowRoot?.querySelector('[part="image"]')).not.toBeNull();
  });

  it("switches size through the reflected attribute", async () => {
    const element = await mountAvatar();
    element.size = "small";
    await element.updateComplete;

    expect(element.getAttribute("size")).toBe("small");
  });

  it("shows the icon when no image is provided", async () => {
    const element = await mountAvatar();
    element.icon = "苏";
    await element.updateComplete;

    const fallback = element.shadowRoot?.querySelector('[part="fallback"]');
    expect(fallback?.textContent?.trim()).toBe("苏");
    expect(fallback?.hasAttribute("role")).toBe(false);
    expect(fallback?.hasAttribute("aria-label")).toBe(false);
  });

  it("falls back without throwing when the image fails", async () => {
    const element = await mountAvatar();
    element.src = "/missing.png";
    element.alt = "李四";
    element.icon = "李";
    element.fallback = "访";
    await element.updateComplete;

    const image = element.shadowRoot?.querySelector<HTMLImageElement>(
      '[part="image"]',
    );
    expect(() => image?.dispatchEvent(new Event("error"))).not.toThrow();
    await element.updateComplete;

    expect(element.shadowRoot?.querySelector('[part="image"]')).toBeNull();
    const fallback = element.shadowRoot?.querySelector('[part="fallback"]');
    expect(fallback?.textContent?.trim()).toBe("访");
    expect(fallback?.getAttribute("aria-label")).toBe("李四");
  });

  it("restores the image when src changes after a failure", async () => {
    const element = await mountAvatar();
    element.src = "/missing.png";
    await element.updateComplete;

    element.shadowRoot
      ?.querySelector('[part="image"]')
      ?.dispatchEvent(new Event("error"));
    await element.updateComplete;
    expect(element.shadowRoot?.querySelector('[part="image"]')).toBeNull();

    element.src = "/recovered.png";
    await element.updateComplete;
    expect(element.shadowRoot?.querySelector('[part="image"]')).not.toBeNull();
  });

  it("lets default slot content override the fallback text", async () => {
    const element = await mountAvatar("AB");
    const slot = element.shadowRoot?.querySelector<HTMLSlotElement>(
      "slot:not([name])",
    );

    expect(slot?.assignedNodes().map((node) => node.textContent).join(""))
      .toBe("AB");
  });
});
