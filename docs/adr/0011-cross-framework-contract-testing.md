# 跨框架契约测试:一份清单,三个真实宿主

组件库的框架无关性不能靠单元测试证明。真正需要验证的是:同一个 `super-*` 标签在原生 HTML、Vue 与 React 中都能注册、挂载、接收 property/attribute、派发可冒泡且可跨 Shadow DOM 的事件,并在键盘、焦点、ARIA 与移动视口下保持可用。

采用以下结构:

1. `tests/contract/manifest.ts` 是唯一场景清单,列出 36 个组件、它们的最小挂载方式,以及 58 个公开事件各自的归属组件。
2. `packages/play`、`examples/vue`、`examples/react` 各自提供真实的 Vite 宿主页 `contract.html`。Vue 与 React 宿主通过框架模板/JSX 渲染,不使用伪造的适配层。
3. Playwright 以同一份清单驱动三个宿主。Chromium 跑全量 parity、交互、axe 与移动视口;Firefox/WebKit 作为高风险交互的分层验证。
4. `SUPER_CONTRACT_SOURCE=1` 让三个宿主指向 workspace 源码,保证测试不依赖先前构建的 `dist`。
5. 已发布的 npm 包另做独立烟测,避免"源码通过、产物损坏"的假阳性。

## Considered Options

- **只写组件单元测试**:拒绝。jsdom 无法覆盖真实 Vite 编译、Vue 模板 `isCustomElement`、React 19 自定义元素 property 写入和浏览器事件组成。
- **维护三套手工测试页**:拒绝。36 个组件的场景与 58 个事件会持续漂移,清单必须单一来源。
- **所有浏览器全量跑三端**:暂不采用。Firefox/WebKit 先覆盖高风险交互,待稳定性与耗时可控后再扩展。

## Consequences

- 新增或修改组件时,必须同步更新清单与事件归属,否则契约测试会失败。
- Chromium 全量契约与 axe 是 PR 门禁;Firefox/WebKit 结果必须有可复现的运行命令。
- 测试失败产物(`playwright-report/contract`、`test-results`)在 CI 中必须作为 artifact 保留。
- 视觉基线以 Linux Chromium 为权威;其他系统的本地快照不能替代 CI 基线。
