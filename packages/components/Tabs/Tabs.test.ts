import { afterEach, describe, expect, it, vi } from "vitest";
import { defineSuperTabs, SUPER_TABS_TAG, SuperTabs } from "./index.js";

const mountTabs = async () => {
  defineSuperTabs();
  const element = document.createElement(SUPER_TABS_TAG);
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

afterEach(() => {
  document.body.replaceChildren();
});

describe("SuperTabs", () => {
  it("registers the super-tabs tag idempotently", () => {
    expect(defineSuperTabs()).toBe(SuperTabs);
    expect(defineSuperTabs()).toBe(SuperTabs);
    expect(customElements.get(SUPER_TABS_TAG)).toBe(SuperTabs);
  });

  it("provides stable defaults and reflects primitive options", async () => {
    const element = await mountTabs();

    expect(element.active).toBe("");
    expect(element.orientation).toBe("horizontal");
    expect(element.variant).toBe("line");
    expect(element.size).toBe("medium");
    expect(element.closable).toBe(false);
    expect(element.items).toEqual([]);
    expect(element.closeLabel).toBe("关闭标签页");

    element.active = "profile";
    element.orientation = "vertical";
    element.variant = "segment";
    element.size = "large";
    element.closable = true;
    element.closeLabel = "关闭此页";
    await element.updateComplete;

    expect(element.getAttribute("active")).toBe("profile");
    expect(element.getAttribute("orientation")).toBe("vertical");
    expect(element.getAttribute("variant")).toBe("segment");
    expect(element.getAttribute("size")).toBe("large");
    expect(element.hasAttribute("closable")).toBe(true);
    expect(element.getAttribute("close-label")).toBe("关闭此页");
  });

  it("renders built-in tabs from items with tablist semantics", async () => {
    const element = await mountTabs();
    element.items = [
      { key: "overview", label: "概览" },
      { key: "usage", label: "用法" },
      { key: "api", label: "API", disabled: true },
    ];
    element.active = "usage";
    await element.updateComplete;

    const tablist = element.shadowRoot?.querySelector('[role="tablist"]');
    const tabs = element.shadowRoot?.querySelectorAll<HTMLButtonElement>(
      '[role="tab"]',
    );
    const panel = element.shadowRoot?.querySelector('[role="tabpanel"]');

    expect(tablist?.getAttribute("aria-orientation")).toBe("horizontal");
    expect(tabs).toHaveLength(3);
    expect(tabs?.[0]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs?.[1]?.getAttribute("aria-selected")).toBe("true");
    expect(tabs?.[1]?.getAttribute("tabindex")).toBe("0");
    expect(tabs?.[0]?.getAttribute("tabindex")).toBe("-1");
    expect(tabs?.[2]?.disabled).toBe(true);
    expect(tabs?.[2]?.getAttribute("aria-disabled")).toBe("true");
    expect(tabs?.[1]?.getAttribute("aria-controls")).toBe(panel?.id);
    expect(panel?.getAttribute("aria-labelledby")).toBe(tabs?.[1]?.id);
  });

  it("uses consumer-provided tabs from the tab slot and adopts their keys", async () => {
    const element = await mountTabs();
    const first = document.createElement("button");
    first.slot = "tab";
    first.dataset.tabKey = "one";
    first.textContent = "第一页";
    const second = document.createElement("button");
    second.slot = "tab";
    second.dataset.tabKey = "two";
    second.textContent = "第二页";
    element.append(first, second);
    element.active = "two";
    await element.updateComplete;

    expect(first.getAttribute("role")).toBe("tab");
    expect(first.getAttribute("aria-selected")).toBe("false");
    expect(first.getAttribute("tabindex")).toBe("-1");
    expect(second.getAttribute("aria-selected")).toBe("true");
    expect(second.getAttribute("tabindex")).toBe("0");
    expect(first.id).not.toBe("");
    expect(second.getAttribute("aria-controls")).not.toBe("");
  });

  it("moves with arrow keys, Home and End while skipping disabled tabs", async () => {
    const element = await mountTabs();
    element.items = [
      { key: "one", label: "一" },
      { key: "two", label: "二", disabled: true },
      { key: "three", label: "三" },
    ];
    element.active = "one";
    await element.updateComplete;

    const onChange = vi.fn();
    document.body.addEventListener("super-tabs-change", onChange);
    const tablist = element.shadowRoot?.querySelector<HTMLElement>(
      '[role="tablist"]',
    );
    const first = element.shadowRoot?.querySelector<HTMLButtonElement>(
      '[data-tab-key="one"]',
    );

    first?.focus();
    keydown(tablist!, "ArrowRight");
    await element.updateComplete;
    expect(element.active).toBe("three");
    expect(element.shadowRoot?.activeElement).toBe(
      element.shadowRoot?.querySelector('[data-tab-key="three"]'),
    );

    keydown(tablist!, "End");
    await element.updateComplete;
    expect(element.active).toBe("three");

    keydown(tablist!, "ArrowRight");
    await element.updateComplete;
    expect(element.active).toBe("one");

    keydown(tablist!, "End");
    await element.updateComplete;
    keydown(tablist!, "Home");
    await element.updateComplete;
    expect(element.active).toBe("one");
    expect(onChange).toHaveBeenCalledTimes(4);
  });

  it("uses ArrowUp and ArrowDown in vertical orientation", async () => {
    const element = await mountTabs();
    element.items = [
      { key: "one", label: "一" },
      { key: "two", label: "二" },
    ];
    element.active = "one";
    element.orientation = "vertical";
    await element.updateComplete;

    const tablist = element.shadowRoot?.querySelector<HTMLElement>(
      '[role="tablist"]',
    );
    keydown(tablist!, "ArrowDown");
    await element.updateComplete;

    expect(element.active).toBe("two");
    expect(tablist?.getAttribute("aria-orientation")).toBe("vertical");
  });

  it("dispatches a composed change event with the selected key", async () => {
    const element = await mountTabs();
    element.items = [
      { key: "one", label: "一" },
      { key: "two", label: "二" },
    ];
    element.active = "one";
    await element.updateComplete;

    const onChange = vi.fn();
    document.body.addEventListener("super-tabs-change", onChange);
    element.shadowRoot
      ?.querySelector<HTMLButtonElement>('[data-tab-key="two"]')
      ?.click();

    expect(onChange).toHaveBeenCalledTimes(1);
    const event = onChange.mock.calls[0]?.[0] as CustomEvent<{ active: string }>;
    expect(event.bubbles).toBe(true);
    expect(event.composed).toBe(true);
    expect(event.detail).toEqual({ active: "two" });
    expect(element.active).toBe("two");
  });

  it("renders a native close button per tab and emits close without changing tabs", async () => {
    const element = await mountTabs();
    element.items = [
      { key: "one", label: "一" },
      { key: "two", label: "二" },
    ];
    element.active = "one";
    element.closable = true;
    await element.updateComplete;

    const onClose = vi.fn();
    document.body.addEventListener("super-tabs-close", onClose);
    const close = element.shadowRoot?.querySelector<HTMLButtonElement>(
      '[data-close-key="two"]',
    );
    expect(close?.tagName).toBe("BUTTON");
    expect(close?.getAttribute("aria-label")).toBe("关闭标签页：二");
    close?.click();
    await element.updateComplete;

    expect(onClose).toHaveBeenCalledTimes(1);
    const event = onClose.mock.calls[0]?.[0] as CustomEvent<{ key: string }>;
    expect(event.bubbles).toBe(true);
    expect(event.composed).toBe(true);
    expect(event.detail).toEqual({ key: "two" });
    expect(element.active).toBe("one");
  });

  it("falls back to the first enabled tab when active is unavailable", async () => {
    const element = await mountTabs();
    element.items = [
      { key: "one", label: "一", disabled: true },
      { key: "two", label: "二" },
    ];
    element.active = "missing";
    await element.updateComplete;

    const tabs = element.shadowRoot?.querySelectorAll<HTMLButtonElement>(
      '[role="tab"]',
    );
    expect(tabs?.[0]?.getAttribute("aria-selected")).toBe("false");
    expect(tabs?.[1]?.getAttribute("aria-selected")).toBe("true");
    expect(tabs?.[1]?.getAttribute("tabindex")).toBe("0");
  });
});
