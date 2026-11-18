# 组件清单:24 个新增 + 9 个现有 = 33 个

在 ADR-0001 的"约 30 个核心集"约束下,确定新增 24 个组件。明确**不做**的组件:`super-textarea`(并入 `SuperInput` 的 `multiline`)、`super-row`/`super-col`(由 `super-grid` 取代)、`super-container`(布局应交给消费者 CSS)。

## 数据展示(7)

`super-table` `super-tag` `super-badge` `super-avatar` `super-card` `super-empty` `super-skeleton`

## 反馈(8)

`super-dialog` `super-drawer` `super-message` `super-notification` `super-popover` `super-tooltip` `super-popconfirm` `super-progress`

## 导航(6)

`super-tabs` `super-menu` `super-breadcrumb` `super-pagination` `super-steps` `super-dropdown`

## 表单(4)

`super-slider` `super-rate` `super-upload` `super-autocomplete`

## 布局(2)

`super-divider` `super-space`

## Consequences

- 后续工作量预估按 24 个组件 × ADR-0003 的 9 维度契约计算。
- 任何"再加一个组件"的提议都必须在 `未发布` changelog 与本文档中同步登记。
