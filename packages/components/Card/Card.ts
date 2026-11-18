import {
  css,
  html,
  LitElement,
  unsafeCSS,
  type PropertyValues,
} from "lit";
import { paperTexture, sketchyShadow } from "@yxzq-element/utils";

export const SUPER_CARD_VARIANTS = [
  "default",
  "outlined",
  "filled",
  "ghost",
] as const;
export const SUPER_CARD_SIZES = ["large", "medium", "small"] as const;

export type SuperCardVariant = (typeof SUPER_CARD_VARIANTS)[number];
export type SuperCardSize = (typeof SUPER_CARD_SIZES)[number];

export interface SuperCardClickDetail {
  originalEvent: Event;
}

export class SuperCard extends LitElement {
  static properties = {
    variant: { type: String, reflect: true },
    size: { type: String, reflect: true },
    hoverable: { type: Boolean, reflect: true },
    clickable: { type: Boolean, reflect: true },
    accessibleLabel: { type: String, attribute: "aria-label" },
  };

  declare variant: SuperCardVariant;
  declare size: SuperCardSize;
  declare hoverable: boolean;
  declare clickable: boolean;
  declare accessibleLabel: string;

  constructor() {
    super();
    this.variant = "default";
    this.size = "medium";
    this.hoverable = false;
    this.clickable = false;
    this.accessibleLabel = "";
  }

  static styles = css`
    :host {
      --super-card-padding: var(--super-spacing-lg, 16px);
      --super-card-gap: var(--super-spacing-md, 12px);
      --super-card-font-size: var(--super-font-size-base, 14px);
      --super-card-background: var(--super-background-color, #fffef9);
      --super-card-color: var(--super-text-color-primary, #292524);
      --super-card-border-color: var(--super-border-color, #2f2a27);
      --super-card-border-width: var(--super-sketch-width, 2px);
      --super-card-shadow-color: var(--super-sketch-shadow, rgb(23 78 166 / 28%));
      --super-card-radius:
        var(--super-radius-lg, 14px)
        var(--super-radius-md, 9px)
        var(--super-radius-lg, 14px)
        var(--super-radius-sm, 6px)
        /
        var(--super-radius-sm, 6px)
        var(--super-radius-lg, 14px)
        var(--super-radius-md, 9px)
        var(--super-radius-lg, 14px);
      --super-card-header-color: var(--super-text-color-primary, #292524);
      --super-card-footer-color: var(--super-text-color-secondary, #6b6360);
      --super-card-media-background: var(--super-background-color-soft, #f7f4ec);
      --super-card-hover-lift: 3px;
      --super-card-focus-color: var(--super-focus-color, #56c6b7);
      --super-card-rotation: var(--super-sketch-rotation, -0.25deg);

      display: block;
      box-sizing: border-box;
      min-inline-size: 0;
      color: var(--super-card-color);
      font-family: var(--super-font-family, "Comic Sans MS", "Kaiti SC", STKaiti, system-ui, sans-serif);
      font-size: var(--super-card-font-size);
      line-height: 1.55;
    }

    :host([hidden]) {
      display: none;
    }

    :host([size="large"]) {
      --super-card-padding: var(--super-spacing-xl, 24px);
      --super-card-gap: var(--super-spacing-lg, 16px);
      --super-card-font-size: var(--super-font-size-lg, 16px);
    }

    :host([size="small"]) {
      --super-card-padding: var(--super-spacing-md, 12px);
      --super-card-gap: var(--super-spacing-sm, 8px);
      --super-card-font-size: var(--super-font-size-sm, 13px);
    }

    :host([variant="outlined"]) {
      --super-card-background: transparent;
      --super-card-shadow-color: transparent;
    }

    :host([variant="filled"]) {
      --super-card-background: var(--super-background-color-soft, #f7f4ec);
      --super-card-border-color: var(--super-border-color-light, #b6ada6);
      --super-card-shadow-color: transparent;
    }

    :host([variant="ghost"]) {
      --super-card-background: transparent;
      --super-card-border-color: transparent;
      --super-card-shadow-color: transparent;
      --super-card-header-color: var(--super-text-color-regular, #4a4441);
    }

    .surface {
      position: relative;
      isolation: isolate;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      min-inline-size: 0;
      overflow: hidden;
      background: var(--super-card-background);
      border: var(--super-card-border-width) solid var(--super-card-border-color);
      border-radius: var(--super-card-radius);
      box-shadow: ${unsafeCSS(
        sketchyShadow({ color: "var(--super-card-shadow-color)" }),
      )};
    }

    .surface::before {
      position: absolute;
      inset: 0;
      z-index: -1;
      content: "";
      border-radius: inherit;
      ${unsafeCSS(
        paperTexture({
          color: "var(--super-paper-texture, rgb(120 113 100 / 6%))",
        }),
      )};
    }

    :host([variant="filled"]) .surface {
      border-style: dashed;
    }

    :host([variant="ghost"]) .surface {
      border-width: 0;
      border-radius: 0;
      box-shadow: none;
    }

    :host([variant="ghost"]) .surface::before {
      display: none;
    }

    .media {
      display: block;
      overflow: hidden;
      background: var(--super-card-media-background);
      border-block-end: var(--super-card-border-width) dashed var(--super-card-border-color);
    }

    .media[hidden] {
      display: none;
    }

    ::slotted([slot="media"]) {
      display: block;
      max-inline-size: 100%;
    }

    .header {
      display: block;
      padding: var(--super-card-padding) var(--super-card-padding) 0;
      color: var(--super-card-header-color);
      font-size: 1.08em;
      font-weight: 700;
    }

    .header[hidden] {
      display: none;
    }

    .body {
      display: block;
      padding: var(--super-card-padding);
    }

    .body.has-header {
      padding-block-start: var(--super-card-gap);
    }

    .footer {
      display: block;
      padding: 0 var(--super-card-padding) var(--super-card-padding);
      color: var(--super-card-footer-color);
      font-size: 0.92em;
    }

    .footer[hidden] {
      display: none;
    }

    :host([clickable]) {
      cursor: pointer;
      user-select: none;
      -webkit-tap-highlight-color: transparent;
    }

    :host([clickable]) .surface {
      transition:
        box-shadow var(--super-motion-duration, 140ms) var(--super-motion-easing, ease),
        transform var(--super-motion-duration, 140ms) var(--super-motion-easing, ease);
    }

    :host([clickable]:focus-visible) {
      outline: none;
    }

    :host([clickable]:focus-visible) .surface {
      outline: 3px solid var(--super-card-focus-color);
      outline-offset: 3px;
    }

    @media (hover: hover) {
      :host([hoverable]) .surface,
      :host([clickable]) .surface {
        transform: rotate(var(--super-card-rotation));
      }

      :host([hoverable]:hover) .surface,
      :host([clickable]:hover) .surface {
        box-shadow:
          inset 0 0 0 1px rgb(255 255 255 / 24%),
          4px 5px 0 -1px var(--super-card-shadow-color);
        transform: translate(
            calc(0px - var(--super-card-hover-lift)),
            calc(0px - var(--super-card-hover-lift))
          )
          rotate(0.15deg);
      }
    }

    :host([clickable]:active) .surface {
      box-shadow:
        inset 0 2px 3px rgb(15 23 42 / 14%),
        1px 1px 0 -1px var(--super-card-shadow-color);
      transform: translate(1px, 1px) rotate(-0.15deg);
    }

    @media (prefers-reduced-motion: reduce) {
      :host([clickable]) .surface {
        transition: none;
      }

      :host([hoverable]:hover) .surface,
      :host([clickable]:hover) .surface,
      :host([clickable]:active) .surface {
        transform: none;
      }
    }
  `;

  private get isInteractive(): boolean {
    return this.clickable;
  }

  private emitClick(originalEvent: Event): void {
    this.dispatchEvent(
      new CustomEvent<SuperCardClickDetail>("super-card-click", {
        bubbles: true,
        composed: true,
        detail: { originalEvent },
      }),
    );
  }

  private handleClick = (event: MouseEvent): void => {
    if (!this.isInteractive) {
      return;
    }

    this.emitClick(event);
  };

  private handleKeyDown = (event: KeyboardEvent): void => {
    if (
      !this.isInteractive ||
      event.defaultPrevented ||
      event.target !== this
    ) {
      return;
    }

    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    event.preventDefault();
    this.emitClick(event);
  };

  protected override updated(changed: PropertyValues<this>): void {
    if (changed.has("clickable") || changed.size === 0) {
      this.syncInteractionAttributes();
    }
  }

  private syncInteractionAttributes(): void {
    if (this.clickable) {
      this.setAttribute("role", "button");
      this.setAttribute("tabindex", "0");
      return;
    }

    this.removeAttribute("role");
    this.removeAttribute("tabindex");
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener("click", this.handleClick);
    this.addEventListener("keydown", this.handleKeyDown);
  }

  override disconnectedCallback(): void {
    this.removeEventListener("click", this.handleClick);
    this.removeEventListener("keydown", this.handleKeyDown);
    super.disconnectedCallback();
  }

  protected render() {
    return html`
      <div
        class="surface"
        part="surface"
      >
        <div class="media" part="media" hidden>
          <slot name="media" @slotchange=${this.syncSlotPresence}></slot>
        </div>
        <div class="header" part="header" hidden>
          <slot name="header" @slotchange=${this.syncSlotPresence}></slot>
        </div>
        <div class="body" part="body">
          <slot></slot>
        </div>
        <div class="footer" part="footer" hidden>
          <slot name="footer" @slotchange=${this.syncSlotPresence}></slot>
        </div>
      </div>
    `;
  }

  private syncSlotPresence(event: Event): void {
    const slot = event.currentTarget as HTMLSlotElement;
    const hasContent = slot.assignedNodes({ flatten: true }).some(
      (node) =>
        node.nodeType !== Node.TEXT_NODE || Boolean(node.textContent?.trim()),
    );
    const wrapper = slot.closest<HTMLElement>("[hidden]") ??
      slot.parentElement;

    if (wrapper) {
      wrapper.hidden = !hasContent;
      if (slot.name === "header") {
        const body = this.renderRoot.querySelector(".body");
        body?.classList.toggle("has-header", hasContent);
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "super-card": SuperCard;
  }

  interface HTMLElementEventMap {
    "super-card-click": CustomEvent<SuperCardClickDetail>;
  }
}
