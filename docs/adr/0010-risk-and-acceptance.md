# 风险与验收

## 三大风险与缓解

| 风险 | 缓解 |
|---|---|
| B2 弹出层卡住,阻塞 B3/B5 | B2 第一周先实现 `super-tooltip` 验证 Floating UI + 焦点陷阱 + 滚动锁定集成;若超过 3 天未完成,降级为"仅 dialog/drawer 模态,其余用 CSS Anchor Positioning polyfill" |
| 手绘风漂移 | ADR-0009 共享工具函数 + 视觉回归测试;每批合并前 review SuperButton 设计基线 |
| 9 维度契约执行疲劳 | CI 硬检查:`packages/components/<New>` 存在时,`packages/docs/components/<new>.md` 必须存在 |

## 验收标准

每批次完成时,必须满足:CI 通过(`typecheck` + `test` + `build` + `docs:build`)+ 视觉回归测试通过 + 抽样 review 1–2 个组件。拒绝"主观验收每个组件"(会疲劳)与"严格验收每组件对比图"(成本过高)。

## 启动时机

立即启动 B1(`tag/badge/avatar/card/divider/space`)。B1 全部是无交互/弱交互的展示类组件,风险最低,返工成本最小。
