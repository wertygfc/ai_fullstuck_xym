<template>
    <div>
        <van-icon name="arrow-left" size="20" @click="goBack" />
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const goBack = () => {
    router.back()
}

</script>

<style lang="less" scoped>
:deep(.van-icon){
    position: fixed;
    left: 20px;
    top: 20px;
    z-index: 100;
    
}
</style>