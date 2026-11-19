import { afterEach, describe, expect, it, vi } from "vitest";
import { defineSuperMenu, SUPER_MENU_TAG, SuperMenu } from "./index.js";

const mountMenu = async () => {
  defineSuperMenu();
  const element = document.createElement(SUPER_MENU_TAG);
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

const nestedItems = () => [
  { key: "home", label: "首页", icon: "⌂" },
  {
    key: "library",
    label: "组件库",
    icon: "▤",
    children: [
      { key: "button", label: "Button" },
      {
        key: "navigation",
        label: "导航",
        children: [
          { key: "menu", label: "Menu" },
          { key: "steps", label: "Steps" },
        ],
      },
    ],
  },
  { key: "about", label: "关于", disabled: true },
  { key: "docs", label: "文档" },
];

const itemButton = (element: SuperMenu, key: string) =>
  Array.from(
    element.shadowRoot?.querySelectorAll<HTMLButtonElement>("[data-menu-key]") ??
      [],
  ).find((button) => button.dataset.menuKey === key);

afterEach(() => {
  document.body.replaceChildren();
});

describe("SuperMenu", () => {
  it("registers the super-menu tag idempotently", () => {
    expect(defineSuperMenu()).toBe(SuperMenu);
    expect(defineSuperMenu()).toBe(SuperMenu);
    expect(customElements.get(SUPER_MENU_TAG)).toBe(SuperMenu);
  });

  it("provides stable defaults and reflects primitive options", async () => {
    const element = await mountMenu();

    expect(element.items).toEqual([]);
    expect(element.active).toBe("");
    expect(element.orientation).toBe("vertical");
    expect(element.mode).toBe("inline");
    expect(element.collapsed).toBe(false);
    expect(element.size).toBe("medium");
    expect(element.accessibleLabel).toBe("导航菜单");

    element.active = "home";
    element.orientation = "horizontal";
    element.mode = "popup";
    element.collapsed = true;
    element.size = "large";
    element.accessibleLabel = "站点导航";
    await element.updateComplete;

    expect(element.getAttribute("active")).toBe("home");
    expect(element.getAttribute("orientation")).toBe("horizontal");
    expect(element.getAttribute("mode")).toBe("popup");
    expect(element.hasAttribute("collapsed")).toBe(true);
    expect(element.getAttribute("size")).toBe("large");
    expect(element.getAttribute("aria-label")).toBe("站点导航");
  });

  it("keeps an attribute-initialized active item uncontrolled", async () => {
    defineSuperMenu();
    const element = document.createElement(SUPER_MENU_TAG);
    element.setAttribute("active", "home");
    element.items = [
      { key: "home", label: "首页" },
      { key: "docs", label: "文档" },
    ];
    document.body.append(element);
    await element.updateComplete;

    const onSelect = vi.fn();
    document.body.addEventListener("super-menu-select", onSelect);
    itemButton(element, "docs")?.click();
    await element.updateComplete;
    await new Promise((resolve) => setTimeout(resolve, 30));
    await element.updateComplete;

    expect(element.active).toBe("docs");
    expect(onSelect).toHaveBeenCalledTimes(1);
  });

  it("renders nested menu and submenu lists with menu semantics", async () => {
    const element = await mountMenu();
    element.items = nestedItems();
    element.active = "home";
    await element.updateComplete;

    const root = element.shadowRoot?.querySelector<HTMLElement>('[part="menu"]');
    const rootItems = root?.querySelectorAll(':scope > [role="none"]');
    const home = itemButton(element, "home");
    const library = itemButton(element, "library");
    const about = itemButton(element, "about");

    expect(root?.tagName).toBe("UL");
    expect(root?.getAttribute("role")).toBe("menu");
    expect(root?.getAttribute("aria-orientation")).toBe("vertical");
    expect(root?.getAttribute("aria-label")).toBe("导航菜单");
    expect(rootItems).toHaveLength(4);
    expect(home?.getAttribute("role")).toBe("menuitem");
    expect(home?.getAttribute("aria-current")).toBe("true");
    expect(home?.getAttribute("tabindex")).toBe("0");
    expect(library?.getAttribute("aria-haspopup")).toBe("menu");
    expect(library?.getAttribute("aria-expanded")).toBe("false");
    expect(library?.getAttribute("aria-controls")).toBeNull();
    expect(about?.getAttribute("aria-disabled")).toBe("true");
    expect(about?.getAttribute("tabindex")).toBe("-1");
    expect(
      element.shadowRoot?.querySelector('[part="icon"]')?.textContent?.trim(),
    ).toBe("⌂");
    expect(
      element.shadowRoot?.querySelector('[part="label"]')?.textContent?.trim(),
    ).toBe("首页");
    expect(
      element.shadowRoot?.querySelector('[part="toggle"]'),
    ).not.toBeNull();
    expect(element.shadowRoot?.querySelector('[part="submenu"]')).toBeNull();
  });

  it("expands and collapses submenus with click and emits open-change", async () => {
    const element = await mountMenu();
    element.items = nestedItems();
    await element.updateComplete;

    const onOpenChange = vi.fn();
    document.body.addEventListener("super-menu-open-change", onOpenChange);

    itemButton(element, "library")?.click();
    await element.updateComplete;

    const submenu = element.shadowRoot?.querySelector('[part="submenu"]');
    expect(submenu?.getAttribute("role")).toBe("menu");
    expect(submenu?.getAttribute("aria-orientation")).toBe("vertical");
    expect(submenu?.getAttribute("aria-labelledby")).toBe(
      itemButton(element, "library")?.id,
    );
    expect(itemButton(element, "library")?.getAttribute("aria-expanded")).toBe(
      "true",
    );
    expect(itemButton(element, "library")?.getAttribute("aria-controls")).toBe(
      submenu?.id,
    );
    expect(onOpenChange).toHaveBeenCalledTimes(1);

    const opened = onOpenChange.mock.calls[0]?.[0] as CustomEvent<{
      key: string;
      open: boolean;
    }>;
    expect(opened.bubbles).toBe(true);
    expect(opened.composed).toBe(true);
    expect(opened.detail).toEqual({ key: "library", open: true });

    itemButton(element, "library")?.click();
    await element.updateComplete;

    expect(element.shadowRoot?.querySelector('[part="submenu"]')).toBeNull();
    expect(itemButton(element, "library")?.getAttribute("aria-expanded")).toBe(
      "false",
    );
    expect(onOpenChange).toHaveBeenCalledTimes(2);
    expect(
      (onOpenChange.mock.calls[1]?.[0] as CustomEvent).detail,
    ).toEqual({ key: "library", open: false });
  });

  it("moves between siblings with arrow keys while skipping disabled items", async () => {
    const element = await mountMenu();
    element.items = nestedItems();
    await element.updateComplete;

    const root = element.shadowRoot?.querySelector<HTMLElement>('[part="menu"]');
    itemButton(element, "home")?.focus();

    keydown(root!, "ArrowDown");
    await element.updateComplete;
    expect(element.shadowRoot?.activeElement).toBe(itemButton(element, "library"));

    keydown(root!, "ArrowDown");
    await element.updateComplete;
    expect(element.shadowRoot?.activeElement).toBe(itemButton(element, "docs"));

    keydown(root!, "ArrowDown");
    await element.updateComplete;
    expect(element.shadowRoot?.activeElement).toBe(itemButton(element, "home"));

    keydown(root!, "End");
    await element.updateComplete;
    expect(element.shadowRoot?.activeElement).toBe(itemButton(element, "docs"));

    keydown(root!, "Home");
    await element.updateComplete;
    expect(element.shadowRoot?.activeElement).toBe(itemButton(element, "home"));
  });

  it("expands with ArrowRight and returns to the parent with ArrowLeft", async () => {
    const element = await mountMenu();
    element.items = nestedItems();
    await element.updateComplete;

    const root = element.shadowRoot?.querySelector<HTMLElement>('[part="menu"]');
    itemButton(element, "library")?.focus();

    keydown(root!, "ArrowRight");
    await element.updateComplete;
    expect(itemButton(element, "library")?.getAttribute("aria-expanded")).toBe(
      "true",
    );
    expect(element.shadowRoot?.activeElement).toBe(itemButton(element, "button"));

    keydown(root!, "ArrowDown");
    await element.updateComplete;
    expect(element.shadowRoot?.activeElement).toBe(
      itemButton(element, "navigation"),
    );

    keydown(root!, "ArrowLeft");
    await element.updateComplete;
    expect(itemButton(element, "library")?.getAttribute("aria-expanded")).toBe(
      "false",
    );
    expect(element.shadowRoot?.activeElement).toBe(itemButton(element, "library"));
  });

  it("activates leaf items with Enter and Space and emits select", async () => {
    const element = await mountMenu();
    element.items = nestedItems();
    await element.updateComplete;

    const onSelect = vi.fn();
    document.body.addEventListener("super-menu-select", onSelect);
    const root = element.shadowRoot?.querySelector<HTMLElement>('[part="menu"]');

    itemButton(element, "docs")?.focus();
    keydown(root!, "Enter");
    await element.updateComplete;

    expect(onSelect).toHaveBeenCalledTimes(1);
    const entered = onSelect.mock.calls[0]?.[0] as CustomEvent<{ key: string }>;
    expect(entered.bubbles).toBe(true);
    expect(entered.composed).toBe(true);
    expect(entered.detail).toEqual({ key: "docs" });
    expect(element.active).toBe("docs");

    itemButton(element, "home")?.focus();
    keydown(root!, " ");
    await element.updateComplete;

    expect(onSelect).toHaveBeenCalledTimes(2);
    expect((onSelect.mock.calls[1]?.[0] as CustomEvent).detail).toEqual({
      key: "home",
    });
    expect(element.active).toBe("home");
  });

  it("does not activate disabled items", async () => {
    const element = await mountMenu();
    element.items = nestedItems();
    await element.updateComplete;

    const onSelect = vi.fn();
    document.body.addEventListener("super-menu-select", onSelect);

    itemButton(element, "about")?.click();
    await element.updateComplete;

    expect(onSelect).not.toHaveBeenCalled();
    expect(element.active).toBe("");
  });

  it("uses ArrowUp and ArrowDown to expand and collapse in horizontal orientation", async () => {
    const element = await mountMenu();
    element.items = nestedItems();
    element.orientation = "horizontal";
    await element.updateComplete;

    const root = element.shadowRoot?.querySelector<HTMLElement>('[part="menu"]');
    itemButton(element, "library")?.focus();

    keydown(root!, "ArrowDown");
    await element.updateComplete;
    expect(itemButton(element, "library")?.getAttribute("aria-expanded")).toBe(
      "true",
    );

    itemButton(element, "library")?.focus();
    keydown(root!, "ArrowUp");
    await element.updateComplete;
    expect(itemButton(element, "library")?.getAttribute("aria-expanded")).toBe(
      "false",
    );
    expect(element.shadowRoot?.activeElement).toBe(itemButton(element, "library"));
  });

  it("moves horizontally at the top level and vertically inside submenus", async () => {
    const element = await mountMenu();
    element.items = nestedItems();
    element.orientation = "horizontal";
    await element.updateComplete;

    const root = element.shadowRoot?.querySelector<HTMLElement>('[part="menu"]');
    itemButton(element, "home")?.focus();

    keydown(root!, "ArrowRight");
    await element.updateComplete;
    expect(element.shadowRoot?.activeElement).toBe(itemButton(element, "library"));

    keydown(root!, "ArrowRight");
    await element.updateComplete;
    expect(element.shadowRoot?.activeElement).toBe(itemButton(element, "docs"));

    keydown(root!, "ArrowLeft");
    await element.updateComplete;
    expect(element.shadowRoot?.activeElement).toBe(itemButton(element, "library"));

    keydown(root!, "ArrowDown");
    await element.updateComplete;
    keydown(root!, "ArrowDown");
    await element.updateComplete;
    expect(element.shadowRoot?.activeElement).toBe(
      itemButton(element, "navigation"),
    );
  });

  it("opens ancestors of the active key and collapses the rail labels", async () => {
    const element = await mountMenu();
    element.items = nestedItems();
    element.active = "menu";
    await element.updateComplete;

    expect(itemButton(element, "menu")).not.toBeUndefined();
    expect(itemButton(element, "library")?.getAttribute("aria-expanded")).toBe(
      "true",
    );
    expect(itemButton(element, "navigation")?.getAttribute("aria-expanded")).toBe(
      "true",
    );

    element.collapsed = true;
    element.mode = "inline";
    await element.updateComplete;

    expect(itemButton(element, "home")?.getAttribute("aria-label")).toBe("首页");
    expect(itemButton(element, "home")?.getAttribute("title")).toBe("首页");
  });

  it("keeps a single tab stop across the whole visible tree", async () => {
    const element = await mountMenu();
    element.items = nestedItems();
    await element.updateComplete;

    itemButton(element, "library")?.click();
    await element.updateComplete;

    const tabbable = Array.from(
      element.shadowRoot?.querySelectorAll<HTMLButtonElement>(
        '[role="menuitem"][tabindex="0"]',
      ) ?? [],
    );
    expect(tabbable).toHaveLength(1);
    expect(tabbable[0]?.dataset.menuKey).toBe("home");

    itemButton(element, "button")?.focus();
    await element.updateComplete;

    const afterFocus = Array.from(
      element.shadowRoot?.querySelectorAll<HTMLButtonElement>(
        '[role="menuitem"][tabindex="0"]',
      ) ?? [],
    );
    expect(afterFocus).toHaveLength(1);
    expect(afterFocus[0]?.dataset.menuKey).toBe("button");
  });

  it("collapses open submenus when the mode changes", async () => {
    const element = await mountMenu();
    element.items = nestedItems();
    await element.updateComplete;

    itemButton(element, "library")?.click();
    await element.updateComplete;
    expect(itemButton(element, "library")?.getAttribute("aria-expanded")).toBe(
      "true",
    );

    element.mode = "popup";
    await element.updateComplete;

    expect(element.shadowRoot?.querySelector('[part="submenu"]')).toBeNull();
    expect(itemButton(element, "library")?.getAttribute("aria-expanded")).toBe(
      "false",
    );
  });

  it("exposes a single aria-current item and supports Escape from a submenu", async () => {
    const element = await mountMenu();
    element.items = nestedItems();
    element.active = "menu";
    await element.updateComplete;

    const current = element.shadowRoot?.querySelectorAll('[aria-current="true"]');
    expect(current).toHaveLength(1);
    expect((current?.[0] as HTMLElement).dataset.menuKey).toBe("menu");

    const root = element.shadowRoot?.querySelector<HTMLElement>('[part="menu"]');
    itemButton(element, "menu")?.focus();
    keydown(root!, "Escape");
    await element.updateComplete;

    expect(itemButton(element, "navigation")?.getAttribute("aria-expanded")).toBe(
      "false",
    );
    expect(element.shadowRoot?.activeElement).toBe(
      itemButton(element, "navigation"),
    );
  });
});
