import { css, html, LitElement, nothing } from "lit";
import { ifDefined } from "lit/directives/if-defined.js";
import { createControlledValueGuard } from "@yxzq-element/utils";

export const SUPER_UPLOAD_SIZES = ["large", "medium", "small"] as const;
export const SUPER_UPLOAD_VALIDATIONS = [
  "none",
  "success",
  "warning",
  "error",
  "info",
] as const;

export type SuperUploadSize = (typeof SUPER_UPLOAD_SIZES)[number];
export type SuperUploadValidation =
  (typeof SUPER_UPLOAD_VALIDATIONS)[number];
export type SuperUploadExceedReason = "max-count" | "max-size";

export interface SuperUploadChangeDetail {
  fileList: File[];
}

export interface SuperUploadSubmitDetail {
  files: File[];
}

export interface SuperUploadRemoveDetail {
  file: File;
  fileList: File[];
}

export interface SuperUploadExceedDetail {
  files: File[];
  reason: SuperUploadExceedReason;
}

export class SuperUpload extends LitElement {
  static properties = {
    accept: { type: String, reflect: true },
    multiple: { type: Boolean, reflect: true },
    disabled: { type: Boolean, reflect: true },
    maxCount: { type: Number, attribute: "max-count", reflect: true },
    maxSize: { type: Number, attribute: "max-size", reflect: true },
    autoUpload: { type: Boolean, attribute: "auto-upload", reflect: true },
    fileList: { attribute: false, noAccessor: true },
    size: { type: String, reflect: true },
    validation: { type: String, reflect: true },
    promptText: { type: String, attribute: "prompt-text" },
    hintText: { type: String, attribute: "hint-text" },
    removeLabel: { type: String, attribute: "remove-label" },
    accessibleLabel: { type: String, attribute: "aria-label" },
  };

  declare accept: string;
  declare multiple: boolean;
  declare disabled: boolean;
  declare maxCount: number | undefined;
  declare maxSize: number | undefined;
  declare autoUpload: boolean;
  declare size: SuperUploadSize;
  declare validation: SuperUploadValidation;
  declare promptText: string;
  declare hintText: string;
  declare removeLabel: string;
  declare accessibleLabel: string;

  private _fileList: File[] = [];
  private readonly controlledValueGuard = createControlledValueGuard<File[]>({
    host: this,
    getValue: () => this._fileList,
    setValue: (fileList) => this.setInternalFileList(fileList),
    clone: (fileList) => [...fileList],
    equals: (left, right) =>
      left.length === right.length &&
      left.every((file, index) => file === right[index]),
  });
  private dragging = false;

  get fileList(): File[] {
    return this._fileList;
  }

  set fileList(fileList: File[]) {
    this.controlledValueGuard.markExternal(fileList);
    this.setInternalFileList(fileList);
  }

  private setInternalFileList(fileList: File[]): void {
    const oldValue = this._fileList;
    this._fileList = [...fileList];
    this.requestUpdate("fileList", oldValue);
  }

  /**
   * Read-only form-control view of the selected files. Mutations go through
   * `fileList`; this getter mirrors its file names in order.
   */
  get value(): string[] {
    return (Array.isArray(this.fileList) ? this.fileList : []).map(
      (file) => file.name,
    );
  }

  constructor() {
    super();
    this.accept = "";
    this.multiple = false;
    this.disabled = false;
    this.maxCount = undefined;
    this.maxSize = undefined;
    this.autoUpload = false;
    this._fileList = [];
    this.size = "medium";
    this.validation = "none";
    this.promptText = "选择文件";
    this.hintText = "或将文件拖到这里";
    this.removeLabel = "移除文件";
    this.accessibleLabel = "上传文件";
  }

  static styles = css`
    :host {
      --super-upload-width: 360px;
      --super-upload-min-height: 152px;
      --super-upload-padding: var(--super-spacing-lg, 16px);
      --super-upload-gap: var(--super-spacing-sm, 8px);
      --super-upload-font-size: var(--super-font-size-base, 14px);
      --super-upload-color: var(--super-text-color-primary, #292524);
      --super-upload-muted-color: var(--super-text-color-secondary, #6b6360);
      --super-upload-background: var(--super-background-color, #fffef9);
      --super-upload-soft-background: var(--super-background-color-soft, #f7f4ec);
      --super-upload-border-color: var(--super-border-color, #2f2a27);
      --super-upload-hover-color: var(--super-color-primary, #4b87f5);
      --super-upload-focus-color: var(--super-focus-color, #56c6b7);
      --super-upload-shadow-color: var(--super-sketch-shadow, rgb(23 78 166 / 28%));
      --super-upload-validation-color: var(--super-upload-border-color);
      --super-upload-rotation: var(--super-sketch-rotation, -0.25deg);

      display: inline-block;
      inline-size: var(--super-upload-width);
      max-inline-size: 100%;
      color: var(--super-upload-color);
      font-family: var(
        --super-font-family,
        "Comic Sans MS",
        "Kaiti SC",
        STKaiti,
        system-ui,
        sans-serif
      );
      font-size: var(--super-upload-font-size);
      line-height: 1.4;
      vertical-align: middle;
    }

    :host([hidden]) {
      display: none;
    }

    :host([size="large"]) {
      --super-upload-width: 420px;
      --super-upload-min-height: 184px;
      --super-upload-padding: var(--super-spacing-xl, 24px);
      --super-upload-gap: var(--super-spacing-md, 12px);
      --super-upload-font-size: var(--super-font-size-lg, 16px);
    }

    :host([size="small"]) {
      --super-upload-width: 292px;
      --super-upload-min-height: 118px;
      --super-upload-padding: var(--super-spacing-md, 12px);
      --super-upload-gap: 6px;
      --super-upload-font-size: var(--super-font-size-sm, 13px);
    }

    :host([validation="success"]) {
      --super-upload-validation-color: var(--super-color-success, #269453);
    }

    :host([validation="warning"]) {
      --super-upload-validation-color: var(--super-color-warning, #e58a08);
    }

    :host([validation="error"]) {
      --super-upload-validation-color: var(--super-color-danger, #ef3f42);
    }

    :host([validation="info"]) {
      --super-upload-validation-color: var(--super-color-info, #64748b);
    }

    .wrapper {
      display: flex;
      flex-direction: column;
      gap: var(--super-upload-gap);
    }

    .dropzone {
      position: relative;
      display: grid;
      place-items: center;
      box-sizing: border-box;
      min-block-size: var(--super-upload-min-height);
      padding: var(--super-upload-padding);
      overflow: hidden;
      color: inherit;
      font: inherit;
      text-align: center;
      background: var(--super-upload-background);
      border: 2px dashed var(--super-upload-border-color);
      border-radius: 13px 9px 14px 10px / 10px 14px 9px 13px;
      box-shadow:
        3px 3px 0 -1px var(--super-upload-shadow-color),
        inset 0 0 0 1px rgb(255 255 255 / 32%);
      cursor: pointer;
      transform: rotate(var(--super-upload-rotation));
      transition:
        border-color 140ms ease,
        background-color 140ms ease,
        box-shadow 140ms ease,
        transform 120ms ease;
      -webkit-tap-highlight-color: transparent;
    }

    .dropzone::after {
      position: absolute;
      inset: 5px;
      content: "";
      border: 1px solid currentColor;
      border-radius: 9px 6px 10px 7px / 7px 10px 6px 9px;
      opacity: 0.05;
      pointer-events: none;
      transform: rotate(0.2deg);
    }

    .dropzone:focus-visible {
      outline: 3px solid var(--super-upload-focus-color);
      outline-offset: 3px;
      transform: rotate(0deg);
    }

    :host([validation]:not([validation="none"])) .dropzone {
      border-color: var(--super-upload-validation-color);
      box-shadow:
        3px 3px 0 -1px var(--super-upload-validation-color),
        inset 0 0 0 1px rgb(255 255 255 / 32%);
    }

    :host([disabled]) .dropzone {
      color: var(--super-upload-muted-color);
      background: var(--super-upload-soft-background);
      border-color: var(--super-border-color-light, #b6ada6);
      box-shadow: none;
      cursor: not-allowed;
      filter: grayscale(0.42);
      opacity: 0.58;
      transform: rotate(0deg);
    }

    :host([disabled]) {
      cursor: not-allowed;
    }

    .dropzone[data-dragging] {
      background: color-mix(
        in srgb,
        var(--super-upload-hover-color) 9%,
        var(--super-upload-background)
      );
      border-color: var(--super-upload-hover-color);
      box-shadow:
        4px 4px 0 -1px var(--super-upload-hover-color),
        inset 0 0 0 1px rgb(255 255 255 / 32%);
      transform: translate(-1px, -1px) rotate(0.1deg);
    }

    .prompt {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      min-inline-size: 0;
      pointer-events: none;
    }

    .prompt-text {
      font-weight: 700;
    }

    .hint {
      color: var(--super-upload-muted-color);
      font-size: 0.82em;
    }

    .files {
      display: flex;
      flex-direction: column;
      gap: 5px;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    .file {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      gap: var(--super-upload-gap);
      min-inline-size: 0;
      padding: 6px 8px;
      background: var(--super-upload-soft-background);
      border: 1.5px solid var(--super-border-color-light, #b6ada6);
      border-radius: 7px 10px 6px 9px / 9px 6px 10px 7px;
    }

    .file-name {
      flex: 1;
      min-inline-size: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .file-size {
      flex: none;
      color: var(--super-upload-muted-color);
      font-size: 0.8em;
      font-variant-numeric: tabular-nums;
    }

    .remove {
      flex: none;
      box-sizing: border-box;
      inline-size: 24px;
      block-size: 24px;
      margin: 0;
      padding: 0;
      color: inherit;
      font: inherit;
      font-size: 1.05em;
      line-height: 1;
      background: transparent;
      border: 1.5px solid transparent;
      border-radius: 46% 54% 44% 56% / 54% 45% 55% 46%;
      cursor: pointer;
    }

    .remove:hover {
      color: var(--super-color-danger, #ef3f42);
      border-color: currentColor;
    }

    .remove:focus-visible {
      outline: 2px solid var(--super-upload-focus-color);
      outline-offset: 1px;
    }

    .remove:disabled {
      cursor: not-allowed;
    }

    .native {
      display: none;
    }

    @media (hover: hover) {
      :host(:not([disabled])) .dropzone:hover {
        border-color: var(--super-upload-hover-color);
        box-shadow:
          4px 4px 0 -1px var(--super-upload-hover-color),
          inset 0 0 0 1px rgb(255 255 255 / 32%);
        transform: translate(-1px, -1px) rotate(0.1deg);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .dropzone {
        transition: none;
      }
    }
  `;

  private get inputElement(): HTMLInputElement | null {
    return this.renderRoot?.querySelector("input[type='file']") ?? null;
  }

  override focus(options?: FocusOptions): void {
    const dropzone = this.renderRoot?.querySelector<HTMLElement>(".dropzone");
    if (dropzone) {
      dropzone.focus(options);
      return;
    }
    super.focus(options);
  }

  override blur(): void {
    this.renderRoot?.querySelector<HTMLElement>(".dropzone")?.blur();
  }

  private formatSize(bytes: number): string {
    if (bytes < 1024) {
      return `${bytes} B`;
    }
    if (bytes < 1024 * 1024) {
      return `${(bytes / 1024).toFixed(1)} KB`;
    }
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }

  private emit<T>(name: string, detail: T): void {
    this.dispatchEvent(
      new CustomEvent<T>(name, {
        detail,
        bubbles: true,
        composed: true,
      }),
    );
  }

  private dispatchExceed(files: File[], reason: SuperUploadExceedReason): void {
    this.emit<SuperUploadExceedDetail>("super-upload-exceed", {
      files,
      reason,
    });
  }

  private acceptFile(file: File): boolean {
    if (!this.accept.trim()) {
      return true;
    }

    return this.accept
      .split(",")
      .map((rule) => rule.trim().toLowerCase())
      .filter(Boolean)
      .some((rule) => {
        if (rule.startsWith(".")) {
          return file.name.toLowerCase().endsWith(rule);
        }
        if (rule.endsWith("/*")) {
          return file.type.toLowerCase().startsWith(rule.slice(0, -1));
        }
        return file.type.toLowerCase() === rule ||
          file.name.toLowerCase().endsWith(rule);
      });
  }

  private addFiles(files: File[]): void {
    if (this.disabled || files.length === 0) {
      return;
    }

    const accepted = this.multiple ? files : files.slice(0, 1);
    const typeAccepted = accepted.filter((file) => this.acceptFile(file));
    if (typeAccepted.length === 0) {
      return;
    }

    const sizeAccepted: File[] = [];
    const oversized: File[] = [];
    for (const file of typeAccepted) {
      if (this.maxSize !== undefined && file.size > this.maxSize) {
        oversized.push(file);
      } else {
        sizeAccepted.push(file);
      }
    }

    if (oversized.length > 0) {
      this.dispatchExceed(oversized, "max-size");
    }

    if (sizeAccepted.length === 0) {
      return;
    }

    const current = Array.isArray(this.fileList) ? this.fileList : [];
    const base = this.multiple ? current : [];
    const existingKeys = new Set(
      current.map((file) => `${file.name}:${file.size}:${file.lastModified}`),
    );
    const unique = sizeAccepted.filter((file) => {
      const key = `${file.name}:${file.size}:${file.lastModified}`;
      if (existingKeys.has(key)) {
        return false;
      }
      existingKeys.add(key);
      return true;
    });

    const availableCount = this.maxCount === undefined
      ? unique.length
      : Math.max(0, this.maxCount - base.length);
    const available = unique.slice(0, availableCount);
    const overflow = unique.slice(available.length);

    if (overflow.length > 0) {
      this.dispatchExceed(overflow, "max-count");
    }

    if (available.length === 0) {
      return;
    }

    const nextFileList = this.multiple
      ? [...current, ...available]
      : available;
    const controlledMutation = this.controlledValueGuard.capture();
    this.setInternalFileList(nextFileList);
    this.emit<SuperUploadChangeDetail>("super-upload-change", {
      fileList: this.fileList,
    });

    if (this.autoUpload) {
      this.emit<SuperUploadSubmitDetail>("super-upload-submit", {
        files: available,
      });
    }
    this.controlledValueGuard.confirm(controlledMutation);
  }

  private handleInputChange(event: Event): void {
    const input = event.currentTarget as HTMLInputElement;
    this.addFiles(Array.from(input.files ?? []));
    input.value = "";
  }

  private openPicker(): void {
    if (this.disabled) {
      return;
    }
    this.inputElement?.click();
  }

  private handleDropzoneClick(event: MouseEvent): void {
    if (
      event.target instanceof Element &&
      event.target.closest("button, a, input, select, textarea")
    ) {
      return;
    }
    this.openPicker();
  }

  private handleKeydown(event: KeyboardEvent): void {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }
    event.preventDefault();
    this.openPicker();
  }

  private handleDragOver(event: DragEvent): void {
    if (this.disabled) {
      return;
    }
    event.preventDefault();
    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = "copy";
    }
    this.dragging = true;
    this.requestUpdate();
  }

  private handleDragLeave(event: DragEvent): void {
    const current = event.currentTarget as HTMLElement;
    const next = event.relatedTarget as Node | null;
    if (next && current.contains(next)) {
      return;
    }
    this.dragging = false;
    this.requestUpdate();
  }

  private handleDrop(event: DragEvent): void {
    event.preventDefault();
    this.dragging = false;
    this.requestUpdate();
    if (this.disabled) {
      return;
    }
    this.addFiles(Array.from(event.dataTransfer?.files ?? []));
  }

  private handleRemove(file: File): void {
    if (this.disabled) {
      return;
    }
    const current = Array.isArray(this.fileList) ? this.fileList : [];
    const index = current.indexOf(file);
    if (index < 0) {
      return;
    }
    const nextFileList = [
      ...current.slice(0, index),
      ...current.slice(index + 1),
    ];
    const controlledMutation = this.controlledValueGuard.capture();
    this.setInternalFileList(nextFileList);
    this.emit<SuperUploadRemoveDetail>("super-upload-remove", {
      file,
      fileList: this.fileList,
    });
    this.controlledValueGuard.confirm(controlledMutation);
  }

  override disconnectedCallback(): void {
    this.controlledValueGuard.dispose();
    super.disconnectedCallback();
  }

  protected render() {
    const files = Array.isArray(this.fileList) ? this.fileList : [];
    return html`
      <div class="wrapper" part="wrapper">
        <div
          class="dropzone"
          part="dropzone trigger"
          role="button"
          tabindex=${ifDefined(this.disabled ? undefined : "0")}
          aria-label=${this.accessibleLabel}
          aria-disabled=${ifDefined(this.disabled ? "true" : undefined)}
          data-dragging=${ifDefined(this.dragging ? "" : undefined)}
          @click=${this.handleDropzoneClick}
          @keydown=${this.handleKeydown}
          @dragover=${this.handleDragOver}
          @dragenter=${this.handleDragOver}
          @dragleave=${this.handleDragLeave}
          @drop=${this.handleDrop}
        >
          <span class="prompt" part="prompt">
            <slot>
              <span class="prompt-text">${this.promptText}</span>
              <span class="hint">${this.hintText}</span>
            </slot>
          </span>
          <input
            class="native"
            part="input"
            type="file"
            hidden
            accept=${ifDefined(this.accept || undefined)}
            ?multiple=${this.multiple}
            ?disabled=${this.disabled}
            tabindex="-1"
            aria-hidden="true"
            @change=${this.handleInputChange}
          />
        </div>
        ${files.length > 0
          ? html`
              <ul class="files" part="file-list" aria-label=${this.accessibleLabel}>
                ${files.map(
                  (file, index) => html`
                    <li class="file" part="file" data-index=${index}>
                      <span class="file-name" part="file-name" title=${file.name}>${file.name}</span>
                      <span class="file-size" part="file-size">${this.formatSize(file.size)}</span>
                      <button
                        class="remove"
                        part="remove-button"
                        type="button"
                        aria-label=${`${this.removeLabel}：${file.name}`}
                        ?disabled=${this.disabled}
                        @click=${() => this.handleRemove(file)}
                      >×</button>
                    </li>
                  `,
                )}
              </ul>
            `
          : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "super-upload": SuperUpload;
  }

  interface HTMLElementEventMap {
    "super-upload-change": CustomEvent<SuperUploadChangeDetail>;
    "super-upload-submit": CustomEvent<SuperUploadSubmitDetail>;
    "super-upload-remove": CustomEvent<SuperUploadRemoveDetail>;
    "super-upload-exceed": CustomEvent<SuperUploadExceedDetail>;
  }
}
