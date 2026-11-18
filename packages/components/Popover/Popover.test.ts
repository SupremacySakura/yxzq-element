import { afterEach, describe, expect, it, vi } from "vitest";
import {
  defineSuperPopover,
  SUPER_POPOVER_TAG,
  SuperPopover,
} from "./index.js";

const settle = async (element: SuperPopover): Promise<void> => {
  await element.updateComplete;
  await Promise.resolve();
  await element.updateComplete;
};

const mountPopover = async (
  configure?: (element: SuperPopover, trigger: HTMLButtonElement) => void,
): Promise<{ element: SuperPopover; trigger: HTMLButtonElement }> => {
  defineSuperPopover();
  const element = document.createElement(SUPER_POPOVER_TAG);
  const trigger = document.createElement("button");
  trigger.type = "button";
  trigger.textContent = "打开详情";
  element.append(trigger);
  configure?.(element, trigger);
  document.body.append(element);
  await settle(element);
  return { element, trigger };
};

const getPopover = (element: SuperPopover) =>
  element.shadowRoot?.querySelector<HTMLElement>('[part="popover"]');

afterEach(() => {
  vi.useRealTimers();
  document.body.replaceChildren();
});

describe("SuperPopover", () => {
  it("registers super-popover idempotently", () => {
    expect(defineSuperPopover()).toBe(SuperPopover);
    expect(defineSuperPopover()).toBe(SuperPopover);
    expect(customElements.get(SUPER_POPOVER_TAG)).toBe(SuperPopover);
  });

  it("defines size-specific typography and padding hooks", () => {
    expect(SuperPopover.styles.cssText).toContain(':host([size="large"])');
    expect(SuperPopover.styles.cssText).toContain(':host([size="small"])');
    expect(SuperPopover.styles.cssText).toContain("--super-popover-font-size");
    expect(SuperPopover.styles.cssText).toContain(
      "--super-popover-padding-inline",
    );
  });

  it("provides stable defaults and reflects primitive properties", async () => {
    const { element } = await mountPopover();

    expect(element.open).toBe(false);
    expect(element.placement).toBe("bottom");
    expect(element.trigger).toBe("click");
    expect(element.title).toBe("");
    expect(element.content).toBe("");
    expect(element.disabled).toBe(false);
    expect(element.arrow).toBe(true);
    expect(element.offset).toBe(8);
    expect(element.width).toBe(280);
    expect(element.closeOnOutsideClick).toBe(true);
    expect(element.closeOnEscape).toBe(true);
    expect(element.size).toBe("medium");
    expect(element.getAttribute("size")).toBe("medium");

    element.placement = "top-start";
    element.trigger = "hover";
    element.title = "账户信息";
    element.content = "查看最近登录记录";
    element.disabled = true;
    element.arrow = false;
    element.offset = 12;
    element.width = 320;
    element.closeOnOutsideClick = false;
    element.closeOnEscape = false;
    element.size = "large";
    await settle(element);

    expect(element.getAttribute("placement")).toBe("top-start");
    expect(element.getAttribute("trigger")).toBe("hover");
    expect(element.getAttribute("title")).toBe("账户信息");
    expect(element.getAttribute("content")).toBe("查看最近登录记录");
    expect(element.hasAttribute("disabled")).toBe(true);
    expect(element.hasAttribute("arrow")).toBe(false);
    expect(element.getAttribute("offset")).toBe("12");
    expect(element.getAttribute("width")).toBe("320");
    expect(element.hasAttribute("close-on-outside-click")).toBe(false);
    expect(element.hasAttribute("close-on-escape")).toBe(false);
    expect(element.getAttribute("size")).toBe("large");
  });

  it("opens on click, exposes dialog semantics and emits open-change", async () => {
    const { element, trigger } = await mountPopover((popover) => {
      popover.title = "筛选条件";
      popover.content = "选择需要查看的记录";
    });
    const parent = document.createElement("div");
    document.body.append(parent);
    parent.append(element);
    const onOpenChange = vi.fn();
    parent.addEventListener("super-popover-open-change", onOpenChange);

    trigger.click();
    await settle(element);

    const popover = getPopover(element);
    expect(popover?.getAttribute("role")).toBe("dialog");
    expect(popover?.getAttribute("tabindex")).toBe("-1");
    expect(popover?.textContent).toContain("筛选条件");
    expect(popover?.textContent).toContain("选择需要查看的记录");
    expect(trigger.getAttribute("aria-expanded")).toBe("true");
    expect(trigger.getAttribute("aria-haspopup")).toBe("dialog");
    expect(trigger.getAttribute("aria-controls")).toBe(popover?.id);

    const event = onOpenChange.mock.calls[0]?.[0] as CustomEvent<{
      open: boolean;
    }>;
    expect(event.bubbles).toBe(true);
    expect(event.composed).toBe(true);
    expect(event.detail).toEqual({ open: true });
  });

  it("prefers the content slot over the content property", async () => {
    const { element, trigger } = await mountPopover((popover) => {
      popover.content = "属性内容";
    });
    const content = document.createElement("span");
    content.slot = "content";
    content.textContent = "Slot 内容";
    element.append(content);
    await settle(element);

    trigger.click();
    await settle(element);

    const contentSlot = element.shadowRoot?.querySelector<HTMLSlotElement>(
      'slot[name="content"]',
    );
    expect(contentSlot?.assignedElements()).toEqual([content]);
    expect(contentSlot?.assignedNodes({ flatten: true })).toEqual([content]);
    expect(getPopover(element)?.getAttribute("aria-label")).toBeNull();
    expect(getPopover(element)?.textContent).not.toContain("属性内容");
  });

  it("closes on an outside pointerdown when enabled", async () => {
    const { element, trigger } = await mountPopover();

    trigger.click();
    await settle(element);
    expect(element.open).toBe(true);

    document.body.dispatchEvent(
      new Event("pointerdown", { bubbles: true, composed: true }),
    );
    await settle(element);

    expect(element.open).toBe(false);
    expect(getPopover(element)).toBeNull();
    expect(trigger.getAttribute("aria-expanded")).toBe("false");
  });

  it("keeps the popover open on outside pointerdown when disabled", async () => {
    const { element, trigger } = await mountPopover((popover) => {
      popover.closeOnOutsideClick = false;
    });

    trigger.click();
    await settle(element);
    document.body.dispatchEvent(
      new Event("pointerdown", { bubbles: true, composed: true }),
    );
    await settle(element);

    expect(element.open).toBe(true);
  });

  it("closes on Escape and returns focus to the trigger", async () => {
    const { element, trigger } = await mountPopover();

    trigger.click();
    await settle(element);
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

  it("respects closeOnEscape", async () => {
    const { element, trigger } = await mountPopover((popover) => {
      popover.closeOnEscape = false;
    });

    trigger.click();
    await settle(element);
    document.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Escape",
        bubbles: true,
        composed: true,
      }),
    );
    await settle(element);

    expect(element.open).toBe(true);
  });

  it("supports hover opening and delayed closing across trigger and panel", async () => {
    vi.useFakeTimers();
    const { element, trigger } = await mountPopover((popover) => {
      popover.trigger = "hover";
    });

    trigger.dispatchEvent(new Event("pointerenter"));
    await settle(element);
    expect(element.open).toBe(true);

    trigger.dispatchEvent(new Event("pointerleave"));
    await Promise.resolve();
    expect(element.open).toBe(true);

    const popover = getPopover(element);
    popover?.dispatchEvent(new Event("pointerenter"));
    vi.advanceTimersByTime(120);
    await settle(element);
    expect(element.open).toBe(true);

    popover?.dispatchEvent(new Event("pointerleave"));
    vi.advanceTimersByTime(120);
    await settle(element);
    expect(element.open).toBe(false);
  });

  it("does not open on click or hover in manual mode", async () => {
    const { element, trigger } = await mountPopover((popover) => {
      popover.trigger = "manual";
    });
    const onOpenChange = vi.fn();
    element.addEventListener("super-popover-open-change", onOpenChange);

    trigger.click();
    trigger.dispatchEvent(new Event("pointerenter"));
    await settle(element);

    expect(element.open).toBe(false);
    expect(onOpenChange).not.toHaveBeenCalled();

    element.open = true;
    await settle(element);
    expect(getPopover(element)).not.toBeNull();
    expect(onOpenChange).not.toHaveBeenCalled();
  });

  it("supports keyboard activation for a non-native trigger", async () => {
    defineSuperPopover();
    const element = document.createElement(SUPER_POPOVER_TAG);
    const trigger = document.createElement("span");
    trigger.tabIndex = 0;
    trigger.textContent = "自定义触发";
    element.append(trigger);
    document.body.append(element);
    await settle(element);

    trigger.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Enter",
        bubbles: true,
        composed: true,
      }),
    );
    await settle(element);

    expect(element.open).toBe(true);
    expect(element.shadowRoot?.activeElement).toBe(getPopover(element));
  });

  it("closes and blocks interaction while disabled", async () => {
    const { element, trigger } = await mountPopover();

    trigger.click();
    await settle(element);
    element.disabled = true;
    await settle(element);

    expect(element.open).toBe(false);
    expect(getPopover(element)).toBeNull();

    trigger.click();
    trigger.dispatchEvent(new Event("pointerenter"));
    await settle(element);
    expect(element.open).toBe(false);
  });

  it("renders the title, arrow and width and exposes public parts", async () => {
    const { element, trigger } = await mountPopover((popover) => {
      popover.title = "标题";
      popover.placement = "bottom-end";
      popover.width = 360;
    });

    trigger.click();
    await settle(element);

    expect(element.getAttribute("placement")).toBe("bottom-end");
    expect(getPopover(element)?.getAttribute("data-placement")).toBe(
      "bottom-end",
    );
    expect(getPopover(element)?.style.inlineSize).toBe("360px");
    expect(element.shadowRoot?.querySelector('[part="title"]')?.textContent)
      .toContain("标题");
    expect(element.shadowRoot?.querySelector('[part="content"]')).not.toBeNull();
    expect(element.shadowRoot?.querySelector('[part="arrow"]')).not.toBeNull();

    element.arrow = false;
    await settle(element);
    expect(element.shadowRoot?.querySelector('[part="arrow"]')).toBeNull();
  });
});
