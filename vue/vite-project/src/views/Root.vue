<script setup>
import Menu  from "../components/layout/menu/Menu.vue";
</script>

<template>
    <div class="w-screen h-screen flex items-stretch">
        <div class="w-56 h-screen flex-shrink-0">
            <Menu/>
        </div>
        <div class="flex-1 flex flex-col">
            <div>1</div>
            <router-view/>   
            <div>2</div>
        </div>
    </div>
</template>

<style scoped>
</style>
