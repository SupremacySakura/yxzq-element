import {
  css,
  html,
  LitElement,
  nothing,
  type PropertyValues,
  type TemplateResult,
} from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import {
  createControlledValueGuard,
  runAttributeWrite,
} from "@yxzq-element/utils";

export const SUPER_MENU_ORIENTATIONS = ["horizontal", "vertical"] as const;
export const SUPER_MENU_MODES = ["inline", "vertical", "popup"] as const;
export const SUPER_MENU_SIZES = ["large", "medium", "small"] as const;

export type SuperMenuOrientation = (typeof SUPER_MENU_ORIENTATIONS)[number];
export type SuperMenuMode = (typeof SUPER_MENU_MODES)[number];
export type SuperMenuSize = (typeof SUPER_MENU_SIZES)[number];

export interface SuperMenuItem {
  key: string;
  label: string;
  icon?: string;
  disabled?: boolean;
  children?: SuperMenuItem[];
}

export interface SuperMenuSelectDetail {
  key: string;
}

export interface SuperMenuOpenChangeDetail {
  key: string;
  open: boolean;
}

interface MenuEntry {
  item: SuperMenuItem;
  level: number;
  parentKey: string | null;
  path: number[];
}

type MenuFocusTarget = "none" | "self" | "first-child";

let menuId = 0;

export class SuperMenu extends LitElement {
  static properties = {
    items: { attribute: false },
    active: { type: String, reflect: true, noAccessor: true },
    orientation: { type: String, reflect: true },
    mode: { type: String, reflect: true },
    collapsed: { type: Boolean, reflect: true },
    size: { type: String, reflect: true },
    accessibleLabel: {
      type: String,
      attribute: "aria-label",
      reflect: true,
    },
  };

  declare items: SuperMenuItem[];
  declare orientation: SuperMenuOrientation;
  declare mode: SuperMenuMode;
  declare collapsed: boolean;
  declare size: SuperMenuSize;
  declare accessibleLabel: string;

  private readonly uid = `super-menu-${++menuId}`;
  private readonly openKeys = new Set<string>();
  private tabbableKey = "";
  private _active = "";
  private readonly controlledValueGuard = createControlledValueGuard<string>({
    host: this,
    getValue: () => this._active,
    setValue: (value) => this.setInternalActive(value),
  });

  get active(): string {
    return this._active;
  }

  set active(value: string) {
    this.controlledValueGuard.markExternal(value);
    this.setInternalActive(value);
  }

  private setInternalActive(value: string): void {
    const oldValue = this._active;
    this._active = value;
    this.requestUpdate("active", oldValue);
  }

  override attributeChangedCallback(
    name: string,
    oldValue: string | null,
    newValue: string | null,
  ): void {
    runAttributeWrite(() =>
      super.attributeChangedCallback(name, oldValue, newValue),
    );
  }

  constructor() {
    super();
    this.items = [];
    this._active = "";
    this.orientation = "vertical";
    this.mode = "inline";
    this.collapsed = false;
    this.size = "medium";
    this.accessibleLabel = "导航菜单";
  }

  static styles = css`
    :host {
      --super-menu-gap: 2px;
      --super-menu-item-height: 34px;
      --super-menu-item-padding-block: 6px;
      --super-menu-item-padding-inline: 11px;
      --super-menu-item-gap: 8px;
      --super-menu-font-size: var(--super-font-size-base, 14px);
      --super-menu-color: var(--super-text-color-regular, #4a4441);
      --super-menu-active-color: #245cbe;
      --super-menu-active-background: color-mix(
        in srgb,
        var(--super-color-primary, #4b87f5) 13%,
        var(--super-background-color, #fffef9)
      );
      --super-menu-hover-background: color-mix(
        in srgb,
        var(--super-color-primary, #4b87f5) 8%,
        transparent
      );
      --super-menu-background: var(--super-background-color, #fffef9);
      --super-menu-border-color: var(--super-border-color, #2f2a27);
      --super-menu-divider-color: var(--super-border-color-light, #b6ada6);
      --super-menu-muted-color: var(--super-text-color-placeholder, #9a938f);
      --super-menu-focus-color: var(--super-focus-color, #56c6b7);
      --super-menu-shadow-color: var(
        --super-sketch-shadow,
        rgb(23 78 166 / 28%)
      );
      --super-menu-submenu-min-width: 180px;
      --super-menu-submenu-padding: 5px;
      --super-menu-z-index: var(--super-z-index-overlay, 2000);
      --super-menu-radius:
        var(--super-radius-md, 9px)
        calc(var(--super-radius-md, 9px) + 2px)
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-sm, 6px) + 3px) /
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-md, 9px) + 1px)
        calc(var(--super-radius-md, 9px) + 2px)
        calc(var(--super-radius-sm, 6px) + 1px);
      --super-menu-rotation: var(--super-sketch-rotation, -0.25deg);

      display: block;
      box-sizing: border-box;
      color: var(--super-menu-color);
      font-family: var(
        --super-font-family,
        "Comic Sans MS",
        "Kaiti SC",
        STKaiti,
        system-ui,
        sans-serif
      );
      font-size: var(--super-menu-font-size);
      line-height: 1.4;
    }

    :host([hidden]) {
      display: none;
    }

    :host([size="large"]) {
      --super-menu-item-height: 42px;
      --super-menu-item-padding-block: 9px;
      --super-menu-item-padding-inline: 14px;
      --super-menu-item-gap: 10px;
      --super-menu-font-size: var(--super-font-size-lg, 16px);
    }

    :host([size="small"]) {
      --super-menu-item-height: 28px;
      --super-menu-item-padding-block: 4px;
      --super-menu-item-padding-inline: 8px;
      --super-menu-item-gap: 6px;
      --super-menu-font-size: var(--super-font-size-sm, 13px);
    }

    .menu {
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      gap: var(--super-menu-gap);
      min-inline-size: 0;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    :host([orientation="horizontal"]) .menu {
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
    }

    .menu-item {
      position: relative;
      min-inline-size: 0;
      margin: 0;
      padding: 0;
    }

    :host([orientation="horizontal"]) .menu > .menu-item {
      flex: none;
    }

    .item {
      position: relative;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      gap: var(--super-menu-item-gap);
      inline-size: 100%;
      min-block-size: var(--super-menu-item-height);
      margin: 0;
      padding: var(--super-menu-item-padding-block)
        var(--super-menu-item-padding-inline);
      overflow: hidden;
      color: inherit;
      font: inherit;
      font-weight: 600;
      text-align: start;
      text-overflow: ellipsis;
      white-space: nowrap;
      background: transparent;
      border: 0;
      border-radius: var(--super-menu-radius);
      cursor: pointer;
      outline: none;
      user-select: none;
      transition:
        background-color var(--super-motion-duration, 140ms)
          var(--super-motion-easing, ease),
        color var(--super-motion-duration, 140ms)
          var(--super-motion-easing, ease);
    }

    .item:hover {
      background: var(--super-menu-hover-background);
    }

    .item:focus-visible {
      outline: 3px solid var(--super-menu-focus-color);
      outline-offset: -2px;
    }

    .item[aria-current="true"] {
      color: var(--super-menu-active-color);
      background: var(--super-menu-active-background);
    }

    .item[aria-current="true"]::after {
      position: absolute;
      inset-block: 22%;
      inset-inline-start: 2px;
      inline-size: 3px;
      content: "";
      background: var(--super-menu-active-color);
      border-radius: 45% 55% 48% 52% / 55% 46% 54% 45%;
      transform: rotate(-1deg);
    }

    .item[aria-disabled="true"] {
      color: var(--super-menu-muted-color);
      cursor: not-allowed;
      opacity: 0.6;
    }

    .item[aria-disabled="true"]:hover {
      background: transparent;
    }

    .icon {
      display: inline-grid;
      flex: none;
      place-items: center;
      inline-size: 1.25em;
      font-size: 1.05em;
      line-height: 1;
    }

    .label {
      flex: 1 1 auto;
      min-inline-size: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .toggle {
      display: inline-grid;
      flex: none;
      place-items: center;
      inline-size: 1em;
      margin-inline-start: auto;
      color: var(--super-menu-muted-color);
      font-size: 0.8em;
      line-height: 1;
      transition: transform var(--super-motion-duration, 140ms)
        var(--super-motion-easing, ease);
    }

    .item[aria-expanded="true"] .toggle {
      transform: rotate(90deg);
    }

    .submenu {
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      gap: var(--super-menu-gap);
      min-inline-size: 0;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    :host([orientation="vertical"][mode="inline"]:not([collapsed])) .submenu {
      margin-inline-start: calc(var(--super-menu-item-padding-inline) / 2);
      padding-inline-start: 12px;
      border-inline-start: 1.5px dashed var(--super-menu-divider-color);
    }

    :host([orientation="horizontal"]) .submenu,
    :host([orientation="vertical"][mode="vertical"]) .submenu,
    :host([orientation="vertical"][mode="popup"]) .submenu,
    :host([collapsed][mode="inline"]) .submenu {
      position: absolute;
      z-index: var(--super-menu-z-index);
      box-sizing: border-box;
      min-inline-size: var(--super-menu-submenu-min-width);
      max-inline-size: min(280px, calc(100vw - 16px));
      margin: 0;
      padding: var(--super-menu-submenu-padding);
      background: var(--super-menu-background);
      border: var(--super-sketch-width, 2px) solid
        var(--super-menu-border-color);
      border-radius: var(--super-menu-radius);
      box-shadow:
        inset 0 0 0 1px rgb(255 255 255 / 26%),
        3px 4px 0 -1px var(--super-menu-shadow-color);
      transform: rotate(var(--super-menu-rotation));
    }

    :host([orientation="horizontal"]) .menu > .menu-item > .submenu {
      inset-block-start: calc(100% + 4px);
      inset-inline-start: 0;
    }

    :host([orientation="horizontal"]) .submenu .submenu,
    :host([orientation="vertical"][mode="vertical"]) .submenu,
    :host([orientation="vertical"][mode="popup"]) .submenu,
    :host([collapsed][mode="inline"]) .submenu {
      inset-block-start: 0;
      inset-inline-start: calc(100% + 4px);
    }

    :host([collapsed][mode="inline"]) {
      inline-size: max-content;
      max-inline-size: 100%;
    }

    :host([collapsed][mode="inline"]) .menu {
      inline-size: max-content;
    }

    :host([collapsed][mode="inline"]) .item {
      justify-content: center;
      padding-inline: 8px;
    }

    :host([collapsed][mode="inline"]) .item[data-icon] .label {
      display: none;
    }

    :host([collapsed][mode="inline"]) .item .toggle {
      display: none;
    }

    @media (prefers-reduced-motion: reduce) {
      .item,
      .toggle {
        transition: none;
      }
    }
  `;

  private allEntries(): MenuEntry[] {
    const entries: MenuEntry[] = [];
    const walk = (
      items: SuperMenuItem[],
      level: number,
      parentKey: string | null,
      parentPath: number[],
    ): void => {
      items.forEach((item, index) => {
        const path = [...parentPath, index];
        entries.push({ item, level, parentKey, path });
        if (item.children?.length) {
          walk(item.children, level + 1, item.key, path);
        }
      });
    };
    walk(this.items, 0, null, []);
    return entries;
  }

  private visibleEntries(): MenuEntry[] {
    const entries: MenuEntry[] = [];
    const walk = (
      items: SuperMenuItem[],
      level: number,
      parentKey: string | null,
      parentPath: number[],
    ): void => {
      items.forEach((item, index) => {
        const path = [...parentPath, index];
        entries.push({ item, level, parentKey, path });
        if (item.children?.length && this.openKeys.has(item.key)) {
          walk(item.children, level + 1, item.key, path);
        }
      });
    };
    walk(this.items, 0, null, []);
    return entries;
  }

  private siblingsOf(entry: MenuEntry): MenuEntry[] {
    return this.visibleEntries().filter(
      (candidate) =>
        candidate.level === entry.level &&
        candidate.parentKey === entry.parentKey,
    );
  }

  private isTabbable(key: string): boolean {
    const visible = this.visibleEntries();
    const enabled = visible.filter((entry) => !entry.item.disabled);
    if (enabled.length === 0) {
      return false;
    }
    const target = enabled.some((entry) => entry.item.key === this.tabbableKey)
      ? this.tabbableKey
      : (enabled[0]?.item.key ?? "");
    return key === target;
  }

  private itemId(path: number[]): string {
    return `${this.uid}-item-${path.join("-")}`;
  }

  private submenuId(path: number[]): string {
    return `${this.uid}-menu-${path.length > 0 ? path.join("-") : "root"}`;
  }

  private findEntry(key: string): MenuEntry | undefined {
    return this.visibleEntries().find((entry) => entry.item.key === key);
  }

  private get rail(): boolean {
    return this.collapsed && this.mode === "inline";
  }

  private descendantKeys(item: SuperMenuItem): string[] {
    const keys: string[] = [];
    const walk = (children: SuperMenuItem[] | undefined): void => {
      children?.forEach((child) => {
        keys.push(child.key);
        walk(child.children);
      });
    };
    walk(item.children);
    return keys;
  }

  private ancestorKeys(key: string): string[] {
    const path: string[] = [];
    const walk = (
      items: SuperMenuItem[],
      ancestors: string[],
    ): boolean => {
      for (const item of items) {
        if (item.key === key) {
          path.push(...ancestors);
          return true;
        }
        if (item.children?.length && walk(item.children, [...ancestors, item.key])) {
          return true;
        }
      }
      return false;
    };
    walk(this.items, []);
    return path;
  }

  private focusItem(key: string): void {
    void this.updateComplete.then(() => {
      const target = Array.from(
        this.renderRoot.querySelectorAll<HTMLElement>("[data-menu-key]"),
      ).find((element) => element.dataset.menuKey === key);
      target?.focus({ preventScroll: true });
    });
  }

  private firstEnabledChild(entry: MenuEntry): SuperMenuItem | undefined {
    return entry.item.children?.find((child) => !child.disabled);
  }

  private dispatchOpenChange(key: string, open: boolean): void {
    this.dispatchEvent(
      new CustomEvent<SuperMenuOpenChangeDetail>("super-menu-open-change", {
        detail: { key, open },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private setOpen(
    entry: MenuEntry,
    open: boolean,
    focus: MenuFocusTarget = "none",
  ): void {
    const key = entry.item.key;
    const wasOpen = this.openKeys.has(key);
    if (wasOpen === open) {
      if (open && focus === "first-child") {
        const child = this.firstEnabledChild(entry);
        if (child) {
          this.focusItem(child.key);
        }
      }
      return;
    }

    if (open) {
      this.openKeys.add(key);
    } else {
      this.openKeys.delete(key);
    }
    this.dispatchOpenChange(key, open);

    if (!open) {
      const descendants = this.descendantKeys(entry.item);
      if (
        this.tabbableKey === key ||
        descendants.includes(this.tabbableKey)
      ) {
        this.tabbableKey = key;
      }
      this.requestUpdate();
      if (focus === "self") {
        this.focusItem(key);
      }
      return;
    }

    this.requestUpdate();
    if (focus === "first-child") {
      const child = this.firstEnabledChild(entry);
      if (child) {
        this.focusItem(child.key);
      }
    }
  }

  private selectItem(item: SuperMenuItem): void {
    if (item.disabled) {
      return;
    }
    const controlledMutation = this.controlledValueGuard.capture();
    this.setInternalActive(item.key);
    this.dispatchEvent(
      new CustomEvent<SuperMenuSelectDetail>("super-menu-select", {
        detail: { key: item.key },
        bubbles: true,
        composed: true,
      }),
    );
    this.controlledValueGuard.confirm(controlledMutation);
  }

  private moveFocus(entry: MenuEntry, direction: 1 | -1): void {
    const siblings = this.siblingsOf(entry).filter(
      (candidate) => !candidate.item.disabled,
    );
    if (siblings.length === 0) {
      return;
    }
    const current = siblings.findIndex(
      (candidate) => candidate.item.key === entry.item.key,
    );
    const nextIndex =
      current < 0
        ? direction === 1
          ? 0
          : siblings.length - 1
        : (current + direction + siblings.length) % siblings.length;
    const next = siblings[nextIndex];
    if (next) {
      this.tabbableKey = next.item.key;
      this.focusItem(next.item.key);
    }
  }

  private focusEdge(entry: MenuEntry, edge: "first" | "last"): void {
    const siblings = this.siblingsOf(entry).filter(
      (candidate) => !candidate.item.disabled,
    );
    const target = edge === "first" ? siblings[0] : siblings.at(-1);
    if (target) {
      this.tabbableKey = target.item.key;
      this.focusItem(target.item.key);
    }
  }

  private closeCurrent(entry: MenuEntry): void {
    if (entry.item.children?.length && this.openKeys.has(entry.item.key)) {
      this.setOpen(entry, false, "self");
      return;
    }
    if (!entry.parentKey) {
      return;
    }
    const parent = this.findEntry(entry.parentKey);
    if (parent) {
      this.setOpen(parent, false, "self");
    }
  }

  private handleKeyDown = (event: KeyboardEvent): void => {
    const entry = this.resolveEntry(event);
    if (!entry || entry.item.disabled) {
      return;
    }

    const horizontalLevel = entry.level === 0 && this.orientation === "horizontal";
    const previousKey = horizontalLevel ? "ArrowLeft" : "ArrowUp";
    const nextKey = horizontalLevel ? "ArrowRight" : "ArrowDown";
    const expandKey = horizontalLevel ? "ArrowDown" : "ArrowRight";
    const collapseKey = horizontalLevel ? "ArrowUp" : "ArrowLeft";

    if (event.key === previousKey || event.key === nextKey) {
      event.preventDefault();
      this.moveFocus(entry, event.key === nextKey ? 1 : -1);
      return;
    }

    if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      this.focusEdge(entry, event.key === "Home" ? "first" : "last");
      return;
    }

    if (event.key === expandKey) {
      event.preventDefault();
      if (entry.item.children?.length) {
        this.setOpen(entry, true, "first-child");
      }
      return;
    }

    if (event.key === collapseKey) {
      event.preventDefault();
      this.closeCurrent(entry);
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (event.repeat) {
        return;
      }
      if (entry.item.children?.length) {
        this.setOpen(entry, !this.openKeys.has(entry.item.key), "first-child");
      } else {
        this.selectItem(entry.item);
      }
      return;
    }

    if (event.key === "Escape" && entry.parentKey) {
      event.preventDefault();
      const parent = this.findEntry(entry.parentKey);
      if (parent) {
        this.setOpen(parent, false, "self");
      }
    }
  };

  private handleClick = (event: MouseEvent): void => {
    const target = event
      .composedPath()
      .find(
        (node): node is HTMLElement =>
          node instanceof HTMLElement && Boolean(node.dataset.menuKey),
      );
    if (!target) {
      return;
    }
    const entry = this.findEntry(target.dataset.menuKey ?? "");
    if (!entry || entry.item.disabled) {
      return;
    }

    if (entry.item.children?.length) {
      this.setOpen(entry, !this.openKeys.has(entry.item.key));
    } else {
      this.selectItem(entry.item);
    }
  };

  private resolveEntry(event: Event): MenuEntry | undefined {
    const pathTarget = event
      .composedPath()
      .find(
        (node): node is HTMLElement =>
          node instanceof HTMLElement && Boolean(node.dataset.menuKey),
      );
    const active =
      this.renderRoot instanceof ShadowRoot
        ? this.renderRoot.activeElement
        : null;
    const focusedKey =
      active instanceof HTMLElement ? active.dataset.menuKey : undefined;
    const key = pathTarget?.dataset.menuKey ?? focusedKey ?? this.tabbableKey;
    return key ? this.findEntry(key) : undefined;
  }

  private handleFocusIn = (event: FocusEvent): void => {
    const target = event
      .composedPath()
      .find(
        (node): node is HTMLElement =>
          node instanceof HTMLElement && Boolean(node.dataset.menuKey),
      );
    if (target?.dataset.menuKey) {
      if (this.tabbableKey !== target.dataset.menuKey) {
        this.tabbableKey = target.dataset.menuKey;
        this.requestUpdate();
      }
    }
  };

  override disconnectedCallback(): void {
    this.controlledValueGuard.dispose();
    super.disconnectedCallback();
  }

  protected willUpdate(changedProperties: PropertyValues<this>): void {
    if (changedProperties.has("collapsed") || changedProperties.has("mode")) {
      this.openKeys.clear();
    }

    if (changedProperties.has("items")) {
      const keys = new Set(this.allEntries().map((entry) => entry.item.key));
      for (const key of this.openKeys) {
        if (!keys.has(key)) {
          this.openKeys.delete(key);
        }
      }
    }

    if (
      !this.rail &&
      (changedProperties.has("items") || changedProperties.has("active"))
    ) {
      for (const key of this.ancestorKeys(this.active)) {
        this.openKeys.add(key);
      }
    }

    if (changedProperties.has("active") && this.active) {
      this.tabbableKey = this.active;
    }
  }

  private renderItem(entry: MenuEntry): TemplateResult {
    const { item, path } = entry;
    const hasChildren = Boolean(item.children?.length);
    const open = hasChildren && this.openKeys.has(item.key);
    const railItem = this.rail;
    const iconOnly = railItem && Boolean(item.icon);

    return html`
      <li class="menu-item" role="none">
        <button
          class="item"
          part="item"
          type="button"
          role="menuitem"
          id=${this.itemId(path)}
          data-menu-key=${item.key}
          ?data-icon=${Boolean(item.icon)}
          tabindex=${this.isTabbable(item.key) ? "0" : "-1"}
          aria-current=${item.key === this.active ? "true" : nothing}
          aria-disabled=${item.disabled ? "true" : nothing}
          aria-haspopup=${hasChildren ? "menu" : nothing}
          aria-expanded=${hasChildren ? String(open) : nothing}
          aria-controls=${hasChildren && open ? this.submenuId(path) : nothing}
          aria-label=${iconOnly ? item.label : nothing}
          title=${iconOnly ? item.label : nothing}
        >
          ${item.icon
            ? html`<span class="icon" part="icon" aria-hidden="true"
                >${item.icon}</span
              >`
            : nothing}
          <span class="label" part="label">${item.label}</span>
          ${hasChildren
            ? html`<span class="toggle" part="toggle" aria-hidden="true"
                >▸</span
              >`
            : nothing}
        </button>
        ${hasChildren && open
          ? this.renderMenu(item.children ?? [], entry, path)
          : nothing}
      </li>
    `;
  }

  private renderMenu(
    items: SuperMenuItem[],
    parent: MenuEntry | null,
    path: number[],
  ): TemplateResult {
    const level = parent ? parent.level + 1 : 0;
    const labelledBy = parent ? this.itemId(parent.path) : undefined;
    return html`
      <ul
        class=${level === 0 ? "menu" : "submenu"}
        part=${level === 0 ? "menu" : "submenu"}
        id=${this.submenuId(path)}
        role="menu"
        aria-orientation=${level === 0 ? this.orientation : "vertical"}
        aria-label=${ifDefined(
          level === 0 ? this.accessibleLabel || undefined : undefined,
        )}
        aria-labelledby=${ifDefined(labelledBy)}
        @keydown=${level === 0 ? this.handleKeyDown : nothing}
        @click=${level === 0 ? this.handleClick : nothing}
        @focusin=${level === 0 ? this.handleFocusIn : nothing}
      >
        ${items.map((item, index) =>
          this.renderItem({
            item,
            level,
            parentKey: parent?.item.key ?? null,
            path: [...path, index],
          }),
        )}
      </ul>
    `;
  }

  protected render(): TemplateResult {
    return this.renderMenu(this.items, null, []);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "super-menu": SuperMenu;
  }

  interface HTMLElementEventMap {
    "super-menu-select": CustomEvent<SuperMenuSelectDetail>;
    "super-menu-open-change": CustomEvent<SuperMenuOpenChangeDetail>;
  }
}
