# 仓库开发流程指引

本文档是本仓库所有开发工作的必读流程。修改组件、公共类型、示例、文档、构建配置、CI 或发布配置前，必须先完整阅读本文档和根目录的 [`AGENTS.md`](../AGENTS.md)。

## 1. 基本原则

- 组件库运行时只使用 Lit 和标准 Web Components，不在 `packages/components`、`packages/core` 或 `packages/utils` 中引入 Vue、React 适配代码。
- 新组件、公共 API、交互和视觉设计必须得到项目所有者明确授权；不要自行扩展产品范围。
- Custom Element 标签、元素类、CSS 变量和自定义事件分别使用 `super-*`、`Super*`、`--super-*` 和 `super-*` 命名。
- 组件新增或修改必须同步处理实现、测试、公共入口、类型声明、示例、组件文档和版本变更记录，不能把这些工作留给后续提交。
- 每一次仓库变更都必须更新 [`packages/docs/guide/changelog.md`](../packages/docs/guide/changelog.md) 的“未发布”区段，包括仅修改文档、CI 或配置的变更。
- 开始编辑前先执行 `git status --short`，辨认并保留工作区中已有的用户改动，不覆盖无关内容。

## 2. 开发前判断变更范围

先确认本次工作属于哪一类，并执行对应流程：

| 变更类型 | 必须同步检查的内容 |
| --- | --- |
| 新增组件 | 实现、导出与注册、包子路径、全局元素类型、单元测试、Vue/React 类型文件、三个消费示例、组件文档、导航、版本记录 |
| 修改组件公共契约 | 实现、测试、导出类型、Vue/React 类型文件、API 表、示例、版本记录；有破坏性变更时必须显著标注 |
| 修改组件样式或交互 | 视觉/交互回归测试、CSS Parts 与变量文档、相关示例、版本记录；必要时进行真实浏览器检查 |
| 内部重构或缺陷修复 | 定向回归测试、受影响的说明或限制、版本记录；不得无意改变公共契约 |
| 文档、示例、CI 或配置 | 受影响的构建/检查、相关交叉链接、版本记录 |
| 发布 | 版本记录定稿、版本号与包依赖同步、完整门禁，以及根目录 [`RELEASE.md`](../RELEASE.md) 的发布步骤 |

如果变更跨越多类，取所有相关要求的并集。

## 3. 新增组件流程

只有在项目所有者明确要求新增组件后，才可以执行本流程。

1. 在 `packages/components/<Component>/` 中创建 Lit 实现、组件入口和单元测试，导出公共属性类型、自定义事件 detail 类型及定义函数。
2. 更新 `packages/components/index.ts`、`packages/components/package.json` 的组件子路径导出和 `packages/components/tsconfig.build.json` 的显式 include，并补齐 `HTMLElementTagNameMap`、`HTMLElementEventMap` 等全局 Web Component 类型映射。
3. 新建对应的 `packages/core/<component>.ts` 注册入口，更新 `packages/core/components.ts` 和 `packages/core/tsconfig.build.json`；核对 `packages/core/define.ts` 与 `packages/core/index.ts` 的实际导出结果。
4. 更新 `packages/core/package.json` 的 `exports` 与 `sideEffects`，确保全量导入、按需导入和显式注册均符合契约且可重复执行。
5. 更新 `examples/vue/src/custom-elements.d.ts`：添加短横线标签、全部公开属性、事件及其 `CustomEvent.detail`，并保留真实元素实例类型以支持模板 `ref`。
6. 更新 `examples/react/src/custom-elements.d.ts`：添加对应 `JSX.IntrinsicElements` 标签、全部公开属性、自定义事件和真实元素实例类型。
7. 同步 `packages/play`、`examples/vue` 与 `examples/react` 中的真实使用、事件处理和必要样式，并更新各示例的组件清单；验证原生 HTML、Vue 和 React 的消费方式，框架示例仍使用小写 `super-*` 标签。
8. 新增 `packages/docs/components/<component>.md`，覆盖注册方式、示例、属性、事件、Slot、CSS Parts、CSS 变量、无障碍和已知边界，并将页面加入 VitePress 导航或侧边栏。
9. 同步开始使用文档和组件清单；若首页能力描述、公共入口或安装方式受影响，再同步 `packages/docs/index.md`、根 `README.md`、`packages/components/README.md` 与 `packages/core/README.md`。
10. 若测试开始导入新的内部 workspace 包，同步 `vitest.config.ts` 的源码 alias，保证全新检出不依赖 `dist` 也能先运行测试。
11. 在版本变更页“未发布”区段记录新增内容，然后执行第 7 节的完整验证。

## 4. 修改已有组件流程

1. 先用失败的回归测试或可复现步骤固定预期，再修改组件实现。
2. 每次修改组件都必须核对两个框架类型文件和对应组件文档，并检查公共属性、方法、事件名、事件 detail、Slot、Part、CSS 变量、键盘操作、焦点和无障碍语义是否发生变化。
3. 只要公共契约或用户可见行为有新增、删除、重命名或类型变化，就必须在同一变更中同步：
   - 组件导出的 TypeScript 类型和全局元素映射；
   - `examples/vue/src/custom-elements.d.ts`；
   - `examples/react/src/custom-elements.d.ts`；
   - 对应组件文档的 API、事件和示例；
   - 受影响的原生、Vue 与 React 示例。
4. 若仅改变样式，也要检查公开 CSS 变量与 Parts 是否仍准确，并在组件文档中说明用户可见变化；若确认类型契约未变，则不为制造差异而改写类型文件，但必须在评审清单中完成核对。
5. 在版本变更页“未发布”区段写明用户能感知的结果和受影响组件，避免只写“优化”或“若干修复”。

## 5. 类型文件同步规则

Vue 和 React 类型文件是对外消费契约的一部分，不是可选示例。

- Vue：维护 `examples/vue/src/custom-elements.d.ts` 中的 `GlobalComponents`、元素属性、事件回调和元素实例类型。
- React：维护 `examples/react/src/custom-elements.d.ts` 中的 `JSX.IntrinsicElements`、属性、事件回调和元素实例类型。
- 类型必须覆盖组件文档 API 表中的全部公开属性，并使用库公开子路径导出的类型，减少重复定义和漂移。
- 新增或修改自定义事件时，必须同时核对事件是否 `bubbles: true`、`composed: true`，以及两个框架类型文件中的 `CustomEvent.detail`。
- 修改类型后至少运行根目录 `pnpm typecheck`；涉及框架模板或 JSX 时，还要确保 Vue 与 React 示例构建成功。

## 6. 版本变更记录规则

版本页位于 [`packages/docs/guide/changelog.md`](../packages/docs/guide/changelog.md)。

1. 每次变更都在“未发布”中添加一条记录，按“新增”“变更”“修复”“文档与开发体验”“破坏性变更”等类别归档。
2. 记录应描述对使用者或维护者的影响，并点明组件或模块；不要罗列文件名，也不要使用“其他调整”“若干优化”等含糊表述。
3. 同一项工作只写一条完整记录；后续补充应更新原条目，避免按提交机械堆叠。
4. 发布时把本次内容从“未发布”移动到 `x.y.z` 版本区段，核对 Git tag 和实际发布包；无法验证发布日期时不要猜测。
5. 已发布版本原则上不可改写；只有纠正事实错误时可以修改，并在当前“未发布”区段说明更正。
6. 破坏性变更必须单独列出迁移方法，不能只隐藏在普通“变更”条目中。

## 7. 验证顺序

从仓库根目录依次执行：

```bash
pnpm typecheck
pnpm test
pnpm build
pnpm docs:build
```

- `pnpm test` 必须能在没有任何残留 `dist` 的全新检出中直接运行，不得依赖先构建库。
- 视觉、响应式、键盘、焦点、弹层或 Shadow DOM 交互发生变化时，还要在真实浏览器中检查相关文档或示例；仅通过编译不代表完成。
- 文档或配置变更至少执行其直接相关的检查；只要涉及组件、公共类型或注册入口，就执行上述四项完整门禁。
- 交付前执行 `git diff --check`，并再次检查 `git status --short`，确认没有生成的 `dist`、VitePress 缓存或输出被纳入提交。

## 8. 完成定义

提交评审前逐项确认：

- [ ] 已阅读本流程和 `AGENTS.md`，且变更得到必要授权。
- [ ] 实现遵守架构、命名、Shadow DOM、Slot、事件和无障碍约束。
- [ ] 新行为或缺陷有直接测试覆盖。
- [ ] 公共导出、注册入口、包子路径和全局元素类型已同步。
- [ ] Vue 与 React 类型文件已与组件公共契约同步。
- [ ] 原生 HTML、Vue、React 示例已按影响范围更新并验证。
- [ ] 对应组件文档、API 表、导航和开始使用说明已更新。
- [ ] 版本变更页“未发布”区段已记录本次变更。
- [ ] 必要验证已通过，真实页面在相关场景中能正确显示和交互。
- [ ] 未提交构建产物、缓存、密钥或与任务无关的文件。

只有以上相关项全部完成，组件新增或修改才算完成。
