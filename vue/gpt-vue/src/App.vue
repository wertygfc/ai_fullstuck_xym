<script setup lang="ts">

</script>

<template>
  <!-- 异步组件 没有加载出来之前  Suspense 显示占位 -->
  <!-- 懒加载，页面级别组件加载出来之前，显示点loading... -->
  <Suspense>
  <router-view />
  <template #fallback>
    Loading...
  </template>
  </Suspense>
</template>

<style scoped>
</style>
