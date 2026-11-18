import { afterEach, describe, expect, it, vi } from "vitest";
import {
  defineSuperDialog,
  SUPER_DIALOG_TAG,
  SuperDialog,
} from "./index.js";

const settle = async (element: SuperDialog): Promise<void> => {
  await element.updateComplete;
  await Promise.resolve();
  await element.updateComplete;
};

const mountDialog = async (
  configure?: (element: SuperDialog) => void,
): Promise<SuperDialog> => {
  defineSuperDialog();
  const element = document.createElement(SUPER_DIALOG_TAG);
  element.textContent = "对话框正文";
  configure?.(element);
  document.body.append(element);
  await settle(element);
  return element;
};

const getPart = (element: SuperDialog, part: string) =>
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

describe("SuperDialog", () => {
  it("registers super-dialog idempotently", () => {
    expect(defineSuperDialog()).toBe(SuperDialog);
    expect(defineSuperDialog()).toBe(SuperDialog);
    expect(customElements.get(SUPER_DIALOG_TAG)).toBe(SuperDialog);
  });

  it("provides stable defaults", async () => {
    const element = await mountDialog();

    expect(element.open).toBe(false);
    expect(element.title).toBe("");
    expect(element.width).toBe("");
    expect(element.size).toBe("medium");
    expect(element.closable).toBe(true);
    expect(element.maskClosable).toBe(true);
    expect(element.closeOnEscape).toBe(true);
    expect(element.closeLabel).toBe("关闭对话框");
    expect(element.showFooter).toBe(true);
    expect(element.confirmText).toBe("确定");
    expect(element.cancelText).toBe("取消");
    expect(element.loading).toBe(false);
  });

  it("reflects primitive public options as attributes", async () => {
    const element = await mountDialog();

    element.open = true;
    element.title = "编辑资料";
    element.width = "520px";
    element.size = "large";
    element.closable = false;
    element.maskClosable = false;
    element.closeOnEscape = false;
    element.closeLabel = "关闭编辑资料";
    element.showFooter = false;
    element.confirmText = "保存";
    element.cancelText = "放弃";
    element.loading = true;
    await settle(element);

    expect(element.hasAttribute("open")).toBe(true);
    expect(element.getAttribute("title")).toBe("编辑资料");
    expect(element.getAttribute("width")).toBe("520px");
    expect(element.getAttribute("size")).toBe("large");
    expect(element.hasAttribute("closable")).toBe(false);
    expect(element.hasAttribute("mask-closable")).toBe(false);
    expect(element.hasAttribute("close-on-escape")).toBe(false);
    expect(element.getAttribute("close-label")).toBe("关闭编辑资料");
    expect(element.hasAttribute("show-footer")).toBe(false);
    expect(element.getAttribute("confirm-text")).toBe("保存");
    expect(element.getAttribute("cancel-text")).toBe("放弃");
    expect(element.hasAttribute("loading")).toBe(true);
  });

  it("parses explicit false boolean attributes", async () => {
    const element = await mountDialog();

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
    const element = await mountDialog((dialog) => {
      dialog.open = true;
      dialog.title = "确认发布";
    });

    const panel = getPart(element, "dialog");
    const title = getPart(element, "title");
    const body = getPart(element, "body");
    const mask = getPart(element, "mask");
    const close = getPart(element, "close");

    expect(panel?.getAttribute("role")).toBe("dialog");
    expect(panel?.getAttribute("aria-modal")).toBe("true");
    expect(panel?.getAttribute("aria-labelledby")).toBe(title?.id);
    expect(panel?.getAttribute("aria-describedby")).toBe(body?.id);
    expect(title?.textContent).toContain("确认发布");
    expect(mask).not.toBeNull();
    expect(close?.getAttribute("aria-label")).toBe("关闭对话框");
  });

  it("traps focus, locks scroll, and restores focus on close", async () => {
    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.textContent = "打开";
    document.body.append(trigger);
    trigger.focus();

    const element = await mountDialog((dialog) => {
      dialog.open = true;
      dialog.title = "聚焦测试";
    });

    const panel = getPart(element, "dialog");
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
    const element = await mountDialog((dialog) => {
      dialog.open = true;
    });
    const onClose = vi.fn();
    element.addEventListener("super-dialog-close", onClose);

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

  it("keeps the dialog open when before-close is canceled", async () => {
    const element = await mountDialog((dialog) => {
      dialog.open = true;
    });
    const onClose = vi.fn();
    const onBeforeClose = vi.fn((event: CustomEvent) =>
      event.preventDefault(),
    );
    element.addEventListener("super-dialog-close", onClose);
    element.addEventListener("super-dialog-before-close", onBeforeClose);

    getPart(element, "close")?.click();
    await settle(element);

    expect(element.open).toBe(true);
    expect(onClose).not.toHaveBeenCalled();
    expect(onBeforeClose.mock.calls[0]?.[0].detail).toEqual({
      reason: "close-button",
    });
  });

  it("respects mask, escape, and close-button switches", async () => {
    const element = await mountDialog((dialog) => {
      dialog.open = true;
      dialog.maskClosable = false;
      dialog.closeOnEscape = false;
      dialog.closable = false;
    });

    getPart(element, "mask")?.click();
    await settle(element);
    pressEscape();
    await settle(element);

    expect(element.open).toBe(true);
    expect(getPart(element, "close")).toBeNull();
  });

  it("emits confirm and cancel events before closing", async () => {
    const element = await mountDialog((dialog) => {
      dialog.open = true;
      dialog.confirmText = "保存";
      dialog.cancelText = "稍后";
    });
    const onConfirm = vi.fn();
    const onCancel = vi.fn();
    element.addEventListener("super-dialog-confirm", onConfirm);
    element.addEventListener("super-dialog-cancel", onCancel);

    const confirm = element.shadowRoot?.querySelector<HTMLElement>(
      ".action.primary",
    );
    const cancel = element.shadowRoot?.querySelector<HTMLElement>(
      ".action:not(.primary)",
    );
    expect(confirm?.textContent?.trim()).toBe("保存");
    expect(cancel?.textContent?.trim()).toBe("稍后");

    confirm?.click();
    await settle(element);
    expect(onConfirm.mock.calls[0]?.[0].detail).toEqual({ reason: "confirm" });
    expect(element.open).toBe(false);

    element.open = true;
    await settle(element);
    cancel?.click();
    await settle(element);
    expect(onCancel.mock.calls[0]?.[0].detail).toEqual({ reason: "cancel" });
    expect(element.open).toBe(false);
  });

  it("disables confirm while loading", async () => {
    const element = await mountDialog((dialog) => {
      dialog.open = true;
      dialog.loading = true;
    });
    const onConfirm = vi.fn();
    element.addEventListener("super-dialog-confirm", onConfirm);

    const confirm = element.shadowRoot?.querySelector<HTMLButtonElement>(
      ".action.primary",
    );
    expect(confirm?.disabled).toBe(true);
    expect(confirm?.getAttribute("aria-busy")).toBe("true");
    confirm?.click();

    expect(onConfirm).not.toHaveBeenCalled();
    expect(element.open).toBe(true);
  });

  it("does not emit confirm or cancel when before-close is prevented", async () => {
    const element = await mountDialog((dialog) => {
      dialog.open = true;
    });
    const onConfirm = vi.fn();
    const onCancel = vi.fn();
    element.addEventListener("super-dialog-confirm", onConfirm);
    element.addEventListener("super-dialog-cancel", onCancel);
    element.addEventListener("super-dialog-before-close", (event) => {
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

  it("lets a footer slot replace the default actions", async () => {
    const element = await mountDialog((dialog) => {
      dialog.open = true;
    });
    const custom = document.createElement("button");
    custom.slot = "footer";
    custom.type = "button";
    custom.textContent = "自定义操作";
    element.append(custom);
    await settle(element);

    const footer = getPart(element, "footer");
    const footerSlot = footer?.querySelector<HTMLSlotElement>(
      'slot[name="footer"]',
    );
    expect(footerSlot?.assignedElements()).toEqual([custom]);
    expect(
      element.shadowRoot?.querySelector(".action.primary"),
    ).toBeNull();
  });

  it("supports a header slot while preserving the accessible name", async () => {
    const element = await mountDialog((dialog) => {
      dialog.open = true;
    });
    const header = document.createElement("span");
    header.slot = "header";
    header.textContent = "自定义标题";
    element.append(header);
    await settle(element);

    const title = getPart(element, "title");
    const headerSlot = title?.querySelector<HTMLSlotElement>(
      'slot[name="header"]',
    );
    expect(headerSlot?.assignedElements()).toEqual([header]);
    expect(getPart(element, "dialog")?.getAttribute("aria-labelledby")).toBe(
      title?.id,
    );
  });

  it("applies width and exposes every documented part", async () => {
    const element = await mountDialog((dialog) => {
      dialog.open = true;
      dialog.title = "布局";
      dialog.width = "520px";
    });

    const panel = getPart(element, "dialog");
    expect(panel?.getAttribute("style")).toContain("--_super-dialog-width: 520px");

    for (const part of [
      "dialog",
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
