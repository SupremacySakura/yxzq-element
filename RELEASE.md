# npm 发布指南

本仓库采用 pnpm workspace。主包 `yxzq-element` 在运行时依赖 `@yxzq-element/components`，后者依赖 `@yxzq-element/utils`，因此发布必须遵守依赖顺序。

## 发布范围

本次正式发布的包：

1. `@yxzq-element/utils`
2. `@yxzq-element/components`
3. `yxzq-element`（仓库中的 `packages/core`）

根 workspace、docs、play、React/Vue 示例和尚未实现的 hooks 都不发布。`@yxzq-element/theme` 是独立的可选包，应在主题契约完善后单独发布，不加入上述依赖链。

## 首次发布前准备

### 1. 账号、scope 与 2FA

- 确认 npm 账号拥有未加 scope 的 `yxzq-element` 包名，以及 `@yxzq-element` scope 下公开包的发布权限。
- 在 npm 账号中开启双因素认证，发布权限建议设置为“写入时需要 2FA”。
- 不要把 npm 密码、一次性验证码或长期 access token 写入仓库、shell 脚本或 GitHub Secrets 日志。

```bash
npm whoami
npm profile get
```

如果尚未登录，请通过 npm 官方 registry 登录：

```bash
npm login --registry=https://registry.npmjs.org/ --auth-type=web
```

### 2. 固定官方 registry

发布前必须确认当前 registry，避免把公开包误发到公司镜像或 GitHub Packages：

```bash
npm config get registry
```

预期结果：

```text
https://registry.npmjs.org/
```

如不一致，仅为当前 shell 指定官方 registry，或先修正本机 npm 配置：

```bash
export npm_config_registry=https://registry.npmjs.org/
```

### 3. 检查包名和版本

npm 的同一版本不能重复发布。首次操作前检查三个包的已有版本：

```bash
npm view @yxzq-element/utils versions --json
npm view @yxzq-element/components versions --json
npm view yxzq-element versions --json
```

如果包尚不存在，npm 可能返回 `E404`，这在首次发布时是预期结果。若版本已经存在，必须先生成更高的新版本，不能使用 `--force` 覆盖。

## 首次手工发布

### 1. 准备干净分支

从 `master` 的最新提交开始，确保工作区干净：

```bash
git switch master
git pull --ff-only
git status --short
pnpm install --frozen-lockfile
```

### 2. 生成统一版本

先审阅 `packages/docs/guide/changelog.md` 的“未发布”区段，确认本次发布包含的代码、组件、文档、示例、CI 与配置变更均已记录。确定版本号后，将这些条目归入对应的 `x.y.z` 版本区段；版本记录必须与版本号变更一起提交，不能在发布后补写，也不能把已发布内容继续留在“未发布”中。

三个依赖包使用统一版本。版本参数可以是语义化升级类型，也可以是明确版本号：

```bash
pnpm release:version <patch|minor|major|x.y.z>
```

例如从当前版本生成下一个补丁版本：

```bash
pnpm release:version patch
```

如果各 manifest 已经是首次计划发布的 `1.0.0`，不要重复执行 `pnpm release:version 1.0.0`：脚本会拒绝没有变化的版本。直接检查版本即可；需要改成其他首发版本时，再传入明确的 `x.y.z`。

该步骤完成后，检查根目录以及 `utils`、`components`、`core` 的版本和 workspace 依赖是否一致，审阅并提交版本变更。`release:publish` 会拒绝脏工作区：

```bash
git diff -- package.json packages/*/package.json
git add package.json packages/utils/package.json \
  packages/components/package.json packages/core/package.json
git commit -m "chore(release): v<版本>"
```

### 3. 完整验证并生成发布内容

```bash
pnpm release:prepare
```

`release:prepare` 是正式发布前的必要门禁，会完成类型检查、单元测试、库与示例构建、文档构建，在 `release-artifacts/` 生成三个 tarball 和 `manifest.json`，并验证文件、入口、README、LICENSE、registry、公开访问级别和发布后依赖。清单会记录当前 Git commit 与 SHA-512 完整性；正式发布只接受从当前干净提交生成的制品。不要绕过失败项，也不要依赖本机遗留的 `dist`。

### 4. 先 dry-run

在真正上传前先检查已经通过门禁的 tarball：

```bash
cat release-artifacts/manifest.json
tar -tzf release-artifacts/yxzq-element-utils-<版本>.tgz
tar -tzf release-artifacts/yxzq-element-components-<版本>.tgz
tar -tzf release-artifacts/yxzq-element-<版本>.tgz
```

还可以让 npm 对这三个成品包执行 dry-run：

```bash
npm publish release-artifacts/yxzq-element-utils-<版本>.tgz --dry-run --access public --registry=https://registry.npmjs.org/
npm publish release-artifacts/yxzq-element-components-<版本>.tgz --dry-run --access public --registry=https://registry.npmjs.org/
npm publish release-artifacts/yxzq-element-<版本>.tgz --dry-run --access public --registry=https://registry.npmjs.org/
```

确认 tarball 中包含 `dist`、声明文件、README、LICENSE，且不包含测试、示例或缓存目录。`release:prepare` 使用 pnpm 打包并把 `workspace:*` 转换为实际版本；正式发布必须使用这些经过验证的成品包。

### 5. 正式发布

本地发布命令带有显式确认门禁，并只接受 `latest` 或 `next` dist-tag：

```bash
CONFIRM_NPM_PUBLISH=yes pnpm release:publish <latest|next>
```

稳定版本使用：

```bash
CONFIRM_NPM_PUBLISH=yes pnpm release:publish latest
```

预发布版本使用：

```bash
CONFIRM_NPM_PUBLISH=yes pnpm release:publish next
```

发布脚本会强制稳定版本使用 `latest`，带 `-beta`、`-rc` 等后缀的预发布版本使用 `next`，避免版本与 dist-tag 误配。

脚本必须按以下顺序串行发布，并使用 `https://registry.npmjs.org/` 与公开访问级别：

```text
@yxzq-element/utils
        ↓
@yxzq-element/components
        ↓
yxzq-element
```

如果 npm 要求一次性验证码，可以只为本次命令注入：

```bash
NPM_CONFIG_OTP=<六位验证码> \
  CONFIRM_NPM_PUBLISH=yes \
  pnpm release:publish latest
```

不要在部分包发布成功后直接重跑并尝试覆盖相同版本。先用 `npm view <包名>@<版本> version` 核实实际状态。确认只有本次依赖链的前置包已经成功后，可以执行受保护的恢复模式：

```bash
ALLOW_ALREADY_PUBLISHED=yes \
  CONFIRM_NPM_PUBLISH=yes \
  pnpm release:publish <latest|next>
```

恢复模式不会盲目跳过已有版本：脚本会比较 npm registry 的 `dist.integrity` 与本次 tarball 的 SHA-512 完整性，只有完全一致才会继续发布剩余包。不一致时必须停止并生成新的补丁版本。

### 6. 发布后验证

```bash
npm view @yxzq-element/utils@<版本> version
npm view @yxzq-element/components@<版本> dependencies --json
npm view yxzq-element@<版本> dependencies --json
npm view yxzq-element dist-tags --json
```

建议再在一个空目录中安装主包，验证全量入口、按需入口和类型声明：

```bash
mkdir /tmp/yxzq-element-smoke
cd /tmp/yxzq-element-smoke
pnpm init
pnpm add yxzq-element@<版本>
```

确认无误后创建 `v<版本>` tag，并推送已经提交的版本变更与 tag：

```bash
git tag v<版本>
git push origin master
git push origin v<版本>
```

## 首次发布后配置 npm Trusted Publisher

npm Trusted Publishing 通过 GitHub Actions OIDC 发布，不需要长期 `NPM_TOKEN`。因为 npm 需要先存在对应包，三个包首次手工发布成功后，再分别到 npm 网站配置 Trusted Publisher。

每个包使用同一组 GitHub 配置：

| 配置项 | 值 |
| --- | --- |
| GitHub owner / organization | `SupremacySakura` |
| Repository | `yxzq-element` |
| Workflow filename | `release.yml` |
| GitHub Environment | `npm` |

需要分别配置：

- `@yxzq-element/utils`
- `@yxzq-element/components`
- `yxzq-element`

同时在 GitHub 仓库中创建名为 `npm` 的 Environment，将 deployment branches 强制限制为默认受保护分支，并建议启用 required reviewers。这个仓库外的限制不能省略：`workflow_dispatch` 本身允许选择 ref。`.github/workflows/release.yml` 的发布 job 必须使用该 environment，并具备：

```yaml
permissions:
  contents: read
  id-token: write
```

Trusted Publisher 生效后，不要再为该工作流配置长期 npm token。保留 2FA，用于账号登录和必要的本地应急发布。

## 后续一键发布

Trusted Publisher 配置完成后，常规发布从 GitHub Actions 发起：

1. 打开仓库的 **Actions** 页面。
2. 选择 **Publish to npm**（`.github/workflows/release.yml`）。
3. 点击 **Run workflow**。
4. 选择 `latest` 或 `next` npm tag。
5. 正常发布保持 **Skip versions that already exist** 关闭；只有核实过的部分发布恢复才开启。
6. 确认运行分支是默认分支，核对 `npm` Environment 审批信息并启动。

当前工作流发布的是仓库中已经提交的版本，不在 CI 内修改版本文件。运行工作流前，应先在本地执行 `pnpm release:version <...>`、审阅并提交版本变更，然后把该提交推送到默认分支。工作流会先在无 OIDC 权限的 `prepare` job 执行 `release:prepare` 并上传校验后的短期制品，再由受 `npm` Environment 保护、仅负责下载与发布的 job 获取 OIDC，按 `utils → components → core` 顺序发布。任何一步失败都会停止后续包发布；不要跳过验证后直接调用 registry。

## 发布故障处理

- `E403`：检查 scope 权限、2FA、Trusted Publisher 的 owner/repository/workflow/environment 是否完全匹配。
- `E404`：首次查询未发布包时可忽略；安装时出现则检查前置依赖包是否已发布。
- `EPUBLISHCONFLICT`：版本已存在，生成新版本；npm 不允许覆盖。
- registry 不正确：停止发布，修正为 `https://registry.npmjs.org/` 后重新 dry-run。
- 只发布了部分依赖链：不要删除已发布版本；逐包确认 registry 状态后，本地使用 `ALLOW_ALREADY_PUBLISHED=yes`，或在 Actions 中开启恢复选项。完整性不一致时发布统一的新补丁版本。
