import { css, html, LitElement, nothing } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { live } from "lit/directives/live.js";

export const SUPER_PAGINATION_SIZES = ["large", "medium", "small"] as const;

export type SuperPaginationSize = (typeof SUPER_PAGINATION_SIZES)[number];

export interface SuperPaginationChangeDetail {
  page: number;
  pageSize: number;
}

type PageEntry = number | "ellipsis";

export class SuperPagination extends LitElement {
  static properties = {
    total: { type: Number, reflect: true },
    page: { type: Number, reflect: true },
    pageSize: { type: Number, attribute: "page-size", reflect: true },
    pageSizes: { attribute: false },
    size: { type: String, reflect: true },
    disabled: { type: Boolean, reflect: true },
    showTotal: { type: Boolean, attribute: "show-total", reflect: true },
    showJumper: { type: Boolean, attribute: "show-jumper", reflect: true },
    simple: { type: Boolean, reflect: true },
    accessibleLabel: {
      type: String,
      attribute: "aria-label",
      reflect: true,
    },
    prevLabel: { type: String, attribute: "prev-label", reflect: true },
    nextLabel: { type: String, attribute: "next-label", reflect: true },
    pageLabel: { type: String, attribute: "page-label", reflect: true },
    jumperLabel: { type: String, attribute: "jumper-label", reflect: true },
    totalLabel: { type: String, attribute: "total-label", reflect: true },
    itemsLabel: { type: String, attribute: "items-label", reflect: true },
    pageSuffixLabel: {
      type: String,
      attribute: "page-suffix-label",
      reflect: true,
    },
    pageSizeLabel: {
      type: String,
      attribute: "page-size-label",
      reflect: true,
    },
  };

  declare total: number;
  declare page: number;
  declare pageSize: number;
  declare pageSizes: number[];
  declare size: SuperPaginationSize;
  declare disabled: boolean;
  declare showTotal: boolean;
  declare showJumper: boolean;
  declare simple: boolean;
  declare accessibleLabel: string;
  declare prevLabel: string;
  declare nextLabel: string;
  declare pageLabel: string;
  declare jumperLabel: string;
  declare totalLabel: string;
  declare itemsLabel: string;
  declare pageSuffixLabel: string;
  declare pageSizeLabel: string;

  constructor() {
    super();
    this.total = 0;
    this.page = 1;
    this.pageSize = 10;
    this.pageSizes = [];
    this.size = "medium";
    this.disabled = false;
    this.showTotal = false;
    this.showJumper = false;
    this.simple = false;
    this.accessibleLabel = "分页导航";
    this.prevLabel = "上一页";
    this.nextLabel = "下一页";
    this.pageLabel = "页码";
    this.jumperLabel = "跳至";
    this.totalLabel = "共";
    this.itemsLabel = "条";
    this.pageSuffixLabel = "页";
    this.pageSizeLabel = "每页条数";
  }

  static styles = css`
    :host {
      --super-pagination-gap: var(--super-spacing-sm, 8px);
      --super-pagination-control-height: 34px;
      --super-pagination-control-min-width: 34px;
      --super-pagination-padding-inline: 9px;
      --super-pagination-font-size: var(--super-font-size-base, 14px);
      --super-pagination-color: var(--super-text-color-regular, #4a4441);
      --super-pagination-muted-color: var(--super-text-color-secondary, #6b6360);
      --super-pagination-background: var(--super-background-color, #fffef9);
      --super-pagination-hover-background: color-mix(
        in srgb,
        var(--super-color-primary, #4b87f5) 10%,
        var(--super-background-color, #fffef9)
      );
      --super-pagination-current-background: color-mix(
        in srgb,
        var(--super-color-primary, #4b87f5) 16%,
        var(--super-background-color, #fffef9)
      );
      --super-pagination-current-color: var(--super-color-primary-dark-2, #3272e8);
      --super-pagination-border-color: var(--super-border-color-light, #b6ada6);
      --super-pagination-current-border-color: var(--super-color-primary-dark-2, #3272e8);
      --super-pagination-shadow-color: var(--super-sketch-shadow, rgb(23 78 166 / 28%));
      --super-pagination-focus-color: var(--super-focus-color, #56c6b7);
      --super-pagination-radius:
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-sm, 6px) + 2px)
        5px
        calc(var(--super-radius-sm, 6px) + 1px) /
        var(--super-radius-sm, 6px)
        5px
        calc(var(--super-radius-sm, 6px) + 1px)
        var(--super-radius-sm, 6px);
      --super-pagination-rotation: var(--super-sketch-rotation, -0.25deg);

      display: block;
      box-sizing: border-box;
      color: var(--super-pagination-color);
      font-family: var(--super-font-family, "Comic Sans MS", "Kaiti SC", STKaiti, system-ui, sans-serif);
      font-size: var(--super-pagination-font-size);
      line-height: 1.4;
    }

    :host([hidden]) {
      display: none;
    }

    :host([size="large"]) {
      --super-pagination-control-height: 42px;
      --super-pagination-control-min-width: 42px;
      --super-pagination-padding-inline: 12px;
      --super-pagination-font-size: var(--super-font-size-lg, 16px);
    }

    :host([size="small"]) {
      --super-pagination-control-height: 28px;
      --super-pagination-control-min-width: 28px;
      --super-pagination-padding-inline: 7px;
      --super-pagination-font-size: var(--super-font-size-sm, 13px);
    }

    .pagination {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: var(--super-pagination-gap);
      min-inline-size: 0;
    }

    .total,
    .page-size,
    .jumper,
    .simple-status {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      color: var(--super-pagination-muted-color);
      white-space: nowrap;
    }

    .pages {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: var(--super-pagination-gap);
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .page-item {
      display: inline-flex;
      min-inline-size: 0;
    }

    .control,
    .page-button,
    .jumper-input,
    .page-size-select {
      box-sizing: border-box;
      block-size: var(--super-pagination-control-height);
      margin: 0;
      color: inherit;
      font: inherit;
      background: var(--super-pagination-background);
      border: var(--super-sketch-width, 2px) solid var(--super-pagination-border-color);
      border-radius: var(--super-pagination-radius);
      transform: rotate(var(--super-pagination-rotation));
    }

    .control,
    .page-button {
      display: inline-flex;
      min-inline-size: var(--super-pagination-control-min-width);
      align-items: center;
      justify-content: center;
      gap: 4px;
      padding: 0 var(--super-pagination-padding-inline);
      cursor: pointer;
      transition:
        color var(--super-motion-duration, 140ms) var(--super-motion-easing, ease),
        background-color var(--super-motion-duration, 140ms) var(--super-motion-easing, ease),
        transform 100ms ease;
      -webkit-tap-highlight-color: transparent;
    }

    .control:hover:not(:disabled),
    .page-button:hover:not(:disabled) {
      background: var(--super-pagination-hover-background);
      transform: translate(-1px, -1px) rotate(0.1deg);
    }

    .control:active:not(:disabled),
    .page-button:active:not(:disabled) {
      background: var(--super-pagination-current-background);
      transform: translate(1px, 1px) rotate(-0.1deg);
    }

    .control:focus-visible,
    .page-button:focus-visible,
    .jumper-input:focus-visible,
    .page-size-select:focus-visible {
      outline: 3px solid var(--super-pagination-focus-color);
      outline-offset: 2px;
    }

    .control:disabled,
    .page-button:disabled,
    .jumper-input:disabled,
    .page-size-select:disabled {
      cursor: not-allowed;
      opacity: 0.42;
      transform: rotate(0deg);
    }

    .page-button[aria-current="page"] {
      color: var(--super-pagination-current-color);
      font-weight: 700;
      background: var(--super-pagination-current-background);
      border-color: var(--super-pagination-current-border-color);
      box-shadow: 1px 2px 0 -1px var(--super-pagination-shadow-color);
    }

    .nav-text {
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .nav-icon {
      flex: none;
      font-size: 1.25em;
      line-height: 1;
    }

    .ellipsis {
      display: inline-grid;
      min-inline-size: var(--super-pagination-control-min-width);
      block-size: var(--super-pagination-control-height);
      place-items: center;
      color: var(--super-pagination-muted-color);
      letter-spacing: 0.1em;
      user-select: none;
    }

    .jumper-input {
      inline-size: 4.5em;
      padding: 0 7px;
      text-align: center;
    }

    .jumper-input::-webkit-inner-spin-button,
    .jumper-input::-webkit-outer-spin-button {
      margin: 0;
      appearance: none;
    }

    .page-size-select {
      min-inline-size: 5.5em;
      padding: 0 6px;
      cursor: pointer;
    }

    .simple-status {
      min-inline-size: 6.5em;
      justify-content: center;
      padding: 0 6px;
      color: var(--super-pagination-current-color);
      font-weight: 700;
    }

    .separator {
      color: var(--super-pagination-muted-color);
      opacity: 0.7;
    }

    @media (prefers-reduced-motion: reduce) {
      .control,
      .page-button {
        transition: none;
      }
    }
  `;

  private get normalizedTotal(): number {
    const total = Math.trunc(Number(this.total));
    return Number.isFinite(total) ? Math.max(0, total) : 0;
  }

  private get normalizedPageSize(): number {
    const pageSize = Math.trunc(Number(this.pageSize));
    return Number.isFinite(pageSize) ? Math.max(1, pageSize) : 1;
  }

  private get pageCount(): number {
    return Math.max(
      1,
      Math.ceil(this.normalizedTotal / this.normalizedPageSize),
    );
  }

  private get currentPage(): number {
    const page = Math.trunc(Number(this.page));
    if (!Number.isFinite(page)) {
      return 1;
    }
    return Math.min(this.pageCount, Math.max(1, page));
  }

  private get sizeOptions(): number[] {
    const sizes = new Set<number>();
    this.pageSizes.forEach((value) => {
      const size = Math.trunc(Number(value));
      if (Number.isFinite(size) && size > 0) {
        sizes.add(size);
      }
    });
    sizes.add(this.normalizedPageSize);
    return Array.from(sizes).sort((left, right) => left - right);
  }

  private get pageEntries(): PageEntry[] {
    const count = this.pageCount;
    if (count <= 7) {
      return Array.from({ length: count }, (_, index) => index + 1);
    }

    const current = this.currentPage;
    const pages = new Set<number>([1, count, current - 1, current, current + 1]);
    if (current <= 4) {
      [2, 3, 4, 5].forEach((page) => pages.add(page));
    }
    if (current >= count - 3) {
      [count - 4, count - 3, count - 2, count - 1].forEach((page) =>
        pages.add(page),
      );
    }

    const sorted = Array.from(pages)
      .filter((page) => page >= 1 && page <= count)
      .sort((left, right) => left - right);
    const entries: PageEntry[] = [];
    sorted.forEach((page, index) => {
      const previous = sorted[index - 1];
      if (previous !== undefined && page - previous > 1) {
        entries.push("ellipsis");
      }
      entries.push(page);
    });
    return entries;
  }

  private emitChange(page: number, pageSize: number): void {
    this.dispatchEvent(
      new CustomEvent<SuperPaginationChangeDetail>(
        "super-pagination-change",
        {
          detail: { page, pageSize },
          bubbles: true,
          composed: true,
        },
      ),
    );
  }

  private goToPage(page: number): void {
    if (this.disabled) {
      return;
    }
    const target = Math.min(this.pageCount, Math.max(1, Math.trunc(page)));
    if (!Number.isFinite(target) || target === this.currentPage) {
      return;
    }
    this.page = target;
    this.emitChange(target, this.normalizedPageSize);
  }

  private handlePrev = (): void => {
    this.goToPage(this.currentPage - 1);
  };

  private handleNext = (): void => {
    this.goToPage(this.currentPage + 1);
  };

  private handlePageClick = (event: MouseEvent): void => {
    const button = event.currentTarget as HTMLButtonElement;
    this.goToPage(Number(button.dataset.page));
  };

  private handlePageSizeChange = (event: Event): void => {
    if (this.disabled) {
      return;
    }
    const select = event.currentTarget as HTMLSelectElement;
    const pageSize = Math.trunc(Number(select.value));
    if (
      !Number.isFinite(pageSize) ||
      pageSize <= 0 ||
      pageSize === this.normalizedPageSize
    ) {
      return;
    }
    this.pageSize = pageSize;
    this.page = 1;
    this.emitChange(1, pageSize);
  };

  private commitJumper(input: HTMLInputElement): void {
    if (this.disabled) {
      return;
    }
    const parsed = Math.trunc(Number(input.value));
    if (!Number.isFinite(parsed)) {
      input.value = String(this.currentPage);
      return;
    }
    const target = Math.min(this.pageCount, Math.max(1, parsed));
    input.value = String(target);
    if (target !== this.currentPage) {
      this.page = target;
      this.emitChange(target, this.normalizedPageSize);
    }
  }

  private handleJumperChange = (event: Event): void => {
    this.commitJumper(event.currentTarget as HTMLInputElement);
  };

  private handleJumperKeyDown = (event: KeyboardEvent): void => {
    if (event.key !== "Enter") {
      return;
    }
    event.preventDefault();
    this.commitJumper(event.currentTarget as HTMLInputElement);
  };

  private handlePagesKeyDown = (event: KeyboardEvent): void => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
      return;
    }
    const buttons = Array.from(
      this.renderRoot?.querySelectorAll<HTMLButtonElement>(".page-button") ?? [],
    );
    if (buttons.length === 0) {
      return;
    }

    const focused = event
      .composedPath()
      .find(
        (node): node is HTMLButtonElement =>
          node instanceof HTMLButtonElement &&
          node.classList.contains("page-button"),
      );
    const currentIndex = Math.max(0, focused ? buttons.indexOf(focused) : 0);
    let nextIndex = currentIndex;
    if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = buttons.length - 1;
    } else {
      const direction = event.key === "ArrowRight" ? 1 : -1;
      nextIndex = (currentIndex + direction + buttons.length) % buttons.length;
    }

    event.preventDefault();
    buttons[nextIndex]?.focus();
  };

  private renderPageEntry(entry: PageEntry) {
    if (entry === "ellipsis") {
      return html`
        <li class="page-item" part="page-item">
          <span class="ellipsis" part="ellipsis" aria-hidden="true">…</span>
        </li>
      `;
    }

    const current = entry === this.currentPage;
    return html`
      <li class="page-item" part="page-item">
        <button
          class="page-button"
          part=${current ? "page current" : "page"}
          type="button"
          data-page=${entry}
          aria-label=${`${this.pageLabel} ${entry}`}
          aria-current=${ifDefined(current ? "page" : undefined)}
          ?disabled=${this.disabled}
          @click=${this.handlePageClick}
        >${entry}</button>
      </li>
    `;
  }

  private renderSimple() {
    return html`
      <span class="simple-status" part="simple-status" aria-current="page">
        ${this.currentPage}
        <span class="separator" aria-hidden="true">/</span>
        ${this.pageCount}
        ${this.pageSuffixLabel}
      </span>
    `;
  }

  protected render() {
    const current = this.currentPage;
    return html`
      <nav
        class="pagination"
        part="pagination"
        role="navigation"
        aria-label=${ifDefined(this.accessibleLabel || undefined)}
      >
        ${this.showTotal
          ? html`<span class="total" part="total">
              ${this.totalLabel} ${this.normalizedTotal} ${this.itemsLabel}
            </span>`
          : nothing}

        <button
          class="control prev"
          part="prev"
          type="button"
          aria-label=${this.prevLabel}
          ?disabled=${this.disabled || current <= 1}
          @click=${this.handlePrev}
        >
          <span class="nav-icon" aria-hidden="true">‹</span>
          <span class="nav-text">${this.prevLabel}</span>
        </button>

        ${this.simple
          ? this.renderSimple()
          : html`
              <ul
                class="pages"
                part="pages"
                @keydown=${this.handlePagesKeyDown}
              >
                ${this.pageEntries.map((entry) => this.renderPageEntry(entry))}
              </ul>
            `}

        <button
          class="control next"
          part="next"
          type="button"
          aria-label=${this.nextLabel}
          ?disabled=${this.disabled || current >= this.pageCount}
          @click=${this.handleNext}
        >
          <span class="nav-text">${this.nextLabel}</span>
          <span class="nav-icon" aria-hidden="true">›</span>
        </button>

        ${!this.simple && this.pageSizes.length > 0
          ? html`
              <label class="page-size" part="page-size">
                <select
                  class="page-size-select"
                  part="page-size-select"
                  aria-label=${this.pageSizeLabel}
                  .value=${String(this.normalizedPageSize)}
                  ?disabled=${this.disabled}
                  @change=${this.handlePageSizeChange}
                >
                  ${this.sizeOptions.map(
                    (size) => html`<option value=${String(size)}>
                      ${size} ${this.itemsLabel}/${this.pageSuffixLabel}
                    </option>`,
                  )}
                </select>
              </label>
            `
          : nothing}

        ${!this.simple && this.showJumper
          ? html`
              <label class="jumper" part="jumper">
                <span>${this.jumperLabel}</span>
                <input
                  class="jumper-input"
                  part="jumper-input"
                  type="number"
                  inputmode="numeric"
                  min="1"
                  max=${String(this.pageCount)}
                  step="1"
                  aria-label=${`${this.jumperLabel}${this.pageSuffixLabel}`}
                  .value=${live(String(current))}
                  ?disabled=${this.disabled}
                  @change=${this.handleJumperChange}
                  @keydown=${this.handleJumperKeyDown}
                />
                <span>${this.pageSuffixLabel}</span>
              </label>
            `
          : nothing}
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "super-pagination": SuperPagination;
  }
  interface HTMLElementEventMap {
    "super-pagination-change": CustomEvent<SuperPaginationChangeDetail>;
  }
}
