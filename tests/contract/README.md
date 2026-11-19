# 跨框架契约测试

这套测试用一个场景清单驱动三个真实 Vite 宿主,验证 36 个 `super-*` 组件在原生 HTML、Vue 与 React 中的注册、挂载、属性、事件、键盘、焦点、ARIA 与移动视口行为。

## 结构

- `manifest.ts`:唯一场景清单。每个组件声明最小挂载方式、`part` 与 58 个公开事件的归属。
- `parity.spec.ts`:三端挂载、事件绑定、冒泡、`composed` 与 `detail`。
- `interactions.spec.ts`:高风险交互,包括受控回滚、键盘、焦点恢复、弹层关闭、表单、上传与表格。
- `controlled*.spec.ts`:React 19 / Vue 受控状态回滚回归。
- `a11y.spec.ts`:axe-core 扫描,WCAG 2.2 AA 规则集。
- `mobile.spec.ts`:390–412px 视口下的页面横向溢出、Dialog/Drawer、Select 弹层与 Notification。
- `multi-instance.spec.ts`:每个组件同时挂载两个实例,验证事件监听、Shadow Root 内 id 唯一性、Breadcrumb 24px 命中区域与双实例 axe。
- `declarations.test.ts` / `tests/types/`:Vue、React 与原生 `HTMLElementTagNameMap` 类型夹具。

宿主页:

- `packages/play/contract.html`
- `examples/vue/contract.html`
- `examples/react/contract.html`

三个宿主在 `SUPER_CONTRACT_SOURCE=1` 时通过 `vite.source-aliases.ts` 直接读取 workspace 源码,不依赖 `dist`。

宿主页支持 `?tag=<super-tag>&count=<n>`;`count` 默认 1,用于多实例回归。debug API 仍以第一个实例为主,但事件记录器会收集全部实例冒泡到宿主的公开事件。

## 命令

```bash
# Chromium 全量(PR 门禁)
pnpm test:contract

# Firefox / WebKit 高风险集
pnpm test:contract:cross-browser

# 移动视口
pnpm exec playwright test -c playwright.contract.config.ts --project=html-mobile

# 双实例
pnpm exec playwright test -c playwright.contract.config.ts tests/contract/multi-instance.spec.ts

# 已发布 npm 包的独立产物烟测
pnpm smoke:npm <version>

# 类型夹具
pnpm typecheck
```

Playwright 会启动三个 Vite 服务(端口 5200–5202),需要本地端口权限。

## 新增组件或事件

1. 在 `manifest.ts` 增加组件条目,填入真实可挂载的最小属性/子节点。
2. 把所有公开事件加入该组件的 `events`,确保事件名、归属组件与文档一致。
3. 若组件属于高风险交互,在 `interactions.spec.ts` 增加键盘/焦点/受控回归。
4. 更新 `tests/types/html-contract.ts`、`examples/vue/src/contract-types.vue`、`examples/react/src/contract-types.tsx`。
5. 运行 `pnpm test:contract` 与 `pnpm smoke:npm <version>`。

## 边界

- Chromium 跑全量与 axe;Firefox/WebKit 先覆盖高风险交互,不是全量矩阵。
- macOS 上 Safari/WebKit 默认只接受 `Option+Tab` 在控件间移动焦点;交互测试在 darwin WebKit 中使用 `Alt+Tab` 模拟该平台策略,Linux CI 仍使用 `Tab`。
- Firefox 高风险矩阵应在 Linux CI 或可正常启动 Firefox 的主机执行;当前 macOS 开发机受浏览器启动与沙箱限制,未把启动失败记为测试通过。
- 视觉基线以 Linux Chromium 为权威;macOS 本地快照不能替代 CI 基线。
- SSR/hydration 不在本套契约内。
- npm 烟测只验证产物注册与挂载;框架源码行为由三个 Vite 宿主覆盖。
