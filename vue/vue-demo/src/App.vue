<script setup>
import {ref} from 'vue'
// 数据绑定 -> 响应式
let name = 'cyy'
let count = ref(0)
setTimeout(() => {
  name = 'yy'
  count.value++
},6000)

const addCount = () => {
  count.value++
}

const todos = ref([])

;(async function (){
  const list = await fetch('https://ztj8kh.laf.run/get-list');
  const { data } = await list.json()
  todos.value = data
  console.log(data);
})()

</script>

<template>
<div>
  点击了{{ count }}次
  <button type="button" @click="addCount">点击</button>
  <span class="sm">{{ name }}</span>你好世界
  <div v-if="todos.length === 0">没有todos</div>
  <ul>
    <li v-for="todo in todos">{{ todo.txt }}</li>
  </ul>
</div>
</template>

<style scoped>
.sm{
  font-size: 20px;
  font-weight: bold;
  color: red;
}
</style>
