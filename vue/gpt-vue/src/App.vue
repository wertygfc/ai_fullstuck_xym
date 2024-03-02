<script setup lang="ts">

</script>

<template>
  <!-- 懒加载，页面级别组件加载出来之前，显示点loading... -->
  <Suspense>
  <router-view />
  </Suspense>
</template>

<style scoped>
</style>
