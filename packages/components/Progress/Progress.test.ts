import { afterEach, describe, expect, it } from "vitest";
import {
  defineSuperProgress,
  SUPER_PROGRESS_TAG,
  SuperProgress,
} from "./index.js";

const mountProgress = async (content?: string) => {
  defineSuperProgress();
  const element = document.createElement(SUPER_PROGRESS_TAG);
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

describe("SuperProgress", () => {
  it("registers the super-progress tag idempotently", () => {
    expect(defineSuperProgress()).toBe(SuperProgress);
    expect(defineSuperProgress()).toBe(SuperProgress);
    expect(customElements.get(SUPER_PROGRESS_TAG)).toBe(SuperProgress);
  });

  it("provides stable defaults and reflects primitive options", async () => {
    const element = await mountProgress();

    expect(element.value).toBe(0);
    expect(element.max).toBe(100);
    expect(element.variant).toBe("line");
    expect(element.status).toBe("default");
    expect(element.size).toBe("medium");
    expect(element.showText).toBe(true);
    expect(element.indeterminate).toBe(false);
    expect(element.striped).toBe(false);

    element.value = 40;
    element.max = 80;
    element.variant = "circle";
    element.status = "danger";
    element.size = "large";
    element.showText = false;
    element.striped = true;
    await element.updateComplete;

    expect(element.getAttribute("value")).toBe("40");
    expect(element.getAttribute("max")).toBe("80");
    expect(element.getAttribute("variant")).toBe("circle");
    expect(element.getAttribute("status")).toBe("danger");
    expect(element.getAttribute("size")).toBe("large");
    expect(element.hasAttribute("show-text")).toBe(false);
    expect(element.hasAttribute("striped")).toBe(true);
  });

  it("exposes progressbar semantics with clamped values", async () => {
    const element = await mountProgress();
    element.value = 130;
    element.max = 200;
    await element.updateComplete;

    const progress = element.shadowRoot?.querySelector('[part="progress"]');
    expect(progress?.getAttribute("role")).toBe("progressbar");
    expect(progress?.getAttribute("aria-valuemin")).toBe("0");
    expect(progress?.getAttribute("aria-valuemax")).toBe("200");
    expect(progress?.getAttribute("aria-valuenow")).toBe("130");
    expect(progress?.getAttribute("aria-valuetext")).toBe("65%");

    element.value = -20;
    await element.updateComplete;

    expect(progress?.getAttribute("aria-valuenow")).toBe("0");
    expect(progress?.getAttribute("aria-valuetext")).toBe("0%");
  });

  it("drops aria-valuenow while indeterminate", async () => {
    const element = await mountProgress();
    element.value = 30;
    element.indeterminate = true;
    await element.updateComplete;

    const progress = element.shadowRoot?.querySelector('[part="progress"]');
    expect(progress?.hasAttribute("aria-valuenow")).toBe(false);
    expect(progress?.hasAttribute("aria-valuetext")).toBe(false);
    expect(element.shadowRoot?.querySelector('[part="bar"]')).not.toBeNull();
    expect(
      element.shadowRoot?.querySelector('[part="text"]')?.textContent?.trim(),
    ).toBe("");
  });

  it("renders the default slot over the built-in label", async () => {
    const element = await mountProgress("已上传 4 / 10");
    const text = element.shadowRoot?.querySelector('[part="text"]');
    const slot = element.shadowRoot?.querySelector<HTMLSlotElement>(
      "slot:not([name])",
    );

    expect(slot?.assignedNodes().map((node) => node.textContent).join(""))
      .toBe("已上传 4 / 10");
    expect(text).not.toBeNull();
  });

  it("uses slotted text as the accessible value text", async () => {
    const element = await mountProgress("已上传 4 / 10");
    const progress = element.shadowRoot?.querySelector('[part="progress"]');

    expect(progress?.getAttribute("aria-valuetext")).toBe("已上传 4 / 10");
  });

  it("uses the computed percentage as the fallback label", async () => {
    const element = await mountProgress();
    element.value = 45;
    await element.updateComplete;

    expect(
      element.shadowRoot?.querySelector('[part="text"]')?.textContent,
    ).toContain("45%");
  });

  it("formats the accessible value through the format property", async () => {
    const element = await mountProgress();
    element.value = 3;
    element.max = 8;
    element.format = (value, max) => `${value} / ${max} 项`;
    await element.updateComplete;

    const progress = element.shadowRoot?.querySelector('[part="progress"]');
    expect(progress?.getAttribute("aria-valuetext")).toBe("3 / 8 项");
    expect(element.shadowRoot?.querySelector('[part="text"]')?.textContent)
      .toContain("3 / 8 项");
  });

  it("exposes track, bar and text parts for the line variant", async () => {
    const element = await mountProgress();
    element.value = 25;
    await element.updateComplete;

    const track = element.shadowRoot?.querySelector('[part="track"]');
    const bar = element.shadowRoot?.querySelector<HTMLElement>('[part="bar"]');

    expect(track).not.toBeNull();
    expect(bar?.style.inlineSize).toBe("25%");
    expect(element.shadowRoot?.querySelector('[part="text"]')).not.toBeNull();
  });

  it("draws the circle variant with stroke offsets", async () => {
    const element = await mountProgress();
    element.variant = "circle";
    element.value = 50;
    await element.updateComplete;

    const circle = element.shadowRoot?.querySelector('[part="circle"]');
    const bar = element.shadowRoot?.querySelector('[part="circle-bar"]');
    const offset = Number(bar?.getAttribute("stroke-dashoffset"));

    expect(circle?.getAttribute("aria-hidden")).toBe("true");
    expect(circle?.getAttribute("viewBox")).toBe("0 0 100 100");
    expect(offset).toBeGreaterThan(0);
    expect(offset).toBeCloseTo(Math.PI * 42, 1);
  });

  it("hides the text block when show-text is false", async () => {
    const element = await mountProgress();
    element.showText = false;
    await element.updateComplete;

    expect(element.shadowRoot?.querySelector('[part="text"]')).toBeNull();
  });

  it("forwards aria-label to the progressbar", async () => {
    const element = await mountProgress();
    element.setAttribute("aria-label", "上传进度");
    await element.updateComplete;

    expect(element.accessibleLabel).toBe("上传进度");
    expect(
      element.shadowRoot?.querySelector('[part="progress"]')?.getAttribute("aria-label"),
    ).toBe("上传进度");
  });
});
