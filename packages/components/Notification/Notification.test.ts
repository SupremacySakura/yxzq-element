import { afterEach, describe, expect, it, vi } from "vitest";
import {
  defineSuperNotification,
  showSuperNotification,
  SUPER_NOTIFICATION_TAG,
  SuperNotification,
} from "./index.js";

const settle = async (element: SuperNotification): Promise<void> => {
  await element.updateComplete;
  await Promise.resolve();
  await element.updateComplete;
};

const mountNotification = async (
  configure?: (element: SuperNotification) => void,
): Promise<SuperNotification> => {
  defineSuperNotification();
  const element = document.createElement(SUPER_NOTIFICATION_TAG);
  configure?.(element);
  document.body.append(element);
  await settle(element);
  return element;
};

afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllGlobals();
  document.body.replaceChildren();
});

describe("SuperNotification", () => {
  it("registers super-notification idempotently", () => {
    expect(defineSuperNotification()).toBe(SuperNotification);
    expect(defineSuperNotification()).toBe(SuperNotification);
    expect(customElements.get(SUPER_NOTIFICATION_TAG)).toBe(
      SuperNotification,
    );
  });

  it("provides stable defaults and reflects primitive properties", async () => {
    const element = await mountNotification();

    expect(element.open).toBe(false);
    expect(element.title).toBe("");
    expect(element.message).toBe("");
    expect(element.type).toBe("info");
    expect(element.placement).toBe("top-right");
    expect(element.duration).toBe(4500);
    expect(element.closable).toBe(true);
    expect(element.closeLabel).toBe("关闭通知");
    expect(element.showIcon).toBe(true);

    element.title = "同步完成";
    element.message = "所有文件已更新";
    element.type = "success";
    element.placement = "bottom-left";
    element.duration = 2000;
    element.closable = false;
    element.closeLabel = "收起通知";
    element.showIcon = false;
    await settle(element);

    expect(element.getAttribute("title")).toBe("同步完成");
    expect(element.getAttribute("message")).toBe("所有文件已更新");
    expect(element.getAttribute("type")).toBe("success");
    expect(element.getAttribute("placement")).toBe("bottom-left");
    expect(element.getAttribute("duration")).toBe("2000");
    expect(element.hasAttribute("closable")).toBe(false);
    expect(element.getAttribute("close-label")).toBe("收起通知");
    expect(element.hasAttribute("show-icon")).toBe(false);

    element.open = true;
    await settle(element);
    expect(element.hasAttribute("open")).toBe(true);
  });

  it("renders status semantics, title, message and public parts", async () => {
    const element = await mountNotification((notification) => {
      notification.open = true;
      notification.title = "同步完成";
      notification.message = "已更新 3 个文件";
    });

    const notification = element.shadowRoot?.querySelector<HTMLElement>(
      '[part="notification"]',
    );
    expect(notification?.getAttribute("role")).toBe("status");
    expect(notification?.getAttribute("aria-live")).toBe("polite");
    expect(notification?.getAttribute("aria-atomic")).toBe("true");
    expect(notification?.textContent).toContain("同步完成");
    expect(notification?.textContent).toContain("已更新 3 个文件");
    expect(element.shadowRoot?.querySelector('[part="icon"]')).not.toBeNull();
    expect(element.shadowRoot?.querySelector('[part="title"]')).not.toBeNull();
    expect(element.shadowRoot?.querySelector('[part="content"]')).not.toBeNull();
    expect(element.shadowRoot?.querySelector('[part="close"]')).not.toBeNull();
  });

  it("uses assertive alert semantics for errors", async () => {
    const element = await mountNotification((notification) => {
      notification.open = true;
      notification.type = "error";
      notification.message = "同步失败";
    });

    const notification = element.shadowRoot?.querySelector<HTMLElement>(
      '[part="notification"]',
    );
    expect(notification?.getAttribute("role")).toBe("alert");
    expect(notification?.getAttribute("aria-live")).toBe("assertive");
  });

  it("supports title and default slots", async () => {
    const element = await mountNotification((notification) => {
      notification.open = true;
      notification.title = "属性标题";
      notification.message = "属性正文";
    });
    const title = document.createElement("span");
    title.slot = "title";
    title.textContent = "Slot 标题";
    const content = document.createElement("span");
    content.textContent = "Slot 正文";
    element.append(title, content);
    await settle(element);

    const titleSlot = element.shadowRoot?.querySelector<HTMLSlotElement>(
      'slot[name="title"]',
    );
    const contentSlot = element.shadowRoot?.querySelector<HTMLSlotElement>(
      '[part="content"] slot',
    );
    expect(titleSlot?.assignedElements()).toEqual([title]);
    expect(contentSlot?.assignedElements()).toEqual([content]);
    expect(
      element.shadowRoot?.querySelector('[part="content"]')?.textContent,
    ).not.toContain("属性正文");
  });

  it("renders a title slot even when the title property is empty", async () => {
    const element = await mountNotification((notification) => {
      notification.open = true;
    });
    const title = document.createElement("strong");
    title.slot = "title";
    title.textContent = "仅有标题槽";
    element.append(title);
    await settle(element);

    const titleSlot = element.shadowRoot?.querySelector<HTMLSlotElement>(
      'slot[name="title"]',
    );
    expect(titleSlot?.assignedElements()).toEqual([title]);
    expect(element.shadowRoot?.querySelector('[part="title"]')).not.toBeNull();
  });

  it("closes with a localizable button and emits the type", async () => {
    const element = await mountNotification((notification) => {
      notification.open = true;
      notification.type = "warning";
      notification.closeLabel = "关闭警告";
    });
    const onClose = vi.fn();
    document.body.addEventListener("super-notification-close", onClose);

    const close = element.shadowRoot?.querySelector<HTMLButtonElement>(
      '[part="close"]',
    );
    expect(close?.getAttribute("aria-label")).toBe("关闭警告");
    close?.click();
    await settle(element);

    expect(element.open).toBe(false);
    expect(
      element.shadowRoot?.querySelector('[part="notification"]'),
    ).toBeNull();
    const event = onClose.mock.calls[0]?.[0] as CustomEvent<{ type: string }>;
    expect(event.bubbles).toBe(true);
    expect(event.composed).toBe(true);
    expect(event.detail).toEqual({ type: "warning" });
  });

  it("does not leak the internal close click to the host", async () => {
    const element = await mountNotification((notification) => {
      notification.open = true;
    });
    const onHostClick = vi.fn();
    element.addEventListener("click", onHostClick);

    element.shadowRoot
      ?.querySelector<HTMLButtonElement>('[part="close"]')
      ?.click();
    await settle(element);

    expect(onHostClick).not.toHaveBeenCalled();
    expect(element.open).toBe(false);
  });

  it("auto closes after duration", async () => {
    vi.useFakeTimers();
    const element = await mountNotification((notification) => {
      notification.open = true;
      notification.duration = 80;
      notification.type = "success";
    });
    const onClose = vi.fn();
    element.addEventListener("super-notification-close", onClose);

    vi.advanceTimersByTime(79);
    await settle(element);
    expect(element.open).toBe(true);

    vi.advanceTimersByTime(1);
    await settle(element);
    expect(element.open).toBe(false);
    expect(
      (onClose.mock.calls[0]?.[0] as CustomEvent<{ type: string }>).detail,
    ).toEqual({ type: "success" });
  });

  it("stays open when duration is zero", async () => {
    vi.useFakeTimers();
    const element = await mountNotification((notification) => {
      notification.open = true;
      notification.duration = 0;
    });

    vi.advanceTimersByTime(10000);
    await settle(element);

    expect(element.open).toBe(true);
  });

  it("restarts the timer when duration changes", async () => {
    vi.useFakeTimers();
    const element = await mountNotification((notification) => {
      notification.open = true;
      notification.duration = 100;
    });

    vi.advanceTimersByTime(60);
    element.duration = 200;
    await settle(element);
    vi.advanceTimersByTime(150);
    await settle(element);
    expect(element.open).toBe(true);

    vi.advanceTimersByTime(50);
    await settle(element);
    expect(element.open).toBe(false);
  });

  it("renders all placements and supports hiding the icon or close button", async () => {
    const element = await mountNotification((notification) => {
      notification.open = true;
      notification.placement = "bottom-left";
      notification.closable = false;
      notification.showIcon = false;
    });

    const notification = element.shadowRoot?.querySelector<HTMLElement>(
      '[part="notification"]',
    );
    expect(notification?.dataset.placement).toBe("bottom-left");
    expect(element.getAttribute("placement")).toBe("bottom-left");
    expect(element.shadowRoot?.querySelector('[part="icon"]')).toBeNull();
    expect(element.shadowRoot?.querySelector('[part="close"]')).toBeNull();
  });

  it("does not schedule a timer when rendered closed", async () => {
    vi.useFakeTimers();
    const element = await mountNotification((notification) => {
      notification.open = false;
      notification.duration = 20;
    });

    vi.advanceTimersByTime(100);
    await settle(element);

    expect(element.open).toBe(false);
    expect(
      element.shadowRoot?.querySelector('[part="notification"]'),
    ).toBeNull();
  });
});

describe("showSuperNotification", () => {
  it("creates a notification on document.body and returns a close handle", () => {
    const handle = showSuperNotification({
      title: "备份完成",
      message: "已保存 12 个文件",
      type: "success",
      placement: "bottom-right",
      duration: 0,
      closable: false,
    });
    const element = document.body.querySelector<SuperNotification>(
      SUPER_NOTIFICATION_TAG,
    );

    expect(element).toBeInstanceOf(SuperNotification);
    expect(element?.open).toBe(true);
    expect(element?.title).toBe("备份完成");
    expect(element?.message).toBe("已保存 12 个文件");
    expect(element?.type).toBe("success");
    expect(element?.placement).toBe("bottom-right");
    expect(element?.duration).toBe(0);
    expect(element?.closable).toBe(false);

    handle.close();
    expect(element?.isConnected).toBe(false);
  });

  it("is a safe no-op without a document", () => {
    vi.stubGlobal("document", undefined);

    const handle = showSuperNotification({ message: "SSR" });

    expect(() => handle.close()).not.toThrow();
  });

  it("removes an imperative notification after it auto closes", async () => {
    vi.useFakeTimers();
    showSuperNotification({ message: "即将移除", duration: 20 });
    const element = document.body.querySelector<SuperNotification>(
      SUPER_NOTIFICATION_TAG,
    );
    expect(element?.isConnected).toBe(true);
    await settle(element as SuperNotification);

    vi.advanceTimersByTime(20);
    await settle(element as SuperNotification);

    expect(element?.isConnected).toBe(false);
  });
});
