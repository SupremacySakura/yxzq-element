import { afterEach, describe, expect, it } from "vitest";
import {
  defineSuperSkeleton,
  SUPER_SKELETON_TAG,
  SuperSkeleton,
} from "./index.js";

const mountSkeleton = async (content?: string) => {
  defineSuperSkeleton();
  const element = document.createElement(SUPER_SKELETON_TAG);
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

describe("SuperSkeleton", () => {
  it("registers the super-skeleton tag idempotently", () => {
    expect(defineSuperSkeleton()).toBe(SuperSkeleton);
    expect(defineSuperSkeleton()).toBe(SuperSkeleton);
    expect(customElements.get(SUPER_SKELETON_TAG)).toBe(SuperSkeleton);
  });

  it("provides stable defaults and reflects primitive options", async () => {
    const element = await mountSkeleton();

    expect(element.variant).toBe("text");
    expect(element.rows).toBe(1);
    expect(element.animated).toBe(true);
    expect(element.loading).toBe(true);
    expect(element.loadingLabel).toBe("内容加载中");

    element.variant = "circle";
    element.rows = 3;
    element.animated = false;
    element.loading = false;
    await element.updateComplete;

    expect(element.getAttribute("variant")).toBe("circle");
    expect(element.getAttribute("rows")).toBe("3");
    expect(element.hasAttribute("animated")).toBe(false);
    expect(element.hasAttribute("loading")).toBe(false);
  });

  it("renders an animated placeholder hidden from assistive tech", async () => {
    const element = await mountSkeleton();
    const placeholder = element.shadowRoot?.querySelector<HTMLElement>(
      '[part="placeholder"]',
    );

    expect(placeholder?.getAttribute("aria-busy")).toBe("true");
    expect(placeholder?.getAttribute("aria-hidden")).toBe("true");
    expect(element.shadowRoot?.querySelectorAll('[part="row"]').length).toBe(1);
  });

  it("announces loading through a polite live region", async () => {
    const element = await mountSkeleton();
    const skeleton = element.shadowRoot?.querySelector<HTMLElement>(
      '[part="skeleton"]',
    );

    expect(skeleton?.getAttribute("aria-live")).toBe("polite");
    expect(skeleton?.textContent).toContain("内容加载中");

    element.loadingLabel = "正在加载文章";
    await element.updateComplete;
    expect(skeleton?.textContent).toContain("正在加载文章");
  });

  it("renders the requested number of text rows", async () => {
    const element = await mountSkeleton();
    element.rows = 4;
    await element.updateComplete;

    expect(element.shadowRoot?.querySelectorAll('[part="row"]').length).toBe(4);

    element.rows = 0;
    await element.updateComplete;
    expect(element.shadowRoot?.querySelectorAll('[part="row"]').length).toBe(1);
  });

  it("renders a single row for rect and circle variants", async () => {
    const element = await mountSkeleton();
    element.rows = 5;

    for (const variant of ["rect", "circle"] as const) {
      element.variant = variant;
      await element.updateComplete;

      const rows = element.shadowRoot?.querySelectorAll('[part="row"]');
      expect(rows?.length, variant).toBe(1);
      expect(rows?.[0]?.classList.contains(variant)).toBe(true);
    }
  });

  it("applies the width and height properties to the skeleton container", async () => {
    const element = await mountSkeleton();
    element.width = "320px";
    element.height = "72px";
    await element.updateComplete;

    const skeleton = element.shadowRoot?.querySelector<HTMLElement>(
      '[part="skeleton"]',
    );

    expect(skeleton?.style.inlineSize).toBe("320px");
    expect(skeleton?.style.blockSize).toBe("72px");
    expect(element.getAttribute("width")).toBe("320px");
    expect(element.getAttribute("height")).toBe("72px");
  });

  it("swaps the placeholder for slotted content when loading is false", async () => {
    const element = await mountSkeleton("真实内容");
    element.loading = false;
    await element.updateComplete;

    expect(element.shadowRoot?.querySelector('[part="placeholder"]')).toBeNull();

    const slot = element.shadowRoot?.querySelector<HTMLSlotElement>(
      "slot:not([name])",
    );
    expect(slot?.assignedNodes().map((node) => node.textContent).join(""))
      .toBe("真实内容");
    expect(
      element.shadowRoot?.querySelector<HTMLElement>('[part="skeleton"]')
        ?.textContent?.trim(),
    ).toBe("");
  });

  it("exposes the documented parts", async () => {
    const element = await mountSkeleton();

    for (const part of ["skeleton", "placeholder", "row"]) {
      expect(
        element.shadowRoot?.querySelector(`[part="${part}"]`),
        part,
      ).not.toBeNull();
    }

    element.loading = false;
    await element.updateComplete;
    expect(element.shadowRoot?.querySelector('[part="content"]')).not.toBeNull();
  });
});
