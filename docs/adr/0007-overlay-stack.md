# 弹出层技术栈:Floating UI + 自研焦点陷阱

弹出层组件(`tooltip/popover/dialog/drawer/popconfirm/dropdown/autocomplete`)使用 [Floating UI](https://floating-ui.com/) 处理锚定定位(~3KB gzipped);焦点陷阱与滚动锁定自研。

## Considered Options

- **全部自研(含定位)**:拒绝。手写碰撞检测/翻转/滚动跟随是最容易出 bug 的领域之一。
- **CSS Anchor Positioning**:拒绝。2026 年 Safari/Firefox 支持仍在推进,不能作为唯一方案;可作为未来增强。
- **引入 `focus-trap` 库**:拒绝。手绘风组件需要细粒度控制(如"陷阱内允许某些元素逃逸焦点"),且滚动锁定涉及 iOS Safari 的 `position: fixed` hack,自研更易处理。

## Consequences

- `packages/components` 新增 `@floating-ui/dom` 依赖。
- `packages/utils` 新增 `focusTrap()` 与 `scrollLock()` 工具函数。
