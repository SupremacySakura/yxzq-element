import { css, html, LitElement } from "lit";

export const SUPER_EMPTY_SIZES = ["large", "medium", "small"] as const;

export type SuperEmptySize = (typeof SUPER_EMPTY_SIZES)[number];

export class SuperEmpty extends LitElement {
  static properties = {
    description: { type: String, reflect: true },
    size: { type: String, reflect: true },
    image: { type: String, reflect: true },
  };

  declare description: string;
  declare size: SuperEmptySize;
  declare image: string;

  constructor() {
    super();
    this.description = "暂无数据";
    this.size = "medium";
    this.image = "";
  }

  static styles = css`
    :host {
      --super-empty-illustration-size: 132px;
      --super-empty-gap: var(--super-spacing-md, 12px);
      --super-empty-padding: var(--super-spacing-xl, 24px);
      --super-empty-font-size: var(--super-font-size-base, 14px);
      --super-empty-color: var(--super-text-color-secondary, #6b6360);
      --super-empty-illustration-color: var(--super-text-color-placeholder, #9a938f);
      --super-empty-illustration-background: var(--super-background-color-soft, #f7f4ec);
      --super-empty-illustration-border-color: var(--super-border-color-light, #b6ada6);
      --super-empty-radius:
        var(--super-radius-lg, 14px)
        calc(var(--super-radius-md, 9px) + 3px)
        var(--super-radius-md, 9px)
        calc(var(--super-radius-lg, 14px) - 3px) /
        var(--super-radius-md, 9px)
        var(--super-radius-lg, 14px)
        calc(var(--super-radius-md, 9px) + 2px)
        var(--super-radius-lg, 14px);
      --super-empty-rotation: var(--super-sketch-rotation, -0.25deg);

      display: block;
      box-sizing: border-box;
      color: var(--super-empty-color);
      font-family: var(--super-font-family, "Comic Sans MS", "Kaiti SC", STKaiti, system-ui, sans-serif);
      font-size: var(--super-empty-font-size);
      line-height: 1.5;
    }

    :host([hidden]) {
      display: none;
    }

    :host([size="large"]) {
      --super-empty-illustration-size: 176px;
      --super-empty-gap: var(--super-spacing-lg, 16px);
      --super-empty-padding: var(--super-spacing-xl, 32px);
      --super-empty-font-size: var(--super-font-size-lg, 16px);
    }

    :host([size="small"]) {
      --super-empty-illustration-size: 88px;
      --super-empty-gap: var(--super-spacing-sm, 8px);
      --super-empty-padding: var(--super-spacing-lg, 16px);
      --super-empty-font-size: var(--super-font-size-sm, 13px);
    }

    .empty {
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      align-items: center;
      justify-content: center;
      inline-size: 100%;
      gap: var(--super-empty-gap);
      padding: var(--super-empty-padding);
      text-align: center;
    }

    .illustration {
      display: grid;
      flex: none;
      place-items: center;
      inline-size: var(--super-empty-illustration-size);
      max-inline-size: 100%;
      aspect-ratio: 1;
      overflow: hidden;
      color: var(--super-empty-illustration-color);
      background: var(--super-empty-illustration-background);
      border: var(--super-sketch-width, 2px) solid var(--super-empty-illustration-border-color);
      border-radius: var(--super-empty-radius);
      transform: rotate(var(--super-empty-rotation));
    }

    .image {
      display: block;
      inline-size: 100%;
      block-size: 100%;
      object-fit: contain;
    }

    .drawing {
      inline-size: 78%;
      block-size: auto;
      overflow: visible;
      opacity: 0.86;
    }

    .description {
      max-inline-size: 40ch;
      margin: 0;
      color: var(--super-empty-color);
      font-size: var(--super-empty-font-size);
    }

    .action {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: var(--super-empty-gap);
    }

    .action[hidden] {
      display: none;
    }

    slot {
      display: contents;
    }
  `;

  private hasAction = false;

  private syncActionPresence = (event: Event): void => {
    const slot = event.currentTarget as HTMLSlotElement;
    const hasAction = slot.assignedNodes({ flatten: true }).some(
      (node) =>
        node.nodeType !== Node.TEXT_NODE || Boolean(node.textContent?.trim()),
    );

    if (hasAction !== this.hasAction) {
      this.hasAction = hasAction;
      this.requestUpdate();
    }
  };

  protected render() {
    return html`
      <div class="empty" part="empty" role="status">
        <div class="illustration" part="illustration" aria-hidden="true">
          ${this.image
            ? html`<img
                class="image"
                part="image"
                src=${this.image}
                alt=""
                aria-hidden="true"
              />`
            : html`
                <slot>
                  <svg
                    class="drawing"
                    viewBox="0 0 120 96"
                    fill="none"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      d="M18 70c4-17 17-28 35-29 19-1 37 8 47 24"
                      stroke="currentColor"
                      stroke-width="2.4"
                      stroke-linecap="round"
                      stroke-dasharray="3 5"
                    />
                    <path
                      d="M28 62c2-12 10-20 21-22 12-2 24 4 31 15"
                      stroke="currentColor"
                      stroke-width="2.6"
                      stroke-linecap="round"
                    />
                    <path
                      d="M38 78h44"
                      stroke="currentColor"
                      stroke-width="2.4"
                      stroke-linecap="round"
                      stroke-dasharray="7 6"
                    />
                    <path
                      d="M47 43l3-7 6-2 5 4-2 7-7 2-5-4Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M72 30l2-5 5-1 3 4-2 5-5 1-3-4Z"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linejoin="round"
                    />
                  </svg>
                </slot>
              `}
        </div>
        <p class="description" part="description">${this.description}</p>
        <div class="action" part="action" ?hidden=${!this.hasAction}>
          <slot name="action" @slotchange=${this.syncActionPresence}></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "super-empty": SuperEmpty;
  }
}
