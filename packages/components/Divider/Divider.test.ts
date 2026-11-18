import { afterEach, describe, expect, it } from "vitest";
import {
  defineSuperDivider,
  SUPER_DIVIDER_TAG,
  SuperDivider,
} from "./index.js";

const mountDivider = async (content = "") => {
  defineSuperDivider();
  const element = document.createElement(SUPER_DIVIDER_TAG);
  element.textContent = content;
  document.body.append(element);
  await element.updateComplete;
  return element;
};

afterEach(() => {
  document.body.replaceChildren();
});

describe("SuperDivider", () => {
  it("registers the super-divider tag idempotently", () => {
    expect(defineSuperDivider()).toBe(SuperDivider);
    expect(defineSuperDivider()).toBe(SuperDivider);
    expect(customElements.get(SUPER_DIVIDER_TAG)).toBe(SuperDivider);
  });

  it("renders a horizontal semantic separator with exposed parts", async () => {
    const element = await mountDivider();
    const divider = element.shadowRoot?.querySelector('[part="divider"]');
    const lines = element.shadowRoot?.querySelectorAll('[part="line"]');

    expect(divider?.getAttribute("role")).toBe("separator");
    expect(divider?.getAttribute("aria-orientation")).toBe("horizontal");
    expect(lines).toHaveLength(2);
  });

  it("provides stable defaults and reflects visual options", async () => {
    const element = await mountDivider();

    expect(element.direction).toBe("horizontal");
    expect(element.contentPosition).toBe("center");
    expect(element.variant).toBe("solid");
    expect(element.color).toBe("");

    element.direction = "vertical";
    element.contentPosition = "left";
    element.variant = "hand-drawn";
    element.color = "#3b82f6";
    await element.updateComplete;

    expect(element.getAttribute("direction")).toBe("vertical");
    expect(element.getAttribute("content-position")).toBe("left");
    expect(element.getAttribute("variant")).toBe("hand-drawn");
    expect(element.getAttribute("color")).toBe("#3b82f6");
  });

  it("renders optional slot content and keeps it out of vertical mode", async () => {
    const element = await mountDivider("章节");
    const content = element.shadowRoot?.querySelector<HTMLElement>(
      '[part="content"]',
    );
    const slot = element.shadowRoot?.querySelector<HTMLSlotElement>(
      "slot:not([name])",
    );

    expect(slot?.assignedNodes().map((node) => node.textContent).join(""))
      .toBe("章节");
    expect(content?.hidden).toBe(false);

    element.direction = "vertical";
    await element.updateComplete;

    const divider = element.shadowRoot?.querySelector('[part="divider"]');
    expect(divider?.getAttribute("aria-orientation")).toBe("vertical");
    expect(element.shadowRoot?.querySelector('[part="content"]')).toBeNull();
    expect(element.shadowRoot?.querySelectorAll('[part="line"]')).toHaveLength(2);
  });

  it("applies the color override through a public style hook", async () => {
    const element = await mountDivider();
    element.color = "rgb(12, 34, 56)";
    await element.updateComplete;

    const divider = element.shadowRoot?.querySelector<HTMLElement>(
      '[part="divider"]',
    );
    expect(divider?.style.getPropertyValue("--super-divider-color"))
      .toBe("rgb(12, 34, 56)");
  });
});
