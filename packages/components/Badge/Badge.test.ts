import { afterEach, describe, expect, it } from "vitest";
import { defineSuperBadge, SUPER_BADGE_TAG, SuperBadge } from "./index.js";

const mountBadge = async (content = "消息") => {
  defineSuperBadge();
  const element = document.createElement(SUPER_BADGE_TAG);
  element.textContent = content;
  document.body.append(element);
  await element.updateComplete;
  return element;
};

afterEach(() => {
  document.body.replaceChildren();
});

describe("SuperBadge", () => {
  it("registers the super-badge tag idempotently", () => {
    expect(defineSuperBadge()).toBe(SuperBadge);
    expect(defineSuperBadge()).toBe(SuperBadge);
    expect(customElements.get(SUPER_BADGE_TAG)).toBe(SuperBadge);
  });

  it("provides stable defaults and reflects visual options", async () => {
    const element = await mountBadge();

    expect(element.value).toBe("");
    expect(element.max).toBe(99);
    expect(element.dot).toBe(false);
    expect(element.status).toBe("primary");
    expect(element.size).toBe("medium");
    expect(element.hidden).toBe(false);

    element.value = 12;
    element.max = 50;
    element.dot = true;
    element.status = "danger";
    element.size = "large";
    await element.updateComplete;

    expect(element.getAttribute("value")).toBe("12");
    expect(element.getAttribute("max")).toBe("50");
    expect(element.hasAttribute("dot")).toBe(true);
    expect(element.getAttribute("status")).toBe("danger");
    expect(element.getAttribute("size")).toBe("large");
  });

  it("renders consumer content through its default slot", async () => {
    const element = await mountBadge("收件箱");
    const slot = element.shadowRoot?.querySelector<HTMLSlotElement>(
      "slot:not([name])",
    );

    expect(slot?.assignedNodes().map((node) => node.textContent).join(""))
      .toBe("收件箱");
  });

  it("exposes container, content, and badge parts", async () => {
    const element = await mountBadge();
    element.value = 3;
    await element.updateComplete;

    expect(element.shadowRoot?.querySelector('[part="container"]')).not.toBeNull();
    expect(element.shadowRoot?.querySelector('[part="content"]')).not.toBeNull();
    expect(element.shadowRoot?.querySelector('[part="badge"]')).not.toBeNull();
  });

  it("switches size through the reflected attribute", async () => {
    const element = await mountBadge();
    element.size = "small";
    await element.updateComplete;

    expect(element.getAttribute("size")).toBe("small");
  });

  it("caps numeric values at max and keeps text values intact", async () => {
    const element = await mountBadge();
    element.value = 120;
    element.max = 99;
    await element.updateComplete;

    expect(element.shadowRoot?.querySelector('[part="badge"]')?.textContent)
      .toBe("99+");

    element.value = "NEW";
    await element.updateComplete;
    expect(element.shadowRoot?.querySelector('[part="badge"]')?.textContent)
      .toBe("NEW");

    element.value = "007";
    await element.updateComplete;
    expect(element.shadowRoot?.querySelector('[part="badge"]')?.textContent)
      .toBe("007");
  });

  it("renders a decorative dot without a value", async () => {
    const element = await mountBadge();
    element.dot = true;
    await element.updateComplete;

    const badge = element.shadowRoot?.querySelector('[part="badge"]');
    expect(badge?.getAttribute("aria-hidden")).toBe("true");
    expect(badge?.textContent).toBe("");
  });

  it("hides only the badge indicator while keeping slotted content", async () => {
    const element = await mountBadge("通知");
    element.value = 5;
    element.hidden = true;
    await element.updateComplete;

    expect(element.hasAttribute("hidden")).toBe(true);
    expect(element.shadowRoot?.querySelector('[part="badge"]')).toBeNull();
    expect(element.textContent).toBe("通知");
  });

  it("uses status semantics for visible numeric badges", async () => {
    const element = await mountBadge();
    element.value = 1;
    await element.updateComplete;

    const badge = element.shadowRoot?.querySelector('[part="badge"]');
    expect(badge?.textContent).toBe("1");
    expect(badge?.getAttribute("role")).toBe("status");
    expect(badge?.hasAttribute("aria-hidden")).toBe(false);
  });
});
