<script setup lang="ts">
const handleClick = () => {
  window.alert("Vue 收到了原生 click 事件");
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
  </main>
</template>
