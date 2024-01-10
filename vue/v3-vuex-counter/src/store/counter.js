// 数据要共享，store
// store 仓库
// 组件 小卖部里的货架
// 进货的过程
import { defineStore } from "pinia";
import { ref, computed } from "vue";

// vue3 hooks 编程
export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    return {
        count
    }
})