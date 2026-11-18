import { afterEach, describe, expect, it, vi } from "vitest";
import {
  defineSuperRate,
  SUPER_RATE_TAG,
  SuperRate,
  type SuperRateChangeDetail,
} from "./index.js";

const mountRate = async (
  configure?: (element: SuperRate) => void,
): Promise<SuperRate> => {
  defineSuperRate();
  const element = document.createElement(SUPER_RATE_TAG);
  configure?.(element);
  document.body.append(element);
  await element.updateComplete;
  return element;
};

const getSlider = (element: SuperRate) =>
  element.shadowRoot?.querySelector<HTMLElement>('[role="slider"]');

const getStars = (element: SuperRate) =>
  Array.from(element.shadowRoot?.querySelectorAll<HTMLElement>(".star") ?? []);

const clickStar = (
  star: HTMLElement,
  options: { ratio?: number } = {},
): void => {
  const rect = star.getBoundingClientRect();
  const clientX = rect.left + (rect.width || 24) * (options.ratio ?? 0.75);
  star.dispatchEvent(
    new MouseEvent("click", {
      clientX,
      bubbles: true,
      composed: true,
    }),
  );
};

const press = (element: HTMLElement, key: string): KeyboardEvent => {
  const event = new KeyboardEvent("keydown", {
    key,
    bubbles: true,
    composed: true,
    cancelable: true,
  });
  element.dispatchEvent(event);
  return event;
};

afterEach(() => {
  document.body.replaceChildren();
});

describe("SuperRate", () => {
  it("registers the tag idempotently and exposes stable defaults", async () => {
    expect(defineSuperRate()).toBe(SuperRate);
    expect(defineSuperRate()).toBe(SuperRate);
    expect(customElements.get(SUPER_RATE_TAG)).toBe(SuperRate);

    const element = await mountRate();
    expect(element.value).toBe(0);
    expect(element.max).toBe(5);
    expect(element.allowHalf).toBe(false);
    expect(element.readonly).toBe(false);
    expect(element.disabled).toBe(false);
    expect(element.size).toBe("medium");
    expect(element.validation).toBe("none");
    expect(element.clearable).toBe(false);
    expect(element.accessibleLabel).toBe("评分");
    expect(element.clearLabel).toBe("清除评分");
    expect(getStars(element)).toHaveLength(5);
  });

  it("reflects primitive state and value", async () => {
    const element = await mountRate();
    element.value = 3;
    element.max = 7;
    element.allowHalf = true;
    element.readonly = true;
    element.disabled = true;
    element.size = "large";
    element.validation = "success";
    element.clearable = true;
    await element.updateComplete;

    expect(element.getAttribute("value")).toBe("3");
    expect(element.getAttribute("max")).toBe("7");
    expect(element.hasAttribute("allow-half")).toBe(true);
    expect(element.hasAttribute("readonly")).toBe(true);
    expect(element.hasAttribute("disabled")).toBe(true);
    expect(element.getAttribute("size")).toBe("large");
    expect(element.getAttribute("validation")).toBe("success");
    expect(element.hasAttribute("clearable")).toBe(true);
    expect(getStars(element)).toHaveLength(7);
  });

  it("emits a composed change event on click without mutating controlled value", async () => {
    const element = await mountRate((rate) => {
      rate.value = 1;
    });
    const onChange = vi.fn();
    element.addEventListener("super-rate-change", onChange);
    const third = getStars(element)[2];

    expect(third).toBeDefined();
    if (!third) return;

    clickStar(third);

    expect(element.value).toBe(1);
    expect(onChange).toHaveBeenCalledTimes(1);
    const event = onChange.mock.calls[0]?.[0] as CustomEvent<SuperRateChangeDetail>;
    expect(event.detail.value).toBe(3);
    expect(event.bubbles).toBe(true);
    expect(event.composed).toBe(true);
  });

  it("does not emit user events for programmatic changes", async () => {
    const element = await mountRate();
    const onChange = vi.fn();
    element.addEventListener("super-rate-change", onChange);

    element.value = 4;
    await element.updateComplete;

    expect(getSlider(element)?.getAttribute("aria-valuenow")).toBe("4");
    expect(onChange).not.toHaveBeenCalled();
  });

  it("supports arrow, Home, End and digit keyboard controls", async () => {
    const element = await mountRate((rate) => {
      rate.value = 2;
    });
    const onChange = vi.fn();
    element.addEventListener("super-rate-change", onChange);
    const slider = getSlider(element);

    expect(slider).toBeDefined();
    if (!slider) return;

    expect(press(slider, "ArrowRight").defaultPrevented).toBe(true);
    expect(onChange.mock.calls[0]?.[0].detail.value).toBe(3);
    element.value = 3;
    await element.updateComplete;
    press(slider, "ArrowLeft");
    expect(onChange.mock.calls[1]?.[0].detail.value).toBe(2);
    element.value = 2;
    await element.updateComplete;
    press(slider, "End");
    expect(onChange.mock.calls[2]?.[0].detail.value).toBe(5);
    element.value = 5;
    await element.updateComplete;
    press(slider, "Home");
    expect(onChange.mock.calls[3]?.[0].detail.value).toBe(0);
    element.value = 0;
    await element.updateComplete;
    press(slider, "4");
    expect(onChange.mock.calls[4]?.[0].detail.value).toBe(4);
    expect(element.value).toBe(0);
  });

  it("supports half steps and ignores values beyond the maximum", async () => {
    const element = await mountRate((rate) => {
      rate.value = 2.5;
      rate.max = 4;
      rate.allowHalf = true;
    });
    const onChange = vi.fn();
    element.addEventListener("super-rate-change", onChange);
    const slider = getSlider(element);
    const fourth = getStars(element)[3];

    expect(slider?.getAttribute("aria-valuenow")).toBe("2.5");
    expect(element.shadowRoot?.querySelectorAll(".symbol.half")).toHaveLength(1);

    if (!slider || !fourth) return;

    press(slider, "ArrowRight");
    expect(onChange.mock.calls[0]?.[0].detail.value).toBe(3);

    vi.spyOn(fourth, "getBoundingClientRect").mockReturnValue({
      left: 0,
      width: 100,
    } as DOMRect);
    clickStar(fourth, { ratio: 0.25 });
    expect(onChange.mock.calls[1]?.[0].detail.value).toBe(3.5);

    press(slider, "9");
    expect(onChange.mock.calls[2]?.[0].detail.value).toBe(4);
  });

  it("clears on clicking the current value or pressing Delete when clearable", async () => {
    const element = await mountRate((rate) => {
      rate.value = 3;
      rate.clearable = true;
    });
    const onChange = vi.fn();
    element.addEventListener("super-rate-change", onChange);
    const third = getStars(element)[2];
    const slider = getSlider(element);

    expect(third).toBeDefined();
    expect(slider).toBeDefined();
    if (!third || !slider) return;

    clickStar(third);
    expect(onChange.mock.calls[0]?.[0].detail.value).toBe(0);

    press(slider, "Delete");
    expect(onChange.mock.calls[1]?.[0].detail.value).toBe(0);

    press(slider, "Backspace");
    expect(onChange.mock.calls[2]?.[0].detail.value).toBe(0);
  });

  it("exposes slider ARIA and respects readonly and disabled", async () => {
    const element = await mountRate((rate) => {
      rate.value = 2;
      rate.max = 6;
      rate.readonly = true;
      rate.accessibleLabel = "Product rating";
    });
    const onChange = vi.fn();
    element.addEventListener("super-rate-change", onChange);
    const slider = getSlider(element);
    const first = getStars(element)[0];

    expect(slider?.getAttribute("role")).toBe("slider");
    expect(slider?.getAttribute("aria-label")).toBe("Product rating");
    expect(slider?.getAttribute("aria-valuemin")).toBe("0");
    expect(slider?.getAttribute("aria-valuemax")).toBe("6");
    expect(slider?.getAttribute("aria-valuenow")).toBe("2");
    expect(slider?.getAttribute("aria-readonly")).toBe("true");
    expect(slider?.getAttribute("tabindex")).toBe("0");

    if (!slider || !first) return;
    press(slider, "ArrowRight");
    clickStar(first);
    expect(onChange).not.toHaveBeenCalled();

    element.readonly = false;
    element.disabled = true;
    await element.updateComplete;

    expect(getSlider(element)?.getAttribute("aria-disabled")).toBe("true");
    expect(getSlider(element)?.hasAttribute("tabindex")).toBe(false);
    press(getSlider(element) as HTMLElement, "ArrowRight");
    expect(onChange).not.toHaveBeenCalled();
  });

  it("accepts consumer-provided icons through the icon slot", async () => {
    const element = await mountRate();
    const icon = document.createElement("span");
    icon.slot = "icon";
    icon.textContent = "✿";
    element.append(icon);
    await element.updateComplete;
    await element.updateComplete;

    const source = element.shadowRoot?.querySelector<HTMLSlotElement>(
      'slot[name="icon"]',
    );
    const copies = element.shadowRoot?.querySelectorAll(".icon-copy");
    expect(source?.assignedElements()).toEqual([icon]);
    expect(copies).toHaveLength(5);
    expect(copies?.[0]?.textContent?.trim()).toBe("✿");
  });

  it("exposes the active half state and uses the controlled value for ARIA", async () => {
    const element = await mountRate((rate) => {
      rate.value = 2.5;
      rate.allowHalf = true;
      rate.clearable = true;
    });
    await element.updateComplete;
    const slider = getSlider(element);
    const half = getStars(element)[2];

    expect(slider?.getAttribute("aria-valuenow")).toBe("2.5");
    expect(slider?.getAttribute("aria-description")).toBe("清除评分");
    expect(slider?.getAttribute("aria-keyshortcuts")).toBe("Delete Backspace");
    expect(half?.querySelector(".symbol.half")).not.toBeNull();

    vi.spyOn(half as HTMLElement, "getBoundingClientRect").mockReturnValue({
      left: 0,
      width: 100,
    } as DOMRect);
    if (!half) return;
    clickStar(half, { ratio: 0.25 });
    expect(element.value).toBe(2.5);
  });

  it("forwards focus and blur to the slider container", async () => {
    const element = await mountRate((rate) => {
      rate.value = 2;
    });
    const slider = getSlider(element);

    element.focus();
    expect(element.shadowRoot?.activeElement).toBe(slider);

    element.blur();
    expect(element.shadowRoot?.activeElement).toBeNull();
  });
});
