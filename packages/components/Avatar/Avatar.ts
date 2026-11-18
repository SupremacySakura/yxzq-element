import { css, html, LitElement, type PropertyValues, unsafeCSS } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { sketchyShadow } from "@yxzq-element/utils";

export const SUPER_AVATAR_SIZES = ["large", "medium", "small"] as const;
export const SUPER_AVATAR_SHAPES = ["circle", "square"] as const;

export type SuperAvatarSize = (typeof SUPER_AVATAR_SIZES)[number];
export type SuperAvatarShape = (typeof SUPER_AVATAR_SHAPES)[number];

export class SuperAvatar extends LitElement {
  static properties = {
    src: { type: String, reflect: true },
    alt: { type: String, reflect: true },
    size: { type: String, reflect: true },
    shape: { type: String, reflect: true },
    icon: { type: String, reflect: true },
    fallback: { type: String, reflect: true },
    imageFailed: { state: true },
  };

  declare src: string;
  declare alt: string;
  declare size: SuperAvatarSize;
  declare shape: SuperAvatarShape;
  declare icon: string;
  declare fallback: string;
  private declare imageFailed: boolean;

  constructor() {
    super();
    this.src = "";
    this.alt = "";
    this.size = "medium";
    this.shape = "circle";
    this.icon = "人";
    this.fallback = "";
    this.imageFailed = false;
  }

  static styles = css`
    :host {
      --super-avatar-size: 40px;
      --super-avatar-font-size: 16px;
      --super-avatar-border-width: var(--super-sketch-width, 2px);
      --super-avatar-color: var(--super-text-color-regular, #4a4441);
      --super-avatar-background: var(--super-background-color-soft, #f7f4ec);
      --super-avatar-border-color: var(--super-border-color-light, #b6ada6);
      --super-avatar-shadow-color: rgb(41 37 36 / 18%);
      --super-avatar-radius: 49% 51% 48% 52% / 52% 48% 52% 48%;
      --super-avatar-rotation: var(--super-sketch-rotation, -0.25deg);

      display: inline-flex;
      max-inline-size: 100%;
      color: var(--super-avatar-color);
      font-family: var(--super-font-family, "Comic Sans MS", "Kaiti SC", STKaiti, system-ui, sans-serif);
      line-height: 1;
      vertical-align: middle;
    }

    :host([hidden]) {
      display: none;
    }

    :host([size="large"]) {
      --super-avatar-size: 52px;
      --super-avatar-font-size: 20px;
      --super-avatar-border-width: 2.5px;
    }

    :host([size="small"]) {
      --super-avatar-size: 28px;
      --super-avatar-font-size: 12px;
      --super-avatar-border-width: 1.5px;
    }

    :host([shape="square"]) {
      --super-avatar-radius:
        var(--super-radius-lg, 14px)
        calc(var(--super-radius-lg, 14px) - 3px)
        var(--super-radius-md, 9px)
        calc(var(--super-radius-md, 9px) + 2px) /
        var(--super-radius-md, 9px)
        var(--super-radius-lg, 14px)
        var(--super-radius-lg, 14px)
        calc(var(--super-radius-md, 9px) - 1px);
    }

    .avatar {
      position: relative;
      display: inline-grid;
      flex: none;
      place-items: center;
      box-sizing: border-box;
      inline-size: var(--super-avatar-size);
      block-size: var(--super-avatar-size);
      overflow: hidden;
      background: var(--super-avatar-background);
      border: var(--super-avatar-border-width) solid var(--super-avatar-border-color);
      border-radius: var(--super-avatar-radius);
      box-shadow: ${unsafeCSS(
        sketchyShadow({
          color: "var(--super-avatar-shadow-color)",
          offsetX: 1,
          offsetY: 2,
        }),
      )};
      transform: rotate(var(--super-avatar-rotation));
    }

    .avatar::after {
      position: absolute;
      inset: 2px;
      content: "";
      border: 1px solid currentColor;
      border-radius: inherit;
      opacity: 0.1;
      pointer-events: none;
    }

    .image {
      display: block;
      inline-size: 100%;
      block-size: 100%;
      object-fit: cover;
    }

    .fallback {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      inline-size: 100%;
      block-size: 100%;
      padding: 2px;
      overflow: hidden;
      color: inherit;
      font-size: var(--super-avatar-font-size);
      font-weight: 700;
      line-height: 1;
      text-align: center;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    slot {
      display: contents;
    }
  `;

  protected willUpdate(changedProperties: PropertyValues<this>): void {
    if (changedProperties.has("src")) {
      this.imageFailed = false;
    }
  }

  private handleImageError = (): void => {
    this.imageFailed = true;
  };

  protected render() {
    const showImage = this.src !== "" && !this.imageFailed;
    const fallbackText = this.imageFailed
      ? this.fallback || this.icon
      : this.icon;

    return html`
      <span class="avatar" part="avatar">
        ${showImage
          ? html`
              <img
                class="image"
                part="image"
                src=${this.src}
                alt=${this.alt}
                @error=${this.handleImageError}
              />
            `
          : html`
              <span
                class="fallback"
                part="fallback"
                role=${ifDefined(this.alt ? "img" : undefined)}
                aria-label=${ifDefined(this.alt || undefined)}
              >
                <slot>${fallbackText}</slot>
              </span>
            `}
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "super-avatar": SuperAvatar;
  }
}
