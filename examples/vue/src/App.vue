<script setup lang="ts">
const handleClick = () => {
  window.alert("Vue 收到了原生 click 事件");
};
</script>

<template>
  <main>
    <h1>Vue 消费示例</h1>
    <super-button @click="handleClick">自定义按钮内容</super-button>
  </main>
</template>
