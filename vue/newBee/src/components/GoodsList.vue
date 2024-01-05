<template>
    <div class="goods">
        <header class="goods-header">{{ title }}</header>
        <van-skeleton title avatar :row="3" :loading="loading">
            <div class="goods-box">
                <div class="goods-item" v-for="item in list" :key="item.goodsId" @click="goGoodsDetail(item.goodsId)">
                    <img :src="item.goodsCoverImg" alt="">
                    <div class="goods-desc">
                        <div class="title">{{ item.goodsName }}</div>
                        <div class="price">{{ item.sellingPrice }}</div>
                    </div>
                </div>
            </div>
        </van-skeleton>


    </div>
</template>
  
<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()

const goGoodsDetail = (id) => {
    // console.log(id);
    // 将这件商品的ID传给详情页
    router.push({ path: '/product', query: { id: id } })
}
const props = defineProps({
    list: Array,
    title: String
})
// console.log(props.list);
const loading = computed(() => {
    // if (props.list.length > 0) {
    //     return false
    // }
    // return true
    return props.list.length > 0 ? false : true
})

</script>
  
<style lang="less" scoped>
@import '@/common/style/mixin.less';

.goods {
    &-header {
        background-color: #f9f9f9;
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        color: @primary;
    }

    &-box {
        display: flex;
        flex-wrap: wrap;

        .goods-item {
            width: 50%;
            border-bottom: 1px solid #e9e9e9;
            box-sizing: border-box;

            img {
                width: 3.2rem;
                display: block;
                margin: 0 auto;
            }

            .goods-desc {
                text-align: center;
                font-size: 14px;
                padding: 10px 0;

                .title {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    // white-space: nowrap;    // 不换行
                    overflow: hidden;
                    text-overflow: ellipsis;
                    color: #222333;
                    margin-bottom: 6px;
                }

                .price {
                    color: @primary;
                }
            }

            &:nth-child(2n + 1) {
                border-right: 1px solid #e9e9e9;
            }
        }
    }

}</style>