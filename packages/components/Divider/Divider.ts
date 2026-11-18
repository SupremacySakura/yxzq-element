import { css, html, LitElement, nothing } from "lit";
import { styleMap } from "lit/directives/style-map.js";

export const SUPER_DIVIDER_DIRECTIONS = ["horizontal", "vertical"] as const;
export const SUPER_DIVIDER_CONTENT_POSITIONS = [
  "left",
  "center",
  "right",
] as const;
export const SUPER_DIVIDER_VARIANTS = ["solid", "dashed", "hand-drawn"] as const;

export type SuperDividerDirection =
  (typeof SUPER_DIVIDER_DIRECTIONS)[number];
export type SuperDividerContentPosition =
  (typeof SUPER_DIVIDER_CONTENT_POSITIONS)[number];
export type SuperDividerVariant = (typeof SUPER_DIVIDER_VARIANTS)[number];

export class SuperDivider extends LitElement {
  static properties = {
    direction: { type: String, reflect: true },
    contentPosition: {
      type: String,
      attribute: "content-position",
      reflect: true,
    },
    variant: { type: String, reflect: true },
    color: { type: String, reflect: true },
  };

  declare direction: SuperDividerDirection;
  declare contentPosition: SuperDividerContentPosition;
  declare variant: SuperDividerVariant;
  declare color: string;

  private hasContent: boolean;

  constructor() {
    super();
    this.direction = "horizontal";
    this.contentPosition = "center";
    this.variant = "solid";
    this.color = "";
    this.hasContent = false;
  }

  static styles = css`
    :host {
      --super-divider-color: var(--super-border-color-lighter, #ddd5cd);
      --super-divider-thickness: var(--super-sketch-width, 2px);
      --super-divider-gap: var(--super-spacing-md, 12px);
      --super-divider-font-size: var(--super-font-size-sm, 13px);
      --super-divider-content-color: var(--super-text-color-secondary, #6b6360);
      --super-divider-content-background: var(--super-background-color, #fffef9);
      --super-divider-content-padding: 0 var(--super-spacing-sm, 8px);
      --super-divider-vertical-height: 1.25em;
      --super-divider-rotation: -0.45deg;

      display: block;
      box-sizing: border-box;
      color: var(--super-divider-content-color);
      font-family: var(--super-font-family, "Comic Sans MS", "Kaiti SC", STKaiti, system-ui, sans-serif);
      font-size: var(--super-divider-font-size);
      line-height: 1.4;
    }

    :host([hidden]) {
      display: none;
    }

    :host([direction="vertical"]) {
      display: inline-block;
      block-size: var(--super-divider-vertical-height);
      vertical-align: middle;
    }

    .divider {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      inline-size: 100%;
      min-inline-size: 0;
    }

    :host([direction="vertical"]) .divider {
      flex-direction: column;
      inline-size: auto;
      block-size: 100%;
    }

    .line {
      display: block;
      flex: 1 1 0;
      min-inline-size: 0;
      min-block-size: var(--super-divider-thickness);
      background: var(--super-divider-color);
      border-radius: 45% 55% 48% 52% / 100%;
      opacity: 0.9;
      transform: rotate(var(--super-divider-rotation));
    }

    :host([variant="dashed"]) .line {
      background: repeating-linear-gradient(
        90deg,
        var(--super-divider-color) 0 7px,
        transparent 7px 12px
      );
    }

    :host([variant="hand-drawn"]) .line {
      background:
        linear-gradient(
          90deg,
          transparent 0 1.5%,
          var(--super-divider-color) 1.5% 98.5%,
          transparent 98.5%
        );
      transform: rotate(var(--super-divider-rotation)) translateY(0.25px);
    }

    :host([variant="hand-drawn"]) .line.end {
      transform: rotate(calc(var(--super-divider-rotation) + 0.765deg)) translateY(-0.25px);
    }

    :host([direction="vertical"]) .line {
      inline-size: var(--super-divider-thickness);
      min-block-size: 0;
      min-inline-size: 0;
      flex: 1 1 0;
      transform: rotate(var(--super-divider-rotation));
    }

    :host([direction="vertical"][variant="dashed"]) .line {
      background: repeating-linear-gradient(
        180deg,
        var(--super-divider-color) 0 7px,
        transparent 7px 12px
      );
    }

    :host([direction="vertical"][variant="hand-drawn"]) .line {
      background:
        linear-gradient(
          180deg,
          transparent 0 1.5%,
          var(--super-divider-color) 1.5% 98.5%,
          transparent 98.5%
        );
    }

    .content {
      flex: 0 0 auto;
      margin-inline: var(--super-divider-gap);
      padding: var(--super-divider-content-padding);
      color: var(--super-divider-content-color);
      background: var(--super-divider-content-background);
      white-space: nowrap;
    }

    .content[hidden] {
      display: none;
    }

    :host([content-position="left"]) .line.start {
      flex: 0 0 var(--super-divider-gap);
    }

    :host([content-position="right"]) .line.end {
      flex: 0 0 var(--super-divider-gap);
    }

    :host([direction="vertical"]) .content {
      display: none;
    }

    slot {
      display: contents;
    }
  `;

  private syncContentPresence = (event: Event): void => {
    const slot = event.currentTarget as HTMLSlotElement;
    const hasContent = slot.assignedNodes({ flatten: true }).some(
      (node) =>
        node.nodeType !== Node.TEXT_NODE || Boolean(node.textContent?.trim()),
    );

    if (hasContent !== this.hasContent) {
      this.hasContent = hasContent;
      this.requestUpdate();
    }
  };

  private handleSlotChange = (event: Event): void => {
    this.syncContentPresence(event);
  };

  protected render() {
    const isVertical = this.direction === "vertical";
    const dividerStyle = this.color
      ? { "--super-divider-color": this.color }
      : {};

    return html`
      <div
        class="divider"
        part="divider"
        role="separator"
        aria-orientation=${isVertical ? "vertical" : "horizontal"}
        style=${styleMap(dividerStyle)}
      >
        <span class="line start" part="line" aria-hidden="true"></span>
        ${isVertical
          ? nothing
          : html`
              <span class="content" part="content" ?hidden=${!this.hasContent}>
                <slot @slotchange=${this.handleSlotChange}></slot>
              </span>
            `}
        <span class="line end" part="line" aria-hidden="true"></span>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "super-divider": SuperDivider;
  }
}
