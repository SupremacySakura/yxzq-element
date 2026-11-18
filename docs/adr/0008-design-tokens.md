# 设计令牌:共享 token 层

在 `packages/theme` 中定义共享设计令牌(`--super-color-primary` / `--super-spacing-md` / `--super-radius-sm` / `--super-paper-texture` / `--super-sketch-width` 等),组件级变量映射到令牌。用户定制主题时只需覆盖 ~20 个核心令牌,而非 24 × N 个组件变量。

## Considered Options

- **每组件独立定义变量**:拒绝。24 个组件 × N 个变量 = 定制主题的噩梦,且无法保证视觉一致性。

## Consequences

- 现有 9 个组件需要在各自批次开始前逐步迁移到共享令牌(非破坏性:组件变量仍保留,只是默认值改为 `var(--super-token)`)。
- 手绘风的核心令牌必须包含:纸张颜色、描边粗细、手绘抖度、阴影深度。
