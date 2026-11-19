import { afterEach, describe, expect, it, vi } from "vitest";
import { defineSuperSteps, SUPER_STEPS_TAG, SuperSteps } from "./index.js";

const mountSteps = async () => {
  defineSuperSteps();
  const element = document.createElement(SUPER_STEPS_TAG);
  document.body.append(element);
  await element.updateComplete;
  return element;
};

const keydown = (target: Element, key: string) => {
  target.dispatchEvent(
    new KeyboardEvent("keydown", {
      key,
      bubbles: true,
      composed: true,
      cancelable: true,
    }),
  );
};

const stepItems = () => [
  { title: "填写信息", description: "确认项目基础资料" },
  { title: "选择方案", description: "比较并选择适合的方案" },
  { title: "完成", icon: "✓" },
];

afterEach(() => {
  document.body.replaceChildren();
});

describe("SuperSteps", () => {
  it("registers the super-steps tag idempotently", () => {
    expect(defineSuperSteps()).toBe(SuperSteps);
    expect(defineSuperSteps()).toBe(SuperSteps);
    expect(customElements.get(SUPER_STEPS_TAG)).toBe(SuperSteps);
  });

  it("provides stable defaults and reflects primitive options", async () => {
    const element = await mountSteps();

    expect(element.items).toEqual([]);
    expect(element.active).toBe(0);
    expect(element.direction).toBe("horizontal");
    expect(element.status).toBe("process");
    expect(element.clickable).toBe(false);
    expect(element.size).toBe("medium");
    expect(element.accessibleLabel).toBe("步骤");

    element.active = 2;
    element.direction = "vertical";
    element.status = "error";
    element.clickable = true;
    element.size = "small";
    element.accessibleLabel = "发布流程";
    await element.updateComplete;

    expect(element.getAttribute("active")).toBe("2");
    expect(element.getAttribute("direction")).toBe("vertical");
    expect(element.getAttribute("status")).toBe("error");
    expect(element.hasAttribute("clickable")).toBe(true);
    expect(element.getAttribute("size")).toBe("small");
    expect(element.getAttribute("aria-label")).toBe("发布流程");
  });

  it("keeps an attribute-initialized active step uncontrolled", async () => {
    defineSuperSteps();
    const element = document.createElement(SUPER_STEPS_TAG);
    element.setAttribute("active", "1");
    element.items = stepItems();
    element.clickable = true;
    document.body.append(element);
    await element.updateComplete;

    const onChange = vi.fn();
    document.body.addEventListener("super-steps-change", onChange);
    element.shadowRoot
      ?.querySelector<HTMLButtonElement>('button[data-step-index="2"]')
      ?.click();
    await element.updateComplete;
    await new Promise((resolve) => setTimeout(resolve, 30));
    await element.updateComplete;

    expect(element.active).toBe(2);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("renders an ordered list with per-step semantics and hidden connectors", async () => {
    const element = await mountSteps();
    element.items = stepItems();
    element.active = 1;
    await element.updateComplete;

    const list = element.shadowRoot?.querySelector<HTMLElement>(
      '[part="steps"]',
    );
    const steps = element.shadowRoot?.querySelectorAll('[part="step"]');
    const connectors = element.shadowRoot?.querySelectorAll(
      '[part="connector"]',
    );
    const indicators = element.shadowRoot?.querySelectorAll(
      '[part="indicator"]',
    );
    const titles = element.shadowRoot?.querySelectorAll('[part="title"]');
    const descriptions = element.shadowRoot?.querySelectorAll(
      '[part="description"]',
    );

    expect(list?.tagName).toBe("OL");
    expect(list?.getAttribute("role")).toBe("list");
    expect(list?.getAttribute("aria-label")).toBe("步骤");
    expect(steps).toHaveLength(3);
    expect(
      Array.from(steps ?? []).every(
        (step) => step.getAttribute("role") === "listitem",
      ),
    ).toBe(true);
    expect(connectors).toHaveLength(2);
    expect(
      Array.from(connectors ?? []).every(
        (connector) => connector.getAttribute("aria-hidden") === "true",
      ),
    ).toBe(true);
    expect(
      Array.from(indicators ?? []).every(
        (indicator) => indicator.getAttribute("aria-hidden") === "true",
      ),
    ).toBe(true);
    expect(titles?.[0]?.textContent?.trim()).toBe("填写信息");
    expect(descriptions).toHaveLength(2);
    expect(steps?.[0]?.getAttribute("aria-current")).toBeNull();
    expect(steps?.[1]?.getAttribute("aria-current")).toBe("step");
    expect(steps?.[2]?.getAttribute("aria-current")).toBeNull();
  });

  it("derives finish, process and wait states from the active index", async () => {
    const element = await mountSteps();
    element.items = stepItems();
    element.active = 1;
    await element.updateComplete;

    const steps = Array.from(
      element.shadowRoot?.querySelectorAll<HTMLElement>('[part="step"]') ?? [],
    );
    expect(steps.map((step) => step.dataset.status)).toEqual([
      "finish",
      "process",
      "wait",
    ]);

    element.status = "error";
    await element.updateComplete;
    expect(
      Array.from(
        element.shadowRoot?.querySelectorAll<HTMLElement>('[part="step"]') ?? [],
      ).map((step) => step.dataset.status),
    ).toEqual(["finish", "error", "wait"]);
  });

  it("renders step numbers by default and icons when provided", async () => {
    const element = await mountSteps();
    element.items = stepItems();
    await element.updateComplete;

    const indicators = Array.from(
      element.shadowRoot?.querySelectorAll<HTMLElement>(
        '[part="indicator"]',
      ) ?? [],
    );
    expect(indicators[0]?.textContent?.trim()).toBe("1");
    expect(indicators[1]?.textContent?.trim()).toBe("2");
    expect(
      indicators[2]?.querySelector('[part="icon"]')?.textContent?.trim(),
    ).toBe("✓");
  });

  it("does not render buttons or emit events when not clickable", async () => {
    const element = await mountSteps();
    element.items = stepItems();
    await element.updateComplete;

    const onChange = vi.fn();
    document.body.addEventListener("super-steps-change", onChange);

    expect(element.shadowRoot?.querySelector("button")).toBeNull();
    element.shadowRoot
      ?.querySelector<HTMLElement>('[part="step"]')
      ?.click();
    await element.updateComplete;

    expect(onChange).not.toHaveBeenCalled();
    expect(element.active).toBe(0);
  });

  it("activates a clicked step and emits a composed change event", async () => {
    const element = await mountSteps();
    element.items = stepItems();
    element.clickable = true;
    await element.updateComplete;

    const onChange = vi.fn();
    document.body.addEventListener("super-steps-change", onChange);
    const buttons = element.shadowRoot?.querySelectorAll<HTMLButtonElement>(
      "button[data-step-index]",
    );

    expect(buttons).toHaveLength(3);
    buttons?.[2]?.click();
    await element.updateComplete;

    expect(element.active).toBe(2);
    expect(onChange).toHaveBeenCalledTimes(1);
    const event = onChange.mock.calls[0]?.[0] as CustomEvent<{
      active: number;
    }>;
    expect(event.bubbles).toBe(true);
    expect(event.composed).toBe(true);
    expect(event.detail).toEqual({ active: 2 });
  });

  it("activates with Enter and Space when clickable", async () => {
    const element = await mountSteps();
    element.items = stepItems();
    element.clickable = true;
    await element.updateComplete;

    const onChange = vi.fn();
    document.body.addEventListener("super-steps-change", onChange);
    const buttons = element.shadowRoot?.querySelectorAll<HTMLButtonElement>(
      "button[data-step-index]",
    );

    buttons?.[1]?.focus();
    keydown(buttons![1]!, "Enter");
    await element.updateComplete;
    expect(element.active).toBe(1);

    buttons?.[2]?.focus();
    keydown(buttons![2]!, " ");
    await element.updateComplete;
    expect(element.active).toBe(2);
    expect(onChange).toHaveBeenCalledTimes(2);
  });

  it("ignores clicks on the already active step", async () => {
    const element = await mountSteps();
    element.items = stepItems();
    element.clickable = true;
    element.active = 1;
    await element.updateComplete;

    const onChange = vi.fn();
    document.body.addEventListener("super-steps-change", onChange);
    element.shadowRoot
      ?.querySelector<HTMLButtonElement>('button[data-step-index="1"]')
      ?.click();
    await element.updateComplete;

    expect(onChange).not.toHaveBeenCalled();
    expect(element.active).toBe(1);
  });

  it("clamps an out-of-range active index for presentation", async () => {
    const element = await mountSteps();
    element.items = stepItems();
    element.active = 99;
    await element.updateComplete;

    const steps = element.shadowRoot?.querySelectorAll('[part="step"]');
    expect(steps?.[2]?.getAttribute("aria-current")).toBe("step");
    expect(steps?.[0]?.getAttribute("aria-current")).toBeNull();

    element.active = -4;
    await element.updateComplete;
    const updated = element.shadowRoot?.querySelectorAll('[part="step"]');
    expect(updated?.[0]?.getAttribute("aria-current")).toBe("step");
  });
});
