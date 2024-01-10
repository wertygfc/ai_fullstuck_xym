import { defineStore } from "pinia";
import { ref } from "vue";

export const useTodoStore = defineStore('todos', () => {
    const todos =  ref([{text: '学习pinia', done: false}])
    return {
        todos
    }
})