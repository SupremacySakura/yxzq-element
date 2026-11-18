import { afterEach, describe, expect, it, vi } from "vitest";
import {
  defineSuperSlider,
  SUPER_SLIDER_TAG,
  SuperSlider,
  type SuperSliderChangeDetail,
} from "./index.js";

const mountSlider = async (
  configure?: (element: SuperSlider) => void,
): Promise<SuperSlider> => {
  defineSuperSlider();
  const element = document.createElement(SUPER_SLIDER_TAG);
  configure?.(element);
  document.body.append(element);
  await element.updateComplete;
  return element;
};

const getInputs = (element: SuperSlider) =>
  Array.from(
    element.shadowRoot?.querySelectorAll<HTMLInputElement>(".native") ?? [],
  );

const changeInput = (
  input: HTMLInputElement,
  value: number,
  eventName: "input" | "change" = "input",
): void => {
  input.value = String(value);
  input.dispatchEvent(
    new Event(eventName, { bubbles: true, composed: true }),
  );
};

afterEach(() => {
  document.body.replaceChildren();
});

describe("SuperSlider", () => {
  it("registers the tag idempotently and exposes stable defaults", async () => {
    expect(defineSuperSlider()).toBe(SuperSlider);
    expect(defineSuperSlider()).toBe(SuperSlider);
    expect(customElements.get(SUPER_SLIDER_TAG)).toBe(SuperSlider);

    const element = await mountSlider();
    expect(element.value).toBe(0);
    expect(element.min).toBe(0);
    expect(element.max).toBe(100);
    expect(element.step).toBe(1);
    expect(element.range).toBe(false);
    expect(element.disabled).toBe(false);
    expect(element.size).toBe("medium");
    expect(element.validation).toBe("none");
    expect(element.showTooltip).toBe(false);
    expect(element.vertical).toBe(false);
    expect(element.accessibleLabel).toBe("滑动条");
    expect(element.startLabel).toBe("起始值");
    expect(element.endLabel).toBe("结束值");
    expect(getInputs(element)).toHaveLength(1);
  });

  it("reflects primitive state and keeps range values as a JS property", async () => {
    const element = await mountSlider();
    element.min = 10;
    element.max = 90;
    element.step = 5;
    element.range = true;
    element.disabled = true;
    element.size = "large";
    element.validation = "error";
    element.showTooltip = true;
    element.vertical = true;
    element.value = [20, 80];
    await element.updateComplete;

    expect(element.getAttribute("min")).toBe("10");
    expect(element.getAttribute("max")).toBe("90");
    expect(element.getAttribute("step")).toBe("5");
    expect(element.hasAttribute("range")).toBe(true);
    expect(element.hasAttribute("disabled")).toBe(true);
    expect(element.getAttribute("size")).toBe("large");
    expect(element.getAttribute("validation")).toBe("error");
    expect(element.hasAttribute("show-tooltip")).toBe(true);
    expect(element.hasAttribute("vertical")).toBe(true);
    expect(element.getAttribute("value")).toBeNull();
    expect(element.value).toEqual([20, 80]);
    expect(getInputs(element)).toHaveLength(2);
  });

  it("emits a composed change event without mutating the controlled value", async () => {
    const element = await mountSlider((slider) => {
      slider.value = 20;
    });
    const onChange = vi.fn();
    element.addEventListener("super-slider-change", onChange);
    const [input] = getInputs(element);

    expect(input).toBeDefined();
    if (!input) return;

    changeInput(input, 64);

    expect(element.value).toBe(20);
    expect(input.value).toBe("20");
    expect(onChange).toHaveBeenCalledTimes(1);
    const event = onChange.mock.calls[0]?.[0] as CustomEvent<SuperSliderChangeDetail>;
    expect(event.detail.value).toBe(64);
    expect(event.bubbles).toBe(true);
    expect(event.composed).toBe(true);
  });

  it("adopts controlled value updates and emits nothing for programmatic changes", async () => {
    const element = await mountSlider();
    const onChange = vi.fn();
    element.addEventListener("super-slider-change", onChange);

    element.value = 45;
    await element.updateComplete;
    expect(getInputs(element)[0]?.value).toBe("45");
    expect(onChange).not.toHaveBeenCalled();
  });

  it("does not emit duplicate events when input and change both fire", async () => {
    const element = await mountSlider((slider) => {
      slider.value = 20;
    });
    const onChange = vi.fn();
    element.addEventListener("super-slider-change", onChange);
    const [input] = getInputs(element);

    expect(input).toBeDefined();
    if (!input) return;

    input.value = "30";
    input.dispatchEvent(new Event("input", { bubbles: true, composed: true }));
    input.dispatchEvent(new Event("change", { bubbles: true, composed: true }));

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(element.value).toBe(20);
  });

  it("supports native range keyboard semantics and emits the next value", async () => {
    const element = await mountSlider((slider) => {
      slider.value = 50;
      slider.step = 5;
    });
    const onChange = vi.fn();
    element.addEventListener("super-slider-change", onChange);
    const [input] = getInputs(element);

    expect(input).toBeDefined();
    if (!input) return;

    input.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "ArrowRight",
        bubbles: true,
        composed: true,
        cancelable: true,
      }),
    );
    expect(onChange.mock.calls[0]?.[0].detail.value).toBe(55);

    input.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Home",
        bubbles: true,
        composed: true,
        cancelable: true,
      }),
    );
    expect(onChange.mock.calls[1]?.[0].detail.value).toBe(0);

    input.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "End",
        bubbles: true,
        composed: true,
        cancelable: true,
      }),
    );
    expect(onChange.mock.calls[2]?.[0].detail.value).toBe(100);

    element.value = 100;
    await element.updateComplete;

    input.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "PageDown",
        bubbles: true,
        composed: true,
        cancelable: true,
      }),
    );
    expect(onChange.mock.calls[3]?.[0].detail.value).toBe(50);
    expect(element.value).toBe(100);
  });

  it("keeps range thumb values ordered and within bounds", async () => {
    const element = await mountSlider((slider) => {
      slider.range = true;
      slider.value = [75, 25];
    });
    const onChange = vi.fn();
    element.addEventListener("super-slider-change", onChange);

    const [start, end] = getInputs(element);
    expect(start?.value).toBe("25");
    expect(end?.value).toBe("75");
    expect(start?.getAttribute("aria-label")).toBe("起始值");
    expect(end?.getAttribute("aria-label")).toBe("结束值");
    expect(
      element.shadowRoot?.querySelector('[part="root"]')?.getAttribute("role"),
    ).toBe("group");

    expect(start).toBeDefined();
    if (!start) return;

    changeInput(start, 92);
    expect(onChange.mock.calls[0]?.[0].detail.value).toEqual([75, 75]);
    expect(element.value).toEqual([75, 25]);
  });

  it("renders tooltips, vertical orientation and localized labels", async () => {
    const element = await mountSlider((slider) => {
      slider.range = true;
      slider.value = [20, 80];
      slider.showTooltip = true;
      slider.vertical = true;
      slider.accessibleLabel = "Price range";
      slider.startLabel = "Minimum price";
      slider.endLabel = "Maximum price";
    });
    await element.updateComplete;

    const inputs = getInputs(element);
    expect(inputs[0]?.getAttribute("aria-label")).toBe("Minimum price");
    expect(inputs[1]?.getAttribute("aria-label")).toBe("Maximum price");
    expect(inputs[0]?.getAttribute("aria-orientation")).toBe("vertical");
    expect(inputs[0]?.getAttribute("aria-valuenow")).toBe("20");
    expect(inputs[1]?.getAttribute("aria-valuenow")).toBe("80");
    expect(element.shadowRoot?.querySelectorAll('[part~="tooltip"]')).toHaveLength(2);
    expect(element.shadowRoot?.querySelector('[part="root"]')?.textContent).toContain("20");
  });

  it("does not emit user events while disabled", async () => {
    const element = await mountSlider((slider) => {
      slider.value = 30;
      slider.disabled = true;
    });
    const onChange = vi.fn();
    element.addEventListener("super-slider-change", onChange);
    const [input] = getInputs(element);

    expect(input?.disabled).toBe(true);
    if (!input) return;

    input.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "ArrowRight",
        bubbles: true,
        composed: true,
        cancelable: true,
      }),
    );
    changeInput(input, 70);

    expect(onChange).not.toHaveBeenCalled();
  });

  it("quantizes values to the configured step and clamps them to the range", async () => {
    const element = await mountSlider((slider) => {
      slider.min = 10;
      slider.max = 50;
      slider.step = 4;
      slider.value = 7;
    });
    await element.updateComplete;

    expect(getInputs(element)[0]?.value).toBe("10");

    element.value = 47;
    await element.updateComplete;
    expect(getInputs(element)[0]?.value).toBe("46");
  });

  it("removes the reflected value attribute when switching to range mode", async () => {
    const element = await mountSlider((slider) => {
      slider.value = 40;
    });

    expect(element.getAttribute("value")).toBe("40");

    element.range = true;
    element.value = [20, 60];
    await element.updateComplete;

    expect(element.hasAttribute("value")).toBe(false);
  });

  it("forwards focus and blur to the first native slider", async () => {
    const element = await mountSlider((slider) => {
      slider.range = true;
      slider.value = [20, 80];
    });
    const [start] = getInputs(element);

    element.focus();
    expect(element.shadowRoot?.activeElement).toBe(start);

    element.blur();
    expect(element.shadowRoot?.activeElement).toBeNull();
  });
});
