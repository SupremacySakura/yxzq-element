# Autocomplete 自动完成

`super-autocomplete` 是一款手绘风自动完成输入框。它用原生 `<input>` 保持输入、拼写和输入法语义，并在下方提供可过滤的 `listbox` 建议列表。

<div class="autocomplete-note">
  <span aria-hidden="true">⌕</span>
  <strong>输入提示</strong>
  <span>输入框始终保留用户的原始文本；选中建议时才写入稳定的 `value`，适合搜索、跳转和远程联想场景。</span>
</div>

## 注册

组件入口提供 `super-autocomplete` 标签、`defineSuperAutocomplete()` 与 `SuperAutocomplete` 类。重复注册是安全的；没有 `customElements` 时不会抛错。

```ts
import "yxzq-element/autocomplete";

// SSR 或自定义注册时机
import { defineSuperAutocomplete } from "yxzq-element/autocomplete";
defineSuperAutocomplete();
```

## 基础用法

`items` 可以是由字符串组成的数组，也可以是 `{ value, label?, disabled? }` 对象数组。未提供 `label` 时，`value` 同时作为显示文本。

<div class="autocomplete-board">
  <label class="autocomplete-spec">
    <span>字符串选项</span>
    <super-autocomplete id="autocomplete-basic" placeholder="搜索城市" aria-label="搜索城市"></super-autocomplete>
  </label>
  <label class="autocomplete-spec">
    <span>对象选项</span>
    <super-autocomplete id="autocomplete-object" placeholder="搜索成员" aria-label="搜索成员"></super-autocomplete>
  </label>
</div>

```html
<super-autocomplete placeholder="搜索城市" aria-label="搜索城市"></super-autocomplete>
```

```js
const autocomplete = document.querySelector("super-autocomplete");
autocomplete.items = [
  { value: "shanghai", label: "上海" },
  { value: "hangzhou", label: "杭州" },
  { value: "shenzhen", label: "深圳", disabled: true },
];

autocomplete.addEventListener("super-autocomplete-change", (event) => {
  console.log(event.detail.value);
});
```

## 过滤与最少字符

默认按 `label` 和 `value` 做不区分大小写的包含匹配。传入 `filter` 函数可以完全接管匹配逻辑；`min-chars` 在输入达到指定长度前不展示建议。

<div class="autocomplete-board">
  <label class="autocomplete-spec">
    <span>最少 2 个字符</span>
    <super-autocomplete id="autocomplete-min-chars" min-chars="2" placeholder="至少输入 2 个字符" aria-label="至少输入两个字符"></super-autocomplete>
  </label>
  <label class="autocomplete-spec">
    <span>自定义过滤</span>
    <super-autocomplete id="autocomplete-filter" placeholder="按拼音前缀过滤" aria-label="按拼音前缀过滤"></super-autocomplete>
  </label>
</div>

```js
autocomplete.minChars = 2;
autocomplete.filter = (item, query) =>
  item.value.startsWith(query.toLocaleLowerCase());
```

## 尺寸与校验

尺寸会同步调整输入框高度、内边距和字号。`validation` 改变轮廓和状态色；`error` 会同时设置 `aria-invalid="true"`。

<div class="autocomplete-board autocomplete-size-grid">
  <label class="autocomplete-spec">
    <span>大</span>
    <super-autocomplete size="large" placeholder="大号输入框" aria-label="大号输入框"></super-autocomplete>
  </label>
  <label class="autocomplete-spec">
    <span>中</span>
    <super-autocomplete size="medium" placeholder="中号输入框" aria-label="中号输入框"></super-autocomplete>
  </label>
  <label class="autocomplete-spec">
    <span>小</span>
    <super-autocomplete size="small" placeholder="小号输入框" aria-label="小号输入框"></super-autocomplete>
  </label>
  <label class="autocomplete-spec">
    <span>成功</span>
    <super-autocomplete value="杭州" validation="success" aria-label="成功状态"></super-autocomplete>
  </label>
  <label class="autocomplete-spec">
    <span>警告</span>
    <super-autocomplete value="杭州" validation="warning" aria-label="警告状态"></super-autocomplete>
  </label>
  <label class="autocomplete-spec">
    <span>错误</span>
    <super-autocomplete value="杭州" validation="error" aria-label="错误状态"></super-autocomplete>
  </label>
  <label class="autocomplete-spec">
    <span>禁用</span>
    <super-autocomplete value="杭州" disabled aria-label="禁用状态"></super-autocomplete>
  </label>
  <label class="autocomplete-spec">
    <span>可清空</span>
    <super-autocomplete id="autocomplete-clear" value="杭州" clearable aria-label="可清空输入"></super-autocomplete>
  </label>
</div>

## 空状态与加载状态

`empty-text` 与 `loading-text` 都有中文默认值，可直接通过 attribute 本地化。加载时输入框会设置 `aria-busy="true"`，列表显示旋转指示器。

<div class="autocomplete-board autocomplete-state-grid">
  <label class="autocomplete-spec">
    <span>空结果</span>
    <super-autocomplete open placeholder="搜索不存在的城市" empty-text="没有找到城市" aria-label="空结果示例"></super-autocomplete>
  </label>
  <label class="autocomplete-spec">
    <span>加载中</span>
    <super-autocomplete open loading loading-text="正在搜索..." aria-label="加载示例"></super-autocomplete>
  </label>
</div>

```html
<super-autocomplete open empty-text="没有找到城市"></super-autocomplete>
<super-autocomplete open loading loading-text="正在搜索..."></super-autocomplete>
```

## 键盘与焦点

输入框保持原生输入行为，包括输入法组合、文本选择和浏览器自带的 typeahead。建议列表打开时：

- `ArrowDown` / `ArrowUp` 在可选建议间循环移动，跳过 `disabled` 项。
- `Home` / `End` 在输入为空时跳到第一项 / 最后一项；输入非空时保留原生的行首 / 行尾行为。
- `Enter` 选中当前活动建议；`Escape` 关闭列表并保持输入焦点；`Tab` 关闭列表后继续离开。
- 鼠标点击建议不会抢走输入框焦点，选择后焦点回到输入框。

## API

### Attributes / Properties

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `value` | `string` | `""` | 输入文本；用户输入和选择触发事件，程序化修改不触发 |
| `items` | `(string \| { value: string; label?: string; disabled?: boolean })[]` | `[]` | JavaScript 属性；建议数据 |
| `open` | `boolean` | `false` | 是否显示建议列表；程序化修改不派发事件 |
| `placeholder` | `string` | `输入以搜索` | 输入框占位文本 |
| `disabled` | `boolean` | `false` | 禁用后不可输入、聚焦或打开 |
| `size` | `large \| medium \| small` | `medium` | 输入框尺寸 |
| `validation` | `none \| success \| warning \| error \| info` | `none` | 校验视觉状态 |
| `clearable` | `boolean` | `false` | 有值时显示清空按钮 |
| `loading` | `boolean` | `false` | 显示加载状态并禁止选择 |
| `empty-text` | `string` | `没有匹配项` | 无匹配建议时的文案 |
| `clear-label` | `string` | `清空输入` | 清空按钮的可访问名称 |
| `loading-text` | `string` | `加载中...` | 加载状态文案 |
| `min-chars` | `number` | `0` | 展示建议前的最少输入字符数 |
| `filter` | `(item, query) => boolean` | 按 `label` / `value` 包含匹配 | JavaScript 属性；自定义过滤函数 |
| `aria-label` | `string` | `placeholder` | 输入框的可访问名称 |

### Events

| 名称 | Detail | 说明 |
| --- | --- | --- |
| `super-autocomplete-input` | `{ value: string }` | 用户输入时触发；`bubbles: true`、`composed: true` |
| `super-autocomplete-change` | `{ value: string }` | 用户选中建议时触发；`bubbles: true`、`composed: true` |
| `super-autocomplete-clear` | `{ previousValue: string }` | 用户点击清空时触发；`bubbles: true`、`composed: true` |
| `super-autocomplete-open-change` | `{ open: boolean }` | 用户交互请求打开或关闭列表时触发；`bubbles: true`、`composed: true` |

### Slots

当前版本不提供具名 Slot。清空、空状态和加载状态由公开属性定制；如需完整自定义输入框，请组合 `super-input` 与应用层建议列表。

### CSS Parts

| 名称 | 说明 |
| --- | --- |
| `field` | 输入框外框 |
| `input` | 原生输入元素 |
| `listbox` | 建议列表容器 |
| `option` | 单条建议 |
| `empty` | 空状态或加载状态容器 |
| `clear` | 清空按钮 |

### CSS Custom Properties

```css
super-autocomplete {
  --super-autocomplete-width: 280px;
  --super-autocomplete-height: 38px;
  --super-autocomplete-background: #fffef9;
  --super-autocomplete-border-color: #2f2a27;
  --super-autocomplete-focus-color: #56c6b7;
  --super-autocomplete-hover-color: #3f9b68;
  --super-autocomplete-option-active-background: #dfeaff;
  --super-autocomplete-option-active-color: #174ea6;
  --super-autocomplete-listbox-max-height: 260px;
  --super-autocomplete-radius: 10px 13px 9px 12px / 11px 9px 13px 10px;
  --super-autocomplete-z-index: 2000;
  --super-autocomplete-rotation: -0.12deg;
}
```

## 无障碍

- 原生输入框使用 `role="combobox"`、`aria-autocomplete="list"`、`aria-expanded` 和 `aria-controls`。
- 当前活动建议通过 `aria-activedescendant` 指向，输入焦点始终留在输入框。
- 建议列表使用 `role="listbox"`，每项使用 `role="option"` 与 `aria-selected`；禁用项使用 `aria-disabled="true"`。
- 清空按钮有可本地化的 `aria-label`；错误状态设置 `aria-invalid="true"`；加载状态设置 `aria-busy="true"`。
- 空状态和加载状态使用 `role="status"` 与 `aria-live="polite"`，不会打断用户输入。

## 已知边界

- `value` 是双向可观察属性：用户输入会立即派发 `super-autocomplete-input`，组件也会同步自身状态；应用如需持久化或校验，应在事件中写回。
- 建议项必须具有唯一且稳定的 `value`；组件不处理远程请求、分页、分组或虚拟滚动。
- `filter` 是运行时 JavaScript 函数，无法通过 attribute 序列化。
- 组件不是 form-associated Custom Element；`disabled`、`validation` 和 `value` 不参与原生 `FormData`、表单重置或外部约束校验。

<script setup>
import { onMounted } from "vue";

const cities = [
  { value: "shanghai", label: "上海" },
  { value: "hangzhou", label: "杭州" },
  { value: "shenzhen", label: "深圳", disabled: true },
  { value: "chengdu", label: "成都" },
];

const members = [
  { value: "xiaoyu", label: "小雨" },
  { value: "xiaolin", label: "小林" },
  { value: "xiazhou", label: "小舟", disabled: true },
  { value: "xiahe", label: "小禾" },
];

onMounted(() => {
  const basic = document.querySelector("#autocomplete-basic");
  if (basic) basic.items = ["上海", "杭州", "深圳", "成都"];

  const object = document.querySelector("#autocomplete-object");
  if (object) object.items = members;

  const minChars = document.querySelector("#autocomplete-min-chars");
  if (minChars) {
    minChars.items = cities;
    minChars.minChars = 2;
  }

  const custom = document.querySelector("#autocomplete-filter");
  if (custom) {
    custom.items = cities;
    custom.filter = (item, query) =>
      item.value.startsWith(query.toLocaleLowerCase());
  }

  const clear = document.querySelector("#autocomplete-clear");
  if (clear) clear.items = cities;

  document.querySelectorAll(".autocomplete-spec super-autocomplete").forEach((element) => {
    if (!element.items || element.items.length === 0) element.items = cities;
  });
});
</script>

<style>
.autocomplete-note {
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

.autocomplete-note > span:first-child {
  color: #1f7a70;
  font-size: 1.35rem;
}

.autocomplete-board {
  margin: 1rem 0 1.5rem;
  padding: 1.5rem;
  color: #292524;
  background: #fffef9;
  border: 2px solid #292524;
  border-radius: 9px 13px 8px 11px / 11px 8px 12px 9px;
  box-shadow: 4px 4px 0 #292524;
}

.autocomplete-spec {
  display: grid;
  gap: 0.7rem;
  justify-items: start;
}

.autocomplete-spec > span {
  color: #3f352b;
  font-size: 0.8rem;
  font-weight: 700;
}

.autocomplete-board:not(.autocomplete-size-grid):not(.autocomplete-state-grid) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
}

.autocomplete-size-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.25rem;
}

.autocomplete-state-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
}

@media (max-width: 720px) {
  .autocomplete-board {
    padding: 1rem;
  }

  .autocomplete-note {
    grid-template-columns: auto 1fr;
  }

  .autocomplete-note > span:last-child {
    grid-column: 1 / -1;
  }
}
</style>
