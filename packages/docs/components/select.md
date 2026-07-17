# Select 下拉选择器

`super-select` 是一款手绘风下拉选择器。它直接读取默认 Slot 中的原生 `option` 与 `optgroup`，同时覆盖单选、搜索、多选标签、分组、清空、校验、空状态和加载状态。

<div class="select-note">
  <span aria-hidden="true">♥</span>
  <strong>筛选提示</strong>
  <span>先让选项值保持唯一、稳定，再组合搜索、多选或级联逻辑；图标和自定义触发内容均由 Slot 提供。</span>
</div>

## 类型

<div class="select-board select-type-grid">
  <label class="select-spec">
    <span>基础选择器</span>
    <super-select aria-label="选择城市">
      <option value="shanghai">上海</option>
      <option value="hangzhou">杭州</option>
      <option value="shenzhen">深圳</option>
    </super-select>
  </label>
  <label class="select-spec">
    <span>带前缀</span>
    <super-select aria-label="选择城市">
      <span slot="prefix">城市</span>
      <option value="shanghai">上海</option>
      <option value="hangzhou">杭州</option>
    </super-select>
  </label>
  <label class="select-spec">
    <span>可搜索</span>
    <super-select searchable search-placeholder="搜索城市" aria-label="搜索城市">
      <option value="shanghai">上海</option>
      <option value="hangzhou">杭州</option>
      <option value="shenzhen">深圳</option>
    </super-select>
  </label>
  <label class="select-spec">
    <span>多选标签</span>
    <super-select multiple clearable aria-label="选择标签">
      <option value="food" selected>美食</option>
      <option value="travel" selected>旅行</option>
      <option value="photo">摄影</option>
    </super-select>
  </label>
  <label class="select-spec">
    <span>分组选项</span>
    <super-select aria-label="选择城市">
      <optgroup label="华东">
        <option value="shanghai">上海</option>
        <option value="hangzhou">杭州</option>
      </optgroup>
      <optgroup label="华南">
        <option value="shenzhen">深圳</option>
        <option value="guangzhou">广州</option>
      </optgroup>
    </super-select>
  </label>
  <label class="select-spec">
    <span>可清空</span>
    <super-select value="hangzhou" clearable aria-label="可清空的城市">
      <option value="shanghai">上海</option>
      <option value="hangzhou">杭州</option>
    </super-select>
  </label>
  <label class="select-spec">
    <span>前缀图标</span>
    <super-select aria-label="选择成员">
      <span slot="prefix" aria-hidden="true">♙</span>
      <option value="xiaoyu">小雨</option>
      <option value="xiaolin">小林</option>
    </super-select>
  </label>
  <label class="select-spec">
    <span>自定义触发内容</span>
    <super-select aria-label="选择操作">
      <span slot="trigger">选择项 →</span>
      <option value="copy">复制链接</option>
      <option value="share">分享页面</option>
    </super-select>
  </label>
</div>

```html
<super-select searchable clearable aria-label="选择城市">
  <optgroup label="华东">
    <option value="shanghai">上海</option>
    <option value="hangzhou">杭州</option>
  </optgroup>
  <optgroup label="华南">
    <option value="shenzhen">深圳</option>
  </optgroup>
</super-select>
```

`trigger` Slot 只替换触发区域的展示内容，选择状态和点击行为仍由 `super-select` 管理。请放入 `span`、图标等非交互内容，不要在其中嵌套按钮或另一个表单控件。

## 尺寸与外观

尺寸会同步调整高度、间距和字号；`variant` 用于改变轮廓，不改变选择行为。

<div class="select-board select-size-grid">
  <strong>大</strong>
  <super-select size="large" aria-label="大号选择器"><option value="a">选项 A</option><option value="b">选项 B</option></super-select>
  <super-select size="large" searchable aria-label="大号搜索选择器"><option value="a">选项 A</option><option value="b">选项 B</option></super-select>
  <strong>中</strong>
  <super-select size="medium" aria-label="中号选择器"><option value="a">选项 A</option><option value="b">选项 B</option></super-select>
  <super-select size="medium" multiple aria-label="中号多选器"><option value="a" selected>标签 A</option><option value="b" selected>标签 B</option></super-select>
  <strong>小</strong>
  <super-select size="small" aria-label="小号选择器"><option value="a">选项 A</option><option value="b">选项 B</option></super-select>
  <super-select size="small" searchable aria-label="小号搜索选择器"><option value="a">选项 A</option><option value="b">选项 B</option></super-select>
</div>

<div class="select-board select-variant-grid">
  <label class="select-spec"><span>默认</span><super-select variant="default" aria-label="默认外观"><option value="a">选项 A</option></super-select></label>
  <label class="select-spec"><span>圆角</span><super-select variant="pill" aria-label="圆角外观"><option value="a">选项 A</option></super-select></label>
  <label class="select-spec"><span>填充</span><super-select variant="filled" aria-label="填充外观"><option value="a">选项 A</option></super-select></label>
  <label class="select-spec"><span>幽灵</span><super-select variant="ghost" aria-label="幽灵外观"><option value="a">选项 A</option></super-select></label>
</div>

## 状态

`readonly` 允许聚焦和查看面板，但不能新增、移除或清空选择；`disabled` 则同时禁止聚焦与交互。`loading` 打开后展示加载面板，并暂时禁止改变值。

<div class="select-board select-state-grid">
  <span></span><strong>默认</strong><strong>悬停</strong><strong>聚焦</strong><strong>禁用</strong><strong>只读</strong>
  <strong>基础</strong>
  <super-select aria-label="默认状态"><option value="a">未选择</option></super-select>
  <super-select class="select-hover" aria-label="悬停状态"><option value="a">未选择</option></super-select>
  <super-select class="select-focus" aria-label="聚焦状态"><option value="a">未选择</option></super-select>
  <super-select disabled aria-label="禁用状态"><option value="a">未选择</option></super-select>
  <super-select readonly value="a" aria-label="只读状态"><option value="a">已选择</option></super-select>
  <strong>搜索</strong>
  <super-select searchable aria-label="默认搜索"><option value="a">选项 A</option></super-select>
  <super-select searchable class="select-hover" aria-label="悬停搜索"><option value="a">选项 A</option></super-select>
  <super-select searchable class="select-focus" aria-label="聚焦搜索"><option value="a">选项 A</option></super-select>
  <super-select searchable disabled aria-label="禁用搜索"><option value="a">选项 A</option></super-select>
  <super-select searchable readonly value="a" aria-label="只读搜索"><option value="a">选项 A</option></super-select>
</div>

## 下拉面板

面板复用原生 `option` / `optgroup` 作为数据源。`disabled`、`hidden`、`label`、`selected` 和文本变化会被同步；仅通过 JavaScript 修改 `option.selected` 属性后，应调用 `refreshOptions()`。

<div class="select-panel-grid">
  <div class="select-panel-demo">
    <strong>分组选项</strong>
    <super-select open value="hangzhou" aria-label="分组选项面板">
      <optgroup label="华东"><option value="shanghai">上海</option><option value="hangzhou">杭州</option></optgroup>
      <optgroup label="华南"><option value="shenzhen">深圳</option><option value="guangzhou" disabled>广州（暂停）</option></optgroup>
    </super-select>
  </div>
  <div class="select-panel-demo">
    <strong>空状态</strong>
    <super-select open empty-text="暂无可选城市" aria-label="空状态选择器"></super-select>
  </div>
  <div class="select-panel-demo">
    <strong>加载状态</strong>
    <super-select open loading loading-text="正在加载城市..." aria-label="加载状态选择器"></super-select>
  </div>
</div>

空状态和加载状态也可以完全自定义：

```html
<super-select open loading aria-label="加载成员">
  <span slot="loading">正在同步成员列表…</span>
</super-select>

<super-select open aria-label="空成员列表">
  <span slot="empty">还没有可选成员</span>
</super-select>
```

## 校验与提示

`validation` 表达结果语义，`helper-text` 提供说明。错误状态会给内部组合框设置 `aria-invalid="true"`，错误提示使用 `role="alert"`；其他提示使用礼貌播报。

<div class="select-board select-validation-grid">
  <label class="select-spec"><span>成功</span><super-select value="shanghai" validation="success" helper-text="✓ 选择正确" aria-label="成功示例"><option value="shanghai">上海市</option></super-select></label>
  <label class="select-spec"><span>警告</span><super-select validation="warning" helper-text="请至少选择一项" aria-label="警告示例"><option value="shanghai">上海市</option></super-select></label>
  <label class="select-spec"><span>错误</span><super-select validation="error" helper-text="请选择正确内容" aria-label="错误示例"><option value="shanghai">上海市</option></super-select></label>
  <label class="select-spec"><span>帮助提示</span><super-select validation="info" helper-text="支持单选、多选与搜索" aria-label="帮助示例"><option value="shanghai">上海市</option></super-select></label>
</div>

## 三级联动组合

省、市、区级联由三个 `super-select` 和业务数据组合完成。本组件库没有额外提供 Select Group、Cascader 或 Date 组件，也不会把业务层级规则内置进基础选择器。

<div class="select-board select-cascade">
  <super-select value="guangdong" aria-label="选择省份"><option value="guangdong">广东省</option><option value="zhejiang">浙江省</option></super-select>
  <span aria-hidden="true">→</span>
  <super-select value="shenzhen" aria-label="选择城市"><option value="shenzhen">深圳市</option><option value="guangzhou">广州市</option></super-select>
  <span aria-hidden="true">→</span>
  <super-select value="nanshan" aria-label="选择区县"><option value="nanshan">南山区</option><option value="futian">福田区</option></super-select>
</div>

```js
const province = document.querySelector("#province");
const city = document.querySelector("#city");
const district = document.querySelector("#district");

province.addEventListener("super-select-change", (event) => {
  replaceOptions(city, regions[event.detail.value].cities);
  replaceOptions(district, []);
});

city.addEventListener("super-select-change", (event) => {
  replaceOptions(district, districts[event.detail.value]);
});

function replaceOptions(select, items) {
  select.replaceChildren(
    ...items.map(({ value, label }) => new Option(label, value)),
  );
  select.value = "";
  select.refreshOptions();
}
```

## 值与选项约束

- 单选的 `value` 是字符串；多选的 `value` 是 `string[]`，必须通过 JavaScript property 传入数组，HTML attribute 只能表达字符串。
- 多选的初始 HTML 可以在多个原生 `option` 上使用 `selected`；后续读取和写入仍应使用组件的 `value` property。
- 每个 `option` 的 `value` 必须非空并在同一选择器内唯一。空值会被忽略，重复值无法形成可靠的一一映射。
- 程序化修改 `value` 不会派发用户事件。只有用户选择、移除标签或清空时才会触发 `super-select-change`。

```js
const tags = document.querySelector("#tags");

tags.multiple = true;
tags.value = ["food", "travel"];
await tags.updateComplete;
```

## 无障碍与键盘

组件内部使用 `combobox` + `listbox` / `option` 语义，并通过 `aria-expanded`、`aria-activedescendant`、`aria-multiselectable`、`aria-busy` 与帮助文本关联描述状态。无明确可见标签时，应提供 `aria-label`；内置按钮的中文名称可通过对应的 `*-label` 属性本地化。

| 按键 | 行为 |
| --- | --- |
| `Enter` / `Space` | 非搜索模式打开面板或选择当前选项 |
| `ArrowDown` / `ArrowUp` | 打开面板，并在可用选项间循环移动 |
| `Home` / `End` | 非搜索模式移到第一个 / 最后一个可用选项；搜索输入中保留文本光标行为 |
| `Escape` | 关闭面板并把焦点留在组合框 |
| `Tab` | 关闭面板并继续正常焦点导航 |
| 字符键 | 非搜索模式按选项标签进行前缀定位 |

## API

### Attributes / Properties

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `value` | `string \| string[]` | `""` | 当前值；`multiple` 时必须使用 JS 数组 property |
| `multiple` | `boolean` | `false` | 开启多选与标签展示 |
| `searchable` | `boolean` | `false` | 使用可输入的搜索触发器，仅过滤当前已有选项 |
| `clearable` | `boolean` | `false` | 有可编辑值时显示清空按钮；已选中的禁用选项会被保留 |
| `disabled` | `boolean` | `false` | 禁止聚焦、打开和选择 |
| `readonly` | `boolean` | `false` | 可聚焦和查看，但禁止修改选择 |
| `required` | `boolean` | `false` | 向内部组合框提供 `aria-required`，不代表表单校验契约 |
| `loading` | `boolean` | `false` | 面板打开时显示加载状态并禁止改值 |
| `open` | `boolean` | `false` | 控制面板是否展开；程序化写入不会触发 open-change 事件 |
| `name` | `string` | `""` | 写入 change 事件详情，不参与原生表单提交 |
| `size` | `large \| medium \| small` | `medium` | 组件尺寸 |
| `variant` | `default \| pill \| filled \| ghost` | `default` | 外观变体 |
| `validation` | `none \| success \| warning \| error \| info` | `none` | 校验视觉与辅助语义 |
| `placeholder` | `string` | `请选择` | 未选择时的占位内容 |
| `helper-text` | `string` | `""` | 组件下方的帮助或错误信息 |
| `aria-label` | `string` | `""` | 内部组合框与列表的可访问名称 |
| `clear-label` | `string` | `清空选择` | 清空按钮的可访问名称 |
| `remove-label` | `string` | `移除` | 标签移除按钮的名称前缀 |
| `search-label` | `string` | `搜索选项` | 未显式提供 `aria-label` 时搜索框的名称 |
| `search-placeholder` | `string` | `搜索并选择` | 面板展开时搜索输入的占位内容 |
| `empty-text` | `string` | `暂无可选项` | 默认空状态文案 |
| `loading-text` | `string` | `加载中...` | 默认加载状态文案 |

原生 `option` 支持 `value`、`label`、`selected`、`disabled` 与 `hidden`；原生 `optgroup` 支持 `label`、`disabled` 与 `hidden`。

### Events

所有自定义事件均支持冒泡，并能穿过 Shadow DOM。

| 名称 | `detail` | 说明 |
| --- | --- | --- |
| `super-select-change` | `{ value, values, name, selectedOptions, originalEvent }` | 用户选择、移除标签或清空后触发 |
| `super-select-clear` | `{ previousValue, originalEvent }` | 用户点击清空按钮时触发，随后还会触发 change |
| `super-select-open-change` | `{ open, reason, originalEvent }` | 用户打开或关闭面板时触发；`reason` 为 `trigger \| keyboard \| search \| selection \| escape \| outside` |
| `super-select-search` | `{ query, originalEvent }` | 搜索输入内容变化时触发 |

### Methods

| 名称 | 说明 |
| --- | --- |
| `click()` | 模拟点击触发区域；禁用时无操作 |
| `focus(options?)` | 聚焦内部组合框 |
| `blur()` | 移除内部组合框焦点 |
| `refreshOptions()` | 重新读取原生选项及其选中状态 |

### Slots

| 名称 | 说明 |
| --- | --- |
| 默认 Slot | 原生 `option` / `optgroup` 数据源，不接受自定义 Option 组件 |
| `prefix` | 触发器左侧标签、文字或图标 |
| `trigger` | 触发区域的展示内容；只放非交互内容 |
| `indicator` | 替换默认下拉箭头 |
| `empty` | 自定义空状态内容 |
| `loading` | 自定义加载状态内容 |

### CSS Parts

| 名称 | 说明 |
| --- | --- |
| `control` | 手绘边框触发容器 |
| `prefix` / `trigger` / `search` / `search-icon` | 前缀与两类组合框触发区域 |
| `value` / `placeholder` | 当前值容器与占位内容 |
| `tags` / `tag` / `tag-remove` | 多选标签区域、单个标签及移除按钮 |
| `clear-button` / `validation-icon` / `indicator` | 内置操作与状态指示 |
| `popup` / `listbox` | 下拉浮层与列表容器 |
| `group` / `group-label` | 选项分组与分组标题 |
| `option` / `option-check` | 单个选项与选择标记 |
| `empty` / `loading` | 空状态与加载状态容器 |
| `helper` | 帮助或错误文本 |

### CSS Custom Properties

```css
super-select {
  --super-select-width: 240px;
  --super-select-height: 38px;
  --super-select-padding-inline: 12px;
  --super-select-gap: 8px;
  --super-select-font-size: 15px;
  --super-select-background: #fffef9;
  --super-select-color: #292524;
  --super-select-placeholder-color: #64748b;
  --super-select-border-color: #34445f;
  --super-select-hover-color: #3f9b68;
  --super-select-focus-color: #356df3;
  --super-select-shadow-color: #a8b3bf;
  --super-select-validation-color: #34445f;
  --super-select-panel-background: #fffef9;
  --super-select-panel-max-height: 260px;
  --super-select-option-hover-background: #eef5ff;
  --super-select-option-selected-background: #dfeaff;
  --super-select-option-selected-color: #174ea6;
  --super-select-tag-background: #edf4ff;
  --super-select-tag-border-color: #9fb7dc;
  --super-select-z-index: 30;
  --super-select-rotation: -0.16deg;
}
```

## 表单限制

`super-select` 当前不是 form-associated Custom Element。`required` 和 `name` 只增强内部可访问语义与事件详情，组件不会自动进入 `FormData`，也不支持原生表单 reset 或外部 constraint validation。需要提交时，请监听 `super-select-change`，把值同步到应用状态或隐藏表单字段。

<style>
.select-note {
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

.select-note > span:first-child {
  color: #ee8b9b;
  font-size: 1.35rem;
}

.select-board,
.select-panel-grid {
  box-sizing: border-box;
  max-inline-size: 100%;
  margin: 1rem 0 1.5rem;
  padding: 1.5rem;
  color: #292524;
  background: #fffef9;
  border: 2px solid #292524;
  border-radius: 9px 13px 8px 11px / 11px 8px 12px 9px;
  box-shadow: 4px 4px 0 #292524;
}

.select-type-grid,
.select-variant-grid,
.select-validation-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(220px, 1fr));
  gap: 1.4rem 1.5rem;
}

.select-spec {
  display: grid;
  gap: 0.65rem;
  min-width: 0;
  color: #292524;
  font-size: 0.84rem;
  font-weight: 700;
}

.select-spec super-select,
.select-board > super-select,
.select-panel-demo super-select {
  --super-select-width: 100%;
}

.select-size-grid {
  display: grid;
  grid-template-columns: 55px repeat(2, minmax(210px, 1fr));
  gap: 1rem;
  align-items: center;
}

.select-state-grid {
  display: grid;
  grid-template-columns: 68px repeat(5, minmax(180px, 1fr));
  gap: 1rem;
  align-items: center;
  overflow-x: auto;
}

.select-state-grid > super-select {
  --super-select-width: 100%;
}

.select-hover::part(control) {
  border-color: #3f9b68;
  box-shadow: 2px 3px 0 -1px #b9ddc3;
  transform: translate(-0.5px, -0.5px) rotate(0.1deg);
}

.select-focus::part(control) {
  border-color: #356df3;
  box-shadow: 0 0 0 3px rgb(53 109 243 / 18%), 2px 3px 0 -1px #356df3;
  transform: rotate(0deg);
}

.select-panel-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
  min-height: 250px;
  border-color: #56c6b7;
  box-shadow: 4px 4px 0 #56c6b7;
}

.select-panel-demo {
  display: grid;
  align-content: start;
  gap: 0.8rem;
  min-inline-size: 0;
  max-inline-size: 100%;
}

.select-panel-demo super-select {
  display: block;
  inline-size: 100%;
  min-inline-size: 0;
  max-inline-size: 100%;
}

.select-validation-grid {
  border-color: #f2b72f;
  box-shadow: 4px 4px 0 #f2b72f;
}

.select-cascade {
  display: grid;
  grid-template-columns: repeat(2, auto minmax(150px, 1fr)) auto;
  gap: 0.65rem;
  align-items: center;
  border-color: #f2b72f;
  box-shadow: 4px 4px 0 #f2b72f;
}

html.dark .select-note,
html.dark .select-board,
html.dark .select-panel-grid {
  color: #292524;
}

@media (max-width: 800px) {
  .select-type-grid,
  .select-variant-grid,
  .select-validation-grid,
  .select-panel-grid {
    grid-template-columns: 1fr;
  }

  .select-panel-grid {
    gap: 14rem;
    padding-bottom: 12rem;
  }

  .select-size-grid {
    grid-template-columns: 45px repeat(2, 210px);
    overflow-x: auto;
  }

  .select-state-grid {
    grid-template-columns: 68px repeat(5, 190px);
  }

  .select-cascade {
    grid-template-columns: 1fr;
  }

  .select-cascade > span {
    transform: rotate(90deg);
    text-align: center;
  }
}
</style>
