<template>
    <van-action-bar>
        <van-action-bar-icon icon="chat-o" text="客服" />
        <van-action-bar-icon icon="cart-o" text="购物车" :badge="badgeNum"/>
        <van-action-bar-button type="warning" text="加入购物车"  @click="handleAddCart"/>
        <van-action-bar-button type="danger" text="立即购买" />
    </van-action-bar>
</template>
  
<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex'
import { addCart } from '@/api/cart'
import {showSuccessToast} from 'vant'

const props = defineProps({
    id: String
})

const store = useStore()
const badgeNum = computed(() => {
    if(store.state.cartCount >= 1){
        return store.state.cartCount
    }
})

onMounted(() => {
    store.dispatch('setCartCountAction')    // dispatch 是专门用来触发仓库里面的函数的
})
// console.log(store);

const handleAddCart = async() => {
    const res = await addCart({goodsCount: 1, goodsId: props.id})
    // console.log(res);
    if(res.resultCode === 200){
        showSuccessToast('添加成功')
        store.dispatch('setCartCountAction')
    }
}
</script>
  
<style lang="less" scoped>
  
</style>
<style>
.van-action-bar .van-button--warning{
    background: linear-gradient(to right, #15c4c4, #1baeae);
}
.van-action-bar .van-button--danger{
    background: linear-gradient(to right, #15aaaa, #098888);
}
</style>