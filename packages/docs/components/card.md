# Card 卡片

一个承载相关内容的容器。Card 负责分组、留白和手绘边界，不替消费者决定标题层级、图片替代文本或业务交互。

<div class="card-doc-note">
  <span aria-hidden="true">▣</span>
  <strong>使用提示</strong>
  <span>优先把 Card 当作内容分组，而不是页面布局网格。需要整卡跳转或打开详情时，再启用 <code>clickable</code>。</span>
</div>

## 基础用法

默认 Slot 承载正文，`header`、`footer` 和 `media` 是可选具名 Slot。没有内容的具名区域不会占据布局空间。

<div class="card-doc-board">
  <super-card>
    <span slot="header">本周回顾</span>
    <p>完成了 12 项任务，比上周多 3 项。</p>
    <span slot="footer">更新于今天 09:20</span>
  </super-card>
</div>

```html
<super-card>
  <span slot="header">本周回顾</span>
  <p>完成了 12 项任务，比上周多 3 项。</p>
  <span slot="footer">更新于今天 09:20</span>
</super-card>
```

## 媒体与页脚

`media` Slot 适合放置图片、插画或任意自定义封面。组件不绑定图片库，也不会替你生成替代文本。

<div class="card-doc-board card-doc-media-board">
  <super-card>
    <div slot="media" class="card-doc-cover" role="img" aria-label="蓝色纸张上的抽象线条">
      <span aria-hidden="true">✦</span>
    </div>
    <span slot="header">纸张手账</span>
    <p>把想法写下来，再慢慢整理成可以分享的页面。</p>
    <span slot="footer">阅读 4 分钟</span>
  </super-card>
</div>

```html
<super-card>
  <img slot="media" src="/cover.webp" alt="蓝色纸张上的抽象线条" />
  <span slot="header">纸张手账</span>
  <p>把想法写下来，再慢慢整理成可以分享的页面。</p>
  <span slot="footer">阅读 4 分钟</span>
</super-card>
```

## 类型

`default` 是带纸张质感的默认卡片；`outlined` 只保留描边；`filled` 使用柔和的填充色与虚线边界；`ghost` 去掉边框、阴影和纸张纹理。

<div class="card-doc-board card-doc-grid">
  <super-card>
    <span slot="header">Default</span>
    <p>默认卡片，适合大多数内容分组。</p>
  </super-card>
  <super-card variant="outlined">
    <span slot="header">Outlined</span>
    <p>轻量描边，适合密集列表。</p>
  </super-card>
  <super-card variant="filled">
    <span slot="header">Filled</span>
    <p>柔和填充，适合提示或摘要。</p>
  </super-card>
  <super-card variant="ghost">
    <span slot="header">Ghost</span>
    <p>无边界容器，适合嵌套在已有表面中。</p>
  </super-card>
</div>

```html
<super-card variant="default">...</super-card>
<super-card variant="outlined">...</super-card>
<super-card variant="filled">...</super-card>
<super-card variant="ghost">...</super-card>
```

## 尺寸

大、中、小三档尺寸会同步调整内边距、内容间距和字号。卡片宽度由外部布局决定。

<div class="card-doc-board card-doc-grid">
  <super-card size="large">
    <span slot="header">Large</span>
    <p>更宽松的内容区域。</p>
  </super-card>
  <super-card size="medium">
    <span slot="header">Medium</span>
    <p>默认内容密度。</p>
  </super-card>
  <super-card size="small">
    <span slot="header">Small</span>
    <p>更紧凑的辅助信息。</p>
  </super-card>
</div>

## 悬停与整卡点击

`hoverable` 在悬停时轻微抬升卡片；`clickable` 同时提供指针光标、键盘焦点、`role="button"` 和 `tabindex="0"`。整卡被点击或聚焦后按下 `Enter` / `Space` 时，会派发可冒泡、可穿透 Shadow DOM 的 `super-card-click`。

<div class="card-doc-board card-doc-grid">
  <super-card hoverable>
    <span slot="header">Hoverable</span>
    <p>鼠标悬停时抬升，不增加键盘交互。</p>
  </super-card>
  <super-card clickable aria-label="查看项目详情">
    <span slot="header">Clickable</span>
    <p>整张卡片可点击，也可以用键盘触发。</p>
  </super-card>
</div>

```html
<super-card hoverable>
  <span slot="header">Hoverable</span>
  <p>鼠标悬停时抬升。</p>
</super-card>

<super-card clickable aria-label="查看项目详情">
  <span slot="header">Clickable</span>
  <p>整张卡片可点击。</p>
</super-card>
```

```ts
card.addEventListener("super-card-click", (event) => {
  const detail = (event as CustomEvent).detail;
  console.log(detail.originalEvent);
});
```

## API

### Attributes / Properties

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `variant` | `default \| outlined \| filled \| ghost` | `default` | 卡片的视觉类型 |
| `size` | `large \| medium \| small` | `medium` | 内边距、间距与字号尺寸 |
| `hoverable` | `boolean` | `false` | 悬停时抬升卡片 |
| `clickable` | `boolean` | `false` | 整卡可点击；启用时宿主获得 `role="button"` 与 `tabindex="0"` |
| `aria-label` | `string` | 空字符串 | 整卡可点击时的可访问名称；映射到宿主元素 |

### Events

| 名称 | 说明 |
| --- | --- |
| `super-card-click` | 仅在 `clickable` 时由指针点击、`Enter` 或 `Space` 触发；`detail.originalEvent` 为原始事件 |

### Slots

| 名称 | 说明 |
| --- | --- |
| 默认 Slot | 卡片正文 |
| `header` | 标题或头部内容；为空时隐藏 |
| `footer` | 页脚或辅助信息；为空时隐藏 |
| `media` | 封面、图片或媒体内容；为空时隐藏 |

### CSS Parts

| 名称 | 说明 |
| --- | --- |
| `surface` | 卡片表面，包含边框、阴影和纸张纹理 |
| `media` | 媒体区域 |
| `header` | 头部区域 |
| `body` | 正文区域 |
| `footer` | 页脚区域 |

### CSS Custom Properties

所有组件变量都映射到共享令牌，并保留可覆盖的默认值。

```css
super-card {
  --super-card-padding: var(--super-spacing-lg, 16px);
  --super-card-gap: var(--super-spacing-md, 12px);
  --super-card-background: var(--super-background-color, #fffef9);
  --super-card-color: var(--super-text-color-primary, #292524);
  --super-card-border-color: var(--super-border-color, #2f2a27);
  --super-card-border-width: var(--super-sketch-width, 2px);
  --super-card-shadow-color: var(--super-sketch-shadow, rgb(23 78 166 / 28%));
  --super-card-radius:
    var(--super-radius-lg, 14px) var(--super-radius-md, 9px)
    var(--super-radius-lg, 14px) var(--super-radius-sm, 6px) /
    var(--super-radius-sm, 6px) var(--super-radius-lg, 14px)
    var(--super-radius-md, 9px) var(--super-radius-lg, 14px);
  --super-card-header-color: var(--super-text-color-primary, #292524);
  --super-card-footer-color: var(--super-text-color-secondary, #6b6360);
  --super-card-media-background: var(--super-background-color-soft, #f7f4ec);
  --super-card-hover-lift: 3px;
  --super-card-focus-color: var(--super-focus-color, #56c6b7);
  --super-card-rotation: var(--super-sketch-rotation, -0.25deg);
}
```

## 无障碍

非交互卡片不会获得 `tabindex`，也不会声明按钮角色，内部内容仍按普通文档结构被辅助技术读取。启用 `clickable` 后，宿主元素成为可聚焦的按钮语义区域；请提供清晰的 `aria-label`，并在卡片内部避免再放置按钮、链接等会与整卡点击竞争焦点的控件。键盘激活只处理 `Enter` 和 `Space`，其他按键不会派发事件。焦点轮廓使用 `--super-card-focus-color`，并支持 `prefers-reduced-motion` 下关闭抬升动画。

## 已知边界

Card 不是表单关联元素，也不负责图片替代文本、标题层级或路由跳转。`media` Slot 中的图片仍应提供 `alt`；标题请使用合适的原生标题元素。`super-card-click` 是组件自定义事件，原生 `click` 仍会照常派发。整卡可点击时，嵌套交互控件可能同时触发卡片事件，应改用非交互卡片并在正文中放置明确的操作入口。

<style>
.card-doc-note {
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

.card-doc-note > span:first-child {
  color: #f0b429;
  font-size: 1.35rem;
}

.card-doc-board {
  margin: 1rem 0 1.5rem;
  padding: 1.5rem;
  color: #292524;
  background: #fffef9;
  border: 2px solid #292524;
  border-radius: 9px 13px 8px 11px / 11px 8px 12px 9px;
  box-shadow: 4px 4px 0 #292524;
}

.card-doc-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  gap: 1.25rem;
}

.card-doc-media-board {
  max-width: 360px;
}

.card-doc-cover {
  display: grid;
  place-items: center;
  min-height: 128px;
  color: #16428f;
  font-size: 2.5rem;
  background:
    radial-gradient(circle at 20% 30%, rgb(75 135 245 / 20%) 0 2px, transparent 3px),
    linear-gradient(135deg, #e7f1ff, #fff4d6);
  background-size: 18px 18px, auto;
}

@media (max-width: 720px) {
  .card-doc-note {
    grid-template-columns: auto 1fr;
  }

  .card-doc-note > span:last-child {
    grid-column: 1 / -1;
  }
}
</style>
