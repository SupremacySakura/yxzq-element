import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "yxzq-element";
import "./style.css";

function App() {
  const handleSelectChange = (
    event: CustomEvent<{ values: string[] }>,
  ) => {
    window.alert(`React 收到选择结果：${event.detail.values.join("、")}`);
  };

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
      <section className="select-demo" aria-labelledby="select-title">
        <div>
          <h2 id="select-title">手绘标签筛选</h2>
          <p>可搜索、多选，并直接使用原生 option / optgroup。</p>
        </div>
        <super-select
          multiple
          searchable
          clearable
          value={["sketch", "travel"]}
          name="topics"
          placeholder="选择兴趣标签"
          search-placeholder="搜索标签"
          aria-label="兴趣标签"
          onsuper-select-change={handleSelectChange}
        >
          <span slot="prefix" aria-hidden="true">☆</span>
          <optgroup label="创作">
            <option value="sketch">手绘</option>
            <option value="photo">摄影</option>
          </optgroup>
          <optgroup label="生活">
            <option value="travel">旅行</option>
            <option value="music">音乐</option>
          </optgroup>
        </super-select>
      </section>
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
