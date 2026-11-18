import { css, html, LitElement, type PropertyValues } from "lit";

export const SUPER_SPACE_DIRECTIONS = ["horizontal", "vertical"] as const;
export const SUPER_SPACE_ALIGNS = [
  "start",
  "center",
  "end",
  "baseline",
] as const;
export const SUPER_SPACE_SIZES = ["small", "medium", "large"] as const;

export type SuperSpaceDirection = (typeof SUPER_SPACE_DIRECTIONS)[number];
export type SuperSpaceAlign = (typeof SUPER_SPACE_ALIGNS)[number];
export type SuperSpaceSize = (typeof SUPER_SPACE_SIZES)[number] | string;

const toGap = (size: string): string | undefined => {
  return /^\d+(?:\.\d+)?$/.test(size) ? `${size}px` : undefined;
};

export class SuperSpace extends LitElement {
  static properties = {
    direction: { type: String, reflect: true },
    size: { type: String, reflect: true },
    wrap: { type: Boolean, reflect: true },
    align: { type: String, reflect: true },
    fill: { type: Boolean, reflect: true },
  };

  declare direction: SuperSpaceDirection;
  declare size: SuperSpaceSize;
  declare wrap: boolean;
  declare align: SuperSpaceAlign;
  declare fill: boolean;

  constructor() {
    super();
    this.direction = "horizontal";
    this.size = "medium";
    this.wrap = false;
    this.align = "center";
    this.fill = false;
  }

  static styles = css`
    :host {
      --super-space-gap: var(--super-spacing-md, 12px);
      --super-space-align: center;
      --super-space-justify: flex-start;

      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: var(--super-space-align);
      justify-content: var(--super-space-justify);
      gap: var(--super-space-gap);
      box-sizing: border-box;
      min-inline-size: 0;
    }

    :host([hidden]) {
      display: none;
    }

    :host([direction="vertical"]) {
      flex-direction: column;
    }

    :host([size="small"]) {
      --super-space-gap: var(--super-spacing-sm, 8px);
    }

    :host([size="medium"]) {
      --super-space-gap: var(--super-spacing-md, 12px);
    }

    :host([size="large"]) {
      --super-space-gap: var(--super-spacing-xl, 24px);
    }

    :host([align="start"]) {
      --super-space-align: flex-start;
    }

    :host([align="center"]) {
      --super-space-align: center;
    }

    :host([align="end"]) {
      --super-space-align: flex-end;
    }

    :host([align="baseline"]) {
      --super-space-align: baseline;
    }

    :host([wrap]) {
      flex-wrap: wrap;
    }

    :host([fill]) {
      inline-size: 100%;
    }

    :host([fill][direction="vertical"]) {
      inline-size: 100%;
      block-size: 100%;
    }

    slot {
      display: contents;
    }
  `;

  protected render() {
    return html`<slot part="space"></slot>`;
  }

  protected override updated(changed: PropertyValues<this>): void {
    if (changed.has("size") || changed.size === 0) {
      const gap = toGap(this.size);
      if (gap) {
        this.style.setProperty("--super-space-gap", gap);
      } else {
        this.style.removeProperty("--super-space-gap");
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "super-space": SuperSpace;
  }
}
