import { css, html, LitElement, unsafeCSS } from "lit";
import { sketchyShadow } from "@yxzq-element/utils";

export const SUPER_TAG_VARIANTS = [
  "default",
  "primary",
  "success",
  "warning",
  "danger",
  "info",
] as const;

export const SUPER_TAG_SIZES = ["large", "medium", "small"] as const;

export type SuperTagVariant = (typeof SUPER_TAG_VARIANTS)[number];
export type SuperTagSize = (typeof SUPER_TAG_SIZES)[number];

export interface SuperTagCloseDetail {
  value: string;
}

export class SuperTag extends LitElement {
  static properties = {
    variant: { type: String, reflect: true },
    size: { type: String, reflect: true },
    closable: { type: Boolean, reflect: true },
    value: { type: String, reflect: true },
    closeLabel: { type: String, attribute: "close-label", reflect: true },
  };

  declare variant: SuperTagVariant;
  declare size: SuperTagSize;
  declare closable: boolean;
  declare value: string;
  declare closeLabel: string;

  constructor() {
    super();
    this.variant = "default";
    this.size = "medium";
    this.closable = false;
    this.value = "";
    this.closeLabel = "移除标签";
  }

  static styles = css`
    :host {
      --super-tag-height: 27px;
      --super-tag-padding-inline: 10px;
      --super-tag-gap: 5px;
      --super-tag-font-size: var(--super-font-size-sm, 13px);
      --super-tag-font-weight: 700;
      --super-tag-color: var(--super-text-color-regular, #4a4441);
      --super-tag-background: var(--super-background-color-soft, #f7f4ec);
      --super-tag-border-color: var(--super-border-color-light, #b6ada6);
      --super-tag-shadow-color: color-mix(
        in srgb,
        var(--super-sketch-shadow, rgb(23 78 166 / 28%)) 30%,
        transparent
      );
      --super-tag-focus-color: var(--super-focus-color, #56c6b7);
      --super-tag-radius:
        var(--super-radius-md, 9px)
        calc(var(--super-radius-md, 9px) + 2px)
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-sm, 6px) + 4px) /
        var(--super-radius-md, 9px)
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-md, 9px) + 1px)
        calc(var(--super-radius-sm, 6px) + 2px);
      --super-tag-rotation: var(--super-sketch-rotation, -0.25deg);

      display: inline-flex;
      max-inline-size: 100%;
      color: var(--super-tag-color);
      font-family: var(--super-font-family, "Comic Sans MS", "Kaiti SC", STKaiti, system-ui, sans-serif);
      font-size: var(--super-tag-font-size);
      line-height: 1;
      vertical-align: middle;
    }

    :host([hidden]) {
      display: none;
    }

    :host([size="large"]) {
      --super-tag-height: 33px;
      --super-tag-padding-inline: 13px;
      --super-tag-gap: 7px;
      --super-tag-font-size: var(--super-font-size-base, 14px);
      --super-tag-radius:
        var(--super-radius-lg, 14px)
        calc(var(--super-radius-lg, 14px) - 2px)
        var(--super-radius-md, 9px)
        calc(var(--super-radius-md, 9px) + 2px) /
        var(--super-radius-lg, 14px)
        var(--super-radius-md, 9px)
        calc(var(--super-radius-lg, 14px) - 3px)
        calc(var(--super-radius-md, 9px) + 1px);
    }

    :host([size="small"]) {
      --super-tag-height: 22px;
      --super-tag-padding-inline: 7px;
      --super-tag-gap: 3px;
      --super-tag-font-size: 12px;
      --super-tag-radius:
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-sm, 6px) + 2px)
        5px
        calc(var(--super-radius-sm, 6px) + 1px) /
        var(--super-radius-sm, 6px)
        5px
        calc(var(--super-radius-sm, 6px) + 1px)
        var(--super-radius-sm, 6px);
    }

    :host([variant="primary"]) {
      --super-tag-color: color-mix(
        in srgb,
        var(--super-color-primary-dark-2, #3272e8) 82%,
        var(--super-text-color-primary, #292524)
      );
      --super-tag-background: color-mix(
        in srgb,
        var(--super-color-primary, #4b87f5) 14%,
        var(--super-background-color, #fffef9)
      );
      --super-tag-border-color: color-mix(
        in srgb,
        var(--super-color-primary, #4b87f5) 55%,
        var(--super-border-color-light, #b6ada6)
      );
      --super-tag-shadow-color: color-mix(
        in srgb,
        var(--super-color-primary-dark-2, #3272e8) 18%,
        transparent
      );
    }

    :host([variant="success"]) {
      --super-tag-color: color-mix(
        in srgb,
        var(--super-color-success, #86cf8b) 28%,
        var(--super-text-color-primary, #292524)
      );
      --super-tag-background: color-mix(
        in srgb,
        var(--super-color-success, #86cf8b) 16%,
        var(--super-background-color, #fffef9)
      );
      --super-tag-border-color: color-mix(
        in srgb,
        var(--super-color-success, #86cf8b) 70%,
        var(--super-border-color-light, #b6ada6)
      );
      --super-tag-shadow-color: color-mix(
        in srgb,
        var(--super-color-success, #86cf8b) 22%,
        transparent
      );
    }

    :host([variant="warning"]) {
      --super-tag-color: var(--super-text-color-primary, #292524);
      --super-tag-background: color-mix(
        in srgb,
        var(--super-color-warning, #ffca50) 20%,
        var(--super-background-color, #fffef9)
      );
      --super-tag-border-color: color-mix(
        in srgb,
        var(--super-color-warning, #ffca50) 70%,
        var(--super-border-color-light, #b6ada6)
      );
      --super-tag-shadow-color: color-mix(
        in srgb,
        var(--super-color-warning, #ffca50) 24%,
        transparent
      );
    }

    :host([variant="danger"]) {
      --super-tag-color: color-mix(
        in srgb,
        var(--super-color-danger, #ff7067) 60%,
        var(--super-text-color-primary, #292524)
      );
      --super-tag-background: color-mix(
        in srgb,
        var(--super-color-danger, #ff7067) 14%,
        var(--super-background-color, #fffef9)
      );
      --super-tag-border-color: color-mix(
        in srgb,
        var(--super-color-danger, #ff7067) 60%,
        var(--super-border-color-light, #b6ada6)
      );
      --super-tag-shadow-color: color-mix(
        in srgb,
        var(--super-color-danger, #ff7067) 18%,
        transparent
      );
    }

    :host([variant="info"]) {
      --super-tag-color: var(--super-text-color-secondary, #6b6360);
      --super-tag-background: color-mix(
        in srgb,
        var(--super-color-info, #7d8896) 12%,
        var(--super-background-color, #fffef9)
      );
      --super-tag-border-color: color-mix(
        in srgb,
        var(--super-color-info, #7d8896) 50%,
        var(--super-border-color-light, #b6ada6)
      );
      --super-tag-shadow-color: color-mix(
        in srgb,
        var(--super-color-info, #7d8896) 16%,
        transparent
      );
    }

    .tag {
      position: relative;
      isolation: isolate;
      display: inline-flex;
      align-items: center;
      box-sizing: border-box;
      max-inline-size: 100%;
      min-block-size: var(--super-tag-height);
      gap: var(--super-tag-gap);
      padding-inline: var(--super-tag-padding-inline);
      color: inherit;
      font: inherit;
      font-weight: var(--super-tag-font-weight);
      line-height: 1;
      background: var(--super-tag-background);
      border: var(--super-sketch-width, 2px) solid var(--super-tag-border-color);
      border-radius: var(--super-tag-radius);
      box-shadow: ${unsafeCSS(sketchyShadow({ color: "var(--super-tag-shadow-color)" }))};
      transform: rotate(var(--super-tag-rotation));
    }

    .tag::after {
      position: absolute;
      inset: 2px 3px 3px 2px;
      content: "";
      border: 1px solid currentColor;
      border-radius: inherit;
      opacity: 0.12;
      pointer-events: none;
    }

    .label {
      display: inline-flex;
      min-inline-size: 0;
      overflow: hidden;
      align-items: center;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    slot {
      display: contents;
    }

    .close {
      display: inline-grid;
      flex: none;
      place-items: center;
      inline-size: max(18px, calc(var(--super-tag-height) - 9px));
      block-size: max(18px, calc(var(--super-tag-height) - 9px));
      margin: 0;
      padding: 0;
      color: currentColor;
      font: inherit;
      font-size: 0.9em;
      line-height: 1;
      background: transparent;
      border: 1.5px solid currentColor;
      border-radius: 45% 55% 48% 52% / 53% 46% 54% 47%;
      cursor: pointer;
      opacity: 0.68;
      transition:
        background-color var(--super-motion-duration, 140ms) var(--super-motion-easing, ease),
        opacity var(--super-motion-duration, 140ms) var(--super-motion-easing, ease);
    }

    .close:hover {
      background: rgb(41 37 36 / 8%);
      opacity: 1;
    }

    .close:focus-visible {
      outline: 3px solid var(--super-tag-focus-color);
      outline-offset: 2px;
    }

    @media (prefers-reduced-motion: reduce) {
      .close {
        transition: none;
      }
    }
  `;

  private close(): void {
    if (!this.closable) {
      return;
    }

    this.dispatchEvent(
      new CustomEvent<SuperTagCloseDetail>("super-tag-close", {
        detail: { value: this.value },
        bubbles: true,
        composed: true,
      }),
    );
  }

  protected render() {
    return html`
      <span class="tag" part="tag">
        <span class="label" part="label"><slot></slot></span>
        ${this.closable
          ? html`
              <button
                class="close"
                part="close"
                type="button"
                aria-label=${this.closeLabel}
                @click=${this.close}
              >
                <span aria-hidden="true">×</span>
              </button>
            `
          : null}
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "super-tag": SuperTag;
  }
  interface HTMLElementEventMap {
    "super-tag-close": CustomEvent<SuperTagCloseDetail>;
  }
}
