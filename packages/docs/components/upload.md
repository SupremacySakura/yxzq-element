# Upload 上传

一套手绘风文件选择与拖放区域。组件只负责选择、筛选和文件列表管理，不自行发起网络请求。

<div class="upload-note">
  <span aria-hidden="true">⇧</span>
  <strong>上传提示</strong>
  <span>选择完成后由 <code>super-upload-change</code> 提供新的 <code>fileList</code>；开启 <code>auto-upload</code> 时还会派发 <code>super-upload-submit</code>，真正的上传请求由消费者处理。</span>
</div>

## 注册

```ts
import "yxzq-element/upload";

// SSR 或自定义注册时机
import { defineSuperUpload } from "yxzq-element/define";
defineSuperUpload();
```

## 基础用法

<div class="upload-board upload-basic-grid">
  <super-upload aria-label="上传附件"></super-upload>
  <super-upload multiple accept="image/*" aria-label="上传图片"></super-upload>
  <super-upload disabled aria-label="禁用的上传区域"></super-upload>
</div>

```html
<super-upload aria-label="上传附件"></super-upload>
<super-upload multiple accept="image/*" aria-label="上传图片"></super-upload>
<super-upload disabled aria-label="禁用的上传区域"></super-upload>
```

```ts
const upload = document.querySelector("super-upload");
upload.addEventListener("super-upload-change", (event) => {
  upload.fileList = event.detail.fileList;
});
```

## 自定义触发内容

默认 Slot 替换选择区域的提示内容。它只负责展示，点击和键盘触发仍由整个区域管理。

<div class="upload-board upload-custom-grid">
  <super-upload aria-label="上传简历">
    <span class="upload-custom-icon" aria-hidden="true">⇧</span>
    <strong>上传简历</strong>
    <span class="upload-custom-hint">支持 PDF、DOCX，单个文件不超过 5 MB</span>
  </super-upload>
  <super-upload multiple aria-label="上传素材">
    <span class="upload-custom-icon" aria-hidden="true">▣</span>
    <strong>拖入设计素材</strong>
    <span class="upload-custom-hint">也可以点击这里选择多个文件</span>
  </super-upload>
</div>

```html
<super-upload aria-label="上传简历">
  <upload-icon aria-hidden="true"></upload-icon>
  <strong>上传简历</strong>
  <span>支持 PDF、DOCX，单个文件不超过 5 MB</span>
</super-upload>
```

## 数量与大小限制

`max-count` 以当前 `fileList` 为基准限制总数；`max-size` 以字节为单位。被拒绝的文件不会进入列表，并通过 `super-upload-exceed` 报告原因。

<div class="upload-board upload-limit-grid">
  <super-upload id="upload-limited-demo" multiple max-count="3" max-size="204800" auto-upload aria-label="上传最多三个文件"></super-upload>
</div>

```html
<super-upload
  multiple
  max-count="3"
  max-size="204800"
  auto-upload
  aria-label="上传最多三个文件"
></super-upload>
```

```ts
upload.addEventListener("super-upload-exceed", (event) => {
  console.log(event.detail.reason); // "max-count" | "max-size"
  console.log(event.detail.files);
});

upload.addEventListener("super-upload-submit", async (event) => {
  const body = new FormData();
  event.detail.files.forEach((file) => body.append("files", file));
  await fetch("/api/upload", { method: "POST", body });
});
```

## 尺寸与校验状态

<div class="upload-board upload-size-grid">
  <div class="upload-size-row"><strong>大</strong><super-upload size="large" aria-label="大号上传"></super-upload></div>
  <div class="upload-size-row"><strong>中</strong><super-upload size="medium" aria-label="中号上传"></super-upload></div>
  <div class="upload-size-row"><strong>小</strong><super-upload size="small" aria-label="小号上传"></super-upload></div>
</div>

<div class="upload-board upload-validation-grid">
  <super-upload validation="success" aria-label="成功状态"></super-upload>
  <super-upload validation="warning" aria-label="警告状态"></super-upload>
  <super-upload validation="error" aria-label="错误状态"></super-upload>
  <super-upload validation="info" aria-label="信息状态"></super-upload>
</div>

## 文件列表与移除

`fileList` 是 JavaScript 属性，不会从 HTML 属性反序列化。每项支持内置移除按钮，并会派发包含被移除文件和剩余列表的事件。只读 `value` 是派生视图，按 `fileList` 顺序返回文件名 `string[]`；修改文件必须写入 `fileList`。

```ts
const upload = document.querySelector("super-upload");
upload.fileList = [existingFile];

upload.addEventListener("super-upload-remove", (event) => {
  upload.fileList = event.detail.fileList;
});
```

## 键盘与无障碍

整个选择区域是一个可聚焦的 `role="button"`，内部原生文件输入使用 `hidden`。`Enter` 与 `Space` 打开原生文件选择器；`Tab` 可进入文件列表中的移除按钮。禁用时区域离开 Tab 序列，并设置 `aria-disabled="true"`。

| 操作 | 行为 |
| --- | --- |
| `Enter` / `Space` | 打开文件选择器 |
| 拖放文件 | 在区域上松开后加入列表 |
| `Tab` | 在区域与移除按钮间移动焦点 |

## API

### Attributes / Properties

| 名称 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `accept` | `string` | 空字符串 | 原生 accept 规则，支持扩展名、MIME 和 `type/*` |
| `multiple` | `boolean` | `false` | 为 `false` 时每次选择替换当前文件；为 `true` 时允许选择多个文件并追加到列表 |
| `disabled` | `boolean` | `false` | 禁用选择、拖放与移除 |
| `max-count` | `number` | 不限制 | 文件列表最大数量 |
| `max-size` | `number` | 不限制 | 单文件最大字节数 |
| `auto-upload` | `boolean` | `false` | 选择成功后额外派发提交事件 |
| `fileList` | `File[]` | `[]` | 当前文件列表，仅支持 JS property |
| `value` | `string[]` | `[]` | 只读派生视图，按 `fileList` 顺序返回文件名；写入入口是 `fileList` |
| `size` | `large \| medium \| small` | `medium` | 尺寸 |
| `validation` | `none \| success \| warning \| error \| info` | `none` | 校验状态 |
| `prompt-text` | `string` | `选择文件` | 默认提示标题 |
| `hint-text` | `string` | `或将文件拖到这里` | 默认提示说明 |
| `remove-label` | `string` | `移除文件` | 移除按钮的可访问名称前缀 |
| `aria-label` | `string` | `上传文件` | 选择区域与文件列表的可访问名称 |

### Events

| 名称 | Detail | 说明 |
| --- | --- | --- |
| `super-upload-change` | `{ fileList: File[] }` | 文件成功加入列表后派发 |
| `super-upload-submit` | `{ files: File[] }` | `auto-upload` 为真时，与本次加入的文件一起派发 |
| `super-upload-remove` | `{ file: File, fileList: File[] }` | 用户移除文件后派发 |
| `super-upload-exceed` | `{ files: File[], reason: "max-count" \| "max-size" }` | 文件超出数量或大小时派发 |

所有事件均为 `bubbles: true`、`composed: true`。程序化修改 `fileList` 不会派发用户事件。

### Slots

| 名称 | 说明 |
| --- | --- |
| 默认 Slot | 选择区域的提示内容 |

### CSS Parts

| 名称 | 说明 |
| --- | --- |
| `wrapper` | 外层容器 |
| `dropzone` / `trigger` | 可选择、可拖放的触发区域 |
| `prompt` | 默认提示内容容器 |
| `input` | 隐藏的原生文件输入 |
| `file-list` | 文件列表 |
| `file` | 单个文件项 |
| `file-name` | 文件名 |
| `file-size` | 文件大小 |
| `remove-button` | 移除按钮 |

### CSS Custom Properties

```css
super-upload {
  --super-upload-width: 360px;
  --super-upload-min-height: 152px;
  --super-upload-padding: var(--super-spacing-lg);
  --super-upload-color: var(--super-text-color-primary);
  --super-upload-background: var(--super-background-color);
  --super-upload-border-color: var(--super-border-color);
  --super-upload-hover-color: var(--super-color-primary);
  --super-upload-focus-color: var(--super-focus-color);
  --super-upload-shadow-color: var(--super-sketch-shadow);
  --super-upload-rotation: var(--super-sketch-rotation);
}
```

## 已知边界

`super-upload` 不发起网络请求，也不是 form-associated Custom Element；`fileList` 不参与 `FormData`、原生表单重置或外部约束验证。上传进度、取消、重试和并发控制由消费者应用实现。拖放在不支持 DataTransfer 的测试或运行环境中会得到空文件列表。

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  document.querySelectorAll("super-upload").forEach((upload) => {
    upload.addEventListener("super-upload-change", (event) => {
      upload.fileList = event.detail.fileList;
    });
    upload.addEventListener("super-upload-remove", (event) => {
      upload.fileList = event.detail.fileList;
    });
  });
});
</script>

<style>
.upload-note {
  display: grid;
  grid-template-columns: auto auto 1fr;
  gap: 0.75rem;
  align-items: center;
  margin: 1.5rem 0 2rem;
  padding: 0.85rem 1rem;
  color: #3f352b;
  background: #fffaf0;
  border: 1.5px dashed #9a7b57;
  border-radius: 12px 8px 11px 9px;
}

.upload-note > span:first-child {
  color: #4b87f5;
  font-size: 1.35rem;
}

.upload-board {
  margin: 1rem 0 1.5rem;
  padding: 1.5rem;
  color: #292524;
  background: #fffef9;
  border: 2px solid #292524;
  border-radius: 9px 13px 8px 11px / 11px 8px 12px 9px;
  box-shadow: 4px 4px 0 #292524;
}

.upload-basic-grid,
.upload-custom-grid,
.upload-validation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}

.upload-custom-grid super-upload {
  --super-upload-width: 100%;
}

.upload-custom-icon {
  color: #4b87f5;
  font-size: 1.75rem;
  line-height: 1;
}

.upload-custom-hint {
  color: #6b6360;
  font-size: 0.82em;
}

.upload-limit-grid super-upload {
  --super-upload-width: 100%;
}

.upload-size-grid {
  display: grid;
  gap: 1.25rem;
}

.upload-size-row {
  display: grid;
  grid-template-columns: 2rem minmax(0, 1fr);
  gap: 1rem;
  align-items: start;
}

.upload-size-row super-upload {
  --super-upload-width: 100%;
}

html.dark .upload-note,
html.dark .upload-board {
  color: #292524;
}

@media (max-width: 720px) {
  .upload-board {
    padding: 1rem;
  }

  .upload-note {
    grid-template-columns: auto 1fr;
  }

  .upload-note > span:last-child {
    grid-column: 1 / -1;
  }
}
</style>
