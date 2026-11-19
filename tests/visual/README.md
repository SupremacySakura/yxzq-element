# 视觉回归测试

手绘风是本库的核心识别特征，24 个组件跨批次实现时最容易发生视觉漂移。这里用 Playwright 对组件渲染结果做截图对比，作为 ADR-0009 的最后一道防线。

## 运行

```bash
pnpm test:visual          # 对比现有基线
pnpm test:visual:update   # 手绘风有意变更后刷新基线
```

首次运行前需安装浏览器：`pnpm exec playwright install chromium`。

快照文件名包含操作系统后缀（例如 `-chromium-darwin` 与 `-chromium-linux`）。仓库同时维护
Linux 与 macOS Chromium 基线：CI 使用 Linux 基线并阻塞视觉回归，macOS 基线供本地开发对比。
在 CI 所用系统上刷新基线时执行 `pnpm test:visual:update`，并提交对应平台的快照。

## 约定

- 只对比"风格词汇"（描边、圆角抖动、阴影、纸张质感），不对文案或数据内容做断言。
- 基线文件存放在 `tests/visual/__snapshots__/`，必须随组件变更一起提交。
- 新增组件批次时，为该批次的代表性组合补一条用例。
