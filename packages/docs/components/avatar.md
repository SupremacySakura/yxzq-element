# Avatar 头像

以图片、字符或消费者内容表示用户或对象的手绘风头像。

## 注册

```ts
import "yxzq-element/avatar";
```

也可以显式注册：

```ts
import { defineSuperAvatar } from "yxzq-element/avatar";

defineSuperAvatar();
```

重复注册是安全的；SSR 环境中没有 `customElements` 时不会抛错。

## 图片头像

提供 `src` 时渲染图片；`alt` 同时作为图片替代文本。图片加载失败后自动回退，不会抛出异常。

<div class="avatar-board avatar-demo-grid">
  <div class="avatar-spec">
    <strong>图片</strong>
    <super-avatar
      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'%3E%3Crect width='80' height='80' fill='%23f7f4ec'/%3E%3Ccircle cx='40' cy='30' r='14' fill='%23f2b72f'/%3E%3Cpath d='M14 74c3-18 16-27 26-27s23 9 26 27' fill='%234b87f5'/%3E%3C/svg%3E"
      alt="示例用户"
    ></super-avatar>
  </div>
  <div class="avatar-spec">
    <strong>字符兜底</strong>
    <super-avatar icon="苏"></super-avatar>
  </div>
  <div class="avatar-spec">
    <strong>图片失败</strong>
    <super-avatar src="/missing-avatar.png" alt="林" fallback="林"></super-avatar>
  </div>
</div>

```html
<super-avatar src="/avatar.png" alt="张三"></super-avatar>
<super-avatar icon="苏"></super-avatar>
<super-avatar src="/missing.png" alt="林" fallback="林"></super-avatar>
```

## 尺寸

<div class="avatar-board avatar-size-grid">
  <div class="avatar-size-row">
    <strong>大</strong>
    <super-avatar size="large" icon="大"></super-avatar>
    <super-avatar size="large" shape="square" icon="方"></super-avatar>
  </div>
  <div class="avatar-size-row">
    <strong>中</strong>
    <super-avatar icon="中"></super-avatar>
    <super-avatar shape="square" icon="方"></super-avatar>
  </div>
  <div class="avatar-size-row">
    <strong>小</strong>
    <super-avatar size="small" icon="小"></super-avatar>
    <super-avatar size="small" shape="square" icon="方"></super-avatar>
  </div>
</div>

## 形状

`circle` 使用手绘椭圆轮廓，`square` 使用不对称手绘圆角方形。

<div class="avatar-board avatar-demo-grid">
  <div class="avatar-spec">
    <strong>圆形</strong>
    <super-avatar icon="圆"></super-avatar>
  </div>
  <div class="avatar-spec">
    <strong>方形</strong>
    <super-avatar shape="square" icon="方"></super-avatar>
  </div>
</div>

## 自定义兜底内容

默认 Slot 会覆盖 `icon` / `fallback` 文本，可以放入消费者提供的图形或排版内容。没有图片时，`icon` 是常规兜底；图片失败时优先使用 `fallback`，为空再退回 `icon`。

<div class="avatar-board avatar-demo-grid">
  <div class="avatar-spec">
    <strong>Slot 内容</strong>
    <super-avatar alt="设计团队"><span class="avatar-initials">DS</span></super-avatar>
  </div>
  <div class="avatar-spec">
    <strong>加载失败兜底</strong>
    <super-avatar src="/broken-avatar.png" alt="访客" fallback="访"></super-avatar>
  </div>
</div>

```html
<super-avatar alt="设计团队"><span>DS</span></super-avatar>
```

## API

### Attributes / Properties

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `src` | `string` | 空字符串 | 图片地址；为空时直接显示兜底内容 |
| `alt` | `string` | 空字符串 | 图片替代文本，也是兜底内容的可访问名称 |
| `size` | `large \| medium \| small` | `medium` | 头像尺寸 |
| `shape` | `circle \| square` | `circle` | 手绘圆形或圆角方形 |
| `icon` | `string` | `人` | 无图时的字符兜底 |
| `fallback` | `string` | 空字符串 | 图片加载失败时的字符兜底，优先于 `icon` |

### Events

没有自定义事件。图片加载失败只会切换到兜底内容，不抛错，也不派发事件。

### Slots

| 名称 | 说明 |
| --- | --- |
| 默认 Slot | 覆盖字符兜底内容；存在已分配内容时优先渲染 |

### CSS Parts

| 名称 | 说明 |
| --- | --- |
| `avatar` | 主容器 |
| `image` | 图片元素，仅在图片可用时存在 |
| `fallback` | 字符或 Slot 兜底容器，仅在图片不可用时存在 |

### CSS Custom Properties

| 名称 | 默认值 | 说明 |
| --- | --- | --- |
| `--super-avatar-size` | `40px` | 头像宽高 |
| `--super-avatar-font-size` | `16px` | 兜底字符字号 |
| `--super-avatar-border-width` | `var(--super-sketch-width, 2px)` | 边框宽度 |
| `--super-avatar-color` | `var(--super-text-color-regular, #4a4441)` | 兜底文字色 |
| `--super-avatar-background` | `var(--super-background-color-soft, #f7f4ec)` | 兜底背景色 |
| `--super-avatar-border-color` | `var(--super-border-color-light, #b6ada6)` | 边框色 |
| `--super-avatar-shadow-color` | `rgb(41 37 36 / 18%)` | 手绘阴影色 |
| `--super-avatar-radius` | 手绘椭圆或由 `--super-radius-*` 组合的方形圆角 | 轮廓圆角 |
| `--super-avatar-rotation` | `var(--super-sketch-rotation, -0.25deg)` | 手绘倾斜角 |
| `--super-sketch-width` | `2px` | 默认边框宽度的共享令牌来源 |

## 无障碍

- 图片使用原生 `img` 和 `alt`，由浏览器提供标准图像语义。
- 兜底内容在设置 `alt` 时使用 `role="img"` 和相同的 `aria-label`；未设置 `alt` 时只呈现普通文本，不伪造图像语义。
- 头像不是交互控件，不添加按钮角色；可点击头像应由消费者包裹链接或按钮。
- 装饰性头像可设置空 `alt`，并通过周围文本说明对象。

## 已知边界

- 图片加载失败状态会在 `src` 变更时重置，便于替换地址后重试。
- 图片失败回退不重试同一地址，也不会隐藏默认 Slot 内容。
- 图片跨域加载受浏览器策略限制；组件不代理或下载远程图片。
- `icon` / `fallback` 适合 1–2 个字符，较长内容请通过默认 Slot 自定义排版。

<style>
.avatar-board {
  margin: 1rem 0 1.5rem;
  padding: 1.5rem;
  color: #292524;
  background: #fffef9;
  border: 2px solid #292524;
  border-radius: 9px 13px 8px 11px / 11px 8px 12px 9px;
  box-shadow: 4px 4px 0 #292524;
}

.avatar-demo-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.6rem 2rem;
  align-items: center;
}

.avatar-spec {
  display: grid;
  gap: 0.7rem;
  justify-items: center;
}

.avatar-spec > strong {
  font-size: 0.8rem;
}

.avatar-size-grid {
  display: grid;
  gap: 1.2rem;
}

.avatar-size-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
}

.avatar-size-row > strong {
  inline-size: 1.5rem;
  color: #3f352b;
}

.avatar-initials {
  font-size: 0.85em;
  letter-spacing: 0.02em;
}

html.dark .avatar-board {
  color: #292524;
}
</style>
