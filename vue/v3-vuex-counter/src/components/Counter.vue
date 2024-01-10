<!-- 独立的模块，vue里面叫组件——htnml+css+js的集合 -->


<template>
    <!-- 结构 模版 -->
    <div>
        Clicked {{ count }} times, count is {{ evenOrOdd }}
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementIfOdd">Increment if odd</button>
        <button @click="incrementAsync">Increment async</button>
    </div>
</template>


<!-- composition api -->
<script setup>
// 数据和业务
// 进货
import {useCounterStore} from '../store/counter'

const { count } = useCounterStore()

// import { ref, computed } from "vue";
// const count = ref(0);   // ref 简单的响应式 reactive 复杂的响应式
// // evenOrOdd 奇或偶 他并不是独立的，与count相关，进行计算后拿到的
// const evenOrOdd = computed(() => 
//     count.value % 2 === 0 ? 'even' : 'odd'
// )
// const increment = () => {
//     count.value++;  // 不做dom编程，因为dom性能不好
// }
// const decrement = () => {
//     count.value--;
// }
// const incrementIfOdd = () =>{
//     if (count.value % 2 === 0){
//     count.value++; 
//     }
// }
// const incrementAsync = () => {
//     setTimeout(() => {
//         count.value++
//     },1000)
// }

// export default {
//     // 组件的属性
//     setup() {
//         return {
//             count,
//             evenOrOdd,
//             increment,
//             decrement,
//             incrementIfOdd,
//             incrementAsync
//         }
//     }
// }


</script>

<style scoped>
/* 样式 */
</style>
