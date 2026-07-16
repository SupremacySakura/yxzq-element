import { css, html, LitElement } from "lit";

/**
 * Minimal architecture-only button. Product API and visual design are intentionally
 * left for the project owner to define.
 */
export class SuperButton extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }

    :host([hidden]) {
      display: none;
    }

    button {
      color: inherit;
      font: inherit;
    }
  `;

  protected render() {
    return html`
      <button part="button">
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "super-button": SuperButton;
  }
}
