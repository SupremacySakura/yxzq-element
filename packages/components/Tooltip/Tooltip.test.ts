import { afterEach, describe, expect, it, vi } from "vitest";
import { createFloating } from "../internal/floating.js";
import {
  defineSuperTooltip,
  SUPER_TOOLTIP_TAG,
  SuperTooltip,
} from "./index.js";

const settle = async (element: SuperTooltip): Promise<void> => {
  await element.updateComplete;
  await Promise.resolve();
  await element.updateComplete;
};

const mountTooltip = async (
  configure?: (element: SuperTooltip, trigger: HTMLButtonElement) => void,
): Promise<{
  element: SuperTooltip;
  trigger: HTMLButtonElement;
}> => {
  defineSuperTooltip();
  const element = document.createElement(SUPER_TOOLTIP_TAG);
  const trigger = document.createElement("button");
  trigger.type = "button";
  trigger.textContent = "触发";
  element.append(trigger);
  configure?.(element, trigger);
  document.body.append(element);
  await settle(element);
  return { element, trigger };
};

const getTooltip = (element: SuperTooltip) =>
  element.shadowRoot?.querySelector<HTMLElement>('[part="tooltip"]');

afterEach(() => {
  vi.useRealTimers();
  document.body.replaceChildren();
});

describe("createFloating", () => {
  it("is a safe no-op without a DOM", () => {
    const originalDocument = globalThis.document;
    vi.stubGlobal("document", undefined);

    try {
      expect(() =>
        createFloating({} as Element, {} as HTMLElement),
      ).not.toThrow();
    } finally {
      vi.stubGlobal("document", originalDocument);
    }
  });

  it("allows destroy to be called repeatedly", async () => {
    const anchor = document.createElement("button");
    const floating = document.createElement("div");
    document.body.append(anchor, floating);

    const controller = createFloating(anchor, floating, {
      placement: "bottom-start",
      offset: 4,
    });
    await controller.update();

    expect(() => {
      controller.destroy();
      controller.destroy();
    }).not.toThrow();
    await expect(controller.update()).resolves.toBeUndefined();
  });
});

describe("SuperTooltip", () => {
  it("registers super-tooltip idempotently", () => {
    expect(defineSuperTooltip()).toBe(SuperTooltip);
    expect(defineSuperTooltip()).toBe(SuperTooltip);
    expect(customElements.get(SUPER_TOOLTIP_TAG)).toBe(SuperTooltip);
  });

  it("defines size-specific typography and padding hooks", () => {
    expect(SuperTooltip.styles.cssText).toContain(':host([size="large"])');
    expect(SuperTooltip.styles.cssText).toContain(':host([size="small"])');
    expect(SuperTooltip.styles.cssText).toContain("--super-tooltip-font-size");
    expect(SuperTooltip.styles.cssText).toContain(
      "--super-tooltip-padding-inline",
    );
  });

  it("provides stable defaults", async () => {
    const { element } = await mountTooltip();

    expect(element.content).toBe("");
    expect(element.placement).toBe("top");
    expect(element.trigger).toBe("hover");
    expect(element.disabled).toBe(false);
    expect(element.open).toBe(false);
    expect(element.delay).toBe(120);
    expect(element.offset).toBe(8);
    expect(element.maxWidth).toBe(280);
    expect(element.showArrow).toBe(true);
    expect(element.interactive).toBe(false);
    expect(element.size).toBe("medium");
    expect(element.getAttribute("size")).toBe("medium");
  });

  it("reflects primitive options as attributes", async () => {
    const { element } = await mountTooltip();

    element.content = "提示内容";
    element.placement = "left-end";
    element.trigger = "click";
    element.disabled = true;
    element.open = true;
    element.delay = 250;
    element.offset = 12;
    element.maxWidth = 360;
    element.showArrow = false;
    element.interactive = true;
    element.size = "small";
    await settle(element);

    expect(element.getAttribute("content")).toBe("提示内容");
    expect(element.getAttribute("placement")).toBe("left-end");
    expect(element.getAttribute("trigger")).toBe("click");
    expect(element.hasAttribute("disabled")).toBe(true);
    expect(element.hasAttribute("open")).toBe(false);
    expect(element.getAttribute("delay")).toBe("250");
    expect(element.getAttribute("offset")).toBe("12");
    expect(element.getAttribute("max-width")).toBe("360");
    expect(element.hasAttribute("show-arrow")).toBe(false);
    expect(element.hasAttribute("interactive")).toBe(true);
    expect(element.getAttribute("size")).toBe("small");
  });

  it("renders content and associates the tooltip with the first slot element", async () => {
    const { element, trigger } = await mountTooltip((tooltip) => {
      tooltip.content = "保存当前修改";
      tooltip.open = true;
    });

    const tooltip = getTooltip(element);
    expect(tooltip?.getAttribute("role")).toBe("tooltip");
    expect(tooltip?.textContent).toContain("保存当前修改");
    expect(trigger.getAttribute("aria-describedby")).toBe(tooltip?.id);
  });

  it("falls back to the content slot when content is empty", async () => {
    const { element } = await mountTooltip((tooltip) => {
      tooltip.open = true;
    });
    const content = document.createElement("span");
    content.slot = "content";
    content.textContent = "来自 Slot 的说明";
    element.append(content);
    await settle(element);

    const contentSlot = element.shadowRoot?.querySelector<HTMLSlotElement>(
      'slot[name="content"]',
    );
    expect(contentSlot?.assignedElements()).toEqual([content]);
  });

  it("opens and closes through the controlled open property", async () => {
    const { element, trigger } = await mountTooltip();
    const onOpenChange = vi.fn();
    element.addEventListener("super-tooltip-open-change", onOpenChange);

    element.open = true;
    await settle(element);
    expect(getTooltip(element)).not.toBeNull();
    expect(trigger.getAttribute("aria-describedby")).toBe(getTooltip(element)?.id);
    expect(onOpenChange).not.toHaveBeenCalled();

    element.open = false;
    await settle(element);
    expect(getTooltip(element)).toBeNull();
    expect(trigger.hasAttribute("aria-describedby")).toBe(false);
    expect(onOpenChange).not.toHaveBeenCalled();
  });

  it("dispatches a composed bubbling open-change event on user interaction", async () => {
    const { element, trigger } = await mountTooltip((tooltip) => {
      tooltip.content = "悬停提示";
    });
    const parent = document.createElement("div");
    document.body.append(parent);
    parent.append(element);
    const onOpenChange = vi.fn();
    parent.addEventListener("super-tooltip-open-change", onOpenChange);

    trigger.dispatchEvent(new Event("pointerenter"));
    await settle(element);

    expect(element.open).toBe(true);
    const event = onOpenChange.mock.calls[0]?.[0] as CustomEvent<{
      open: boolean;
    }>;
    expect(event.bubbles).toBe(true);
    expect(event.composed).toBe(true);
    expect(event.detail).toEqual({ open: true });
  });

  it("closes hover tooltips after the configured delay", async () => {
    vi.useFakeTimers();
    const { element, trigger } = await mountTooltip((tooltip) => {
      tooltip.delay = 80;
    });

    trigger.dispatchEvent(new Event("pointerenter"));
    await settle(element);
    expect(element.open).toBe(true);

    trigger.dispatchEvent(new Event("pointerleave"));
    await Promise.resolve();
    expect(element.open).toBe(true);

    vi.advanceTimersByTime(80);
    await settle(element);
    expect(element.open).toBe(false);
  });

  it("opens on focus and closes after focus leaves", async () => {
    vi.useFakeTimers();
    const { element, trigger } = await mountTooltip((tooltip) => {
      tooltip.trigger = "focus";
      tooltip.delay = 60;
    });

    trigger.dispatchEvent(
      new FocusEvent("focusin", { bubbles: true, composed: true }),
    );
    await settle(element);
    expect(element.open).toBe(true);

    trigger.dispatchEvent(
      new FocusEvent("focusout", {
        bubbles: true,
        composed: true,
        relatedTarget: document.body,
      }),
    );
    vi.advanceTimersByTime(60);
    await settle(element);

    expect(element.open).toBe(false);
  });

  it("closes on Escape and returns focus to the trigger", async () => {
    const { element, trigger } = await mountTooltip((tooltip) => {
      tooltip.trigger = "click";
    });

    trigger.click();
    await settle(element);
    expect(element.open).toBe(true);

    document.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Escape",
        bubbles: true,
        composed: true,
      }),
    );
    await settle(element);

    expect(element.open).toBe(false);
    expect(document.activeElement).toBe(trigger);
  });

  it("does not open while disabled", async () => {
    const { element, trigger } = await mountTooltip((tooltip) => {
      tooltip.disabled = true;
    });
    const onOpenChange = vi.fn();
    element.addEventListener("super-tooltip-open-change", onOpenChange);

    trigger.dispatchEvent(new Event("pointerenter"));
    await settle(element);

    expect(element.open).toBe(false);
    expect(getTooltip(element)).toBeNull();
    expect(onOpenChange).not.toHaveBeenCalled();
  });

  it("closes click tooltips on an outside pointerdown", async () => {
    const { element, trigger } = await mountTooltip((tooltip) => {
      tooltip.trigger = "click";
    });

    trigger.click();
    await settle(element);
    expect(element.open).toBe(true);

    document.body.dispatchEvent(
      new Event("pointerdown", { bubbles: true, composed: true }),
    );
    await settle(element);

    expect(element.open).toBe(false);
    expect(getTooltip(element)).toBeNull();
  });

  it("closes when the trigger mode changes while open", async () => {
    const { element, trigger } = await mountTooltip((tooltip) => {
      tooltip.trigger = "click";
    });

    trigger.click();
    await settle(element);
    expect(element.open).toBe(true);

    element.trigger = "hover";
    await settle(element);

    expect(element.open).toBe(false);
    expect(getTooltip(element)).toBeNull();
  });

  it("locks scroll and traps focus only while an interactive tooltip is open", async () => {
    const { element, trigger } = await mountTooltip((tooltip) => {
      tooltip.trigger = "click";
      tooltip.interactive = true;
    });

    expect(document.body.style.overflow).toBe("");
    trigger.click();
    await settle(element);

    const panel = getTooltip(element);
    expect(document.body.style.overflow).toBe("hidden");
    expect(element.shadowRoot?.activeElement).toBe(panel);

    document.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Escape",
        bubbles: true,
        composed: true,
      }),
    );
    await settle(element);

    expect(document.body.style.overflow).toBe("");
    expect(document.activeElement).toBe(trigger);
  });

  it("keeps a focus tooltip open when focus moves into its interactive panel", async () => {
    vi.useFakeTimers();
    const { element, trigger } = await mountTooltip((tooltip) => {
      tooltip.trigger = "focus";
      tooltip.interactive = true;
      tooltip.delay = 50;
    });

    trigger.dispatchEvent(
      new FocusEvent("focusin", { bubbles: true, composed: true }),
    );
    await settle(element);
    const panel = getTooltip(element);

    trigger.dispatchEvent(
      new FocusEvent("focusout", {
        bubbles: true,
        composed: true,
        relatedTarget: panel,
      }),
    );
    vi.advanceTimersByTime(50);
    await settle(element);

    expect(element.open).toBe(true);
  });

  it("includes slotted content in the interactive focus trap", async () => {
    const { element, trigger } = await mountTooltip((tooltip) => {
      tooltip.trigger = "click";
      tooltip.interactive = true;
    });
    const action = document.createElement("button");
    action.type = "button";
    action.slot = "content";
    action.textContent = "确认";
    element.append(action);

    trigger.click();
    await settle(element);
    const contentSlot = element.shadowRoot?.querySelector<HTMLSlotElement>(
      'slot[name="content"]',
    );
    expect(contentSlot?.assignedElements()).toContain(action);

    action.focus();
    document.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Tab",
        bubbles: true,
        composed: true,
      }),
    );

    expect(document.activeElement).toBe(trigger);
  });

  it("reflects placement and exposes tooltip and arrow parts", async () => {
    const { element } = await mountTooltip((tooltip) => {
      tooltip.placement = "bottom-end";
      tooltip.open = true;
    });

    expect(element.getAttribute("placement")).toBe("bottom-end");
    expect(getTooltip(element)?.getAttribute("data-placement")).toBe(
      "bottom-end",
    );
    expect(
      element.shadowRoot?.querySelector('[part="tooltip"]'),
    ).not.toBeNull();
    expect(element.shadowRoot?.querySelector('[part="arrow"]')).not.toBeNull();
  });
});
