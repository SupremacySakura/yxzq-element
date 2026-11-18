import { css, html, LitElement, nothing } from "lit";
import { styleMap } from "lit/directives/style-map.js";

export const SUPER_SKELETON_VARIANTS = ["text", "rect", "circle"] as const;

export type SuperSkeletonVariant = (typeof SUPER_SKELETON_VARIANTS)[number];

export class SuperSkeleton extends LitElement {
  static properties = {
    variant: { type: String, reflect: true },
    rows: { type: Number, reflect: true },
    animated: { type: Boolean, reflect: true },
    loading: { type: Boolean, reflect: true },
    width: { type: String, reflect: true },
    height: { type: String, reflect: true },
    loadingLabel: { type: String, attribute: "loading-label", reflect: true },
  };

  declare variant: SuperSkeletonVariant;
  declare rows: number;
  declare animated: boolean;
  declare loading: boolean;
  declare width: string;
  declare height: string;
  declare loadingLabel: string;

  constructor() {
    super();
    this.variant = "text";
    this.rows = 1;
    this.animated = true;
    this.loading = true;
    this.width = "";
    this.height = "";
    this.loadingLabel = "内容加载中";
  }

  static styles = css`
    :host {
      --super-skeleton-color: var(--super-background-color-soft, #f7f4ec);
      --super-skeleton-shine-color: rgb(255 255 255 / 62%);
      --super-skeleton-border-color: var(--super-border-color-lighter, #ddd5cd);
      --super-skeleton-row-height: 1em;
      --super-skeleton-row-gap: var(--super-spacing-sm, 8px);
      --super-skeleton-radius:
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-sm, 6px) + 2px)
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-sm, 6px) + 1px) /
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-sm, 6px) + 1px)
        calc(var(--super-radius-sm, 6px) + 2px)
        var(--super-radius-sm, 6px);
      --super-skeleton-rect-radius:
        var(--super-radius-md, 9px)
        calc(var(--super-radius-md, 9px) + 3px)
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-md, 9px) + 1px) /
        var(--super-radius-sm, 6px)
        var(--super-radius-md, 9px)
        calc(var(--super-radius-md, 9px) + 2px)
        var(--super-radius-sm, 6px);
      --super-skeleton-rotation: var(--super-sketch-rotation, -0.25deg);
      --super-skeleton-duration: 1.4s;

      display: block;
      box-sizing: border-box;
      inline-size: 100%;
      font-family: var(--super-font-family, "Comic Sans MS", "Kaiti SC", STKaiti, system-ui, sans-serif);
      font-size: var(--super-font-size-base, 14px);
      line-height: 1.5;
    }

    :host([hidden]) {
      display: none;
    }

    :host([variant="circle"]) {
      display: inline-block;
      inline-size: auto;
    }

    .placeholder {
      display: flex;
      flex-direction: column;
      inline-size: 100%;
      gap: var(--super-skeleton-row-gap);
    }

    .row {
      display: block;
      box-sizing: border-box;
      inline-size: 100%;
      block-size: var(--super-skeleton-row-height);
      overflow: hidden;
      background: var(--super-skeleton-color);
      border: 1.5px solid var(--super-skeleton-border-color);
      border-radius: var(--super-skeleton-radius);
      transform: rotate(var(--super-skeleton-rotation));
    }

    .row::after {
      display: block;
      inline-size: 100%;
      block-size: 100%;
      content: "";
      background: linear-gradient(
        90deg,
        transparent 0%,
        var(--super-skeleton-shine-color) 50%,
        transparent 100%
      );
      transform: translateX(-100%);
    }

    :host([animated]) .row::after {
      animation: super-skeleton-shine var(--super-skeleton-duration) ease-in-out infinite;
    }

    .row.rect {
      block-size: var(--super-skeleton-rect-height, 96px);
      border-radius: var(--super-skeleton-rect-radius);
      transform: rotate(calc(var(--super-skeleton-rotation) * -1));
    }

    .row.circle {
      inline-size: var(--super-skeleton-circle-size, 56px);
      block-size: var(--super-skeleton-circle-size, 56px);
      border-radius: 47% 53% 48% 52% / 51% 46% 54% 49%;
      transform: rotate(var(--super-skeleton-rotation));
    }

    :host([variant="text"]) .row:last-child:not(:only-child) {
      inline-size: 62%;
    }

    .content {
      display: contents;
    }

    .status {
      position: absolute;
      inline-size: 1px;
      block-size: 1px;
      margin: -1px;
      padding: 0;
      overflow: hidden;
      white-space: nowrap;
      border: 0;
      clip-path: inset(50%);
    }

    slot {
      display: contents;
    }

    @keyframes super-skeleton-shine {
      0% {
        transform: translateX(-100%);
      }

      100% {
        transform: translateX(100%);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      :host([animated]) .row::after {
        animation: none;
      }
    }
  `;

  private get rowCount(): number {
    if (this.variant !== "text") {
      return 1;
    }

    return Math.max(1, Math.trunc(Number.isFinite(this.rows) ? this.rows : 1));
  }

  private get hostStyle() {
    const style: Record<string, string> = {};

    if (this.width) {
      style.inlineSize = this.width;
    }

    if (this.height) {
      style.blockSize = this.height;
    }

    return style;
  }

  private renderPlaceholder() {
    const rows = Array.from({ length: this.rowCount }, () => html`
      <span class="row" part="row"></span>
    `);

    if (this.variant === "rect") {
      return html`
        <div class="placeholder" part="placeholder" aria-busy="true" aria-hidden="true">
          <span class="row rect" part="row"></span>
        </div>
      `;
    }

    if (this.variant === "circle") {
      return html`
        <div class="placeholder" part="placeholder" aria-busy="true" aria-hidden="true">
          <span class="row circle" part="row"></span>
        </div>
      `;
    }

    return html`
      <div class="placeholder" part="placeholder" aria-busy="true" aria-hidden="true">
        ${rows}
      </div>
    `;
  }

  protected render() {
    return html`
      <div
        class="skeleton"
        part="skeleton"
        style=${styleMap(this.hostStyle)}
        aria-live="polite"
      >
        <span class="status">${this.loading ? this.loadingLabel : nothing}</span>
        ${this.loading
          ? this.renderPlaceholder()
          : html`
              <div class="content" part="content">
                <slot></slot>
              </div>
            `}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "super-skeleton": SuperSkeleton;
  }
}
