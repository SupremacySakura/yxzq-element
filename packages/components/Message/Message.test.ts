import { afterEach, describe, expect, it, vi } from "vitest";
import {
  defineSuperMessage,
  showSuperMessage,
  SUPER_MESSAGE_TAG,
  SuperMessage,
} from "./index.js";

const settle = async (element: SuperMessage): Promise<void> => {
  await element.updateComplete;
  await Promise.resolve();
  await element.updateComplete;
};

const mountMessage = async (
  configure?: (element: SuperMessage) => void,
): Promise<SuperMessage> => {
  defineSuperMessage();
  const element = document.createElement(SUPER_MESSAGE_TAG);
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

describe("SuperMessage", () => {
  it("registers super-message idempotently", () => {
    expect(defineSuperMessage()).toBe(SuperMessage);
    expect(defineSuperMessage()).toBe(SuperMessage);
    expect(customElements.get(SUPER_MESSAGE_TAG)).toBe(SuperMessage);
  });

  it("defines size-specific typography and padding hooks", () => {
    expect(SuperMessage.styles.cssText).toContain(':host([size="large"])');
    expect(SuperMessage.styles.cssText).toContain(':host([size="small"])');
    expect(SuperMessage.styles.cssText).toContain("--super-message-font-size");
    expect(SuperMessage.styles.cssText).toContain(
      "--super-message-padding-inline",
    );
  });

  it("provides stable defaults and reflects primitive properties", async () => {
    const element = await mountMessage();

    expect(element.open).toBe(false);
    expect(element.message).toBe("");
    expect(element.type).toBe("info");
    expect(element.duration).toBe(3000);
    expect(element.closable).toBe(false);
    expect(element.closeLabel).toBe("关闭提示");
    expect(element.showIcon).toBe(true);
    expect(element.size).toBe("medium");
    expect(element.getAttribute("size")).toBe("medium");

    element.message = "草稿已保存";
    element.type = "success";
    element.duration = 1500;
    element.closable = true;
    element.closeLabel = "收起通知";
    element.showIcon = false;
    element.size = "small";
    await settle(element);

    expect(element.getAttribute("message")).toBe("草稿已保存");
    expect(element.getAttribute("type")).toBe("success");
    expect(element.getAttribute("duration")).toBe("1500");
    expect(element.hasAttribute("closable")).toBe(true);
    expect(element.getAttribute("close-label")).toBe("收起通知");
    expect(element.hasAttribute("show-icon")).toBe(false);
    expect(element.getAttribute("size")).toBe("small");

    element.open = true;
    await settle(element);
    expect(element.hasAttribute("open")).toBe(true);
  });

  it("renders status semantics, content and public parts", async () => {
    const element = await mountMessage((message) => {
      message.open = true;
      message.message = "已同步 3 个文件";
    });

    const message = element.shadowRoot?.querySelector<HTMLElement>(
      '[part="message"]',
    );
    expect(message?.getAttribute("role")).toBe("status");
    expect(message?.getAttribute("aria-live")).toBe("polite");
    expect(message?.getAttribute("aria-atomic")).toBe("true");
    expect(message?.textContent).toContain("已同步 3 个文件");
    expect(element.shadowRoot?.querySelector('[part="icon"]')).not.toBeNull();
    expect(element.shadowRoot?.querySelector('[part="content"]')).not.toBeNull();
  });

  it("uses assertive alert semantics for errors", async () => {
    const element = await mountMessage((message) => {
      message.open = true;
      message.type = "error";
      message.message = "保存失败";
    });

    const message = element.shadowRoot?.querySelector<HTMLElement>(
      '[part="message"]',
    );
    expect(message?.getAttribute("role")).toBe("alert");
    expect(message?.getAttribute("aria-live")).toBe("assertive");
  });

  it("renders a localizable close button that closes and emits detail", async () => {
    const element = await mountMessage((message) => {
      message.open = true;
      message.type = "warning";
      message.closable = true;
      message.closeLabel = "关闭警告";
    });
    const onClose = vi.fn();
    element.addEventListener("super-message-close", onClose);

    const close = element.shadowRoot?.querySelector<HTMLButtonElement>(
      '[part="close"]',
    );
    expect(close?.getAttribute("aria-label")).toBe("关闭警告");
    close?.click();
    await settle(element);

    expect(element.open).toBe(false);
    expect(element.shadowRoot?.querySelector('[part="message"]')).toBeNull();
    const event = onClose.mock.calls[0]?.[0] as CustomEvent<{ type: string }>;
    expect(event.bubbles).toBe(true);
    expect(event.composed).toBe(true);
    expect(event.detail).toEqual({ type: "warning" });
  });

  it("auto closes after duration and emits a composed close event", async () => {
    vi.useFakeTimers();
    const element = await mountMessage((message) => {
      message.open = true;
      message.duration = 80;
      message.type = "success";
    });
    const onClose = vi.fn();
    document.body.addEventListener("super-message-close", onClose);

    vi.advanceTimersByTime(79);
    await settle(element);
    expect(element.open).toBe(true);

    vi.advanceTimersByTime(1);
    await settle(element);

    expect(element.open).toBe(false);
    const event = onClose.mock.calls[0]?.[0] as CustomEvent<{ type: string }>;
    expect(event.detail).toEqual({ type: "success" });
    expect(event.bubbles).toBe(true);
    expect(event.composed).toBe(true);
  });

  it("stays open when duration is zero", async () => {
    vi.useFakeTimers();
    const element = await mountMessage((message) => {
      message.open = true;
      message.duration = 0;
    });

    vi.advanceTimersByTime(10000);
    await settle(element);

    expect(element.open).toBe(true);
  });

  it("restarts the timer when duration changes", async () => {
    vi.useFakeTimers();
    const element = await mountMessage((message) => {
      message.open = true;
      message.duration = 100;
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

  it("supports slot content and programmatic open without user events", async () => {
    const element = await mountMessage((message) => {
      message.open = true;
      message.message = "属性文案";
    });
    const content = document.createElement("span");
    content.textContent = "Slot 文案";
    element.append(content);
    await settle(element);
    const onClose = vi.fn();
    element.addEventListener("super-message-close", onClose);

    const slot = element.shadowRoot?.querySelector<HTMLSlotElement>(
      '[part="content"] slot',
    );
    expect(slot?.assignedElements()).toEqual([content]);

    element.open = false;
    await settle(element);
    expect(onClose).not.toHaveBeenCalled();

    element.open = true;
    await settle(element);
    expect(element.shadowRoot?.querySelector('[part="message"]')).not.toBeNull();
    expect(onClose).not.toHaveBeenCalled();
  });

  it("does not schedule a timer when rendered closed", async () => {
    vi.useFakeTimers();
    const element = await mountMessage((message) => {
      message.open = false;
      message.duration = 20;
    });

    vi.advanceTimersByTime(100);
    await settle(element);

    expect(element.open).toBe(false);
    expect(element.shadowRoot?.querySelector('[part="message"]')).toBeNull();
  });
});

describe("showSuperMessage", () => {
  it("creates a message on document.body and returns a close handle", async () => {
    const handle = showSuperMessage({
      message: "网络连接已恢复",
      type: "success",
      duration: 0,
      size: "large",
    });
    const element = document.body.querySelector<SuperMessage>(
      SUPER_MESSAGE_TAG,
    );

    expect(element).toBeInstanceOf(SuperMessage);
    expect(element?.open).toBe(true);
    expect(element?.message).toBe("网络连接已恢复");
    expect(element?.type).toBe("success");
    expect(element?.duration).toBe(0);
    expect(element?.size).toBe("large");

    handle.close();
    expect(element?.isConnected).toBe(false);
  });

  it("is a safe no-op without a document", () => {
    vi.stubGlobal("document", undefined);

    const handle = showSuperMessage({ message: "SSR" });

    expect(() => handle.close()).not.toThrow();
  });

  it("removes an imperative message after it auto closes", async () => {
    vi.useFakeTimers();
    showSuperMessage({ message: "即将移除", duration: 20 });
    const element = document.body.querySelector<SuperMessage>(
      SUPER_MESSAGE_TAG,
    );
    expect(element?.isConnected).toBe(true);
    await settle(element as SuperMessage);

    vi.advanceTimersByTime(20);
    await settle(element as SuperMessage);

    expect(element?.isConnected).toBe(false);
  });
});
