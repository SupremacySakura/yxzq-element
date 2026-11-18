import { afterEach, describe, expect, it, vi } from "vitest";
import {
  defineSuperDrawer,
  SUPER_DRAWER_TAG,
  SuperDrawer,
} from "./index.js";

const settle = async (element: SuperDrawer): Promise<void> => {
  await element.updateComplete;
  await Promise.resolve();
  await element.updateComplete;
};

const mountDrawer = async (
  configure?: (element: SuperDrawer) => void,
): Promise<SuperDrawer> => {
  defineSuperDrawer();
  const element = document.createElement(SUPER_DRAWER_TAG);
  element.textContent = "抽屉正文";
  configure?.(element);
  document.body.append(element);
  await settle(element);
  return element;
};

const getPart = (element: SuperDrawer, part: string) =>
  element.shadowRoot?.querySelector<HTMLElement>(`[part="${part}"]`);

const pressEscape = (): KeyboardEvent => {
  const event = new KeyboardEvent("keydown", {
    key: "Escape",
    bubbles: true,
    cancelable: true,
    composed: true,
  });
  document.activeElement?.dispatchEvent(event);
  return event;
};

afterEach(() => {
  document.body.replaceChildren();
});

describe("SuperDrawer", () => {
  it("registers super-drawer idempotently", () => {
    expect(defineSuperDrawer()).toBe(SuperDrawer);
    expect(defineSuperDrawer()).toBe(SuperDrawer);
    expect(customElements.get(SUPER_DRAWER_TAG)).toBe(SuperDrawer);
  });

  it("provides stable defaults", async () => {
    const element = await mountDrawer();

    expect(element.open).toBe(false);
    expect(element.title).toBe("");
    expect(element.placement).toBe("right");
    expect(element.size).toBe("medium");
    expect(element.closable).toBe(true);
    expect(element.maskClosable).toBe(true);
    expect(element.closeOnEscape).toBe(true);
    expect(element.closeLabel).toBe("关闭抽屉");
    expect(element.showFooter).toBe(true);
    expect(element.confirmText).toBe("确定");
    expect(element.cancelText).toBe("取消");
  });

  it("reflects primitive options and parses numeric sizes", async () => {
    const element = await mountDrawer();

    element.open = true;
    element.title = "筛选条件";
    element.placement = "left";
    element.size = 420;
    element.closable = false;
    element.maskClosable = false;
    element.closeOnEscape = false;
    element.closeLabel = "关闭筛选";
    element.showFooter = false;
    element.confirmText = "应用";
    element.cancelText = "重置";
    await settle(element);

    expect(element.hasAttribute("open")).toBe(true);
    expect(element.getAttribute("title")).toBe("筛选条件");
    expect(element.getAttribute("placement")).toBe("left");
    expect(element.getAttribute("size")).toBe("420");
    expect(element.hasAttribute("closable")).toBe(false);
    expect(element.hasAttribute("mask-closable")).toBe(false);
    expect(element.hasAttribute("close-on-escape")).toBe(false);
    expect(element.getAttribute("close-label")).toBe("关闭筛选");
    expect(element.hasAttribute("show-footer")).toBe(false);
    expect(element.getAttribute("confirm-text")).toBe("应用");
    expect(element.getAttribute("cancel-text")).toBe("重置");

    element.setAttribute("size", "360");
    await settle(element);
    expect(element.size).toBe(360);
  });

  it("parses explicit false boolean attributes", async () => {
    const element = await mountDrawer();

    element.setAttribute("closable", "false");
    element.setAttribute("mask-closable", "false");
    element.setAttribute("close-on-escape", "false");
    element.setAttribute("show-footer", "false");
    await settle(element);

    expect(element.closable).toBe(false);
    expect(element.maskClosable).toBe(false);
    expect(element.closeOnEscape).toBe(false);
    expect(element.showFooter).toBe(false);

    element.removeAttribute("closable");
    element.removeAttribute("mask-closable");
    element.removeAttribute("close-on-escape");
    element.removeAttribute("show-footer");
    await settle(element);

    expect(element.closable).toBe(true);
    expect(element.maskClosable).toBe(true);
    expect(element.closeOnEscape).toBe(true);
    expect(element.showFooter).toBe(true);
  });

  it("renders an accessible modal with title and body associations", async () => {
    const element = await mountDrawer((drawer) => {
      drawer.open = true;
      drawer.title = "订单详情";
    });

    const panel = getPart(element, "drawer");
    const title = getPart(element, "title");
    const body = getPart(element, "body");
    const close = getPart(element, "close");

    expect(panel?.getAttribute("role")).toBe("dialog");
    expect(panel?.getAttribute("aria-modal")).toBe("true");
    expect(panel?.getAttribute("aria-labelledby")).toBe(title?.id);
    expect(panel?.getAttribute("aria-describedby")).toBe(body?.id);
    expect(title?.textContent).toContain("订单详情");
    expect(close?.getAttribute("aria-label")).toBe("关闭抽屉");
  });

  it("supports every placement and applies numeric size", async () => {
    const element = await mountDrawer((drawer) => {
      drawer.open = true;
      drawer.size = 480;
    });

    for (const placement of ["left", "right", "top", "bottom"] as const) {
      element.placement = placement;
      await settle(element);
      expect(element.getAttribute("placement")).toBe(placement);
      expect(getPart(element, "drawer")).not.toBeNull();
    }

    expect(getPart(element, "drawer")?.getAttribute("style")).toContain(
      "--_super-drawer-size: 480px",
    );
  });

  it("traps focus, locks scroll, and restores focus on close", async () => {
    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.textContent = "打开抽屉";
    document.body.append(trigger);
    trigger.focus();

    const element = await mountDrawer((drawer) => {
      drawer.open = true;
    });

    const panel = getPart(element, "drawer");
    expect(document.body.style.overflow).toBe("hidden");
    expect(element.shadowRoot?.activeElement).toBe(panel);

    const confirm = element.shadowRoot?.querySelector<HTMLElement>(
      ".action.primary",
    );
    confirm?.focus();
    const tab = new KeyboardEvent("keydown", {
      key: "Tab",
      bubbles: true,
      cancelable: true,
    });
    document.dispatchEvent(tab);
    expect(element.shadowRoot?.activeElement).toBe(getPart(element, "close"));

    element.open = false;
    await settle(element);
    expect(document.body.style.overflow).toBe("");
    expect(document.activeElement).toBe(trigger);
  });

  it("closes from Escape and mask by default", async () => {
    const element = await mountDrawer((drawer) => {
      drawer.open = true;
    });
    const onClose = vi.fn();
    element.addEventListener("super-drawer-close", onClose);

    const escape = pressEscape();
    await settle(element);
    expect(escape.defaultPrevented).toBe(true);
    expect(element.open).toBe(false);
    expect(onClose.mock.calls[0]?.[0].detail).toEqual({ reason: "escape" });

    element.open = true;
    await settle(element);
    getPart(element, "mask")?.click();
    await settle(element);
    expect(element.open).toBe(false);
    expect(onClose.mock.calls[1]?.[0].detail).toEqual({ reason: "mask" });
  });

  it("cancels closing when before-close is prevented", async () => {
    const element = await mountDrawer((drawer) => {
      drawer.open = true;
    });
    const onClose = vi.fn();
    const onBeforeClose = vi.fn((event: CustomEvent) =>
      event.preventDefault(),
    );
    element.addEventListener("super-drawer-close", onClose);
    element.addEventListener("super-drawer-before-close", onBeforeClose);

    getPart(element, "close")?.click();
    await settle(element);

    expect(element.open).toBe(true);
    expect(onClose).not.toHaveBeenCalled();
    expect(onBeforeClose.mock.calls[0]?.[0].detail).toEqual({
      reason: "close-button",
    });
  });

  it("respects mask, escape, and close-button switches", async () => {
    const element = await mountDrawer((drawer) => {
      drawer.open = true;
      drawer.maskClosable = false;
      drawer.closeOnEscape = false;
      drawer.closable = false;
    });

    getPart(element, "mask")?.click();
    await settle(element);
    pressEscape();
    await settle(element);

    expect(element.open).toBe(true);
    expect(getPart(element, "close")).toBeNull();
  });

  it("emits confirm and cancel events before closing", async () => {
    const element = await mountDrawer((drawer) => {
      drawer.open = true;
      drawer.confirmText = "提交";
      drawer.cancelText = "返回";
    });
    const onConfirm = vi.fn();
    const onCancel = vi.fn();
    element.addEventListener("super-drawer-confirm", onConfirm);
    element.addEventListener("super-drawer-cancel", onCancel);

    element.shadowRoot?.querySelector<HTMLElement>(".action.primary")?.click();
    await settle(element);
    expect(onConfirm.mock.calls[0]?.[0].detail).toEqual({ reason: "confirm" });
    expect(element.open).toBe(false);

    element.open = true;
    await settle(element);
    element.shadowRoot
      ?.querySelector<HTMLElement>(".action:not(.primary)")
      ?.click();
    await settle(element);
    expect(onCancel.mock.calls[0]?.[0].detail).toEqual({ reason: "cancel" });
    expect(element.open).toBe(false);
  });

  it("does not emit confirm or cancel when before-close is prevented", async () => {
    const element = await mountDrawer((drawer) => {
      drawer.open = true;
    });
    const onConfirm = vi.fn();
    const onCancel = vi.fn();
    element.addEventListener("super-drawer-confirm", onConfirm);
    element.addEventListener("super-drawer-cancel", onCancel);
    element.addEventListener("super-drawer-before-close", (event) => {
      event.preventDefault();
    });

    element.shadowRoot?.querySelector<HTMLElement>(".action.primary")?.click();
    element.shadowRoot
      ?.querySelector<HTMLElement>(".action:not(.primary)")
      ?.click();
    await settle(element);

    expect(onConfirm).not.toHaveBeenCalled();
    expect(onCancel).not.toHaveBeenCalled();
    expect(element.open).toBe(true);
  });

  it("lets footer and header slots replace their default content", async () => {
    const element = await mountDrawer((drawer) => {
      drawer.open = true;
    });
    const header = document.createElement("span");
    header.slot = "header";
    header.textContent = "自定义标题";
    const footer = document.createElement("button");
    footer.slot = "footer";
    footer.type = "button";
    footer.textContent = "完成";
    element.append(header, footer);
    await settle(element);

    expect(
      getPart(element, "title")
        ?.querySelector<HTMLSlotElement>('slot[name="header"]')
        ?.assignedElements(),
    ).toEqual([header]);
    expect(
      getPart(element, "footer")
        ?.querySelector<HTMLSlotElement>('slot[name="footer"]')
        ?.assignedElements(),
    ).toEqual([footer]);
    expect(
      element.shadowRoot?.querySelector(".action.primary"),
    ).toBeNull();
    expect(getPart(element, "drawer")?.getAttribute("aria-labelledby")).toBe(
      getPart(element, "title")?.id,
    );
  });

  it("exposes every documented part", async () => {
    const element = await mountDrawer((drawer) => {
      drawer.open = true;
      drawer.title = "部件";
    });

    for (const part of [
      "drawer",
      "mask",
      "header",
      "title",
      "body",
      "footer",
      "close",
    ]) {
      expect(getPart(element, part)).not.toBeNull();
    }
  });
});
