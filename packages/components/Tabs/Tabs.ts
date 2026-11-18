import { css, html, LitElement, nothing } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";

export const SUPER_TABS_ORIENTATIONS = ["horizontal", "vertical"] as const;
export const SUPER_TABS_VARIANTS = ["line", "card", "segment"] as const;
export const SUPER_TABS_SIZES = ["large", "medium", "small"] as const;

export type SuperTabsOrientation = (typeof SUPER_TABS_ORIENTATIONS)[number];
export type SuperTabsVariant = (typeof SUPER_TABS_VARIANTS)[number];
export type SuperTabsSize = (typeof SUPER_TABS_SIZES)[number];

export interface SuperTabsItem {
  key: string;
  label: string;
  disabled?: boolean;
}

export interface SuperTabsChangeDetail {
  active: string;
}

export interface SuperTabsCloseDetail {
  key: string;
}

interface TabEntry {
  key: string;
  disabled: boolean;
  element?: HTMLElement;
}

let tabsId = 0;

export class SuperTabs extends LitElement {
  static properties = {
    active: { type: String, reflect: true },
    orientation: { type: String, reflect: true },
    variant: { type: String, reflect: true },
    size: { type: String, reflect: true },
    closable: { type: Boolean, reflect: true },
    closeLabel: { type: String, attribute: "close-label", reflect: true },
    accessibleLabel: { type: String, attribute: "aria-label", reflect: true },
    items: { attribute: false },
  };

  declare active: string;
  declare orientation: SuperTabsOrientation;
  declare variant: SuperTabsVariant;
  declare size: SuperTabsSize;
  declare closable: boolean;
  declare closeLabel: string;
  declare accessibleLabel: string;
  declare items: SuperTabsItem[];

  private readonly uid = `super-tabs-${++tabsId}`;

  constructor() {
    super();
    this.active = "";
    this.orientation = "horizontal";
    this.variant = "line";
    this.size = "medium";
    this.closable = false;
    this.closeLabel = "关闭标签页";
    this.accessibleLabel = "";
    this.items = [];
  }

  static styles = css`
    :host {
      --super-tabs-gap: 4px;
      --super-tabs-tab-height: 36px;
      --super-tabs-tab-padding-inline: 14px;
      --super-tabs-font-size: var(--super-font-size-base, 14px);
      --super-tabs-color: var(--super-text-color-regular, #4a4441);
      --super-tabs-active-color: var(--super-color-primary-dark-2, #3272e8);
      --super-tabs-background: transparent;
      --super-tabs-active-background: color-mix(
        in srgb,
        var(--super-color-primary, #4b87f5) 13%,
        var(--super-background-color, #fffef9)
      );
      --super-tabs-border-color: var(--super-border-color-light, #b6ada6);
      --super-tabs-active-border-color: var(--super-color-primary-dark-2, #3272e8);
      --super-tabs-indicator-color: var(--super-color-primary, #4b87f5);
      --super-tabs-focus-color: var(--super-focus-color, #56c6b7);
      --super-tabs-radius:
        var(--super-radius-md, 9px)
        calc(var(--super-radius-md, 9px) + 2px)
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-sm, 6px) + 3px) /
        var(--super-radius-sm, 6px)
        var(--super-radius-md, 9px)
        calc(var(--super-radius-md, 9px) + 1px)
        calc(var(--super-radius-sm, 6px) + 2px);
      --super-tabs-rotation: var(--super-sketch-rotation, -0.25deg);

      display: block;
      box-sizing: border-box;
      color: var(--super-tabs-color);
      font-family: var(--super-font-family, "Comic Sans MS", "Kaiti SC", STKaiti, system-ui, sans-serif);
      font-size: var(--super-tabs-font-size);
    }

    :host([hidden]) {
      display: none;
    }

    :host([size="large"]) {
      --super-tabs-tab-height: 44px;
      --super-tabs-tab-padding-inline: 18px;
      --super-tabs-font-size: var(--super-font-size-lg, 16px);
    }

    :host([size="small"]) {
      --super-tabs-tab-height: 30px;
      --super-tabs-tab-padding-inline: 10px;
      --super-tabs-font-size: var(--super-font-size-sm, 13px);
    }

    .tabs {
      display: flex;
      min-inline-size: 0;
      flex-direction: column;
      gap: var(--super-spacing-md, 12px);
    }

    :host([orientation="vertical"]) .tabs {
      flex-direction: row;
      align-items: stretch;
    }

    .tablist {
      position: relative;
      display: flex;
      min-inline-size: 0;
      gap: var(--super-tabs-gap);
      align-items: stretch;
      overflow-x: auto;
      overflow-y: hidden;
      scrollbar-width: thin;
    }

    :host([orientation="vertical"]) .tablist {
      flex: 0 0 auto;
      flex-direction: column;
      align-items: stretch;
      overflow-x: hidden;
      overflow-y: auto;
    }

    .tab-item {
      position: relative;
      display: inline-flex;
      flex: none;
      align-items: center;
      min-inline-size: 0;
      color: inherit;
      background: var(--super-tabs-background);
      border-radius: var(--super-tabs-radius);
      transform: rotate(var(--super-tabs-rotation));
    }

    :host([orientation="vertical"]) .tab-item {
      inline-size: 100%;
    }

    .tab,
    ::slotted([slot="tab"]) {
      position: relative;
      display: inline-flex;
      box-sizing: border-box;
      flex: 1 1 auto;
      align-items: center;
      justify-content: center;
      min-inline-size: 0;
      min-block-size: var(--super-tabs-tab-height);
      margin: 0;
      padding: 0 var(--super-tabs-tab-padding-inline);
      overflow: hidden;
      color: inherit;
      font: inherit;
      font-weight: 700;
      line-height: 1.2;
      text-overflow: ellipsis;
      white-space: nowrap;
      background: transparent;
      border: 0;
      border-radius: inherit;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
    }

    .tab::after {
      position: absolute;
      right: var(--super-tabs-tab-padding-inline);
      bottom: 4px;
      left: var(--super-tabs-tab-padding-inline);
      height: 2px;
      content: "";
      background: var(--super-tabs-indicator-color);
      border-radius: 45% 55% 48% 52% / 100%;
      opacity: 0;
      transform: rotate(-0.7deg) scaleX(0.55);
      transition:
        opacity var(--super-motion-duration, 140ms) var(--super-motion-easing, ease),
        transform var(--super-motion-duration, 140ms) var(--super-motion-easing, ease);
    }

    .tab[aria-selected="true"],
    ::slotted([slot="tab"][aria-selected="true"]) {
      color: var(--super-tabs-active-color);
      background: var(--super-tabs-active-background);
    }

    .tab[aria-selected="true"]::after {
      opacity: 1;
      transform: rotate(-0.7deg) scaleX(1);
    }

    .tab:focus-visible,
    ::slotted([slot="tab"]:focus-visible) {
      outline: 3px solid var(--super-tabs-focus-color);
      outline-offset: 2px;
    }

    .tab:disabled,
    .tab[aria-disabled="true"],
    ::slotted([slot="tab"][aria-disabled="true"]),
    ::slotted([slot="tab"][disabled]) {
      cursor: not-allowed;
      opacity: 0.45;
    }

    :host([variant="line"]) .tablist {
      border-bottom: var(--super-sketch-width, 2px) solid var(--super-tabs-border-color);
    }

    :host([variant="line"][orientation="vertical"]) .tablist {
      border-right: var(--super-sketch-width, 2px) solid var(--super-tabs-border-color);
      border-bottom: 0;
    }

    :host([variant="line"]) .tab-item {
      border-radius: var(--super-tabs-radius) var(--super-tabs-radius) 0 0;
    }

    :host([variant="line"]) .tab[aria-selected="true"]::after {
      right: 4px;
      bottom: -4px;
      left: 4px;
      height: 3px;
    }

    :host([variant="card"]) .tablist {
      gap: 6px;
    }

    :host([variant="card"]) .tab-item {
      background: var(--super-background-color-soft, #f7f4ec);
      border: var(--super-sketch-width, 2px) solid var(--super-tabs-border-color);
      box-shadow: 1px 2px 0 -1px var(--super-sketch-shadow, rgb(23 78 166 / 28%));
    }

    :host([variant="card"]) .tab-item:has([aria-selected="true"]) {
      background: var(--super-tabs-active-background);
      border-color: var(--super-tabs-active-border-color);
    }

    :host([variant="card"]) .tab::after {
      display: none;
    }

    :host([variant="segment"]) .tablist {
      padding: 3px;
      background: var(--super-background-color-soft, #f7f4ec);
      border: var(--super-sketch-width, 2px) solid var(--super-tabs-border-color);
      border-radius: calc(var(--super-radius-md, 9px) + 3px);
    }

    :host([variant="segment"]) .tab-item {
      border-radius: var(--super-tabs-radius);
    }

    :host([variant="segment"]) .tab[aria-selected="true"] {
      background: var(--super-background-color, #fffef9);
      box-shadow: 1px 2px 0 -1px var(--super-sketch-shadow, rgb(23 78 166 / 28%));
    }

    :host([variant="segment"]) .tab::after {
      display: none;
    }

    .close {
      display: inline-grid;
      flex: none;
      place-items: center;
      inline-size: max(19px, calc(var(--super-tabs-tab-height) - 17px));
      block-size: max(19px, calc(var(--super-tabs-tab-height) - 17px));
      margin: 0 5px 0 0;
      padding: 0;
      color: currentColor;
      font: inherit;
      font-size: 0.9em;
      line-height: 1;
      background: transparent;
      border: 1.5px solid currentColor;
      border-radius: 45% 55% 48% 52% / 53% 46% 54% 47%;
      cursor: pointer;
      opacity: 0.62;
    }

    :host([orientation="vertical"]) .close {
      margin: 0 5px 0 0;
    }

    .close:hover {
      background: rgb(41 37 36 / 8%);
      opacity: 1;
    }

    .close:focus-visible {
      outline: 3px solid var(--super-tabs-focus-color);
      outline-offset: 2px;
    }

    .panel {
      box-sizing: border-box;
      min-inline-size: 0;
      padding: var(--super-spacing-sm, 8px) 2px;
      color: inherit;
      line-height: 1.6;
      outline: none;
    }

    :host([orientation="vertical"]) .panel {
      flex: 1 1 auto;
      padding: 2px var(--super-spacing-md, 12px);
    }

    .panel:focus-visible {
      outline: 3px solid var(--super-tabs-focus-color);
      outline-offset: 3px;
    }

    slot {
      display: contents;
    }

    @media (prefers-reduced-motion: reduce) {
      .tab::after {
        transition: none;
      }
    }
  `;

  private get tabSlot(): HTMLSlotElement | null {
    return this.renderRoot?.querySelector<HTMLSlotElement>('slot[name="tab"]') ?? null;
  }

  private get panelId(): string {
    return `${this.uid}-panel`;
  }

  private assignedTabs(): HTMLElement[] {
    return (this.tabSlot?.assignedElements({ flatten: true }) ?? []).filter(
      (node): node is HTMLElement =>
        node instanceof HTMLElement && Boolean(node.dataset.tabKey),
    );
  }

  private tabEntries(): TabEntry[] {
    if (this.items.length > 0) {
      return this.items
        .filter((item) => Boolean(item.key))
        .map((item) => ({
          key: item.key,
          disabled: Boolean(item.disabled),
        }));
    }

    return this.assignedTabs().map((element) => ({
      key: element.dataset.tabKey ?? "",
      disabled:
        element.hasAttribute("disabled") ||
        element.getAttribute("aria-disabled") === "true",
      element,
    }));
  }

  private get effectiveActive(): string {
    const entries = this.tabEntries();
    if (entries.some((entry) => entry.key === this.active && !entry.disabled)) {
      return this.active;
    }
    return entries.find((entry) => !entry.disabled)?.key ?? "";
  }

  private tabId(index: number): string {
    return `${this.uid}-tab-${index}`;
  }

  private get selectedTabId(): string | undefined {
    const key = this.effectiveActive;
    if (!key) {
      return undefined;
    }

    if (this.items.length > 0) {
      const index = this.items.findIndex((item) => item.key === key);
      return index >= 0 ? this.tabId(index) : undefined;
    }

    const index = this.assignedTabs().findIndex(
      (element) => element.dataset.tabKey === key,
    );
    if (index < 0) {
      return undefined;
    }
    return this.assignedTabs()[index]?.id || this.tabId(index);
  }

  private syncSlottedTabs = (): void => {
    if (this.items.length > 0) {
      return;
    }

    const active = this.effectiveActive;
    let needsUpdate = false;
    this.assignedTabs().forEach((element, index) => {
      if (!element.id) {
        element.id = this.tabId(index);
        needsUpdate = true;
      }
      const key = element.dataset.tabKey ?? "";
      const disabled =
        element.hasAttribute("disabled") ||
        element.getAttribute("aria-disabled") === "true";
      const selected = key === active && !disabled;

      element.setAttribute("role", "tab");
      element.setAttribute("aria-selected", selected ? "true" : "false");
      element.setAttribute("aria-controls", this.panelId);
      element.setAttribute("tabindex", selected ? "0" : "-1");
      if (disabled) {
        element.setAttribute("aria-disabled", "true");
      }
    });

    if (needsUpdate) {
      this.requestUpdate();
    }
  };

  private handleTabSlotChange = (): void => {
    this.syncSlottedTabs();
    this.requestUpdate();
  };

  protected updated(): void {
    this.syncSlottedTabs();
  }

  private emitChange(active: string): void {
    this.dispatchEvent(
      new CustomEvent<SuperTabsChangeDetail>("super-tabs-change", {
        detail: { active },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private activate(key: string): void {
    if (!key || key === this.effectiveActive) {
      return;
    }
    this.active = key;
    this.emitChange(key);
  }

  private findTab(key: string): HTMLElement | null {
    if (this.items.length > 0) {
      return (
        Array.from(
          this.renderRoot?.querySelectorAll<HTMLElement>(".tab[data-tab-key]") ??
            [],
        ).find((element) => element.dataset.tabKey === key) ?? null
      );
    }
    return (
      this.assignedTabs().find(
        (element) => element.dataset.tabKey === key,
      ) ?? null
    );
  }

  private focusTab(key: string): void {
    void this.updateComplete.then(() => {
      this.findTab(key)?.focus();
    });
  }

  private handleClick = (event: MouseEvent): void => {
    const path = event.composedPath();
    const close = path.find(
      (node): node is HTMLElement =>
        node instanceof HTMLElement && node.hasAttribute("data-tabs-close"),
    );
    if (close) {
      event.stopPropagation();
      const key = close.dataset.closeKey ?? "";
      if (key) {
        this.dispatchEvent(
          new CustomEvent<SuperTabsCloseDetail>("super-tabs-close", {
            detail: { key },
            bubbles: true,
            composed: true,
          }),
        );
      }
      return;
    }

    const tab = path.find(
      (node): node is HTMLElement =>
        node instanceof HTMLElement && Boolean(node.dataset.tabKey),
    );
    if (!tab) {
      return;
    }
    const key = tab.dataset.tabKey ?? "";
    const entry = this.tabEntries().find((item) => item.key === key);
    if (!entry || entry.disabled) {
      return;
    }
    this.activate(key);
  };

  private handleKeyDown = (event: KeyboardEvent): void => {
    const horizontal = this.orientation !== "vertical";
    const previousKey = horizontal ? "ArrowLeft" : "ArrowUp";
    const nextKey = horizontal ? "ArrowRight" : "ArrowDown";
    if (
      !["Home", "End", previousKey, nextKey].includes(event.key)
    ) {
      return;
    }

    const entries = this.tabEntries();
    const enabled = entries.filter((entry) => !entry.disabled);
    if (enabled.length === 0) {
      return;
    }

    const focused = event
      .composedPath()
      .find(
        (node): node is HTMLElement =>
          node instanceof HTMLElement && Boolean(node.dataset.tabKey),
      );
    const focusedKey = focused?.dataset.tabKey ?? this.effectiveActive;
    const currentIndex = Math.max(
      0,
      enabled.findIndex((entry) => entry.key === focusedKey),
    );

    let nextIndex = currentIndex;
    if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = enabled.length - 1;
    } else {
      const direction = event.key === nextKey ? 1 : -1;
      nextIndex = (currentIndex + direction + enabled.length) % enabled.length;
    }

    const next = enabled[nextIndex];
    if (!next) {
      return;
    }
    event.preventDefault();
    this.activate(next.key);
    this.focusTab(next.key);
  };

  override focus(options?: FocusOptions): void {
    const active = this.effectiveActive;
    const target = active ? this.findTab(active) : null;
    if (target) {
      target.focus(options);
      return;
    }
    super.focus(options);
  }

  override blur(): void {
    const active = this.effectiveActive;
    const target = active ? this.findTab(active) : null;
    if (target) {
      target.blur();
      return;
    }
    super.blur();
  }

  private renderItems() {
    const active = this.effectiveActive;
    return this.items.map((item, index) => {
      const selected = item.key === active && !item.disabled;
      return html`
        <span class="tab-item" part="tab-item">
          <button
            class="tab"
            part="tab"
            type="button"
            role="tab"
            id=${this.tabId(index)}
            data-tab-key=${item.key}
            aria-selected=${selected ? "true" : "false"}
            aria-controls=${this.panelId}
            aria-disabled=${item.disabled ? "true" : "false"}
            tabindex=${selected ? "0" : "-1"}
            ?disabled=${Boolean(item.disabled)}
          >${item.label}</button>
          ${this.closable
            ? html`
                <button
                  class="close"
                  part="tab-close"
                  type="button"
                  data-tabs-close
                  data-close-key=${item.key}
                  aria-label=${`${this.closeLabel}：${item.label}`}
                >
                  <span aria-hidden="true">×</span>
                </button>
              `
            : nothing}
        </span>
      `;
    });
  }

  protected render() {
    return html`
      <div class="tabs">
        <div
          class="tablist"
          part="tablist"
          role="tablist"
          aria-orientation=${this.orientation}
          aria-label=${ifDefined(this.accessibleLabel || undefined)}
          @click=${this.handleClick}
          @keydown=${this.handleKeyDown}
        >
          ${this.items.length > 0
            ? this.renderItems()
            : html`
                <slot
                  name="tab"
                  @slotchange=${this.handleTabSlotChange}
                ></slot>
              `}
        </div>
        <div
          class="panel"
          part="panel"
          id=${this.panelId}
          role="tabpanel"
          tabindex="0"
          aria-labelledby=${ifDefined(this.selectedTabId)}
        >
          <slot></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "super-tabs": SuperTabs;
  }
  interface HTMLElementEventMap {
    "super-tabs-change": CustomEvent<SuperTabsChangeDetail>;
    "super-tabs-close": CustomEvent<SuperTabsCloseDetail>;
  }
}
