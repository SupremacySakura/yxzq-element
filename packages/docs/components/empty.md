# Empty 空状态

当列表、搜索结果或内容区域暂时没有数据时，用一块手绘插画和一句说明代替空白页面，并可以放置下一步操作。

<div class="empty-note">
  <span aria-hidden="true">◌</span>
  <strong>使用提示</strong>
  <span>空状态应当解释“为什么为空”并给出可行的下一步。避免只写“暂无数据”却不让用户知道可以做什么。</span>
</div>

## 基础用法

默认文案为“暂无数据”，通过 `description` 覆盖。组件内置一幅装饰性手绘插画，并始终对辅助技术隐藏。

<div class="empty-board">
  <super-empty></super-empty>
  <super-empty description="还没有收藏任何作品"></super-empty>
</div>

```html
<super-empty description="还没有收藏任何作品"></super-empty>
```

## 尺寸

`size` 同时调整插画尺寸、间距和文字大小。

<div class="empty-board empty-size-grid">
  <super-empty size="large" description="大号空状态"></super-empty>
  <super-empty description="中号空状态"></super-empty>
  <super-empty size="small" description="小号空状态"></super-empty>
</div>

```html
<super-empty size="small" description="小号空状态"></super-empty>
```

## 自定义插画

默认 Slot 用于替换内置插画。插画区域保留手绘边框与底色，消费者可以放入 SVG、图标组件或自己的图片。

<div class="empty-board">
  <super-empty description="搜索没有结果">
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" width="72" height="72">
      <circle cx="42" cy="42" r="24" stroke="currentColor" stroke-width="3" stroke-dasharray="5 6" />
      <path d="M60 60l18 18" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" />
      <path d="M32 40c4-5 10-6 15-2" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" />
    </svg>
  </super-empty>
</div>

```html
<super-empty description="搜索没有结果">
  <my-empty-illustration></my-empty-illustration>
</super-empty>
```

## 图片插画

设置 `image` 后优先渲染该 URL 对应的图片，并忽略默认 Slot。图片作为纯装饰处理，`alt` 固定为空，说明信息由 `description` 承担。

<div class="empty-board">
  <super-empty
    image="data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 96 96'%3E%3Crect width='96' height='96' fill='%23f7f4ec'/%3E%3Cpath d='M24 66c6-18 20-28 36-26 10 1 18 7 22 16' fill='none' stroke='%239a938f' stroke-width='3' stroke-dasharray='5 6'/%3E%3C/svg%3E"
    description="图片空状态"
  ></super-empty>
</div>

```html
<super-empty image="/illustrations/empty-box.svg" description="这里还没有内容"></super-empty>
```

## 操作区

`action` 具名 Slot 用于放置主操作按钮。没有内容时整个操作区不渲染，也不会占据间距。

<div class="empty-board">
  <super-empty description="购物车里还没有商品">
    <super-button slot="action" variant="success" shape="pill">去逛逛</super-button>
    <super-button slot="action" variant="text">查看优惠</super-button>
  </super-empty>
</div>

```html
<super-empty description="购物车里还没有商品">
  <super-button slot="action">去逛逛</super-button>
</super-empty>
```

## API

### Attributes / Properties

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `description` | `string` | `暂无数据` | 空状态说明文案 |
| `size` | `large \| medium \| small` | `medium` | 插画与文字尺寸 |
| `image` | `string` | 空字符串 | 插画图片 URL；非空时优先于默认 Slot |

### Slots

| 名称 | 说明 |
| --- | --- |
| 默认 Slot | 自定义插画；设置 `image` 后不渲染 |
| `action` | 操作按钮区域；为空时隐藏 |

### CSS Parts

| 名称 | 说明 |
| --- | --- |
| `empty` | 承载 `role="status"` 的外层容器 |
| `illustration` | 插画容器，始终 `aria-hidden="true"` |
| `image` | `image` 属性渲染的图片 |
| `description` | 说明文案 |
| `action` | 操作区容器 |

### CSS Custom Properties

```css
super-empty {
  --super-empty-illustration-size: 132px;
  --super-empty-gap: var(--super-spacing-md, 12px);
  --super-empty-padding: var(--super-spacing-xl, 24px);
  --super-empty-font-size: var(--super-font-size-base, 14px);
  --super-empty-color: var(--super-text-color-secondary, #6b6360);
  --super-empty-illustration-color: var(--super-text-color-placeholder, #9a938f);
  --super-empty-illustration-background: var(--super-background-color-soft, #f7f4ec);
  --super-empty-illustration-border-color: var(--super-border-color-light, #b6ada6);
  --super-empty-rotation: -0.25deg;
}
```

## 无障碍

外层容器带有 `role="status"`，当空状态在页面加载后出现时，辅助技术会读出其中的说明文案。插画区域固定为 `aria-hidden="true"`，使用 `image` 时图片的 `alt` 也为空，避免装饰内容与说明文字重复朗读。`action` Slot 中的按钮保留原生语义和键盘行为，组件不会接管焦点。

请让 `description` 描述当前结果而不是控件本身，例如“没有匹配的订单”，而不是“空状态”。如果空状态由用户操作触发，建议在操作后把焦点移回相关内容，或让 `role="status"` 的容器在 DOM 中已经存在，以便状态变化被播报。

## 已知边界

`image` 只接受 URL 字符串，不支持图片对象或响应式 `srcset`；需要多分辨率图片时请直接使用默认 Slot。设置 `image` 后默认 Slot 不会渲染，即使同时提供了自定义插画。插画容器使用 `aspect-ratio: 1` 保持正方形，超宽图片会以 `object-fit: contain` 缩放。Empty 不参与表单，也不会派发用户事件。

<style>
.empty-note {
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

.empty-note > span:first-child {
  color: #f0b429;
  font-size: 1.35rem;
}

.empty-board {
  display: grid;
  gap: 1.25rem;
  margin: 1rem 0 1.5rem;
  padding: 1.5rem;
  color: #292524;
  background: #fffef9;
  border: 2px solid #292524;
  border-radius: 9px 13px 8px 11px / 11px 8px 12px 9px;
  box-shadow: 4px 4px 0 #292524;
}

.empty-size-grid {
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  align-items: start;
}

@media (max-width: 720px) {
  .empty-note {
    grid-template-columns: auto 1fr;
  }

  .empty-note > span:last-child {
    grid-column: 1 / -1;
  }
}
</style>
