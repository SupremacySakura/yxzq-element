import {
  css,
  html,
  LitElement,
  nothing,
  type PropertyValues,
} from "lit";
import { ref } from "lit/directives/ref.js";
import {
  html as staticHtml,
  unsafeStatic,
} from "lit/static-html.js";

export const SUPER_FORM_LAYOUTS = ["vertical", "horizontal", "inline"] as const;

export type SuperFormLayout = (typeof SUPER_FORM_LAYOUTS)[number];
export type SuperFormValues = Record<string, unknown>;
export type SuperFormDependencies = Readonly<Record<string, unknown>>;
export type SuperFormFieldProps = Readonly<Record<string, unknown>>;
export type SuperFormFieldRule = (value: unknown) => boolean;
export type SuperFormPropsResolver = (
  dependencies: SuperFormDependencies,
) => SuperFormFieldProps;
export type SuperFormVisibilityResolver = (
  dependencies: SuperFormDependencies,
) => boolean;

export interface SuperFormFieldComponentProps extends Record<string, unknown> {
  value: unknown;
  onchange: (value: unknown, originalEvent?: Event) => void;
}

export type SuperFormFieldRenderer = (
  props: SuperFormFieldComponentProps,
) => unknown;

export type SuperFormFieldComponent = string | SuperFormFieldRenderer;

export interface SuperFormField {
  field: string;
  label?: string;
  component: SuperFormFieldComponent;
  defaultValue?: unknown;
  deps?: readonly string[];
  props?: SuperFormFieldProps | SuperFormPropsResolver;
  visible?: boolean | SuperFormVisibilityResolver;
  rule?: SuperFormFieldRule;
  errorMessage?: string;
  required?: boolean;
  extra?: string;
  span?: 1 | 2 | 3 | 4;
  clearWhenHidden?: boolean;
  clearWhenDepsChange?: boolean;
}

export interface SuperFormSchema {
  fields: readonly SuperFormField[];
  layout?: SuperFormLayout;
  columns?: 1 | 2 | 3 | 4;
  validateOn?: "change" | "submit";
  submitText?: string;
  submittingText?: string;
  resetText?: string;
  showReset?: boolean;
  actionsAlign?: "start" | "center" | "end";
}

export interface SuperFormValueChange {
  field: string;
  previousValue: unknown;
  value: unknown;
  reason: "user" | "dependency" | "visibility";
}

export interface SuperFormChangeDetail {
  field: string;
  value: unknown;
  changes: SuperFormValueChange[];
  values: SuperFormValues;
  originalEvent?: Event;
}

export interface SuperFormSubmitDetail {
  values: SuperFormValues;
  originalEvent: SubmitEvent;
}

export interface SuperFormInvalidDetail {
  values: SuperFormValues;
  errors: Readonly<Record<string, string>>;
  originalEvent: SubmitEvent;
}

export interface SuperFormResetDetail {
  values: SuperFormValues;
  originalEvent?: Event;
}

const EMPTY_SCHEMA: SuperFormSchema = { fields: [] };

const cloneValues = (values: SuperFormValues): SuperFormValues => ({ ...values });

const valuesEqual = (left: unknown, right: unknown): boolean =>
  Object.is(left, right);

const VALID_CUSTOM_ELEMENT_TAG_NAME = /^[a-z][.0-9_a-z-]*-[.0-9_a-z-]*$/;

export class SuperForm extends LitElement {
  static properties = {
    schema: { attribute: false },
    value: { attribute: false, noAccessor: true },
    submitting: { type: Boolean, reflect: true },
    formErrors: { state: true },
  };

  declare schema: SuperFormSchema;
  declare submitting: boolean;
  private declare formErrors: Record<string, string>;

  private currentValue: SuperFormValues = {};
  private resetValue: SuperFormValues = {};
  private hasAssignedValue = false;
  private changeHandlers = new Map<
    string,
    (value: unknown, originalEvent?: Event) => void
  >();
  private assignedPropertyNames = new WeakMap<HTMLElement, Set<string>>();

  constructor() {
    super();
    this.schema = EMPTY_SCHEMA;
    this.submitting = false;
    this.formErrors = {};
  }

  get value(): SuperFormValues {
    return this.currentValue;
  }

  set value(value: SuperFormValues) {
    const oldValue = this.currentValue;
    this.currentValue = this.normalizeValues(value);
    this.resetValue = cloneValues(this.currentValue);
    this.hasAssignedValue = true;
    this.requestUpdate("value", oldValue);
  }

  get errors(): Readonly<Record<string, string>> {
    return { ...this.formErrors };
  }

  static styles = css`
    :host {
      --super-form-columns: 1;
      --super-form-gap: 18px;
      --super-form-row-gap: 20px;
      --super-form-label-width: 112px;
      --super-form-paper: #fffdf7;
      --super-form-paper-accent: #fffaf0;
      --super-form-color: #292524;
      --super-form-muted-color: #687386;
      --super-form-border-color: #46556b;
      --super-form-line-color: #c8ced8;
      --super-form-primary-color: #3978e9;
      --super-form-primary-hover-color: #5d91ef;
      --super-form-primary-active-color: #2866d7;
      --super-form-primary-shadow-color: #174ea6;
      --super-form-danger-color: #df343d;
      --super-form-focus-color: #56c6b7;
      --super-form-radius: 16px 12px 18px 11px / 13px 17px 12px 18px;
      --super-form-font-family: "Comic Sans MS", "Kaiti SC", STKaiti, system-ui,
        sans-serif;

      display: block;
      box-sizing: border-box;
      max-inline-size: 100%;
      color: var(--super-form-color);
      font-family: var(--super-form-font-family);
    }

    :host([hidden]) {
      display: none;
    }

    .form {
      position: relative;
      box-sizing: border-box;
      padding: 22px;
      overflow: hidden;
      background:
        linear-gradient(90deg, rgb(57 120 233 / 3%) 1px, transparent 1px) 0 0 / 28px 28px,
        linear-gradient(rgb(57 120 233 / 3%) 1px, transparent 1px) 0 0 / 28px 28px,
        linear-gradient(
          135deg,
          var(--super-form-paper),
          var(--super-form-paper-accent)
        );
      border: 2px solid var(--super-form-border-color);
      border-radius: var(--super-form-radius);
      box-shadow: 3px 4px 0 -1px #b7c0ce;
    }

    .form::before {
      position: absolute;
      inset: 8px 10px auto;
      block-size: 1px;
      background: repeating-linear-gradient(
        90deg,
        var(--super-form-line-color) 0 7px,
        transparent 7px 13px
      );
      content: "";
      opacity: 0.75;
    }

    .form[aria-busy="true"] {
      cursor: progress;
    }

    .header:empty,
    .footer:empty {
      display: none;
    }

    .header {
      margin-block-end: 18px;
    }

    .footer {
      margin-block-start: 18px;
    }

    .fields {
      display: grid;
      grid-template-columns: repeat(var(--super-form-columns), minmax(0, 1fr));
      gap: var(--super-form-row-gap) var(--super-form-gap);
    }

    .item {
      display: flex;
      grid-column: span min(
        var(--super-form-field-span, 1),
        var(--super-form-columns)
      );
      flex-direction: column;
      min-inline-size: 0;
    }

    .label-row {
      display: flex;
      align-items: baseline;
      min-block-size: 24px;
      margin-block-end: 6px;
      gap: 5px;
    }

    .label {
      color: var(--super-form-color);
      font-size: 15px;
      font-weight: 700;
      letter-spacing: 0.02em;
      line-height: 1.4;
    }

    .required-mark {
      color: var(--super-form-danger-color);
      font-family: system-ui, sans-serif;
      font-size: 18px;
      font-weight: 800;
      line-height: 1;
      transform: rotate(8deg);
    }

    .control-stack {
      min-inline-size: 0;
    }

    .control {
      min-inline-size: 0;
    }

    .control > * {
      max-inline-size: 100%;
    }

    .extra,
    .error {
      display: flex;
      align-items: flex-start;
      margin-block-start: 6px;
      gap: 5px;
      font-size: 12px;
      line-height: 1.45;
    }

    .extra {
      color: var(--super-form-muted-color);
    }

    .extra::before {
      display: inline-grid;
      flex: none;
      place-items: center;
      inline-size: 14px;
      block-size: 14px;
      margin-block-start: 1px;
      border: 1.5px solid currentcolor;
      border-radius: 50%;
      content: "i";
      font-family: serif;
      font-size: 10px;
      font-weight: 700;
    }

    .error {
      color: var(--super-form-danger-color);
      font-weight: 700;
    }

    .error::before {
      flex: none;
      content: "×";
      font-family: system-ui, sans-serif;
      font-size: 14px;
      font-weight: 900;
      line-height: 1.1;
    }

    :host([layout="horizontal"]) .item {
      display: grid;
      grid-template-columns: minmax(72px, var(--super-form-label-width)) minmax(0, 1fr);
      align-items: start;
      column-gap: 12px;
    }

    :host([layout="horizontal"]) .label-row {
      justify-content: flex-end;
      margin-block: 8px 0;
      text-align: end;
    }

    :host([layout="inline"]) .fields {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
    }

    :host([layout="inline"]) .item {
      display: grid;
      flex: 0 1 auto;
      grid-template-columns: auto minmax(120px, auto);
      align-items: start;
      column-gap: 8px;
    }

    :host([layout="inline"]) .label-row {
      margin-block: 8px 0;
    }

    .actions {
      display: flex;
      justify-content: var(--super-form-actions-align, flex-end);
      margin-block-start: 24px;
      padding-block-start: 17px;
      gap: 12px;
      border-top: 1.5px dashed var(--super-form-line-color);
    }

    .actions button {
      box-sizing: border-box;
      min-inline-size: 84px;
      min-block-size: 38px;
      padding: 8px 17px;
      color: var(--super-form-color);
      font: 700 15px/1 var(--super-form-font-family);
      background: #fffef9;
      border: 2px solid var(--super-form-border-color);
      border-radius: 8px 11px 7px 10px / 10px 7px 11px 8px;
      box-shadow: 2px 3px 0 -1px #a8b3bf;
      cursor: pointer;
      transform: rotate(-0.25deg);
      transition:
        background-color 140ms ease,
        box-shadow 140ms ease,
        transform 120ms ease;
    }

    .actions button:hover:not(:disabled) {
      background: #f4f8ff;
      box-shadow: 3px 4px 0 -1px #a9bad3;
      transform: translate(-0.5px, -0.5px) rotate(0.15deg);
    }

    .actions button:focus-visible {
      outline: 3px solid var(--super-form-focus-color);
      outline-offset: 3px;
    }

    .actions button:active:not(:disabled) {
      box-shadow: 1px 1px 0 -1px #a8b3bf;
      transform: translate(1px, 1px) rotate(0deg);
    }

    .actions .submit {
      color: #fff;
      background: var(--super-form-primary-color);
      border-color: var(--super-form-primary-shadow-color);
      box-shadow: 2px 3px 0 -1px var(--super-form-primary-shadow-color);
    }

    .actions .submit:hover:not(:disabled) {
      background: var(--super-form-primary-hover-color);
      box-shadow: 3px 4px 0 -1px var(--super-form-primary-shadow-color);
    }

    .actions .submit:active:not(:disabled) {
      background: var(--super-form-primary-active-color);
    }

    .actions button:disabled {
      cursor: not-allowed;
      filter: grayscale(0.35);
      opacity: 0.5;
      box-shadow: none;
      transform: none;
    }

    .submitting-mark {
      display: inline-block;
      inline-size: 12px;
      block-size: 12px;
      margin-inline-end: 7px;
      vertical-align: -1px;
      border: 2px dotted currentcolor;
      border-radius: 50%;
      animation: super-form-spin 850ms linear infinite;
    }

    .config-error {
      display: block;
      padding: 9px 11px;
      color: var(--super-form-danger-color);
      background: #fff1f1;
      border: 1.5px dashed currentcolor;
      border-radius: 8px;
      font-size: 13px;
    }

    @keyframes super-form-spin {
      to {
        transform: rotate(1turn);
      }
    }

    @media (max-width: 720px) {
      .form {
        padding: 18px 15px;
      }

      .fields {
        grid-template-columns: minmax(0, 1fr);
      }

      .item {
        grid-column: 1 / -1;
      }

      :host([layout="horizontal"]) .item,
      :host([layout="inline"]) .item {
        display: flex;
        flex-direction: column;
      }

      :host([layout="horizontal"]) .label-row,
      :host([layout="inline"]) .label-row {
        justify-content: flex-start;
        margin-block: 0 6px;
        text-align: start;
      }

      .actions {
        justify-content: stretch;
      }

      .actions button {
        flex: 1;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .actions button {
        transition: none;
      }

      .submitting-mark {
        animation: none;
      }
    }

    :host-context(html.dark) {
      --super-form-paper: #242321;
      --super-form-paper-accent: #2c2925;
      --super-form-color: #f5f1e8;
      --super-form-muted-color: #b7c0ce;
      --super-form-border-color: #aab5c6;
      --super-form-line-color: #5d6570;
    }

    :host-context(html.dark) .actions button {
      color: var(--super-form-color);
      background: #302e2a;
    }

    :host-context(html.dark) .actions .submit {
      color: #fff;
      background: var(--super-form-primary-color);
    }
  `;

  private get fields(): readonly SuperFormField[] {
    return this.schema?.fields ?? [];
  }

  private normalizeValues(values: SuperFormValues | null | undefined): SuperFormValues {
    const source = values && typeof values === "object" ? values : {};
    const fieldNames = new Set(this.fields.map((field) => field.field));
    const normalized: SuperFormValues = {};

    this.fields.forEach((field) => {
      if (Object.prototype.hasOwnProperty.call(source, field.field)) {
        normalized[field.field] = source[field.field];
      } else if (field.defaultValue !== undefined) {
        normalized[field.field] = field.defaultValue;
      }
    });

    if (!fieldNames.size) {
      return { ...source };
    }
    return normalized;
  }

  private setInternalValue(values: SuperFormValues): void {
    const oldValue = this.currentValue;
    this.currentValue = values;
    this.requestUpdate("value", oldValue);
  }

  private dependenciesFor(
    field: SuperFormField,
    values = this.currentValue,
  ): SuperFormDependencies {
    return Object.fromEntries(
      (field.deps ?? []).map((dependency) => [dependency, values[dependency]]),
    );
  }

  private isVisible(
    field: SuperFormField,
    values = this.currentValue,
  ): boolean {
    if (typeof field.visible === "boolean") {
      return field.visible;
    }
    if (typeof field.visible !== "function") {
      return true;
    }
    return field.visible(this.dependenciesFor(field, values));
  }

  private propsFor(field: SuperFormField): SuperFormFieldProps {
    if (typeof field.props === "function") {
      return field.props(this.dependenciesFor(field));
    }
    return field.props ?? {};
  }

  private getChangeHandler(
    fieldName: string,
  ): (value: unknown, originalEvent?: Event) => void {
    const existing = this.changeHandlers.get(fieldName);
    if (existing) {
      return existing;
    }
    const handler = (value: unknown, originalEvent?: Event): void => {
      this.updateFieldValue(fieldName, value, originalEvent);
    };
    this.changeHandlers.set(fieldName, handler);
    return handler;
  }

  private applyDependencyEffects(
    sourceField: string,
    nextValues: SuperFormValues,
    changes: SuperFormValueChange[],
  ): void {
    const queue = [sourceField];
    const processed = new Set<string>();

    while (queue.length > 0) {
      const changedField = queue.shift();
      if (!changedField) {
        continue;
      }
      if (processed.has(changedField)) {
        continue;
      }
      processed.add(changedField);

      this.fields.forEach((field) => {
        if (!(field.deps ?? []).includes(changedField)) {
          return;
        }

        let reason: SuperFormValueChange["reason"] | undefined;
        if (field.clearWhenDepsChange) {
          reason = "dependency";
        } else if (field.clearWhenHidden && !this.isVisible(field, nextValues)) {
          reason = "visibility";
        }

        if (
          !reason ||
          !Object.prototype.hasOwnProperty.call(nextValues, field.field) ||
          nextValues[field.field] === undefined
        ) {
          return;
        }

        const previousValue = nextValues[field.field];
        nextValues[field.field] = undefined;
        changes.push({
          field: field.field,
          previousValue,
          value: undefined,
          reason,
        });
        queue.push(field.field);
      });
    }

  }

  private updateFieldValue(
    fieldName: string,
    value: unknown,
    originalEvent?: Event,
  ): void {
    const previousValues = this.currentValue;
    const previousValue = previousValues[fieldName];
    if (valuesEqual(previousValue, value)) {
      return;
    }

    const nextValues = cloneValues(previousValues);
    nextValues[fieldName] = value;
    const changes: SuperFormValueChange[] = [{
      field: fieldName,
      previousValue,
      value,
      reason: "user",
    }];
    this.applyDependencyEffects(
      fieldName,
      nextValues,
      changes,
    );
    this.setInternalValue(nextValues);

    if (
      this.schema.validateOn === "change" ||
      changes.some((change) => Boolean(this.formErrors[change.field]))
    ) {
      this.validate();
    }

    this.dispatchEvent(new CustomEvent<SuperFormChangeDetail>(
      "super-form-change",
      {
        detail: {
          field: fieldName,
          value,
          changes,
          values: cloneValues(nextValues),
          originalEvent,
        },
        bubbles: true,
        composed: true,
      },
    ));
  }

  private assignElementProps(
    element: HTMLElement,
    props: SuperFormFieldComponentProps,
  ): void {
    const nextNames = new Set(Object.keys(props));
    const previousNames = this.assignedPropertyNames.get(element) ?? new Set();

    previousNames.forEach((name) => {
      if (!nextNames.has(name)) {
        Reflect.set(element, name, undefined);
      }
    });
    Object.entries(props).forEach(([name, value]) => {
      Reflect.set(element, name, value);
    });
    this.assignedPropertyNames.set(element, nextNames);
  }

  private renderStringComponent(
    tagName: string,
    props: SuperFormFieldComponentProps,
  ) {
    if (!VALID_CUSTOM_ELEMENT_TAG_NAME.test(tagName)) {
      return html`<span class="config-error" role="alert">
        “${tagName}”不是合法的自定义元素标签
      </span>`;
    }
    const tag = unsafeStatic(tagName);
    return staticHtml`<${tag}
      ${ref((element) => {
        if (element instanceof HTMLElement) {
          this.assignElementProps(element, props);
        }
      })}
    ></${tag}>`;
  }

  private renderFieldComponent(field: SuperFormField) {
    const componentProps: SuperFormFieldComponentProps = {
      ...this.propsFor(field),
      value: this.currentValue[field.field],
      onchange: this.getChangeHandler(field.field),
    };

    if (typeof field.component === "string") {
      return this.renderStringComponent(field.component, componentProps);
    }
    return field.component(componentProps);
  }

  private renderField(field: SuperFormField, index: number) {
    if (this.fields.findIndex((candidate) => candidate.field === field.field) !== index) {
      return html`<div class="config-error" role="alert">
        字段名“${field.field}”重复，请为每个字段配置唯一名称
      </div>`;
    }
    if (!this.isVisible(field)) {
      return nothing;
    }
    const error = this.formErrors[field.field];
    const span = Math.min(field.span ?? 1, this.schema.columns ?? 1);
    return html`
      <div
        class="item"
        part="item"
        data-field=${field.field}
        style=${`--super-form-field-span: ${span}`}
      >
        <div class="label-row" part="label-row">
          ${field.label
            ? html`<span class="label" part="label">${field.label}</span>`
            : nothing}
          ${field.required
            ? html`<span class="required-mark" part="required-mark" aria-hidden="true">*</span>`
            : nothing}
        </div>
        <div class="control-stack">
          <div class="control" part="control">
            ${this.renderFieldComponent(field)}
          </div>
          ${field.extra
            ? html`<span class="extra" part="extra">${field.extra}</span>`
            : nothing}
          ${error
            ? html`<span class="error" part="error" role="alert">${error}</span>`
            : nothing}
        </div>
      </div>
    `;
  }

  private formElement(): HTMLFormElement | null {
    return this.renderRoot?.querySelector("form") ?? null;
  }

  validate(): boolean {
    const errors: Record<string, string> = {};
    this.fields.forEach((field) => {
      if (!this.isVisible(field) || !field.rule) {
        return;
      }
      let valid = false;
      try {
        valid = field.rule(this.currentValue[field.field]);
      } catch {
        valid = false;
      }
      if (!valid) {
        errors[field.field] = field.errorMessage || "校验未通过";
      }
    });
    this.formErrors = errors;
    return Object.keys(errors).length === 0;
  }

  reset(originalEvent?: Event): void {
    this.setInternalValue(cloneValues(this.resetValue));
    this.formErrors = {};
    this.dispatchEvent(new CustomEvent<SuperFormResetDetail>("super-form-reset", {
      detail: {
        values: cloneValues(this.resetValue),
        originalEvent,
      },
      bubbles: true,
      composed: true,
    }));
  }

  requestSubmit(): void {
    const form = this.formElement();
    if (form) {
      form.requestSubmit();
      return;
    }
    this.handleSubmit(new SubmitEvent("submit", { cancelable: true }));
  }

  focusField(fieldName: string): void {
    const item = Array.from(
      this.renderRoot?.querySelectorAll<HTMLElement>("[data-field]") ?? [],
    ).find((candidate) => candidate.dataset.field === fieldName);
    const control = item?.querySelector<HTMLElement>(
      "[part='control'] > *, input, textarea, select, button, [tabindex]",
    );
    control?.focus();
  }

  private handleSubmit(event: SubmitEvent): void {
    event.preventDefault();
    if (this.submitting) {
      return;
    }
    if (!this.validate()) {
      this.dispatchEvent(new CustomEvent<SuperFormInvalidDetail>(
        "super-form-invalid",
        {
          detail: {
            values: cloneValues(this.currentValue),
            errors: { ...this.formErrors },
            originalEvent: event,
          },
          bubbles: true,
          composed: true,
        },
      ));
      return;
    }
    this.dispatchEvent(new CustomEvent<SuperFormSubmitDetail>(
      "super-form-submit",
      {
        detail: {
          values: cloneValues(this.currentValue),
          originalEvent: event,
        },
        bubbles: true,
        composed: true,
      },
    ));
  }

  private handleReset(event: Event): void {
    event.preventDefault();
    this.reset(event);
  }

  protected willUpdate(changedProperties: PropertyValues<this>): void {
    if (changedProperties.has("schema")) {
      const layout = this.schema.layout ?? "vertical";
      const columns = this.schema.columns ?? 1;
      const alignment = this.schema.actionsAlign === "start"
        ? "flex-start"
        : this.schema.actionsAlign === "center"
          ? "center"
          : "flex-end";
      this.setAttribute("layout", layout);
      this.style.setProperty("--super-form-columns", String(columns));
      this.style.setProperty("--super-form-actions-align", alignment);

      const normalized = this.normalizeValues(this.currentValue);
      this.resetValue = this.hasAssignedValue
        ? this.normalizeValues(this.resetValue)
        : cloneValues(normalized);
      if (
        Object.keys(normalized).length !== Object.keys(this.currentValue).length ||
        Object.keys(normalized).some(
          (field) => !valuesEqual(normalized[field], this.currentValue[field]),
        )
      ) {
        this.setInternalValue(normalized);
      }
      const fieldNames = new Set(this.fields.map((field) => field.field));
      const retainedErrors = Object.fromEntries(
        Object.entries(this.formErrors).filter(([field]) => fieldNames.has(field)),
      );
      if (Object.keys(retainedErrors).length !== Object.keys(this.formErrors).length) {
        this.formErrors = retainedErrors;
      }
      this.changeHandlers.clear();
    }
  }

  protected render() {
    const showReset = this.schema.showReset ?? false;
    const submitText = this.submitting
      ? this.schema.submittingText ?? "提交中..."
      : this.schema.submitText ?? "提交";
    return html`
      <form
        class="form"
        part="form"
        novalidate
        aria-busy=${this.submitting ? "true" : "false"}
        @submit=${this.handleSubmit}
        @reset=${this.handleReset}
      >
        <div class="header" part="header"><slot name="header"></slot></div>
        <div class="fields" part="fields">
          ${this.fields.map((field, index) => this.renderField(field, index))}
        </div>
        <div class="actions" part="actions">
          <slot name="actions">
            ${showReset
              ? html`<button
                  class="reset"
                  part="reset-button"
                  type="reset"
                  ?disabled=${this.submitting}
                >${this.schema.resetText ?? "重置"}</button>`
              : nothing}
            <button
              class="submit"
              part="submit-button"
              type="submit"
              ?disabled=${this.submitting}
            >
              ${this.submitting
                ? html`<span class="submitting-mark" aria-hidden="true"></span>`
                : nothing}
              ${submitText}
            </button>
          </slot>
        </div>
        <div class="footer" part="footer"><slot name="footer"></slot></div>
      </form>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "super-form": SuperForm;
  }

  interface HTMLElementEventMap {
    "super-form-change": CustomEvent<SuperFormChangeDetail>;
    "super-form-submit": CustomEvent<SuperFormSubmitDetail>;
    "super-form-invalid": CustomEvent<SuperFormInvalidDetail>;
    "super-form-reset": CustomEvent<SuperFormResetDetail>;
  }
}
