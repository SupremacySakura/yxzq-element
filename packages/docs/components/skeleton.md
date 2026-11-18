# Skeleton 骨架屏

在真实内容到达之前，用一组手绘占位块勾勒页面结构，减少布局跳动，并让等待过程有明确的反馈。

<div class="skeleton-note">
  <span aria-hidden="true">▤</span>
  <strong>使用提示</strong>
  <span>骨架屏的形状应尽量贴近最终内容。加载结束后把 <code>loading</code> 设为 <code>false</code>，真实内容会从默认 Slot 渲染。</span>
</div>

## 基础用法

默认是单行文本骨架。`rows` 控制文本行数，最后一行会自动缩短，模拟自然段落的结尾。

<div class="skeleton-board">
  <super-skeleton></super-skeleton>
  <super-skeleton rows="3"></super-skeleton>
  <super-skeleton rows="5"></super-skeleton>
</div>

```html
<super-skeleton></super-skeleton>
<super-skeleton rows="3"></super-skeleton>
```

## 形状

`variant` 提供文本、矩形和圆形三种占位形状。矩形与圆形始终只渲染一块占位，忽略 `rows`。

<div class="skeleton-board skeleton-shape-grid">
  <div class="skeleton-spec">
    <span>文本</span>
    <super-skeleton rows="3"></super-skeleton>
  </div>
  <div class="skeleton-spec">
    <span>矩形</span>
    <super-skeleton variant="rect"></super-skeleton>
  </div>
  <div class="skeleton-spec">
    <span>圆形</span>
    <super-skeleton variant="circle"></super-skeleton>
  </div>
</div>

```html
<super-skeleton variant="rect"></super-skeleton>
<super-skeleton variant="circle"></super-skeleton>
```

## 自定义尺寸

`width` 与 `height` 会反射为同名 attribute，并作用于外层骨架容器，可传入任意 CSS 长度。矩形和圆形占位块另有 `--super-skeleton-rect-height` 与 `--super-skeleton-circle-size` 两个变量。

<div class="skeleton-board">
  <super-skeleton width="240px" height="20px"></super-skeleton>
  <super-skeleton variant="rect" width="100%" height="120px"></super-skeleton>
  <super-skeleton variant="circle" width="72px" height="72px"></super-skeleton>
</div>

```html
<super-skeleton width="240px" height="20px"></super-skeleton>
<super-skeleton variant="rect" width="100%" height="120px"></super-skeleton>
```

## 组合卡片

骨架屏是可组合的基础块。用原生布局把圆形头像、标题行和正文行组合成卡片占位。

<div class="skeleton-board">
  <div class="skeleton-card">
    <super-skeleton variant="circle" class="skeleton-avatar"></super-skeleton>
    <div class="skeleton-card-body">
      <super-skeleton width="45%"></super-skeleton>
      <super-skeleton rows="3"></super-skeleton>
    </div>
  </div>
</div>

```html
<div class="card">
  <super-skeleton variant="circle" width="48px" height="48px"></super-skeleton>
  <div>
    <super-skeleton width="45%"></super-skeleton>
    <super-skeleton rows="3"></super-skeleton>
  </div>
</div>
```

## 关闭动画

默认开启流动高光。`animated` 是布尔 attribute，省略即为关闭；关闭后会保留静态占位块，适合对动效敏感或需要减少重绘的场景。系统级 `prefers-reduced-motion: reduce` 也会自动关闭高光动画。

<div class="skeleton-board">
  <super-skeleton class="skeleton-static-demo" rows="2"></super-skeleton>
  <super-skeleton class="skeleton-static-demo" variant="rect"></super-skeleton>
</div>

```html
<super-skeleton rows="2"></super-skeleton>
```

```ts
const skeleton = document.querySelector("super-skeleton");
skeleton.animated = false;
```

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  document.querySelectorAll(".skeleton-static-demo").forEach((element) => {
    element.animated = false;
  });
});
</script>

## 切换真实内容

`loading` 为 `true` 时渲染占位，为 `false` 时渲染默认 Slot。加载提示文案通过 `loading-label` 覆盖，默认是“内容加载中”。

<div class="skeleton-board">
  <super-skeleton loading-label="正在加载文章">
    <p>文章已经加载完成，这里是真实内容。</p>
  </super-skeleton>
</div>

```html
<super-skeleton loading-label="正在加载文章">
  <article>文章已经加载完成，这里是真实内容。</article>
</super-skeleton>
```

```ts
const skeleton = document.querySelector("super-skeleton");
fetchArticle().then((article) => {
  skeleton.textContent = article.body;
  skeleton.loading = false;
});
```

## API

### Attributes / Properties

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `variant` | `text \| rect \| circle` | `text` | 占位形状 |
| `rows` | `number` | `1` | 文本行数；小于 `1` 时按 `1` 处理，其他形状忽略 |
| `animated` | `boolean` | `true` | 是否播放高光动画 |
| `loading` | `boolean` | `true` | 为 `true` 时显示占位，否则显示默认 Slot |
| `width` | `string` | 空字符串 | 外层容器的 CSS 宽度 |
| `height` | `string` | 空字符串 | 外层容器的 CSS 高度 |
| `loading-label` | `string` | `内容加载中` | Live Region 中的加载提示 |

### Slots

| 名称 | 说明 |
| --- | --- |
| 默认 Slot | 加载完成后显示的真实内容 |

### CSS Parts

| 名称 | 说明 |
| --- | --- |
| `skeleton` | 外层容器，承载 `aria-live="polite"` |
| `placeholder` | 占位容器，带 `aria-busy="true"` 与 `aria-hidden="true"` |
| `row` | 单个占位块 |
| `content` | 加载完成后的内容容器 |

### CSS Custom Properties

```css
super-skeleton {
  --super-skeleton-color: var(--super-background-color-soft, #f7f4ec);
  --super-skeleton-shine-color: rgb(255 255 255 / 62%);
  --super-skeleton-border-color: var(--super-border-color-lighter, #ddd5cd);
  --super-skeleton-row-height: 1em;
  --super-skeleton-row-gap: var(--super-spacing-sm, 8px);
  --super-skeleton-rect-height: 96px;
  --super-skeleton-circle-size: 56px;
  --super-skeleton-duration: 1.4s;
  --super-skeleton-rotation: -0.25deg;
}
```

## 无障碍

外层容器带有 `aria-live="polite"`，加载期间会包含一句加载提示；占位容器同时带有 `aria-busy="true"` 与 `aria-hidden="true"`，避免把重复的装饰块读给辅助技术。加载完成后占位容器从 DOM 移除，默认 Slot 的真实内容正常参与可访问性树。

骨架屏不接收焦点，也没有键盘交互。请把 `loading-label` 写成对当前任务的描述，例如“正在加载订单列表”。如果页面同时存在多个骨架屏，建议在各自外层提供可见标题，避免多个 Live Region 同时播报。

## 已知边界

`width` 与 `height` 会写回宿主 attribute，但不会自动转换数值；请显式传入 `320px`、`50%` 等 CSS 长度，纯数字会被浏览器当作无效长度忽略。文本骨架的行高由 `--super-skeleton-row-height` 控制，默认 `1em`，与组件字号相关。矩形和圆形占位块的默认尺寸由 `--super-skeleton-rect-height` 与 `--super-skeleton-circle-size` 决定，`height` 属性只影响外层容器。`loading` 切换不会自动清空或替换 Slot 内容，真实内容的渲染与数据请求由消费者负责。Skeleton 不参与表单，也不会派发用户事件。

<style>
.skeleton-note {
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

.skeleton-note > span:first-child {
  color: #f0b429;
  font-size: 1.35rem;
}

.skeleton-board {
  display: grid;
  gap: 1.35rem;
  margin: 1rem 0 1.5rem;
  padding: 1.5rem;
  color: #292524;
  background: #fffef9;
  border: 2px solid #292524;
  border-radius: 9px 13px 8px 11px / 11px 8px 12px 9px;
  box-shadow: 4px 4px 0 #292524;
}

.skeleton-shape-grid {
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  align-items: start;
}

.skeleton-spec {
  display: grid;
  gap: 0.65rem;
}

.skeleton-spec > span {
  font-size: 0.8rem;
  font-weight: 700;
}

.skeleton-card {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.skeleton-card-body {
  display: grid;
  flex: 1;
  gap: 0.65rem;
  min-width: 0;
}

@media (max-width: 720px) {
  .skeleton-note {
    grid-template-columns: auto 1fr;
  }

  .skeleton-note > span:last-child {
    grid-column: 1 / -1;
  }
}
</style>
