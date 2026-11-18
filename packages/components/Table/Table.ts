import { css, html, LitElement, nothing, unsafeCSS } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { live } from "lit/directives/live.js";
import { styleMap } from "lit/directives/style-map.js";
import { sketchyShadow } from "@yxzq-element/utils";

export const SUPER_TABLE_SIZES = ["large", "medium", "small"] as const;
export const SUPER_TABLE_ALIGNS = ["left", "center", "right"] as const;
export const SUPER_TABLE_SORT_DIRECTIONS = ["asc", "desc"] as const;

export type SuperTableSize = (typeof SUPER_TABLE_SIZES)[number];
export type SuperTableAlign = (typeof SUPER_TABLE_ALIGNS)[number];
export type SuperTableSortDirection =
  (typeof SUPER_TABLE_SORT_DIRECTIONS)[number];
export type SuperTableRow = Record<string, unknown>;

export type SuperTableCellFormatter = (
  value: unknown,
  row: SuperTableRow,
  rowIndex: number,
) => unknown;

export interface SuperTableColumn {
  key: string;
  title: string;
  width?: string;
  align?: SuperTableAlign;
  sortable?: boolean;
  formatter?: SuperTableCellFormatter;
}

export interface SuperTableSortDetail {
  key: string;
  direction: SuperTableSortDirection | "none";
}

export interface SuperTableSelectDetail {
  selectedKeys: string[];
  row: SuperTableRow | null;
  selected: boolean;
}

const emptyAttributeConverter = {
  toAttribute: (value: unknown): string | null =>
    value === "" || value === null || value === undefined
      ? null
      : String(value),
  fromAttribute: (value: string | null): string => value ?? "",
};

const booleanAttributeConverter = {
  toAttribute: (value: unknown): string | null => (value ? "" : null),
  fromAttribute: (value: string | null): boolean =>
    value !== null && value !== "false",
};

export class SuperTable extends LitElement {
  static properties = {
    columns: { attribute: false },
    rows: { attribute: false },
    rowKey: { type: String, attribute: "row-key", reflect: true },
    selectable: { type: Boolean, reflect: true },
    selectedKeys: { attribute: false },
    sortKey: {
      type: String,
      attribute: "sort-key",
      reflect: true,
      converter: emptyAttributeConverter,
    },
    sortDirection: {
      type: String,
      attribute: "sort-direction",
      reflect: true,
      converter: emptyAttributeConverter,
    },
    loading: { type: Boolean, reflect: true },
    emptyText: { type: String, attribute: "empty-text", reflect: true },
    size: { type: String, reflect: true },
    striped: { type: Boolean, reflect: true },
    bordered: { type: Boolean, reflect: true },
    showHeader: {
      type: Boolean,
      attribute: "show-header",
      reflect: true,
      converter: booleanAttributeConverter,
    },
    stickyHeader: {
      type: Boolean,
      attribute: "sticky-header",
      reflect: true,
    },
    selectAllLabel: {
      type: String,
      attribute: "select-all-label",
      reflect: true,
    },
    selectRowLabel: {
      type: String,
      attribute: "select-row-label",
      reflect: true,
    },
    loadingText: { type: String, attribute: "loading-text", reflect: true },
    accessibleLabel: { type: String, attribute: "aria-label" },
  };

  declare columns: SuperTableColumn[];
  declare rows: SuperTableRow[];
  declare rowKey: string;
  declare selectable: boolean;
  declare selectedKeys: string[];
  declare sortKey: string;
  declare sortDirection: SuperTableSortDirection | "";
  declare loading: boolean;
  declare emptyText: string;
  declare size: SuperTableSize;
  declare striped: boolean;
  declare bordered: boolean;
  declare showHeader: boolean;
  declare stickyHeader: boolean;
  declare selectAllLabel: string;
  declare selectRowLabel: string;
  declare loadingText: string;
  declare accessibleLabel: string;

  constructor() {
    super();
    this.columns = [];
    this.rows = [];
    this.rowKey = "id";
    this.selectable = false;
    this.selectedKeys = [];
    this.sortKey = "";
    this.sortDirection = "";
    this.loading = false;
    this.emptyText = "暂无数据";
    this.size = "medium";
    this.striped = false;
    this.bordered = false;
    this.showHeader = true;
    this.stickyHeader = false;
    this.selectAllLabel = "全选";
    this.selectRowLabel = "选择此行";
    this.loadingText = "数据加载中";
    this.accessibleLabel = "数据表格";
  }

  static styles = css`
    :host {
      --super-table-font-size: var(--super-font-size-base, 14px);
      --super-table-color: var(--super-text-color-primary, #292524);
      --super-table-muted-color: var(--super-text-color-secondary, #6b6360);
      --super-table-background: var(--super-background-color, #fffef9);
      --super-table-header-background: var(--super-background-color-soft, #f7f4ec);
      --super-table-striped-background: color-mix(
        in srgb,
        var(--super-background-color-soft, #f7f4ec) 55%,
        var(--super-background-color, #fffef9)
      );
      --super-table-hover-background: color-mix(
        in srgb,
        var(--super-color-primary, #4b87f5) 8%,
        var(--super-background-color, #fffef9)
      );
      --super-table-border-color: var(--super-border-color-light, #b6ada6);
      --super-table-outer-border-color: var(--super-border-color, #2f2a27);
      --super-table-selection-color: var(--super-color-primary, #4b87f5);
      --super-table-selection-border-color: var(
        --super-color-primary-dark-2,
        #3272e8
      );
      --super-table-selection-mark-color: var(
        --super-text-color-inverse,
        #ffffff
      );
      --super-table-sort-active-color: var(
        --super-color-primary-dark-2,
        #3272e8
      );
      --super-table-focus-color: var(--super-focus-color, #56c6b7);
      --super-table-shadow-color: var(
        --super-sketch-shadow,
        rgb(23 78 166 / 28%)
      );
      --super-table-skeleton-color: var(
        --super-background-color-soft,
        #f7f4ec
      );
      --super-table-skeleton-shine-color: rgb(255 255 255 / 62%);
      --super-table-cell-padding-block: 10px;
      --super-table-cell-padding-inline: 14px;
      --super-table-selection-width: 48px;
      --super-table-max-height: none;
      --super-table-radius:
        var(--super-radius-md, 9px)
        calc(var(--super-radius-md, 9px) + 3px)
        var(--super-radius-sm, 6px)
        calc(var(--super-radius-sm, 6px) + 3px) /
        var(--super-radius-sm, 6px)
        var(--super-radius-md, 9px)
        calc(var(--super-radius-md, 9px) + 1px)
        calc(var(--super-radius-sm, 6px) + 2px);
      --super-table-rotation: var(--super-sketch-rotation, -0.25deg);
      --super-table-skeleton-duration: 1.4s;

      display: block;
      box-sizing: border-box;
      color: var(--super-table-color);
      font-family: var(--super-font-family, "Comic Sans MS", "Kaiti SC", STKaiti, system-ui, sans-serif);
      font-size: var(--super-table-font-size);
      line-height: 1.5;
    }

    :host([hidden]) {
      display: none;
    }

    :host([size="large"]) {
      --super-table-font-size: var(--super-font-size-lg, 16px);
      --super-table-cell-padding-block: 13px;
      --super-table-cell-padding-inline: 18px;
      --super-table-selection-width: 54px;
    }

    :host([size="small"]) {
      --super-table-font-size: var(--super-font-size-sm, 13px);
      --super-table-cell-padding-block: 7px;
      --super-table-cell-padding-inline: 10px;
      --super-table-selection-width: 42px;
    }

    .viewport {
      position: relative;
      box-sizing: border-box;
      max-block-size: var(--super-table-max-height, none);
      overflow: auto;
      background-color: var(--super-table-background);
      background-image:
        radial-gradient(
          var(--super-paper-texture, rgb(120 113 100 / 6%)) 1px,
          transparent 1px
        ),
        radial-gradient(
          var(--super-paper-texture, rgb(120 113 100 / 6%)) 1px,
          transparent 1px
        );
      background-position: 0 0, 3px 3px;
      background-size: 6px 6px;
      border: var(--super-sketch-width, 2px) solid
        var(--super-table-outer-border-color);
      border-radius: var(--super-table-radius);
      box-shadow: ${unsafeCSS(
        sketchyShadow({
          color: "var(--super-table-shadow-color)",
        }),
      )};
    }

    .table {
      inline-size: 100%;
      min-inline-size: 100%;
      color: inherit;
      font: inherit;
      border-collapse: separate;
      border-spacing: 0;
    }

    .header {
      background: var(--super-table-header-background);
    }

    .header-cell {
      box-sizing: border-box;
      padding: var(--super-table-cell-padding-block)
        var(--super-table-cell-padding-inline);
      color: var(--super-table-muted-color);
      font-weight: 700;
      text-align: left;
      white-space: nowrap;
      background: var(--super-table-header-background);
      border-block-end: var(--super-sketch-width, 2px) solid
        var(--super-table-outer-border-color);
    }

    :host([sticky-header]) .header-cell {
      position: sticky;
      inset-block-start: 0;
      z-index: 2;
    }

    .sort-button {
      display: block;
      box-sizing: border-box;
      inline-size: 100%;
      margin: calc(var(--super-table-cell-padding-block) * -1)
        calc(var(--super-table-cell-padding-inline) * -1);
      padding: var(--super-table-cell-padding-block)
        var(--super-table-cell-padding-inline);
      color: inherit;
      font: inherit;
      font-weight: inherit;
      text-align: inherit;
      cursor: pointer;
      background: transparent;
      border: 0;
      -webkit-tap-highlight-color: transparent;
    }

    .sort-button:hover:not(:disabled) {
      color: var(--super-table-sort-active-color);
      background: var(--super-table-hover-background);
    }

    .sort-button:focus-visible {
      outline: 3px solid var(--super-table-focus-color);
      outline-offset: -3px;
      border-radius: var(--super-radius-sm, 6px);
    }

    .sort-button:disabled {
      cursor: progress;
      opacity: 0.55;
    }

    .sort-indicator {
      display: inline-block;
      margin-inline-start: 6px;
      font-size: 0.9em;
      opacity: 0.55;
    }

    .header-cell[aria-sort="ascending"] .sort-indicator,
    .header-cell[aria-sort="descending"] .sort-indicator {
      color: var(--super-table-sort-active-color);
      opacity: 1;
    }

    .body {
      background: transparent;
    }

    .row {
      background: transparent;
    }

    .data-row {
      transition: background-color var(--super-motion-duration, 140ms)
        var(--super-motion-easing, ease);
    }

    .data-row:hover {
      background: var(--super-table-hover-background);
    }

    :host([striped]) .data-row:nth-child(even) {
      background: var(--super-table-striped-background);
    }

    :host([striped]) .data-row:nth-child(even):hover {
      background: var(--super-table-hover-background);
    }

    .cell {
      box-sizing: border-box;
      padding: var(--super-table-cell-padding-block)
        var(--super-table-cell-padding-inline);
      vertical-align: middle;
      border-block-end: 1.5px solid var(--super-table-border-color);
    }

    .row:last-child > .cell {
      border-block-end: 0;
    }

    :host([bordered]) .header-cell,
    :host([bordered]) .cell {
      border-inline-end: 1.5px solid var(--super-table-border-color);
    }

    :host([bordered]) .header-cell:last-child,
    :host([bordered]) .cell:last-child {
      border-inline-end: 0;
    }

    .selection-cell {
      inline-size: var(--super-table-selection-width);
      padding-inline: 0;
      text-align: center;
      white-space: nowrap;
    }

    .selection-control {
      position: relative;
      display: inline-flex;
      inline-size: 22px;
      block-size: 22px;
      align-items: center;
      justify-content: center;
      vertical-align: middle;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
    }

    .selection-input {
      position: absolute;
      inline-size: 1px;
      block-size: 1px;
      margin: -1px;
      overflow: hidden;
      white-space: nowrap;
      clip-path: inset(50%);
    }

    .selection-box {
      position: relative;
      display: block;
      box-sizing: border-box;
      inline-size: 18px;
      block-size: 18px;
      background: var(--super-table-background);
      border: 2px solid var(--super-table-outer-border-color);
      border-radius: 4px 6px 3px 5px / 5px 3px 6px 4px;
      box-shadow: 1px 1.5px 0 -1px var(--super-table-shadow-color);
      transform: rotate(var(--super-table-rotation));
      transition:
        background-color 120ms ease,
        border-color 120ms ease,
        transform 120ms ease;
    }

    .selection-input:checked + .selection-box,
    .selection-input:indeterminate + .selection-box {
      background: var(--super-table-selection-color);
      border-color: var(--super-table-selection-border-color);
    }

    .selection-input:checked + .selection-box::after {
      position: absolute;
      top: 42%;
      left: 50%;
      box-sizing: border-box;
      inline-size: 34%;
      block-size: 62%;
      content: "";
      border-right: 2px solid var(--super-table-selection-mark-color);
      border-bottom: 2px solid var(--super-table-selection-mark-color);
      transform: translate(-50%, -58%) rotate(42deg);
    }

    .selection-input:indeterminate + .selection-box::after {
      position: absolute;
      top: 50%;
      left: 50%;
      inline-size: 58%;
      block-size: 0;
      content: "";
      border-block-start: 2px solid var(--super-table-selection-mark-color);
      transform: translate(-50%, -50%) rotate(-1deg);
    }

    .selection-input:focus-visible + .selection-box {
      outline: 3px solid var(--super-table-focus-color);
      outline-offset: 2px;
      transform: rotate(0deg);
    }

    .selection-input:disabled + .selection-box {
      box-shadow: none;
      opacity: 0.5;
      transform: rotate(0deg);
    }

    :host([loading]) .selection-control {
      cursor: progress;
    }

    .empty-cell {
      padding-block: calc(var(--super-table-cell-padding-block) * 3);
      padding-inline: var(--super-table-cell-padding-inline);
      color: var(--super-table-muted-color);
      text-align: center;
    }

    .empty-content {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      gap: var(--super-spacing-sm, 8px);
    }

    .empty-illustration {
      inline-size: 64px;
      block-size: 48px;
      color: var(--super-table-muted-color);
      opacity: 0.75;
    }

    .empty-text {
      font-size: 0.95em;
    }

    .skeleton-cell {
      padding: var(--super-table-cell-padding-block)
        var(--super-table-cell-padding-inline);
      border-block-end: 1.5px solid var(--super-table-border-color);
    }

    .skeleton-bar {
      position: relative;
      display: block;
      inline-size: 72%;
      block-size: 12px;
      overflow: hidden;
      background: var(--super-table-skeleton-color);
      border: 1.5px solid var(--super-table-border-color);
      border-radius: 5px 7px 4px 6px / 6px 4px 7px 5px;
      transform: rotate(var(--super-table-rotation));
    }

    .skeleton-cell:nth-child(even) .skeleton-bar {
      inline-size: 56%;
    }

    .skeleton-bar::after {
      display: block;
      inline-size: 100%;
      block-size: 100%;
      content: "";
      background: linear-gradient(
        90deg,
        transparent 0%,
        var(--super-table-skeleton-shine-color) 50%,
        transparent 100%
      );
      transform: translateX(-100%);
      animation: super-table-shimmer var(--super-table-skeleton-duration)
        ease-in-out infinite;
    }

    .visually-hidden {
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

    @keyframes super-table-shimmer {
      0% {
        transform: translateX(-100%);
      }

      100% {
        transform: translateX(100%);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .data-row,
      .selection-box {
        transition: none;
      }

      .skeleton-bar::after {
        animation: none;
      }
    }
  `;

  private get normalizedColumns(): SuperTableColumn[] {
    if (!Array.isArray(this.columns)) {
      return [];
    }

    return this.columns.filter(
      (column): column is SuperTableColumn =>
        Boolean(column) &&
        typeof column.key === "string" &&
        column.key.length > 0,
    );
  }

  private get normalizedRows(): SuperTableRow[] {
    return Array.isArray(this.rows) ? this.rows : [];
  }

  private get selectedKeyList(): string[] {
    const keys = Array.isArray(this.selectedKeys) ? this.selectedKeys : [];
    return Array.from(new Set(keys.map((key) => String(key))));
  }

  private get selectedKeySet(): Set<string> {
    return new Set(this.selectedKeyList);
  }

  private get selectableKeys(): string[] {
    const seen = new Set<string>();
    const keys: string[] = [];

    this.normalizedRows.forEach((row, index) => {
      const key = this.getRowKey(row, index);
      if (!seen.has(key)) {
        seen.add(key);
        keys.push(key);
      }
    });

    return keys;
  }

  private get allSelected(): boolean {
    const keys = this.selectableKeys;
    if (keys.length === 0) {
      return false;
    }

    const selected = this.selectedKeySet;
    return keys.every((key) => selected.has(key));
  }

  private get someSelected(): boolean {
    if (this.allSelected) {
      return false;
    }

    const selected = this.selectedKeySet;
    return this.selectableKeys.some((key) => selected.has(key));
  }

  private get activeSortKey(): string {
    if (this.sortDirection !== "asc" && this.sortDirection !== "desc") {
      return "";
    }

    const column = this.normalizedColumns.find(
      (entry) => entry.key === this.sortKey,
    );
    return column?.sortable ? column.key : "";
  }

  private getRowKey(row: SuperTableRow, index: number): string {
    const value = row?.[this.rowKey];
    if (typeof value === "string" && value.length > 0) {
      return value;
    }

    if (typeof value === "number" && Number.isFinite(value)) {
      return String(value);
    }

    return String(index);
  }

  private emitSort(key: string, direction: SuperTableSortDetail["direction"]): void {
    this.dispatchEvent(
      new CustomEvent<SuperTableSortDetail>("super-table-sort", {
        detail: { key, direction },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private emitSelect(
    selectedKeys: string[],
    row: SuperTableRow | null,
    selected: boolean,
  ): void {
    this.dispatchEvent(
      new CustomEvent<SuperTableSelectDetail>("super-table-select", {
        detail: { selectedKeys: [...selectedKeys], row, selected },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private handleSort = (column: SuperTableColumn): void => {
    if (!column.sortable || this.loading) {
      return;
    }

    const isActive =
      this.sortKey === column.key &&
      (this.sortDirection === "asc" || this.sortDirection === "desc");
    const direction: SuperTableSortDetail["direction"] = !isActive
      ? "asc"
      : this.sortDirection === "asc"
        ? "desc"
        : "none";

    if (direction === "none") {
      this.sortKey = "";
      this.sortDirection = "";
    } else {
      this.sortKey = column.key;
      this.sortDirection = direction;
    }

    this.emitSort(column.key, direction);
  };

  private handleSelectAll = (): void => {
    if (!this.selectable || this.loading) {
      return;
    }

    const keys = this.selectableKeys;
    if (keys.length === 0) {
      return;
    }

    const current = this.selectedKeyList;
    const currentSet = new Set(current);
    const allSelected = keys.every((key) => currentSet.has(key));
    const next = allSelected
      ? current.filter((key) => !keys.includes(key))
      : Array.from(new Set([...current, ...keys]));

    this.selectedKeys = next;
    this.emitSelect(next, null, !allSelected);
  };

  private handleRowSelect = (event: Event): void => {
    if (!this.selectable || this.loading) {
      return;
    }

    const input = event.currentTarget as HTMLInputElement;
    const index = Number(input.dataset.rowIndex);
    const row = this.normalizedRows[index];
    if (!row) {
      return;
    }

    const key = this.getRowKey(row, index);
    const current = this.selectedKeyList;
    const selected = !current.includes(key);
    const next = selected
      ? [...current, key]
      : current.filter((entry) => entry !== key);

    this.selectedKeys = next;
    this.emitSelect(next, row, selected);
  };

  private renderSelectionCell(row: SuperTableRow, index: number) {
    const key = this.getRowKey(row, index);
    return html`
      <td part="cell" class="cell selection-cell">
        <label class="selection-control">
          <input
            class="selection-input"
            type="checkbox"
            aria-label=${this.selectRowLabel}
            data-row-index=${String(index)}
            .checked=${live(this.selectedKeySet.has(key))}
            ?disabled=${this.loading}
            @change=${this.handleRowSelect}
          />
          <span class="selection-box" aria-hidden="true"></span>
        </label>
      </td>
    `;
  }

  private renderCell(
    column: SuperTableColumn,
    row: SuperTableRow,
    rowIndex: number,
  ) {
    const style = column.align ? { textAlign: column.align } : {};
    return html`
      <td part="cell" class="cell" style=${styleMap(style)}>
        <slot name=${`cell-${column.key}`}>
          ${this.renderCellValue(column, row, rowIndex)}
        </slot>
      </td>
    `;
  }

  private renderCellValue(
    column: SuperTableColumn,
    row: SuperTableRow,
    rowIndex: number,
  ): unknown {
    const value = row?.[column.key];
    if (column.formatter) {
      const formatted = column.formatter(value, row, rowIndex);
      return formatted === null || formatted === undefined
        ? nothing
        : formatted;
    }

    if (value === null || value === undefined) {
      return nothing;
    }

    if (typeof value === "object") {
      return String(value);
    }

    return value;
  }

  private renderHeaderCell(column: SuperTableColumn) {
    const sortable = Boolean(column.sortable);
    const active = this.activeSortKey === column.key;
    const ariaSort = sortable
      ? active
        ? this.sortDirection === "asc"
          ? "ascending"
          : "descending"
        : "none"
      : undefined;
    const style = { textAlign: column.align ?? "left" };
    const glyph = active
      ? this.sortDirection === "asc"
        ? "↑"
        : "↓"
      : "↕";

    return html`
      <th
        scope="col"
        part="header-cell"
        class="header-cell"
        style=${styleMap(style)}
        aria-sort=${ifDefined(ariaSort)}
      >
        ${sortable
          ? html`
              <button
                class="sort-button"
                part="sort-button"
                type="button"
                ?disabled=${this.loading}
                @click=${() => this.handleSort(column)}
              >
                <span>${column.title}</span>
                <span class="sort-indicator" aria-hidden="true">${glyph}</span>
              </button>
            `
          : html`<span>${column.title}</span>`}
      </th>
    `;
  }

  private renderEmptyRow(columnCount: number) {
    return html`
      <tr part="row" class="row empty-row" role="row">
        <td
          part="cell empty"
          class="cell empty-cell"
          colspan=${String(columnCount)}
        >
          <span class="empty-content">
            <svg
              class="empty-illustration"
              viewBox="0 0 64 48"
              fill="none"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M4 10c8-5 48-5 56 0 2 8 2 22 0 30-10 4-46 4-56 0-2-8-2-22 0-30Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-dasharray="4 5"
              />
              <path
                d="M16 20h32M16 28h24M16 36h18"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                opacity=".7"
              />
            </svg>
            <span class="empty-text">${this.emptyText}</span>
          </span>
        </td>
      </tr>
    `;
  }

  private renderSkeletonRows(columnCount: number, rowCount: number) {
    const count = rowCount > 0 ? Math.min(rowCount, 5) : 3;

    return Array.from(
      { length: count },
      () => html`
        <tr part="row" class="row skeleton-row" aria-hidden="true">
          ${Array.from(
            { length: columnCount },
            () => html`
              <td part="cell" class="cell skeleton-cell">
                <span class="skeleton-bar"></span>
              </td>
            `,
          )}
        </tr>
      `,
    );
  }

  protected render() {
    const columns = this.normalizedColumns;
    const rows = this.normalizedRows;
    const columnCount = Math.max(
      1,
      columns.length + (this.selectable ? 1 : 0),
    );

    return html`
      <div class="viewport" part="viewport">
        ${this.loading
          ? html`<span class="visually-hidden" role="status">
              ${this.loadingText}
            </span>`
          : nothing}
        <table
          class="table"
          part="table"
          aria-label=${ifDefined(this.accessibleLabel || undefined)}
          aria-busy=${ifDefined(this.loading ? "true" : undefined)}
        >
          ${columns.length > 0 || this.selectable
            ? html`
                <colgroup>
                  ${this.selectable
                    ? html`<col
                        style=${styleMap({
                          width: "var(--super-table-selection-width)",
                        })}
                      />`
                    : nothing}
                  ${columns.map(
                    (column) =>
                      html`<col
                        style=${styleMap(
                          column.width ? { width: column.width } : {},
                        )}
                      />`,
                  )}
                </colgroup>
              `
            : nothing}
          ${this.showHeader && (columns.length > 0 || this.selectable)
            ? html`
                <thead part="header" class="header">
                  <tr>
                    ${this.selectable
                      ? html`
                          <th
                            scope="col"
                            part="header-cell"
                            class="header-cell selection-cell"
                          >
                            <label class="selection-control">
                              <input
                                class="selection-input"
                                type="checkbox"
                                aria-label=${this.selectAllLabel}
                                .checked=${live(this.allSelected)}
                                .indeterminate=${this.someSelected}
                                ?disabled=${this.loading ||
                                this.selectableKeys.length === 0}
                                @change=${this.handleSelectAll}
                              />
                              <span
                                class="selection-box"
                                aria-hidden="true"
                              ></span>
                            </label>
                          </th>
                        `
                      : nothing}
                    ${columns.map((column) => this.renderHeaderCell(column))}
                  </tr>
                </thead>
              `
            : nothing}
          <tbody part=${this.loading ? "body loading" : "body"} class="body">
            ${this.loading
              ? this.renderSkeletonRows(columnCount, rows.length)
              : rows.length === 0
                ? this.renderEmptyRow(columnCount)
                : rows.map(
                    (row, index) => html`
                      <tr part="row" class="row data-row">
                        ${this.selectable
                          ? this.renderSelectionCell(row, index)
                          : nothing}
                        ${columns.map((column) =>
                          this.renderCell(column, row, index),
                        )}
                      </tr>
                    `,
                  )}
          </tbody>
        </table>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "super-table": SuperTable;
  }

  interface HTMLElementEventMap {
    "super-table-sort": CustomEvent<SuperTableSortDetail>;
    "super-table-select": CustomEvent<SuperTableSelectDetail>;
  }
}
