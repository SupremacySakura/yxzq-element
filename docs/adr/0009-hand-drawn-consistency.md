# 手绘风一致性:共享工具函数 + 视觉回归测试

在 `packages/utils` 中提取共享"手绘工具函数"(`handDrawnBorder()` / `paperTexture()` / `sketchyShadow()` 等),所有组件复用;引入 Playwright 视觉回归测试,防止无意漂移。

## Considered Options

- **口头约定 + 每批 review**:拒绝。35 天跨度上不可靠。
- **仅共享工具函数,无视觉回归**:可降级方案。如果 Playwright 基础设施成本过高,则退到此方案。

## Consequences

- `packages/utils` 新增 `sketch.ts` 模块。
- 根目录新增 `playwright.config.ts` 与 `tests/visual/` 目录。
- CI 新增视觉回归 job,截图基线存储在 `tests/visual/__snapshots__/`。
