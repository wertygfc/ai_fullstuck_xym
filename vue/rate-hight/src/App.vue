<script setup>
import Rate from "./components/Rate.vue";
import { ref } from "vue";
const score = ref(1);
// vue 开发思想 数据与界面状态同步
const update = (num) => {
  score.value = num;
}
// 接受子组件的更新请求

</script>

<template>
  <div>
    <Rate :value = "score" theme = "red" @update-rate = 'update' />
    <!-- <Rate :value = "score"  /> -->
  </div>
</template>

<style scoped>
</style>
