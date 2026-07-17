<script setup lang="ts">
const selectedTopics = ["sketch", "travel"];

const handleClick = () => {
  window.alert("Vue 收到了原生 click 事件");
};

const handleSelectChange = (event: Event) => {
  const detail = (event as CustomEvent<{ values: string[] }>).detail;
  window.alert(`Vue 收到选择结果：${detail.values.join("、")}`);
};
</script>

<template>
  <main>
    <h1>Vue 消费示例</h1>
    <super-button variant="warning" size="large" @click="handleClick">
      <span slot="prefix" aria-hidden="true">☆</span>
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
    <section class="select-demo" aria-labelledby="select-title">
      <div>
        <h2 id="select-title">手绘标签筛选</h2>
        <p>可搜索、多选，并直接使用原生 option / optgroup。</p>
      </div>
      <super-select
        multiple
        searchable
        clearable
        :value="selectedTopics"
        name="topics"
        placeholder="选择兴趣标签"
        search-placeholder="搜索标签"
        aria-label="兴趣标签"
        @super-select-change="handleSelectChange"
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
</template>
