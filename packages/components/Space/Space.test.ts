import { afterEach, describe, expect, it } from "vitest";
import { defineSuperSpace, SUPER_SPACE_TAG, SuperSpace } from "./index.js";

const mountSpace = async (...content: HTMLElement[]) => {
  defineSuperSpace();
  const element = document.createElement(SUPER_SPACE_TAG);
  element.append(...content);
  document.body.append(element);
  await element.updateComplete;
  return element;
};

afterEach(() => {
  document.body.replaceChildren();
});

describe("SuperSpace", () => {
  it("registers the super-space tag idempotently", () => {
    expect(defineSuperSpace()).toBe(SuperSpace);
    expect(defineSuperSpace()).toBe(SuperSpace);
    expect(customElements.get(SUPER_SPACE_TAG)).toBe(SuperSpace);
  });

  it("provides stable defaults and reflects layout options", async () => {
    const element = await mountSpace();

    expect(element.direction).toBe("horizontal");
    expect(element.size).toBe("medium");
    expect(element.wrap).toBe(false);
    expect(element.align).toBe("center");
    expect(element.fill).toBe(false);

    element.direction = "vertical";
    element.size = "large";
    element.wrap = true;
    element.align = "baseline";
    element.fill = true;
    await element.updateComplete;

    expect(element.getAttribute("direction")).toBe("vertical");
    expect(element.getAttribute("size")).toBe("large");
    expect(element.getAttribute("wrap")).toBe("");
    expect(element.getAttribute("align")).toBe("baseline");
    expect(element.getAttribute("fill")).toBe("");
  });

  it("renders consumer children directly through its default slot", async () => {
    const first = document.createElement("span");
    first.textContent = "一";
    const second = document.createElement("span");
    second.textContent = "二";
    const element = await mountSpace(first, second);
    const slot = element.shadowRoot?.querySelector<HTMLSlotElement>("slot");

    expect(slot).not.toBeNull();
    expect(slot?.getAttribute("part")).toBe("space");
    expect(slot?.assignedElements()).toEqual([first, second]);
    expect(element.shadowRoot?.querySelectorAll("div")).toHaveLength(0);
  });

  it("accepts numeric size strings and exposes the gap hook", async () => {
    const element = await mountSpace();
    element.size = "20";
    await element.updateComplete;

    expect(element.getAttribute("size")).toBe("20");
    expect(element.size).toBe("20");
    expect(element.style.getPropertyValue("--super-space-gap")).toBe("20px");
  });
});
