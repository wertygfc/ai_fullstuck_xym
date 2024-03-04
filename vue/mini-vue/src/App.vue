<template>
  <div>
    <p>{{ state.count }}</p>
    <button @click="state.count++">add</button>
  </div>
</template>

<script setup>
import { reactive, effect, watch, watchEffect } from 'vue';

const state = reactive({
  count: 1,
  msg: 2,
  abc: 123
});

// watchEffect(
//   () => {
//     console.log('watchEffect', state.count)
//   },
//   {
//     flush: 'post',
//     onTrack() {   // 这两个函数我们称为调度函数
//       console.log('onTrack,会在count收集依赖的时候调用')
//     },
//     onTrigger() { 
//       console.log('onTrigger,会在conut依赖触发的环节被调用')
//     }
//   }
// )

// watch(
//   () => state.count,
//   (newVal, oldVal) => {
//   console.log(newVal, oldVal)
//   },
//   {immediate: true}
// )

effect( // 类似于生命周期函数
  () => {
  console.log('hello world', state.count)
  },
  {
    lazy: false,
    scheduler: () => {  // 调度函数，当它生效的时候，副作用函数就不再触发
      console.log('调度器中的任务执行了')
    }
  }
)
</script>

<style scoped>

</style>
