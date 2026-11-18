# Pagination 分页

手绘风分页导航，用于在大量数据中定位当前页。Pagination 支持页码列表、每页条数切换、跳页输入和只保留前后翻页的简洁模式。

<div class="pagination-note">
  <span aria-hidden="true">✎</span>
  <strong>使用提示</strong>
  <span>分页只负责页码与每页条数，不获取数据。请根据 <code>super-pagination-change</code> 更新列表，并在数据刷新期间避免重复触发相同页请求。</span>
</div>

## 注册

主入口 `import "yxzq-element"` 会随全部组件注册 `super-pagination`。只注册分页或需要显式控制注册时机时，使用：

```ts
import "yxzq-element/pagination";

// SSR 或自定义注册时机
import { defineSuperPagination } from "yxzq-element/pagination";
defineSuperPagination();
```

重复注册是安全的；没有 `customElements` 时不会抛错。

## 基础用法

`total` 是数据总条数，`pageSize` 是每页条数，`page` 是当前页。页码超过 7 页时自动折叠中间范围，保留首尾页与当前页附近的页码。

<div class="pagination-board">
  <super-pagination id="pagination-basic" total="128" page="3" aria-label="基础分页"></super-pagination>
</div>

```html
<super-pagination total="128" page="3"></super-pagination>
```

```ts
pagination.addEventListener("super-pagination-change", (event) => {
  pagination.page = event.detail.page;
  pagination.pageSize = event.detail.pageSize;
  loadPage(event.detail.page, event.detail.pageSize);
});
```

`total`、`page` 和 `page-size` 都是原始类型，可通过 attribute 或 property 设置。`page` 会被约束到 `1` 与总页数之间。

## 显示总数与每页条数

开启 `show-total` 显示总数文案。通过 `pageSizes` 提供可选每页条数，组件会渲染原生 `select`；切换后回到第 1 页，并在同一个事件中同时报告新的 `page` 与 `pageSize`。

<div class="pagination-board">
  <super-pagination id="pagination-size" total="240" page="5" show-total aria-label="带每页条数的分页"></super-pagination>
</div>

```html
<super-pagination total="240" page="5" show-total></super-pagination>
```

```ts
pagination.pageSizes = [10, 20, 50];
```

`pageSizes` 是 JavaScript 数组，无法通过 HTML attribute 设置。当前 `pageSize` 即使不在数组中也会补入选项，确保受控值始终可显示。

## 跳页

`show-jumper` 显示跳页输入框。输入页码后按 `Enter` 或离开输入框提交，超出范围会被约束到有效页；`simple` 模式下不显示跳页与每页条数选择。

<div class="pagination-board">
  <super-pagination id="pagination-jumper" total="500" page="8" show-jumper show-total aria-label="带跳页的分页"></super-pagination>
</div>

```html
<super-pagination total="500" page="8" show-jumper show-total></super-pagination>
```

## 简洁模式

`simple` 只保留上一页、当前页/总页数和下一页，适合空间有限的表格页脚。页数状态带 `aria-current="page"`，方便读屏用户确认位置。

<div class="pagination-board">
  <super-pagination id="pagination-simple" total="86" page="4" simple aria-label="简洁分页"></super-pagination>
</div>

```html
<super-pagination total="86" page="4" simple></super-pagination>
```

## 尺寸

`size` 控制按钮高度、最小宽度、内边距和字号。三档尺寸共用同一套键盘与禁用逻辑。

<div class="pagination-board pagination-size-board">
  <div class="pagination-size-row">
    <strong>大</strong>
    <super-pagination id="pagination-large" total="90" page="4" size="large" aria-label="大尺寸分页"></super-pagination>
  </div>
  <div class="pagination-size-row">
    <strong>中</strong>
    <super-pagination id="pagination-medium" total="90" page="4" aria-label="中尺寸分页"></super-pagination>
  </div>
  <div class="pagination-size-row">
    <strong>小</strong>
    <super-pagination id="pagination-small" total="90" page="4" size="small" aria-label="小尺寸分页"></super-pagination>
  </div>
</div>

## 禁用状态

`disabled` 会禁用所有翻页、页码、每页条数与跳页控件；当前页仍保留 `aria-current="page"`。数据加载中需要阻止重复请求时，也可以临时设置 `disabled`。

<div class="pagination-board">
  <super-pagination id="pagination-disabled" total="60" page="2" disabled show-total aria-label="禁用的分页"></super-pagination>
</div>

```html
<super-pagination total="60" page="2" disabled></super-pagination>
```

## 自定义文案

所有内置中文文案都可以通过 attribute 覆盖，包括上一页、下一页、页码、跳至、总数与单位。修改 `page-label` 会同步更新每个页码按钮的可访问名称。

<div class="pagination-board">
  <super-pagination
    id="pagination-copy"
    total="48"
    page="2"
    show-total
    show-jumper
    prev-label="向前"
    next-label="向后"
    page-label="第几页"
    jumper-label="前往"
    total-label="总计"
    items-label="项"
    page-suffix-label="页码"
    page-size-label="每页数量"
    aria-label="自定义文案的分页"
  ></super-pagination>
</div>

```html
<super-pagination
  total="48"
  show-total
  show-jumper
  prev-label="向前"
  next-label="向后"
  page-label="第几页"
  jumper-label="前往"
  total-label="总计"
  items-label="项"
  page-suffix-label="页码"
></super-pagination>
```

## 无障碍与键盘

外层使用 `role="navigation"` 与可配置的 `aria-label`。当前页按钮带 `aria-current="page"`，每个页码按钮都有“页码 + 数字”的可访问名称。上一页与下一页在边界处使用原生 `disabled`，不会被误触。

| 按键 | 行为 |
| --- | --- |
| `Tab` / `Shift + Tab` | 在上一页、页码、下一页与附加控件之间移动 |
| `ArrowRight` / `ArrowLeft` | 在页码按钮之间移动焦点，不改变当前页 |
| `Home` / `End` | 聚焦第一个 / 最后一个页码按钮 |
| `Enter` / `Space` | 激活聚焦的按钮 |

跳页输入使用 `type="number"`，按 `Enter` 提交。页码切换不会自动把焦点移动到列表或新页面，请在数据刷新后自行管理焦点。

## API

### Attributes / Properties

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `total` | `number` | `0` | 数据总条数 |
| `page` | `number` | `1` | 当前页，渲染时约束到有效范围 |
| `page-size` | `number` | `10` | 每页条数 |
| `pageSizes` | `number[]` | `[]` | 可选每页条数，仅 JavaScript 属性 |
| `size` | `large \| medium \| small` | `medium` | 组件尺寸 |
| `disabled` | `boolean` | `false` | 禁用全部交互 |
| `show-total` | `boolean` | `false` | 显示总条数 |
| `show-jumper` | `boolean` | `false` | 显示跳页输入 |
| `simple` | `boolean` | `false` | 只保留上一页、页码状态与下一页 |
| `aria-label` | `string` | `分页导航` | 导航区域的可访问名称 |
| `prev-label` | `string` | `上一页` | 上一页按钮文案与可访问名称 |
| `next-label` | `string` | `下一页` | 下一页按钮文案与可访问名称 |
| `page-label` | `string` | `页码` | 页码按钮可访问名称前缀 |
| `jumper-label` | `string` | `跳至` | 跳页输入前缀与可访问名称 |
| `total-label` | `string` | `共` | 总数文案前缀 |
| `items-label` | `string` | `条` | 总数单位与每页条数单位 |
| `page-suffix-label` | `string` | `页` | 页数单位 |
| `page-size-label` | `string` | `每页条数` | 每页条数选择器的可访问名称 |

### Events

所有自定义事件均支持冒泡，并能穿过 Shadow DOM。

| 名称 | `detail` | 说明 |
| --- | --- | --- |
| `super-pagination-change` | `{ page: number, pageSize: number }` | 用户翻页、点击页码、切换每页条数或提交跳页后触发 |

程序化修改 `page` 或 `pageSize` 不会触发 `super-pagination-change`。

### CSS Parts

| 名称 | 说明 |
| --- | --- |
| `pagination` | 外层 `nav` |
| `total` | 总数文案 |
| `prev` / `next` | 上一页 / 下一页按钮 |
| `pages` | 页码列表 |
| `page-item` | 单个页码项 |
| `page` | 页码按钮 |
| `current` | 当前页按钮额外 Part |
| `ellipsis` | 折叠省略号 |
| `page-size` | 每页条数容器 |
| `page-size-select` | 每页条数原生选择器 |
| `jumper` | 跳页容器 |
| `jumper-input` | 跳页原生输入框 |
| `simple-status` | 简洁模式页数状态 |

### CSS Custom Properties

```css
super-pagination {
  --super-pagination-gap: var(--super-spacing-sm);
  --super-pagination-control-height: 34px;
  --super-pagination-control-min-width: 34px;
  --super-pagination-font-size: var(--super-font-size-base);
  --super-pagination-color: var(--super-text-color-regular);
  --super-pagination-background: var(--super-background-color);
  --super-pagination-current-background: color-mix(in srgb, var(--super-color-primary) 16%, #fffef9);
  --super-pagination-current-color: var(--super-color-primary-dark-2);
  --super-pagination-border-color: var(--super-border-color-light);
  --super-pagination-focus-color: var(--super-focus-color);
  --super-pagination-radius: 6px 8px 5px 7px / 6px 5px 7px 6px;
  --super-pagination-rotation: var(--super-sketch-rotation);
}
```

## 已知边界

`super-pagination` 不是 form-associated Custom Element，不参与 `FormData`、原生重置或约束验证。组件不请求数据，也不缓存页面；数据加载、错误处理与焦点恢复由消费者负责。`pageSizes` 是 JavaScript 属性，无法通过 HTML attribute 设置。页码折叠规则不提供自定义窗口参数，需要不同页数布局时请使用 `simple` 或在外层组合其他控件。

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const pagination = document.querySelector("#pagination-size");
  if (pagination) {
    pagination.pageSizes = [10, 20, 50];
  }

  document.querySelectorAll("super-pagination").forEach((element) => {
    element.addEventListener("super-pagination-change", (event) => {
      element.page = event.detail.page;
      element.pageSize = event.detail.pageSize;
    });
  });
});
</script>

<style>
.pagination-note {
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

.pagination-note > span:first-child {
  color: #f0b429;
  font-size: 1.35rem;
}

.pagination-board {
  margin: 1rem 0 1.5rem;
  padding: 1.5rem;
  color: #292524;
  background: #fffef9;
  border: 2px solid #292524;
  border-radius: 9px 13px 8px 11px / 11px 8px 12px 9px;
  box-shadow: 4px 4px 0 #292524;
}

.pagination-size-board {
  display: grid;
  gap: 1.2rem;
}

.pagination-size-row {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.pagination-size-row > strong {
  flex: none;
  width: 1.5rem;
}

html.dark .pagination-note,
html.dark .pagination-board {
  color: #292524;
}

@media (max-width: 720px) {
  .pagination-board {
    padding: 1rem;
  }

  .pagination-note {
    grid-template-columns: auto 1fr;
  }

  .pagination-note > span:last-child {
    grid-column: 1 / -1;
  }
}
</style>
