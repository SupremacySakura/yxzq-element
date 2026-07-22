import { html } from "lit";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  defineSuperForm,
  SUPER_FORM_TAG,
  SuperForm,
  type SuperFormFieldComponentProps,
  type SuperFormSchema,
} from "./index.js";

const TEST_CONTROL_TAG = "test-form-control";

class TestFormControl extends HTMLElement {
  value: unknown;
  onchange: (value: unknown) => void = () => undefined;
  country: unknown;
  disabled: unknown;
}

if (!customElements.get(TEST_CONTROL_TAG)) {
  customElements.define(TEST_CONTROL_TAG, TestFormControl);
}

const baseSchema = (fields: SuperFormSchema["fields"]): SuperFormSchema => ({
  fields,
  submitText: "保存",
  resetText: "重置",
});

const mountForm = async (
  schema: SuperFormSchema,
  value: Record<string, unknown> = {},
) => {
  defineSuperForm();
  const element = document.createElement(SUPER_FORM_TAG);
  element.schema = schema;
  element.value = value;
  document.body.append(element);
  await element.updateComplete;
  return element;
};

afterEach(() => {
  document.body.replaceChildren();
});

describe("SuperForm", () => {
  it("registers super-form idempotently", () => {
    expect(defineSuperForm()).toBe(SuperForm);
    expect(defineSuperForm()).toBe(SuperForm);
    expect(customElements.get(SUPER_FORM_TAG)).toBe(SuperForm);
  });

  it("renders an arbitrary custom element with value, onchange and resolved props", async () => {
    const schema = baseSchema([
      {
        field: "nickname",
        label: "昵称",
        component: TEST_CONTROL_TAG,
        props: { disabled: false, country: "中国" },
      },
    ]);
    const element = await mountForm(schema, { nickname: "小画家" });
    const control = element.shadowRoot?.querySelector<TestFormControl>(
      TEST_CONTROL_TAG,
    );

    expect(control?.value).toBe("小画家");
    expect(control?.country).toBe("中国");
    expect(control?.disabled).toBe(false);

    control?.onchange("新昵称");
    await element.updateComplete;

    expect(element.value.nickname).toBe("新昵称");
  });

  it("passes declared dependency values to props and updates dependents", async () => {
    const propsResolver = vi.fn(({ country }: Readonly<Record<string, unknown>>) => ({
      country,
      disabled: !country,
    }));
    const schema = baseSchema([
      {
        field: "country",
        label: "国家",
        component: TEST_CONTROL_TAG,
      },
      {
        field: "city",
        label: "城市",
        component: TEST_CONTROL_TAG,
        deps: ["country"],
        props: propsResolver,
      },
    ]);
    const element = await mountForm(schema, {
      country: "",
      city: "",
      undeclared: "不会传递",
    });
    const controls = element.shadowRoot?.querySelectorAll<TestFormControl>(
      TEST_CONTROL_TAG,
    );

    expect(controls?.[1]?.country).toBe("");
    expect(controls?.[1]?.disabled).toBe(true);
    expect(propsResolver.mock.calls[0]?.[0]).toEqual({ country: "" });

    controls?.[0]?.onchange("china");
    await element.updateComplete;

    expect(controls?.[1]?.country).toBe("china");
    expect(controls?.[1]?.disabled).toBe(false);
  });

  it("uses the same declared dependencies for conditional rendering", async () => {
    const schema = baseSchema([
      {
        field: "needInvoice",
        label: "需要发票",
        component: TEST_CONTROL_TAG,
      },
      {
        field: "invoiceTitle",
        label: "发票抬头",
        component: TEST_CONTROL_TAG,
        deps: ["needInvoice"],
        visible: ({ needInvoice }) => needInvoice === true,
      },
    ]);
    const element = await mountForm(schema, { needInvoice: false });

    expect(element.shadowRoot?.querySelectorAll(TEST_CONTROL_TAG)).toHaveLength(1);

    element.shadowRoot?.querySelector<TestFormControl>(TEST_CONTROL_TAG)
      ?.onchange(true);
    await element.updateComplete;

    expect(element.shadowRoot?.querySelectorAll(TEST_CONTROL_TAG)).toHaveLength(2);
  });

  it("supports renderer functions with the same value and onchange contract", async () => {
    const renderer = vi.fn((props: SuperFormFieldComponentProps) => html`
      <button
        type="button"
        data-renderer
        @click=${() => props.onchange("renderer-value")}
      >${String(props.value ?? "")}</button>
    `);
    const schema = baseSchema([
      {
        field: "custom",
        label: "自定义",
        component: renderer,
        props: { tone: "business" },
      },
    ]);
    const element = await mountForm(schema, { custom: "initial" });

    expect(renderer.mock.calls[0]?.[0]).toMatchObject({
      value: "initial",
      tone: "business",
    });

    element.shadowRoot?.querySelector<HTMLButtonElement>("[data-renderer]")
      ?.click();
    await element.updateComplete;

    expect(element.value.custom).toBe("renderer-value");
  });

  it("treats a missing rule as valid and reports a configured rule failure", async () => {
    const schema = baseSchema([
      {
        field: "note",
        label: "备注",
        component: TEST_CONTROL_TAG,
      },
      {
        field: "phone",
        label: "手机号",
        component: TEST_CONTROL_TAG,
        rule: (value) => value === "13800138000",
        errorMessage: "请输入正确的手机号",
      },
    ]);
    const element = await mountForm(schema, {
      note: "任意内容",
      phone: "123",
    });

    expect(element.validate()).toBe(false);
    await element.updateComplete;
    expect(element.errors).toEqual({ phone: "请输入正确的手机号" });
    expect(element.shadowRoot?.querySelector('[part="error"]')?.textContent)
      .toContain("请输入正确的手机号");

    const controls = element.shadowRoot?.querySelectorAll<TestFormControl>(
      TEST_CONTROL_TAG,
    );
    controls?.[1]?.onchange("13800138000");
    await element.updateComplete;

    expect(element.validate()).toBe(true);
    expect(element.errors).toEqual({});
  });

  it("submits only valid values through a composed event", async () => {
    const schema = baseSchema([
      {
        field: "name",
        label: "姓名",
        component: TEST_CONTROL_TAG,
        rule: (value) => Boolean(value),
        errorMessage: "请输入姓名",
      },
    ]);
    const element = await mountForm(schema, { name: "张三" });
    const onSubmit = vi.fn();
    document.body.addEventListener("super-form-submit", onSubmit);

    element.requestSubmit();
    await element.updateComplete;

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit.mock.calls[0]?.[0].detail.values).toEqual({ name: "张三" });
    expect(onSubmit.mock.calls[0]?.[0].composed).toBe(true);
    expect(onSubmit.mock.calls[0]?.[0].cancelable).toBe(false);
  });

  it("reports invalid submissions with an errors snapshot", async () => {
    const schema = baseSchema([
      {
        field: "name",
        label: "姓名",
        component: TEST_CONTROL_TAG,
        rule: (value) => Boolean(value),
        errorMessage: "请输入姓名",
      },
    ]);
    const element = await mountForm(schema, { name: "" });
    const onInvalid = vi.fn();
    const onSubmit = vi.fn();
    document.body.addEventListener("super-form-invalid", onInvalid);
    document.body.addEventListener("super-form-submit", onSubmit);

    element.requestSubmit();
    await element.updateComplete;

    expect(onSubmit).not.toHaveBeenCalled();
    expect(onInvalid).toHaveBeenCalledTimes(1);
    expect(onInvalid.mock.calls[0]?.[0].detail).toMatchObject({
      values: { name: "" },
      errors: { name: "请输入姓名" },
    });
    expect(element.errors).toEqual({ name: "请输入姓名" });
  });

  it("applies default values and resets to the assigned value snapshot", async () => {
    const schema = {
      ...baseSchema([
        {
          field: "name",
          label: "姓名",
          component: TEST_CONTROL_TAG,
          defaultValue: "默认姓名",
        },
        {
          field: "city",
          label: "城市",
          component: TEST_CONTROL_TAG,
        },
      ]),
      showReset: true,
    };
    const element = await mountForm(schema, { city: "杭州" });
    const controls = element.shadowRoot?.querySelectorAll<TestFormControl>(
      TEST_CONTROL_TAG,
    );
    const onReset = vi.fn();
    document.body.addEventListener("super-form-reset", onReset);

    expect(element.value).toEqual({ name: "默认姓名", city: "杭州" });

    controls?.[0]?.onchange("修改后的姓名");
    controls?.[1]?.onchange("深圳");
    await element.updateComplete;
    const originalEvent = new Event("reset-request");
    element.reset(originalEvent);
    await element.updateComplete;

    expect(element.value).toEqual({ name: "默认姓名", city: "杭州" });
    expect(onReset).toHaveBeenCalledTimes(1);
    expect(onReset.mock.calls[0]?.[0].detail).toEqual({
      values: { name: "默认姓名", city: "杭州" },
      originalEvent,
    });
  });

  it("validates immediately when validateOn is change", async () => {
    const schema: SuperFormSchema = {
      ...baseSchema([
        {
          field: "name",
          label: "姓名",
          component: TEST_CONTROL_TAG,
          rule: (value) => String(value ?? "").length >= 2,
          errorMessage: "至少输入两个字符",
        },
      ]),
      validateOn: "change",
    };
    const element = await mountForm(schema, { name: "" });
    const control = element.shadowRoot?.querySelector<TestFormControl>(
      TEST_CONTROL_TAG,
    );

    control?.onchange("一");
    await element.updateComplete;
    expect(element.errors).toEqual({ name: "至少输入两个字符" });

    control?.onchange("通过");
    await element.updateComplete;
    expect(element.errors).toEqual({});
  });

  it("rejects invalid component tag names instead of interpolating markup", async () => {
    const element = await mountForm(baseSchema([
      {
        field: "unsafe",
        label: "不安全字段",
        component: "x-field onfocus=alert(1) tabindex=1",
      },
    ]));
    const configError = element.shadowRoot?.querySelector(".config-error");

    expect(configError?.textContent).toContain("不是合法的自定义元素标签");
    expect(element.shadowRoot?.querySelector("[onfocus]")).toBeNull();
  });

  it("renders a configuration error for duplicate field names", async () => {
    const element = await mountForm(baseSchema([
      {
        field: "name",
        label: "姓名",
        component: TEST_CONTROL_TAG,
      },
      {
        field: "name",
        label: "重复姓名",
        component: TEST_CONTROL_TAG,
      },
    ]));

    expect(element.shadowRoot?.querySelectorAll(TEST_CONTROL_TAG)).toHaveLength(1);
    expect(element.shadowRoot?.querySelector(".config-error")?.textContent)
      .toContain("字段名“name”重复");
  });

  it("removes validation errors for fields removed from the schema", async () => {
    const element = await mountForm(baseSchema([
      {
        field: "removed",
        label: "待移除字段",
        component: TEST_CONTROL_TAG,
        rule: () => false,
        errorMessage: "遗留错误",
      },
    ]));

    expect(element.validate()).toBe(false);
    expect(element.errors).toEqual({ removed: "遗留错误" });

    element.schema = baseSchema([
      {
        field: "retained",
        label: "保留字段",
        component: TEST_CONTROL_TAG,
      },
    ]);
    await element.updateComplete;

    expect(element.errors).toEqual({});
  });

  it("propagates dependency clearing through chains and terminates cycles", async () => {
    const schema = baseSchema([
      {
        field: "a",
        label: "A",
        component: TEST_CONTROL_TAG,
        deps: ["c"],
        clearWhenDepsChange: true,
      },
      {
        field: "b",
        label: "B",
        component: TEST_CONTROL_TAG,
        deps: ["a"],
        clearWhenDepsChange: true,
      },
      {
        field: "c",
        label: "C",
        component: TEST_CONTROL_TAG,
        deps: ["b"],
        clearWhenDepsChange: true,
      },
    ]);
    const element = await mountForm(schema, { a: "A", b: "B", c: "C" });
    const onChange = vi.fn();
    document.body.addEventListener("super-form-change", onChange);

    element.shadowRoot?.querySelector<TestFormControl>(TEST_CONTROL_TAG)
      ?.onchange("next-A");
    await element.updateComplete;

    expect(element.value).toEqual({ a: undefined, b: undefined, c: undefined });
    expect(onChange.mock.calls[0]?.[0].detail.changes.map(
      (change: { field: string }) => change.field,
    )).toEqual(["a", "b", "c", "a"]);
  });

  it("focuses rendered fields and submits when the internal form is unavailable", async () => {
    const element = await mountForm(baseSchema([
      {
        field: "name",
        label: "姓名",
        component: TEST_CONTROL_TAG,
      },
    ]), { name: "张三" });
    const control = element.shadowRoot?.querySelector<TestFormControl>(
      TEST_CONTROL_TAG,
    );
    const focus = vi.spyOn(control as TestFormControl, "focus");

    element.focusField("name");
    expect(focus).toHaveBeenCalledTimes(1);

    element.shadowRoot?.querySelector("form")?.remove();
    const onSubmit = vi.fn();
    document.body.addEventListener("super-form-submit", onSubmit);
    element.requestSubmit();

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit.mock.calls[0]?.[0].detail.values).toEqual({ name: "张三" });
  });

  it("can clear dependent and hidden values according to field policies", async () => {
    const schema = baseSchema([
      {
        field: "province",
        label: "省份",
        component: TEST_CONTROL_TAG,
      },
      {
        field: "city",
        label: "城市",
        component: TEST_CONTROL_TAG,
        deps: ["province"],
        clearWhenDepsChange: true,
      },
      {
        field: "detail",
        label: "详情",
        component: TEST_CONTROL_TAG,
        deps: ["province"],
        visible: ({ province }) => province === "zhejiang",
        clearWhenHidden: true,
      },
    ]);
    const element = await mountForm(schema, {
      province: "zhejiang",
      city: "hangzhou",
      detail: "西湖区",
    });

    element.shadowRoot?.querySelector<TestFormControl>(TEST_CONTROL_TAG)
      ?.onchange("guangdong");
    await element.updateComplete;

    expect(element.value).toMatchObject({ province: "guangdong" });
    expect(element.value.city).toBeUndefined();
    expect(element.value.detail).toBeUndefined();
  });

  it("renders the hand-drawn form item structure and configurable layout", async () => {
    const schema: SuperFormSchema = {
      layout: "horizontal",
      columns: 2,
      showReset: true,
      fields: [
        {
          field: "contact",
          label: "联系人",
          component: TEST_CONTROL_TAG,
          required: true,
          extra: "用于接收通知",
          span: 2,
        },
      ],
    };
    const element = await mountForm(schema);
    const item = element.shadowRoot?.querySelector<HTMLElement>('[part="item"]');

    expect(element.getAttribute("layout")).toBe("horizontal");
    expect(element.style.getPropertyValue("--super-form-columns")).toBe("2");
    expect(item?.style.getPropertyValue("--super-form-field-span")).toBe("2");
    expect(item?.querySelector('[part="required-mark"]')).not.toBeNull();
    expect(item?.querySelector('[part="extra"]')?.textContent)
      .toContain("用于接收通知");
    expect(element.shadowRoot?.querySelector('[part="submit-button"]')?.textContent)
      .toContain("提交");
    expect(element.shadowRoot?.querySelector('[part="reset-button"]')).not.toBeNull();
  });
});
