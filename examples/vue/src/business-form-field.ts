type DemoFormChangeHandler = (
  value: unknown,
  originalEvent?: Event,
) => void;

export const DEMO_BUSINESS_FIELD_TAG = "demo-business-field";

export class DemoBusinessField extends HTMLElement {
  onchange: DemoFormChangeHandler = () => undefined;
  private currentValue: unknown = "";
  private currentPlaceholder = "";
  private currentDisabled = false;
  private input: HTMLInputElement | null = null;

  get value(): unknown {
    return this.currentValue;
  }

  set value(value: unknown) {
    this.currentValue = value;
    this.syncInput();
  }

  get placeholder(): string {
    return this.currentPlaceholder;
  }

  set placeholder(value: unknown) {
    this.currentPlaceholder = String(value ?? "");
    this.syncInput();
  }

  get disabled(): boolean {
    return this.currentDisabled;
  }

  set disabled(value: unknown) {
    this.currentDisabled = Boolean(value);
    this.syncInput();
  }

  connectedCallback(): void {
    if (this.shadowRoot) {
      return;
    }

    const root = this.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    style.textContent = `
      :host {
        display: block;
      }

      input {
        box-sizing: border-box;
        inline-size: 100%;
        min-block-size: 38px;
        padding: 8px 12px;
        color: #292524;
        font: 600 14px/1.4 "Comic Sans MS", "Kaiti SC", STKaiti, system-ui, sans-serif;
        background: #fffef9;
        border: 2px solid #46556b;
        border-radius: 8px 11px 7px 10px / 10px 7px 11px 8px;
        box-shadow: 2px 3px 0 -1px #a8b3bf;
        outline: none;
      }

      input:focus {
        border-color: #3978e9;
        box-shadow: 2px 3px 0 -1px #9fb7dc, 0 0 0 3px rgb(86 198 183 / 28%);
      }

      input:disabled {
        cursor: not-allowed;
        opacity: 0.48;
        box-shadow: none;
      }
    `;

    this.input = document.createElement("input");
    this.input.value = String(this.value ?? "");
    this.input.placeholder = this.placeholder;
    this.input.disabled = this.disabled;
    this.input.addEventListener("input", (event) => {
      const value = (event.currentTarget as HTMLInputElement).value;
      this.currentValue = value;
      this.onchange(value, event);
    });
    root.append(style, this.input);
  }

  private syncInput(): void {
    if (!this.input) {
      return;
    }
    const value = String(this.value ?? "");
    if (this.input.value !== value) {
      this.input.value = value;
    }
    this.input.placeholder = this.placeholder;
    this.input.disabled = this.disabled;
  }
}

if (!customElements.get(DEMO_BUSINESS_FIELD_TAG)) {
  customElements.define(DEMO_BUSINESS_FIELD_TAG, DemoBusinessField);
}
