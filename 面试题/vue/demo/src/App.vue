<template>
  <div class="hd">
    <input type="text" v-model="msg">
    <button @click="add">添加</button>
  </div>

  <Child  :list="list" />
</template>

<script setup>
import { ref } from 'vue';
import Child from './components/Child.vue'
const message = ref('')
const msg = ref('')

const add = () => {
  MessageChannel.value = message
}

</script>

<style lang="css" scoped>
.hd input{
  width: 200px;
  padding: 10px 0;
  font-size: 20px;
}
.hd button{
  padding: 10px 20px;
  font-size: 20px;
}
</style>