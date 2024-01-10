<template>
    <ul>
        <li v-for="todo in todos" :key="todo.is">
            {{ todo.text }}
        </li>
    </ul>
</template>

<script setup>
import { useTodoStore } from "../store/todo";

const {todos} = useTodoStore()
</script>

<style scoped>
</style>
