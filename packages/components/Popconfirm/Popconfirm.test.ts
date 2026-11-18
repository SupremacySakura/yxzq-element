import { afterEach, describe, expect, it, vi } from "vitest";
import {
  defineSuperPopconfirm,
  SUPER_POPCONFIRM_TAG,
  SuperPopconfirm,
} from "./index.js";

const settle = async (element: SuperPopconfirm): Promise<void> => {
  await element.updateComplete;
  await Promise.resolve();
  await element.updateComplete;
};

const mountPopconfirm = async (
  configure?: (element: SuperPopconfirm, trigger: HTMLButtonElement) => void,
): Promise<{ element: SuperPopconfirm; trigger: HTMLButtonElement }> => {
  defineSuperPopconfirm();
  const element = document.createElement(SUPER_POPCONFIRM_TAG);
  const trigger = document.createElement("button");
  trigger.type = "button";
  trigger.textContent = "删除草稿";
  element.append(trigger);
  configure?.(element, trigger);
  document.body.append(element);
  await settle(element);
  return { element, trigger };
};

const getPopconfirm = (element: SuperPopconfirm) =>
  element.shadowRoot?.querySelector<HTMLElement>('[part="popconfirm"]');

afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllGlobals();
  document.body.replaceChildren();
});

describe("SuperPopconfirm", () => {
  it("registers super-popconfirm idempotently", () => {
    expect(defineSuperPopconfirm()).toBe(SuperPopconfirm);
    expect(defineSuperPopconfirm()).toBe(SuperPopconfirm);
    expect(customElements.get(SUPER_POPCONFIRM_TAG)).toBe(SuperPopconfirm);
  });

  it("defines size-specific typography and padding hooks", () => {
    expect(SuperPopconfirm.styles.cssText).toContain(':host([size="large"])');
    expect(SuperPopconfirm.styles.cssText).toContain(':host([size="small"])');
    expect(SuperPopconfirm.styles.cssText).toContain(
      "--super-popconfirm-font-size",
    );
    expect(SuperPopconfirm.styles.cssText).toContain(
      "--super-popconfirm-padding-inline",
    );
  });

  it("provides stable defaults and reflects primitive properties", async () => {
    const { element } = await mountPopconfirm();

    expect(element.open).toBe(false);
    expect(element.title).toBe("");
    expect(element.content).toBe("");
    expect(element.placement).toBe("top");
    expect(element.trigger).toBe("click");
    expect(element.confirmText).toBe("确定");
    expect(element.cancelText).toBe("取消");
    expect(element.confirmLoading).toBe(false);
    expect(element.disabled).toBe(false);
    expect(element.icon).toBe("?");
    expect(element.closeOnOutsideClick).toBe(true);
    expect(element.closeOnEscape).toBe(true);
    expect(element.size).toBe("medium");
    expect(element.getAttribute("size")).toBe("medium");

    element.title = "删除这条草稿？";
    element.content = "删除后无法恢复。";
    element.placement = "bottom-end";
    element.trigger = "hover";
    element.confirmText = "删除";
    element.cancelText = "保留";
    element.confirmLoading = true;
    element.disabled = true;
    element.icon = "!";
    element.closeOnOutsideClick = false;
    element.closeOnEscape = false;
    element.size = "small";
    await settle(element);

    expect(element.getAttribute("title")).toBe("删除这条草稿？");
    expect(element.getAttribute("content")).toBe("删除后无法恢复。");
    expect(element.getAttribute("placement")).toBe("bottom-end");
    expect(element.getAttribute("trigger")).toBe("hover");
    expect(element.getAttribute("confirm-text")).toBe("删除");
    expect(element.getAttribute("cancel-text")).toBe("保留");
    expect(element.hasAttribute("confirm-loading")).toBe(true);
    expect(element.hasAttribute("disabled")).toBe(true);
    expect(element.getAttribute("icon")).toBe("!");
    expect(element.hasAttribute("close-on-outside-click")).toBe(false);
    expect(element.hasAttribute("close-on-escape")).toBe(false);
    expect(element.getAttribute("size")).toBe("small");
  });

  it("opens on click with alertdialog semantics and focuses cancel", async () => {
    const { element, trigger } = await mountPopconfirm((popconfirm) => {
      popconfirm.title = "删除这条草稿？";
      popconfirm.content = "删除后无法恢复。";
    });
    const onOpenChange = vi.fn();
    document.body.addEventListener(
      "super-popconfirm-open-change",
      onOpenChange,
    );

    trigger.click();
    await settle(element);

    const popconfirm = getPopconfirm(element);
    const cancel = element.shadowRoot?.querySelector<HTMLButtonElement>(
      '[part="cancel"]',
    );
    expect(popconfirm?.getAttribute("role")).toBe("alertdialog");
    expect(popconfirm?.getAttribute("aria-modal")).toBe("false");
    expect(popconfirm?.getAttribute("aria-labelledby")).toBe(
      element.shadowRoot?.querySelector('[part="title"]')?.id,
    );
    expect(popconfirm?.getAttribute("aria-describedby")).toBe(
      element.shadowRoot?.querySelector('[part="content"]')?.id,
    );
    expect(popconfirm?.textContent).toContain("删除这条草稿？");
    expect(popconfirm?.textContent).toContain("删除后无法恢复。");
    expect(trigger.getAttribute("aria-expanded")).toBe("true");
    expect(trigger.getAttribute("aria-haspopup")).toBe("dialog");
    expect(trigger.getAttribute("aria-controls")).toBe(popconfirm?.id);
    expect(element.shadowRoot?.activeElement).toBe(cancel);

    const event = onOpenChange.mock.calls[0]?.[0] as CustomEvent<{
      open: boolean;
    }>;
    expect(event.bubbles).toBe(true);
    expect(event.composed).toBe(true);
    expect(event.detail).toEqual({ open: true });
  });

  it("renders the content slot instead of the content property", async () => {
    const { element, trigger } = await mountPopconfirm((popconfirm) => {
      popconfirm.content = "属性正文";
    });
    const content = document.createElement("span");
    content.slot = "content";
    content.textContent = "Slot 正文";
    element.append(content);
    await settle(element);

    trigger.click();
    await settle(element);

    const slot = element.shadowRoot?.querySelector<HTMLSlotElement>(
      'slot[name="content"]',
    );
    expect(slot?.assignedElements()).toEqual([content]);
    expect(getPopconfirm(element)?.textContent).not.toContain("属性正文");
  });

  it("dispatches a cancelable confirm event with the original event", async () => {
    const { element, trigger } = await mountPopconfirm((popconfirm) => {
      popconfirm.title = "发布草稿？";
    });
    trigger.click();
    await settle(element);

    const onConfirm = vi.fn();
    const parent = document.createElement("div");
    document.body.append(parent);
    parent.append(element);
    parent.addEventListener("super-popconfirm-confirm", onConfirm);

    element.shadowRoot
      ?.querySelector<HTMLButtonElement>('[part="confirm"]')
      ?.click();
    await settle(element);

    const event = onConfirm.mock.calls[0]?.[0] as CustomEvent<{
      originalEvent: Event;
    }>;
    expect(event.bubbles).toBe(true);
    expect(event.composed).toBe(true);
    expect(event.cancelable).toBe(true);
    expect(event.detail.originalEvent).toBeInstanceOf(MouseEvent);
    expect(element.open).toBe(false);
    expect(document.activeElement).toBe(trigger);
  });

  it("keeps programmatic open changes silent and syncs trigger ARIA", async () => {
    const { element, trigger } = await mountPopconfirm();
    const onOpenChange = vi.fn();
    element.addEventListener("super-popconfirm-open-change", onOpenChange);

    element.open = true;
    await settle(element);

    expect(getPopconfirm(element)).not.toBeNull();
    expect(trigger.getAttribute("aria-expanded")).toBe("true");
    expect(onOpenChange).not.toHaveBeenCalled();

    element.open = false;
    await settle(element);

    expect(getPopconfirm(element)).toBeNull();
    expect(trigger.getAttribute("aria-expanded")).toBe("false");
    expect(onOpenChange).not.toHaveBeenCalled();
  });

  it("keeps the popconfirm open when the confirm event is canceled", async () => {
    const { element, trigger } = await mountPopconfirm();
    trigger.click();
    await settle(element);
    element.addEventListener("super-popconfirm-confirm", (event) => {
      event.preventDefault();
    });

    element.shadowRoot
      ?.querySelector<HTMLButtonElement>('[part="confirm"]')
      ?.click();
    await settle(element);

    expect(element.open).toBe(true);
  });

  it("dispatches cancel, closes and returns focus to the trigger", async () => {
    const { element, trigger } = await mountPopconfirm();
    trigger.click();
    await settle(element);
    const onCancel = vi.fn();
    element.addEventListener("super-popconfirm-cancel", onCancel);

    element.shadowRoot
      ?.querySelector<HTMLButtonElement>('[part="cancel"]')
      ?.click();
    await settle(element);

    const event = onCancel.mock.calls[0]?.[0] as CustomEvent<{
      originalEvent: Event;
    }>;
    expect(event.bubbles).toBe(true);
    expect(event.composed).toBe(true);
    expect(event.detail.originalEvent).toBeInstanceOf(MouseEvent);
    expect(element.open).toBe(false);
    expect(getPopconfirm(element)).toBeNull();
    expect(trigger.getAttribute("aria-expanded")).toBe("false");
    expect(document.activeElement).toBe(trigger);
  });

  it("blocks confirmation while loading", async () => {
    const { element, trigger } = await mountPopconfirm((popconfirm) => {
      popconfirm.confirmLoading = true;
    });
    trigger.click();
    await settle(element);
    const onConfirm = vi.fn();
    element.addEventListener("super-popconfirm-confirm", onConfirm);

    const confirm = element.shadowRoot?.querySelector<HTMLButtonElement>(
      '[part="confirm"]',
    );
    expect(confirm?.disabled).toBe(true);
    expect(confirm?.getAttribute("aria-busy")).toBe("true");
    confirm?.click();
    await settle(element);

    expect(onConfirm).not.toHaveBeenCalled();
    expect(element.open).toBe(true);
  });

  it("closes on Escape and returns focus to the trigger", async () => {
    const { element, trigger } = await mountPopconfirm();
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
    const { element, trigger } = await mountPopconfirm((popconfirm) => {
      popconfirm.closeOnEscape = false;
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

  it("closes on outside pointerdown when enabled", async () => {
    const { element, trigger } = await mountPopconfirm();
    const outside = document.createElement("button");
    outside.type = "button";
    outside.textContent = "外部操作";
    document.body.append(outside);
    trigger.click();
    await settle(element);
    outside.focus();

    outside.dispatchEvent(
      new Event("pointerdown", { bubbles: true, composed: true }),
    );
    await settle(element);

    expect(element.open).toBe(false);
    expect(getPopconfirm(element)).toBeNull();
    expect(document.activeElement).toBe(outside);
  });

  it("keeps the popconfirm open on outside pointerdown when disabled", async () => {
    const { element, trigger } = await mountPopconfirm((popconfirm) => {
      popconfirm.closeOnOutsideClick = false;
    });
    trigger.click();
    await settle(element);

    document.body.dispatchEvent(
      new Event("pointerdown", { bubbles: true, composed: true }),
    );
    await settle(element);

    expect(element.open).toBe(true);
  });

  it("supports hover opening and closing across trigger and panel", async () => {
    vi.useFakeTimers();
    const { element, trigger } = await mountPopconfirm((popconfirm) => {
      popconfirm.trigger = "hover";
    });

    trigger.dispatchEvent(new Event("pointerenter"));
    await settle(element);
    expect(element.open).toBe(true);

    trigger.dispatchEvent(new Event("pointerleave"));
    const panel = getPopconfirm(element);
    panel?.dispatchEvent(new Event("pointerenter"));
    vi.advanceTimersByTime(120);
    await settle(element);
    expect(element.open).toBe(true);

    panel?.dispatchEvent(new Event("pointerleave"));
    vi.advanceTimersByTime(120);
    await settle(element);
    expect(element.open).toBe(false);
  });

  it("supports keyboard activation for a non-native trigger", async () => {
    defineSuperPopconfirm();
    const element = document.createElement(SUPER_POPCONFIRM_TAG);
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
    expect(element.shadowRoot?.activeElement).toBe(
      element.shadowRoot?.querySelector('[part="cancel"]'),
    );
  });

  it("closes and blocks interaction while disabled", async () => {
    const { element, trigger } = await mountPopconfirm();
    trigger.click();
    await settle(element);

    element.disabled = true;
    await settle(element);
    expect(element.open).toBe(false);

    trigger.click();
    trigger.dispatchEvent(new Event("pointerenter"));
    await settle(element);
    expect(element.open).toBe(false);
  });

  it("renders public parts, custom labels, icon and placement", async () => {
    const { element, trigger } = await mountPopconfirm((popconfirm) => {
      popconfirm.title = "删除记录？";
      popconfirm.confirmText = "删除";
      popconfirm.cancelText = "保留";
      popconfirm.icon = "!";
      popconfirm.placement = "bottom-start";
    });

    trigger.click();
    await settle(element);

    expect(getPopconfirm(element)?.getAttribute("data-placement")).toBe(
      "bottom-start",
    );
    expect(element.shadowRoot?.querySelector('[part="icon"]')?.textContent)
      .toContain("!");
    expect(
      element.shadowRoot?.querySelector('[part="actions"]'),
    ).not.toBeNull();
    expect(
      element.shadowRoot?.querySelector('[part="confirm"]')?.textContent,
    ).toContain("删除");
    expect(
      element.shadowRoot?.querySelector('[part="cancel"]')?.textContent,
    ).toContain("保留");
  });
});
