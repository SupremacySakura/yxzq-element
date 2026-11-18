import { css, html, LitElement, nothing } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

export const SUPER_BREADCRUMB_SIZES = ["large", "medium", "small"] as const;

export type SuperBreadcrumbSize = (typeof SUPER_BREADCRUMB_SIZES)[number];

export interface SuperBreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface VisibleBreadcrumbItem {
  type: "item";
  item: SuperBreadcrumbItem;
  index: number;
}

interface VisibleBreadcrumbEllipsis {
  type: "ellipsis";
  index: number;
}

type VisibleBreadcrumbEntry =
  | VisibleBreadcrumbItem
  | VisibleBreadcrumbEllipsis;

export class SuperBreadcrumb extends LitElement {
  static properties = {
    separator: { type: String, reflect: true },
    size: { type: String, reflect: true },
    maxItems: { type: Number, attribute: "max-items", reflect: true },
    accessibleLabel: {
      type: String,
      attribute: "aria-label",
      reflect: true,
    },
    items: { attribute: false },
  };

  declare separator: string;
  declare size: SuperBreadcrumbSize;
  declare maxItems: number;
  declare accessibleLabel: string;
  declare items: SuperBreadcrumbItem[];

  constructor() {
    super();
    this.separator = "/";
    this.size = "medium";
    this.maxItems = 0;
    this.accessibleLabel = "面包屑导航";
    this.items = [];
  }

  static styles = css`
    :host {
      --super-breadcrumb-gap: var(--super-spacing-sm, 8px);
      --super-breadcrumb-font-size: var(--super-font-size-base, 14px);
      --super-breadcrumb-color: var(--super-text-color-secondary, #6b6360);
      --super-breadcrumb-link-color: var(--super-text-color-regular, #4a4441);
      --super-breadcrumb-current-color: var(--super-text-color-primary, #292524);
      --super-breadcrumb-separator-color: var(--super-text-color-placeholder, #9a938f);
      --super-breadcrumb-focus-color: var(--super-focus-color, #56c6b7);
      --super-breadcrumb-radius:
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-sm, 6px) + 2px)
        5px
        calc(var(--super-radius-sm, 6px) + 1px) /
        var(--super-radius-sm, 6px)
        5px
        calc(var(--super-radius-sm, 6px) + 1px)
        var(--super-radius-sm, 6px);
      --super-breadcrumb-rotation: var(--super-sketch-rotation, -0.25deg);
      --super-breadcrumb-separator: "/";

      display: block;
      box-sizing: border-box;
      color: var(--super-breadcrumb-color);
      font-family: var(--super-font-family, "Comic Sans MS", "Kaiti SC", STKaiti, system-ui, sans-serif);
      font-size: var(--super-breadcrumb-font-size);
      line-height: 1.5;
    }

    :host([hidden]) {
      display: none;
    }

    :host([size="large"]) {
      --super-breadcrumb-font-size: var(--super-font-size-lg, 16px);
      --super-breadcrumb-gap: var(--super-spacing-md, 12px);
    }

    :host([size="small"]) {
      --super-breadcrumb-font-size: var(--super-font-size-sm, 13px);
      --super-breadcrumb-gap: 6px;
    }

    .breadcrumb {
      display: block;
      min-inline-size: 0;
    }

    .list {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      min-inline-size: 0;
      gap: var(--super-breadcrumb-gap);
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .item {
      display: inline-flex;
      min-inline-size: 0;
      align-items: center;
      gap: var(--super-breadcrumb-gap);
      color: inherit;
    }

    .separator {
      flex: none;
      color: var(--super-breadcrumb-separator-color);
      font-weight: 400;
      line-height: 1;
      user-select: none;
      transform: rotate(var(--super-breadcrumb-rotation));
    }

    .link,
    .current,
    .label {
      display: inline-flex;
      min-inline-size: 0;
      align-items: center;
      padding: 2px 4px;
      overflow: hidden;
      color: var(--super-breadcrumb-link-color);
      font: inherit;
      line-height: 1.4;
      text-decoration: none;
      text-overflow: ellipsis;
      white-space: nowrap;
      border-radius: var(--super-breadcrumb-radius);
    }

    .link {
      text-decoration-line: underline;
      text-decoration-style: wavy;
      text-decoration-thickness: 1.5px;
      text-underline-offset: 4px;
      cursor: pointer;
      transition:
        color var(--super-motion-duration, 140ms) var(--super-motion-easing, ease),
        background-color var(--super-motion-duration, 140ms) var(--super-motion-easing, ease);
    }

    .link:hover {
      color: var(--super-breadcrumb-current-color);
      background: color-mix(
        in srgb,
        var(--super-color-primary, #4b87f5) 9%,
        transparent
      );
    }

    .link:focus-visible,
    ::slotted(a:focus-visible) {
      outline: 3px solid var(--super-breadcrumb-focus-color);
      outline-offset: 2px;
    }

    .current {
      color: var(--super-breadcrumb-current-color);
      font-weight: 700;
      text-decoration: none;
    }

    .ellipsis {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-inline-size: 1.5em;
      color: var(--super-breadcrumb-separator-color);
      letter-spacing: 0.08em;
      user-select: none;
    }

    ::slotted(li) {
      display: inline-flex;
      align-items: center;
      gap: var(--super-breadcrumb-gap);
      min-inline-size: 0;
    }

    ::slotted(li:not(:first-child))::before {
      color: var(--super-breadcrumb-separator-color);
      content: var(--super-breadcrumb-separator);
      transform: rotate(var(--super-breadcrumb-rotation));
    }

    ::slotted(a) {
      color: var(--super-breadcrumb-link-color);
      text-decoration-line: underline;
      text-decoration-style: wavy;
      text-decoration-thickness: 1.5px;
      text-underline-offset: 4px;
    }

    ::slotted([aria-current="page"]) {
      color: var(--super-breadcrumb-current-color);
      font-weight: 700;
      text-decoration: none;
    }

    slot {
      display: contents;
    }

    @media (prefers-reduced-motion: reduce) {
      .link {
        transition: none;
      }
    }
  `;

  private get visibleEntries(): VisibleBreadcrumbEntry[] {
    const entries: VisibleBreadcrumbEntry[] = this.items.map((item, index) => ({
      type: "item",
      item,
      index,
    }));

    const maxItems = Math.trunc(this.maxItems);
    if (maxItems <= 0 || entries.length <= maxItems) {
      return entries;
    }

    const visibleCount = Math.max(3, maxItems);
    const headCount = Math.max(1, visibleCount - 2);
    const head = entries.slice(0, headCount);
    const tail = entries[entries.length - 1];
    if (!tail) {
      return entries;
    }

    return [
      ...head,
      { type: "ellipsis", index: head.length },
      tail,
    ];
  }

  private renderEntry(entry: VisibleBreadcrumbEntry) {
    if (entry.type === "ellipsis") {
      return html`
        <li class="item" part="item ellipsis-item" aria-hidden="true">
          <span class="ellipsis" part="ellipsis">…</span>
        </li>
      `;
    }

    const { item } = entry;
    const isCurrent = Boolean(item.current);
    const content = isCurrent || !item.href
      ? html`<span
          class=${isCurrent ? "current" : "label"}
          part=${isCurrent ? "current" : "label"}
          aria-current=${ifDefined(isCurrent ? "page" : undefined)}
        >${item.label}</span>`
      : html`<a
          class="link"
          part="link"
          href=${item.href}
        >${item.label}</a>`;

    return html`
      <li class="item" part="item">
        ${entry.index > 0
          ? html`<span
              class="separator"
              part="separator"
              aria-hidden="true"
            >${this.separator}</span>`
          : nothing}
        ${content}
      </li>
    `;
  }

  protected render() {
    const hasItems = this.items.length > 0;
    const separatorStyle = {
      "--super-breadcrumb-separator": JSON.stringify(this.separator),
    };

    return html`
      <nav
        class="breadcrumb"
        part="breadcrumb"
        aria-label=${ifDefined(this.accessibleLabel || undefined)}
        style=${this.separator === "/" ? nothing : styleMap(separatorStyle)}
      >
        <ol class="list" part="list">
          ${hasItems
            ? this.visibleEntries.map((entry) => this.renderEntry(entry))
            : html`<slot></slot>`}
        </ol>
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "super-breadcrumb": SuperBreadcrumb;
  }
}
