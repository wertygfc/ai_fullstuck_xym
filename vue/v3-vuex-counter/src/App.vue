<script setup>
// 模块化
// import Counter from "./components/Counter.vue";
// import TodoList from './components/TodoList.vue'
import Banner from './components/Banner.vue'
</script>

<template>
  <!-- 挂载Counter组件，方便复用和管理  -->
  <!-- 组件也是个类，所有开头要大写，标签都是小写 -->
  <!-- <Counter /> -->
  <!-- <TodoList /> -->
  <h1>推荐</h1>
  <Banner :per-page="3" />
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
</style>
