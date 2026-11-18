import { afterEach, describe, expect, it, vi } from "vitest";
import {
  defineSuperDropdown,
  SUPER_DROPDOWN_TAG,
  SuperDropdown,
  type SuperDropdownItem,
} from "./index.js";

const settle = async (element: SuperDropdown): Promise<void> => {
  await element.updateComplete;
  await Promise.resolve();
  await element.updateComplete;
};

const mountDropdown = async (
  configure?: (
    element: SuperDropdown,
    trigger: HTMLButtonElement,
  ) => void,
): Promise<{ element: SuperDropdown; trigger: HTMLButtonElement }> => {
  defineSuperDropdown();
  const element = document.createElement(SUPER_DROPDOWN_TAG);
  const trigger = document.createElement("button");
  trigger.type = "button";
  trigger.textContent = "更多操作";
  element.append(trigger);
  configure?.(element, trigger);
  document.body.append(element);
  await settle(element);
  return { element, trigger };
};

const getMenu = (element: SuperDropdown) =>
  element.shadowRoot?.querySelector<HTMLElement>('[part="menu"]');

const getMenuItems = (element: SuperDropdown) =>
  Array.from(
    element.shadowRoot?.querySelectorAll<HTMLElement>('[role="menuitem"]') ?? [],
  );

const items: SuperDropdownItem[] = [
  { key: "edit", label: "编辑" },
  { key: "divider", label: "", divider: true },
  { key: "archive", label: "归档", disabled: true },
  { key: "copy", label: "复制链接" },
  { key: "delete", label: "删除", danger: true },
];

afterEach(() => {
  vi.useRealTimers();
  document.body.replaceChildren();
});

describe("SuperDropdown", () => {
  it("registers super-dropdown idempotently and exposes stable defaults", async () => {
    expect(defineSuperDropdown()).toBe(SuperDropdown);
    expect(defineSuperDropdown()).toBe(SuperDropdown);
    expect(customElements.get(SUPER_DROPDOWN_TAG)).toBe(SuperDropdown);

    const { element } = await mountDropdown();
    expect(element.open).toBe(false);
    expect(element.items).toEqual([]);
    expect(element.trigger).toBe("click");
    expect(element.placement).toBe("bottom-start");
    expect(element.closeOnSelect).toBe(true);
    expect(element.closeOnOutsideClick).toBe(true);
    expect(element.closeOnEscape).toBe(true);
    expect(element.disabled).toBe(false);
    expect(element.size).toBe("medium");
  });

  it("reflects primitive public properties", async () => {
    const { element } = await mountDropdown();

    element.trigger = "hover";
    element.placement = "top-end";
    element.closeOnSelect = false;
    element.closeOnOutsideClick = false;
    element.closeOnEscape = false;
    element.size = "large";
    await settle(element);

    expect(element.getAttribute("trigger")).toBe("hover");
    expect(element.getAttribute("placement")).toBe("top-end");
    expect(element.hasAttribute("close-on-select")).toBe(false);
    expect(element.hasAttribute("close-on-outside-click")).toBe(false);
    expect(element.hasAttribute("close-on-escape")).toBe(false);
    expect(element.getAttribute("size")).toBe("large");

    element.open = true;
    await settle(element);
    expect(element.getAttribute("open")).not.toBeNull();

    element.disabled = true;
    await settle(element);
    expect(element.hasAttribute("disabled")).toBe(true);
    expect(element.hasAttribute("open")).toBe(false);
  });

  it("opens on trigger click and exposes menu semantics", async () => {
    const { element, trigger } = await mountDropdown((dropdown) => {
      dropdown.items = items;
      dropdown.setAttribute("aria-label", "文件操作");
    });
    const onOpenChange = vi.fn();
    element.addEventListener("super-dropdown-open-change", onOpenChange);

    trigger.click();
    await settle(element);

    const menu = getMenu(element);
    expect(menu?.getAttribute("role")).toBe("menu");
    expect(menu?.getAttribute("aria-label")).toBe("文件操作");
    expect(menu?.getAttribute("data-placement")).toBe("bottom-start");
    expect(trigger.getAttribute("aria-haspopup")).toBe("menu");
    expect(trigger.getAttribute("aria-expanded")).toBe("true");
    expect(trigger.getAttribute("aria-controls")).toBe(menu?.id);

    const renderedItems = getMenuItems(element);
    expect(renderedItems).toHaveLength(4);
    expect(renderedItems[0]?.getAttribute("tabindex")).toBe("0");
    expect(renderedItems[1]?.getAttribute("aria-disabled")).toBe("true");
    expect(renderedItems[1]?.getAttribute("tabindex")).toBe("-1");
    expect(
      element.shadowRoot?.querySelector('[role="separator"]')?.getAttribute(
        "part",
      ),
    ).toBe("divider");

    const event = onOpenChange.mock.calls[0]?.[0] as CustomEvent<{
      open: boolean;
    }>;
    expect(event.detail).toEqual({ open: true });
    expect(event.bubbles).toBe(true);
    expect(event.composed).toBe(true);
  });

  it("moves focus with Arrow keys, Home and End while skipping disabled items", async () => {
    const { element, trigger } = await mountDropdown((dropdown) => {
      dropdown.items = items;
    });

    trigger.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "ArrowDown",
        bubbles: true,
        composed: true,
      }),
    );
    await settle(element);

    expect(element.open).toBe(true);
    expect(element.shadowRoot?.activeElement?.textContent).toBe("编辑");

    const menu = getMenu(element) as HTMLElement;
    menu.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "ArrowDown",
        bubbles: true,
        composed: true,
      }),
    );
    expect(element.shadowRoot?.activeElement?.textContent).toBe("复制链接");

    menu.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "End",
        bubbles: true,
        composed: true,
      }),
    );
    expect(element.shadowRoot?.activeElement?.textContent).toBe("删除");

    menu.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Home",
        bubbles: true,
        composed: true,
      }),
    );
    expect(element.shadowRoot?.activeElement?.textContent).toBe("编辑");
  });

  it("selects with Enter, emits a composed select event and returns focus", async () => {
    const { element, trigger } = await mountDropdown((dropdown) => {
      dropdown.items = items;
    });
    const onSelect = vi.fn();
    element.addEventListener("super-dropdown-select", onSelect);

    trigger.click();
    await settle(element);
    const copy = getMenuItems(element).find(
      (item) => item.textContent === "复制链接",
    );
    copy?.focus();
    copy?.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Enter",
        bubbles: true,
        composed: true,
      }),
    );
    await settle(element);

    const event = onSelect.mock.calls[0]?.[0] as CustomEvent<{ key: string }>;
    expect(event.detail).toEqual({ key: "copy" });
    expect(event.bubbles).toBe(true);
    expect(event.composed).toBe(true);
    expect(element.open).toBe(false);
    expect(getMenu(element)).toBeNull();
    expect(document.activeElement).toBe(trigger);
  });

  it("restores focus to a custom-element trigger", async () => {
    const { element } = await mountDropdown((dropdown) => {
      dropdown.items = items;
      dropdown.replaceChildren();
      const customTrigger = document.createElement("super-test-trigger");
      customTrigger.tabIndex = 0;
      customTrigger.textContent = "自定义触发";
      dropdown.append(customTrigger);
    });
    const customTrigger = element.querySelector<HTMLElement>(
      "super-test-trigger",
    ) as HTMLElement;

    customTrigger.click();
    await settle(element);
    getMenuItems(element)[0]?.focus();
    document.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Escape",
        bubbles: true,
        composed: true,
      }),
    );
    await settle(element);

    expect(element.open).toBe(false);
    expect(document.activeElement).toBe(customTrigger);
  });

  it("selects with Space and can remain open when closeOnSelect is false", async () => {
    const { element, trigger } = await mountDropdown((dropdown) => {
      dropdown.items = items;
      dropdown.closeOnSelect = false;
    });
    const onSelect = vi.fn();
    element.addEventListener("super-dropdown-select", onSelect);

    trigger.click();
    await settle(element);
    const edit = getMenuItems(element)[0];
    edit?.focus();
    edit?.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: " ",
        bubbles: true,
        composed: true,
      }),
    );
    await settle(element);

    expect((onSelect.mock.calls[0]?.[0] as CustomEvent).detail).toEqual({
      key: "edit",
    });
    expect(element.open).toBe(true);
  });

  it("closes on Escape and returns focus to the trigger", async () => {
    const { element, trigger } = await mountDropdown((dropdown) => {
      dropdown.items = items;
    });

    trigger.click();
    await settle(element);
    getMenuItems(element)[0]?.focus();
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
    expect(trigger.getAttribute("aria-expanded")).toBe("false");
    expect(trigger.hasAttribute("aria-controls")).toBe(false);
  });

  it("respects closeOnEscape and closeOnOutsideClick", async () => {
    const { element, trigger } = await mountDropdown((dropdown) => {
      dropdown.items = items;
      dropdown.closeOnEscape = false;
      dropdown.closeOnOutsideClick = false;
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
    document.body.dispatchEvent(
      new Event("pointerdown", { bubbles: true, composed: true }),
    );
    await settle(element);

    expect(element.open).toBe(true);
  });

  it("closes on an outside pointerdown and when disabled", async () => {
    const { element, trigger } = await mountDropdown((dropdown) => {
      dropdown.items = items;
    });

    trigger.click();
    await settle(element);
    document.body.dispatchEvent(
      new Event("pointerdown", { bubbles: true, composed: true }),
    );
    await settle(element);
    expect(element.open).toBe(false);

    element.disabled = true;
    await settle(element);
    trigger.click();
    await settle(element);
    expect(element.open).toBe(false);
  });

  it("supports hover and manual trigger modes", async () => {
    vi.useFakeTimers();
    const { element } = await mountDropdown((dropdown) => {
      dropdown.items = items;
      dropdown.trigger = "hover";
    });

    element.dispatchEvent(new Event("pointerenter"));
    await settle(element);
    expect(element.open).toBe(true);

    element.dispatchEvent(new Event("pointerleave"));
    vi.advanceTimersByTime(120);
    await settle(element);
    expect(element.open).toBe(false);

    const { element: manual, trigger: manualTrigger } = await mountDropdown(
      (dropdown) => {
        dropdown.items = items;
        dropdown.trigger = "manual";
      },
    );
    manualTrigger.click();
    manual.dispatchEvent(new Event("pointerenter"));
    await settle(manual);
    expect(manual.open).toBe(false);

    const onManualOpenChange = vi.fn();
    manual.addEventListener("super-dropdown-open-change", onManualOpenChange);
    manual.open = true;
    await settle(manual);
    expect(getMenu(manual)).not.toBeNull();
    expect(onManualOpenChange).not.toHaveBeenCalled();
  });

  it("exposes trigger, item and divider parts and custom properties", async () => {
    const { element, trigger } = await mountDropdown((dropdown) => {
      dropdown.items = items;
    });

    expect(element.shadowRoot?.querySelector('[part="trigger"]')).not.toBeNull();
    trigger.click();
    await settle(element);
    expect(element.shadowRoot?.querySelectorAll('[part="item"]')).toHaveLength(4);
    expect(
      element.shadowRoot?.querySelector('[part="divider"]'),
    ).not.toBeNull();
    expect(
      element.shadowRoot?.querySelector<HTMLElement>('[part="menu"]')
        ?.style.getPropertyValue("--super-dropdown-menu-min-width"),
    ).toBe("");
  });
});
