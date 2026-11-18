# 批次计划:5 批流水线推进

24 个新组件按 5 批推进。每批 4–6 个,批间串行,批内并行;B(n) 实现时 B(n+1) 并行设计 API(流水线模式)。批次按"复用度 + 使用频率"排序,前一批产出会被后一批复用。

## 批次

- **B1 基础设施**:`super-tag` `super-badge` `super-avatar` `super-card` `super-divider` `super-space`
- **B2 反馈骨架**:`super-tooltip` `super-popover` `super-dialog` `super-drawer` `super-message`
- **B3 反馈收尾 + 展示**:`super-popconfirm` `super-notification` `super-progress` `super-empty` `super-skeleton`
- **B4 表单 + 导航基础**:`super-slider` `super-rate` `super-upload` `super-tabs` `super-breadcrumb` `super-pagination`
- **B5 重头**:`super-table` `super-menu` `super-steps` `super-dropdown` `super-autocomplete`

## Considered Options

- **严格串行**:拒绝。总时长 ~50 天,过长。
- **多 agent 并行同批**:拒绝。`index.ts` / `components.ts` / `changelog.md` 是共享热点文件,并行会高频冲突。

## Consequences

- 预计总时长 35 天(流水线模式)。
- 任何"跳到 B5 先做 table"的提议都违反依赖方向:`table` 依赖 `empty` / `skeleton` / `pagination`。
