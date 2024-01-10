<template>
    <div>
        <ul>
            <li v-for="banner in banners">
                <img :src="banner.pic" />
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useBannerStore } from "../store/banner";
import { defineProps, onMounted, toRefs } from "vue";
const props = defineProps({
    'per-page': {
        type: Number,
        default: 10
    }
})

// 借pinia store banners 来到本地组件
// proxy 对象变成一个 ref 对象
const {banners} = toRefs(useBannerStore())
const {getBanners} = useBannerStore()
onMounted(async () => {
    // 先让组件显示出来，用户的第一眼要快
    // 等组件显示了，再去请求，因为js是单线程
    // const data = await getBannerData(); // 简单程序，这行代码写这没问题，但不应该写这里，这边在接收数据，应该写在store中
    // console.log(data);
    await getBanners()
})
</script>

<style scoped>
</style>
