# Checkbox · Radio · Switch 选择器套装

一套清晰、友好的手绘风选择器，覆盖多选、单选与即时开关场景。三个组件都保留原生键盘语义，同时提供可跨越 Shadow DOM 的状态事件。

<div class="selector-note">
  <span aria-hidden="true">♥</span>
  <strong>选择提示</strong>
  <span>多项并存使用 Checkbox，互斥选项使用 Radio，立即生效的二元设置使用 Switch。</span>
</div>

## 类型

### Checkbox 多选框

`indeterminate` 表示“部分选择”。用户点击半选项后，组件会退出半选状态并进入普通选中或未选中状态。

<div class="selector-board selector-type-grid">
  <div class="selector-spec">
    <strong>基础多选框</strong>
    <super-checkbox>选项 A</super-checkbox>
    <super-checkbox checked>选项 B</super-checkbox>
  </div>
  <div class="selector-spec">
    <strong>半选多选框</strong>
    <super-checkbox indeterminate>部分选择</super-checkbox>
  </div>
  <div class="selector-spec selector-card-stack">
    <strong>卡片多选</strong>
    <super-checkbox class="checkbox-card" variant="card">
      <span slot="icon" aria-hidden="true">☆</span>
      标准功能
      <span slot="description">适合日常使用</span>
    </super-checkbox>
    <super-checkbox class="checkbox-card" variant="card" checked>
      <span slot="icon" aria-hidden="true">★</span>
      扩展功能
      <span slot="description">包含更多能力</span>
    </super-checkbox>
  </div>
</div>

```html
<super-checkbox>选项 A</super-checkbox>
<super-checkbox checked>选项 B</super-checkbox>
<super-checkbox indeterminate>部分选择</super-checkbox>

<super-checkbox variant="card" checked>
  <feature-icon slot="icon"></feature-icon>
  扩展功能
  <span slot="description">包含更多能力</span>
</super-checkbox>
```

`variant="card"` 提供完整卡片点击区域；`icon` 与 `description` Slot 用于补充图形和次级说明。基础多选仍使用默认的 `default` 变体。

### Radio 单选框

同一根节点下拥有相同 `name` 的 `super-radio` 会保持互斥；使用方向键可以在启用的同组项目间循环选择。

<div class="selector-board selector-type-grid">
  <fieldset class="selector-field selector-spec">
    <legend>基础单选框</legend>
    <super-radio name="basic-plan" value="a">选项 A</super-radio>
    <super-radio name="basic-plan" value="b" checked>选项 B</super-radio>
  </fieldset>
  <fieldset class="selector-field selector-spec selector-inline-options">
    <legend>按钮单选</legend>
    <super-radio variant="button" name="button-plan" value="a">选项 A</super-radio>
    <super-radio variant="button" name="button-plan" value="b" checked>选项 B</super-radio>
  </fieldset>
  <fieldset class="selector-field selector-spec selector-card-options">
    <legend>卡片单选</legend>
    <super-radio class="radio-card" variant="card" name="card-plan" value="standard">
      <span slot="icon" aria-hidden="true">✈</span>
      标准版
      <span slot="description">基础功能</span>
    </super-radio>
    <super-radio class="radio-card" variant="card" name="card-plan" value="pro" checked>
      <span slot="icon" aria-hidden="true">♛</span>
      高级版
      <span slot="description">更多功能</span>
    </super-radio>
  </fieldset>
</div>

```html
<fieldset>
  <legend>选择方案</legend>
  <super-radio name="plan" value="standard" checked>标准版</super-radio>
  <super-radio name="plan" value="pro">高级版</super-radio>
</fieldset>

<super-radio variant="button" name="view" value="list">列表</super-radio>
<super-radio variant="button" name="view" value="card" checked>卡片</super-radio>
```

`button` 变体提供胶囊式选项，`card` 变体提供更大的内容区域；二者都保留内部原生 Radio 的键盘与可访问语义。

### Switch 开关

默认 Slot 提供固定说明；`checked-label` / `unchecked-label` 和 `checked-icon` / `unchecked-icon` 可以随状态切换内容，不需要引入图标库。

<div class="selector-board selector-type-grid">
  <div class="selector-spec">
    <strong>基础开关</strong>
    <super-switch aria-label="基础开关"></super-switch>
    <super-switch checked aria-label="已开启的基础开关"></super-switch>
  </div>
  <div class="selector-spec">
    <strong>带文字开关</strong>
    <super-switch aria-label="消息提醒">
      <span slot="unchecked-label">关闭</span>
      <span slot="checked-label">开启</span>
    </super-switch>
  </div>
  <div class="selector-spec">
    <strong>图标开关</strong>
    <super-switch checked aria-label="显示模式">
      <span slot="unchecked-icon">☾</span>
      <span slot="checked-icon">☀</span>
      显示模式
      <span slot="description">跟随当前阅读偏好</span>
    </super-switch>
  </div>
</div>

```html
<super-switch aria-label="深色模式">
  <moon-icon slot="unchecked-icon"></moon-icon>
  <sun-icon slot="checked-icon"></sun-icon>
  深色模式
  <span slot="description">夜间阅读更加舒适</span>
</super-switch>

<super-switch aria-label="消息提醒">
  <span slot="unchecked-label">关闭</span>
  <span slot="checked-label">开启</span>
</super-switch>
```

## 尺寸

大、中、小三档尺寸会同步调整指示器、轨道、间距与文字。组内建议保持同一尺寸。

<div class="selector-board selector-size-matrix">
  <strong>大</strong>
  <super-checkbox size="large">多选项</super-checkbox>
  <super-radio size="large" name="size-large">单选项</super-radio>
  <div class="switch-pair"><super-switch size="large" aria-label="大号关闭"></super-switch><span>/</span><super-switch size="large" checked aria-label="大号开启"></super-switch></div>

  <strong>中</strong>
  <super-checkbox>多选项</super-checkbox>
  <super-radio name="size-medium">单选项</super-radio>
  <div class="switch-pair"><super-switch aria-label="中号关闭"></super-switch><span>/</span><super-switch checked aria-label="中号开启"></super-switch></div>

  <strong>小</strong>
  <super-checkbox size="small">多选项</super-checkbox>
  <super-radio size="small" name="size-small">单选项</super-radio>
  <div class="switch-pair"><super-switch size="small" aria-label="小号关闭"></super-switch><span>/</span><super-switch size="small" checked aria-label="小号开启"></super-switch></div>
</div>

```html
<super-checkbox size="large">大号</super-checkbox>
<super-radio size="medium" name="size">中号</super-radio>
<super-switch size="small" aria-label="小号开关"></super-switch>
```

## 状态

悬停与聚焦列使用固定演示样式；普通组件可以直接交互体验真实状态。

<div class="selector-board selector-state-matrix">
  <span></span><strong>默认</strong><strong>悬停</strong><strong>选中</strong><strong>禁用</strong>

  <strong>Checkbox</strong>
  <super-checkbox>未选择</super-checkbox>
  <super-checkbox class="selector-hover">未选择</super-checkbox>
  <super-checkbox checked>已选择</super-checkbox>
  <super-checkbox disabled>未选择</super-checkbox>

  <strong>Radio</strong>
  <super-radio name="state-default">未选择</super-radio>
  <super-radio class="selector-focus" name="state-hover">未选择</super-radio>
  <super-radio name="state-selected" checked>已选择</super-radio>
  <super-radio disabled>未选择</super-radio>

  <strong>Switch</strong>
  <super-switch aria-label="默认关闭">关闭</super-switch>
  <super-switch class="selector-hover" aria-label="悬停关闭">关闭</super-switch>
  <super-switch checked aria-label="已经开启">开启</super-switch>
  <super-switch disabled aria-label="禁用关闭">关闭</super-switch>

  <strong>Checkbox 半选</strong>
  <super-checkbox indeterminate>部分选择</super-checkbox>
  <super-checkbox class="selector-focus" indeterminate>部分选择</super-checkbox>
  <super-checkbox checked>全部选择</super-checkbox>
  <super-checkbox indeterminate disabled>部分选择</super-checkbox>
</div>

## 校验与提示

`validation` 表达结果语义，`helper-text` 提供说明。错误状态会给内部控件添加 `aria-invalid="true"`，错误提示使用 `role="alert"`；其他提示使用礼貌播报。

<div class="selector-validation-board">
  <div class="selector-spec">
    <strong>多选成功</strong>
    <super-checkbox checked validation="success" helper-text="✓ 可以继续提交">已同意协议</super-checkbox>
  </div>
  <div class="selector-spec">
    <strong>多选警告</strong>
    <super-checkbox validation="warning" helper-text="请选择至少一项">接收活动通知</super-checkbox>
  </div>
  <div class="selector-spec">
    <strong>单选错误</strong>
    <super-radio validation="error" helper-text="请选择支付方式" name="validation-pay">支付宝</super-radio>
  </div>
  <div class="selector-spec">
    <strong>开关帮助</strong>
    <super-switch validation="info" helper-text="开启后将自动同步">自动同步</super-switch>
  </div>
</div>

```html
<super-checkbox
  checked
  validation="success"
  helper-text="可以继续提交"
>已同意协议</super-checkbox>

<super-radio
  name="payment"
  validation="error"
  helper-text="请选择支付方式"
>支付宝</super-radio>
```

## 常用组合与布局

选择器不内置 Group 或卡片容器。使用原生 `fieldset` / `legend` 提供分组语义，再用业务布局决定纵向、横向、卡片或列表形态。

<div class="selector-combination-board">
  <fieldset class="selector-field selector-group">
    <legend>消息渠道</legend>
    <super-checkbox checked>邮件</super-checkbox>
    <super-checkbox checked>短信</super-checkbox>
    <super-checkbox>站内信</super-checkbox>
  </fieldset>

  <fieldset class="selector-field selector-group">
    <legend>默认付款方式</legend>
    <super-radio name="payment-demo" value="wechat">微信</super-radio>
    <super-radio name="payment-demo" value="alipay" checked>支付宝</super-radio>
    <super-radio name="payment-demo" value="card">银行卡</super-radio>
  </fieldset>

  <fieldset class="selector-field selector-group">
    <legend>设置开关组</legend>
    <super-switch checked>消息提醒</super-switch>
    <super-switch>深色模式</super-switch>
    <super-switch checked>自动保存</super-switch>
  </fieldset>

  <fieldset class="selector-field selector-horizontal-group">
    <legend>横向排列</legend>
    <super-checkbox checked>选项 A</super-checkbox>
    <super-checkbox>选项 B</super-checkbox>
    <super-checkbox checked>选项 C</super-checkbox>
  </fieldset>
</div>

<div class="selector-list-board" aria-label="列表项开关示例">
  <div class="selector-list-row">
    <span><strong>♧ 消息提醒</strong><small>接收系统消息推送</small></span>
    <super-switch checked aria-label="消息提醒"></super-switch>
  </div>
  <div class="selector-list-row">
    <span><strong>☾ 深色模式</strong><small>夜间阅读更加舒适</small></span>
    <super-switch aria-label="深色模式"></super-switch>
  </div>
  <div class="selector-list-row">
    <span><strong>☁ 自动备份</strong><small>自动上传并保存数据</small></span>
    <super-switch checked aria-label="自动备份"></super-switch>
  </div>
</div>

```html
<fieldset>
  <legend>默认付款方式</legend>
  <super-radio name="payment" value="wechat">微信</super-radio>
  <super-radio name="payment" value="alipay" checked>支付宝</super-radio>
</fieldset>
```

## 状态同步

三个组件分别派发独立的跨框架事件，事件都支持冒泡并穿过 Shadow DOM。不要只读取初始 attribute；用户操作后应读取事件 `detail` 或组件 property。

```js
document.addEventListener("super-checkbox-change", (event) => {
  console.log(
    event.detail.name,
    event.detail.value,
    event.detail.checked,
    event.detail.indeterminate,
  );
});

document.addEventListener("super-radio-change", (event) => {
  console.log(event.detail.name, event.detail.value, event.detail.checked);
});

document.addEventListener("super-switch-change", (event) => {
  console.log(event.detail.name, event.detail.value, event.detail.checked);
});
```

## 无障碍

- 为一组相关选项使用原生 `fieldset` 与 `legend`，不要只依赖视觉边框表达分组。
- Radio 组必须位于同一根节点与同一个最近的 `form` 中，并使用相同且非空的 `name`。组内仅当前选中项（没有选中项时为首个启用项）进入 Tab 顺序；聚焦后可使用上、下、左、右方向键循环选择启用项。
- 有可见文字时，默认 Slot 会参与内部原生控件的可访问名称；纯图标或无文字 Switch 必须提供 `aria-label`。
- `disabled` 会让内部原生控件不可操作且不可聚焦。不要仅用降低透明度模拟禁用。
- `indeterminate` 是独立视觉状态，并不等于 `checked`。业务中的“全选”逻辑仍需由消费者根据子项状态计算。

## API

### Checkbox Attributes / Properties

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `checked` | `boolean` | `false` | 当前是否选中，并反射到 attribute |
| `indeterminate` | `boolean` | `false` | 是否处于部分选择状态，并反射到 attribute |
| `disabled` | `boolean` | `false` | 禁止操作并移出 Tab 顺序 |
| `required` | `boolean` | `false` | 转发给内部原生 Checkbox 的必选语义 |
| `variant` | `default \| card` | `default` | 基础或卡片布局 |
| `size` | `large \| medium \| small` | `medium` | 组件尺寸 |
| `validation` | `none \| success \| warning \| error \| info` | `none` | 校验视觉与辅助语义 |
| `name` | `string` | 空字符串 | 转发给内部控件，并包含在事件详情中 |
| `value` | `string` | `on` | 事件中返回的业务值 |
| `helper-text` | `string` | 空字符串 | 控件下方的帮助或错误信息 |
| `aria-label` | `string` | 空字符串 | 转发给内部 Checkbox 的可访问名称 |

### Radio Attributes / Properties

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `checked` | `boolean` | `false` | 当前是否选中，并反射到 attribute |
| `disabled` | `boolean` | `false` | 禁止操作并移出 Tab 顺序 |
| `required` | `boolean` | `false` | 转发给内部原生 Radio 的必选语义 |
| `variant` | `default \| button \| card` | `default` | 基础、胶囊按钮或卡片布局 |
| `size` | `large \| medium \| small` | `medium` | 组件尺寸 |
| `validation` | `none \| success \| warning \| error \| info` | `none` | 校验视觉与辅助语义 |
| `value` | `string` | `on` | 事件中返回的业务值 |
| `name` | `string` | 空字符串 | 同根节点、同最近表单的同名组件构成互斥组 |
| `helper-text` | `string` | 空字符串 | 控件下方的帮助或错误信息 |
| `aria-label` | `string` | 空字符串 | 转发给内部 Radio 的可访问名称 |

### Switch Attributes / Properties

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `checked` | `boolean` | `false` | 当前是否开启，并反射到 attribute |
| `disabled` | `boolean` | `false` | 禁止操作并移出 Tab 顺序 |
| `required` | `boolean` | `false` | 转发给内部原生 Checkbox 的必选语义 |
| `size` | `large \| medium \| small` | `medium` | 组件尺寸 |
| `validation` | `none \| success \| warning \| error \| info` | `none` | 校验视觉与辅助语义 |
| `name` | `string` | 空字符串 | 转发给内部控件，并包含在事件详情中 |
| `value` | `string` | `on` | 开关事件中返回的业务值 |
| `helper-text` | `string` | 空字符串 | 控件下方的帮助或错误信息 |
| `aria-label` | `string` | 空字符串 | 转发给内部 `role="switch"` 控件的可访问名称 |

### Events

| 组件 | 名称 | `detail` | 说明 |
| --- | --- | --- | --- |
| Checkbox | `super-checkbox-change` | `{ checked, indeterminate, name, value, originalEvent }` | 选中或半选状态因用户操作发生变化 |
| Radio | `super-radio-change` | `{ checked, value, name, originalEvent }` | 用户选择一个未选中的单选项 |
| Switch | `super-switch-change` | `{ checked, name, value, originalEvent }` | 开关状态因用户操作发生变化 |

所有事件均设置 `bubbles: true` 与 `composed: true`。

### Methods

三个组件提供相同的宿主方法：

| 名称 | 说明 |
| --- | --- |
| `click()` | 触发内部原生控件；禁用时无操作 |
| `focus(options?)` | 聚焦内部原生控件 |
| `blur()` | 移除内部原生控件焦点 |

### Slots

| 组件 | 名称 | 说明 |
| --- | --- | --- |
| Checkbox | 默认 Slot | 选项文字或消费者内容 |
| Checkbox | `icon` | 卡片或选项中的装饰图标 |
| Checkbox | `description` | 与控件关联的次级说明 |
| Radio | 默认 Slot | 选项文字或消费者内容 |
| Radio | `icon` | 卡片或选项中的装饰图标 |
| Radio | `description` | 与控件关联的次级说明 |
| Switch | 默认 Slot | 固定说明文字 |
| Switch | `description` | 与控件关联的次级说明 |
| Switch | `unchecked-label` | 关闭状态显示的文字 |
| Switch | `checked-label` | 开启状态显示的文字 |
| Switch | `unchecked-icon` | 关闭状态显示在滑块内的图标 |
| Switch | `checked-icon` | 开启状态显示在滑块内的图标 |

组件不绑定图标库，图标 Slot 可以接收 SVG、图标组件或简单文本符号。

### CSS Parts

| 组件 | Part | 说明 |
| --- | --- | --- |
| Checkbox | `control` / `input` | 可点击标签容器 / 内部原生 Checkbox |
| Checkbox | `indicator` / `mark` | 方形指示器 / 对勾或半选标记 |
| Checkbox | `icon` / `content` / `label` / `description` / `helper` | 图标、内容、主文字、次级说明与辅助信息 |
| Radio | `control` / `input` | 可点击标签容器 / 内部原生 Radio |
| Radio | `indicator` / `dot` | 圆形指示器 / 选中圆点 |
| Radio | `icon` / `content` / `label` / `description` / `helper` | 图标、内容、主文字、次级说明与辅助信息 |
| Switch | `control` / `input` | 可点击标签容器 / 内部原生 Checkbox |
| Switch | `track` / `thumb` | 轨道 / 滑块 |
| Switch | `unchecked-icon` / `checked-icon` | 两种状态的滑块图标容器 |
| Switch | `content` / `label` / `unchecked-label` / `checked-label` | 内容、固定说明与两种状态文字容器 |
| Switch | `description` / `helper` | 次级说明 / 校验或帮助信息 |

### CSS Custom Properties

常用视觉 token 如下；其余尺寸 token 也可以在宿主上按场景覆盖。

```css
super-checkbox {
  --super-checkbox-border-color: #34445f;
  --super-checkbox-background: #fffef9;
  --super-checkbox-checked-background: #3978e9;
  --super-checkbox-checked-color: #fff;
  --super-checkbox-hover-color: #3fa66a;
  --super-checkbox-focus-color: #356df3;
  --super-checkbox-rotation: -0.35deg;
  --super-checkbox-card-background: #fffef9;
  --super-checkbox-card-checked-background: #f3f7ff;
  --super-checkbox-card-padding: 13px 16px;
}

super-radio {
  --super-radio-border-color: #34445f;
  --super-radio-background: #fffef9;
  --super-radio-checked-color: #3978e9;
  --super-radio-hover-color: #3fa66a;
  --super-radio-focus-color: #356df3;
  --super-radio-rotation: -0.4deg;
  --super-radio-option-background: #fffef9;
  --super-radio-option-checked-background: #dff3df;
  --super-radio-option-padding: 9px 15px;
}

super-switch {
  --super-switch-background: #d6d9de;
  --super-switch-checked-background: #68c875;
  --super-switch-border-color: #6b7280;
  --super-switch-checked-border-color: #2e7738;
  --super-switch-focus-color: #356df3;
  --super-switch-rotation: -0.3deg;
}
```

可调整的尺寸 token 包括 Checkbox 的 `--super-checkbox-size`、`--super-checkbox-gap`、`--super-checkbox-font-size`，Radio 的 `--super-radio-size`、`--super-radio-dot-size`、`--super-radio-gap`、`--super-radio-font-size`，以及 Switch 的 `--super-switch-width`、`--super-switch-height`、`--super-switch-thumb-size`、`--super-switch-gap`、`--super-switch-font-size`。

## 表单限制

三个组件当前都不是 form-associated Custom Element。内部原生控件用于语义、键盘与焦点行为，但宿主的 `name` / `value` 不会自动进入原生表单提交数据，也没有公开 `form`、`validity`、`checkValidity()` 或表单重置契约。需要提交时，请在 `super-*-change` 事件中同步应用状态，或显式同步到表单字段；不要依赖 Shadow DOM 内部实现。

<style>
.selector-note {
  display: grid;
  grid-template-columns: auto auto 1fr;
  gap: 0.75rem;
  align-items: center;
  margin: 1.5rem 0 2rem;
  padding: 0.85rem 1rem;
  color: #3f352b;
  background: #fffaf0;
  border: 1.5px dashed #9a7b57;
  border-radius: 12px 8px 11px 9px;
}

.selector-note > span:first-child {
  color: #ee8b9b;
  font-size: 1.35rem;
}

.selector-board,
.selector-validation-board,
.selector-combination-board,
.selector-list-board {
  margin: 1rem 0 1.5rem;
  padding: 1.5rem;
  color: #292524;
  background: #fffef9;
  border: 2px solid #292524;
  border-radius: 9px 13px 8px 11px / 11px 8px 12px 9px;
  box-shadow: 4px 4px 0 #292524;
}

.selector-type-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
  align-items: start;
}

.selector-spec,
.selector-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.85rem;
  min-width: 0;
}

.selector-spec > strong,
.selector-field > legend {
  margin-bottom: 0.15rem;
  color: #292524;
  font-size: 0.86rem;
  font-weight: 700;
}

.selector-field {
  min-width: 0;
  margin: 0;
  padding: 0;
  border: 0;
}

.selector-inline-options,
.selector-card-options {
  flex-direction: row;
  flex-wrap: wrap;
}

.selector-inline-options > legend,
.selector-card-options > legend {
  flex-basis: 100%;
}

.checkbox-card {
  display: block;
  width: 100%;
}

.radio-card {
  flex: 1 1 120px;
}

.switch-pair {
  display: inline-flex;
  gap: 0.75rem;
  align-items: center;
}

.selector-size-matrix {
  display: grid;
  grid-template-columns: 58px repeat(3, minmax(150px, 1fr));
  gap: 1.25rem 1.5rem;
  align-items: center;
  overflow-x: auto;
}

.selector-state-matrix {
  display: grid;
  grid-template-columns: 120px repeat(4, minmax(145px, 1fr));
  gap: 1.2rem 1rem;
  align-items: center;
  overflow-x: auto;
}

.selector-state-matrix > strong:not(:first-of-type) {
  text-align: center;
}

super-checkbox.selector-hover::part(indicator),
super-radio.selector-hover::part(indicator) {
  border-color: #3fa66a;
  box-shadow: 2px 3px 0 -1px #b9ddc3;
  transform: translate(-0.5px, -0.5px) rotate(0.2deg);
}

super-switch.selector-hover::part(track) {
  box-shadow: inset 0 1px 2px rgb(15 23 42 / 12%), 2px 3px 0 -1px #9db7fa;
  transform: translate(-0.5px, -0.5px) rotate(0.2deg);
}

super-checkbox.selector-focus::part(indicator),
super-radio.selector-focus::part(indicator),
super-switch.selector-focus::part(track) {
  outline: 3px solid #356df3;
  outline-offset: 3px;
  transform: rotate(0deg);
}

.selector-validation-board,
.selector-combination-board {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.5rem;
}

.selector-validation-board {
  border-color: #f2b72f;
  box-shadow: 4px 4px 0 #f2b72f;
}

.selector-combination-board {
  border-color: #56c6b7;
  box-shadow: 4px 4px 0 #56c6b7;
}

.selector-horizontal-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem 1.4rem;
  align-content: flex-start;
}

.selector-horizontal-group > legend {
  flex-basis: 100%;
}

.selector-list-board {
  max-width: 560px;
  border-color: #64748b;
  box-shadow: 4px 4px 0 #94a3b8;
}

.selector-list-row {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 0.2rem;
  border-bottom: 1px dashed #cbd5e1;
}

.selector-list-row:last-child {
  border-bottom: 0;
}

.selector-list-row > span {
  display: grid;
  gap: 0.2rem;
}

.selector-list-row small {
  color: #64748b;
}

html.dark .selector-note,
html.dark .selector-board,
html.dark .selector-validation-board,
html.dark .selector-combination-board,
html.dark .selector-list-board {
  color: #292524;
}

@media (max-width: 820px) {
  .selector-type-grid,
  .selector-validation-board,
  .selector-combination-board {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .selector-note {
    grid-template-columns: auto 1fr;
  }

  .selector-note > span:last-child {
    grid-column: 1 / -1;
  }

  .selector-board,
  .selector-validation-board,
  .selector-combination-board,
  .selector-list-board {
    padding: 1rem;
  }

  .selector-type-grid,
  .selector-validation-board,
  .selector-combination-board {
    grid-template-columns: 1fr;
  }

  .selector-size-matrix {
    grid-template-columns: 58px repeat(3, 150px);
  }

  .selector-state-matrix {
    grid-template-columns: 110px repeat(4, 145px);
  }
}
</style>
