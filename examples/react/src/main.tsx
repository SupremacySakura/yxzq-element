import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "yxzq-element";
import "./style.css";

function App() {
  return (
    <main>
      <h1>React 消费示例</h1>
      <super-button
        variant="success"
        shape="pill"
        onClick={() => window.alert("React 收到了原生 click 事件")}
      >
        <span slot="prefix" aria-hidden="true">✓</span>
        自定义按钮内容
      </super-button>
      <super-input
        type="search"
        placeholder="搜索关键词"
        clearable
        aria-label="搜索关键词"
      >
        <span slot="suffix" aria-hidden="true">⌕</span>
      </super-input>
      <section aria-labelledby="selector-title">
        <h2 id="selector-title">选择器套装</h2>
        <super-checkbox checked>接收更新通知</super-checkbox>
        <fieldset>
          <legend>版本</legend>
          <super-radio name="plan" value="standard" checked>
            标准版
          </super-radio>
          <super-radio name="plan" value="advanced">
            高级版
          </super-radio>
        </fieldset>
        <super-switch checked aria-label="自动同步">
          自动同步
        </super-switch>
      </section>
    </main>
  );
}

const root = document.getElementById("root");

if (!root) {
  throw new Error("Missing #root element");
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
