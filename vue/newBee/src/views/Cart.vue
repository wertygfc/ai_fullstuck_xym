<template>
  <div class="cart-box">
    <SimpleHeader title="购物车" :back="false"/>

    <div class="cart-body">
      <van-checkbox-group v-model="result" @change="groupChange">
           
        <van-swipe-cell v-for="item in list" :key="item.goodsId">
          <van-checkbox :name="item.cartItemId"></van-checkbox>
          <van-card
            :num="item.goodsCount"
            :price="item.sellingPrice"
            :title="item.goodsName"
            class="goods-card"
            :thumb="item.goodsCoverImg"
          >
            <!-- 步进器 -->
            <template #footer>
              <van-stepper v-model="item.goodsCount" min="1" max="5" :name="item.cartItemId" @change="numChange"/>
            </template>
          </van-card>
          <template #right>
            <van-button square @click="deleteGoods(item.cartItemId)" text="删除" type="danger" class="delete-button" />
          </template>
        </van-swipe-cell>
      </van-checkbox-group>
    </div>

    <!-- SubmitBar -->
    <van-submit-bar :price="totalPrice * 100" button-text="提交订单" @submit="onSubmit" class="submit-bar">
      <van-checkbox class="checkALL" v-model="checkALL" @click="allCheck">全选</van-checkbox>
    </van-submit-bar>

    <NavBar />
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
import SimpleHeader from '../components/SimpleHeader.vue';
import { ref, onMounted, computed } from 'vue';
import { getCart, modifyCart, deleteCartItem } from '../api/cart';
import { useStore } from 'vuex';

const result = ref([]);
const list = ref([]);
const checkALL = ref(true);
const store = useStore();

onMounted(() => init())

const init = async() => {  // 拿到购物车数据
  const {data} =await getCart({pageNumber: 1})
  // checkALL.value = data.length > 0 ? true : false;
  list.value = data;
  result.value = data.map(item => item.cartItemId);
}

const groupChange = () => {   // 选中商品
  checkALL.value = (result.value.length === list.value.length)&&result.value.length !==0 ? true : false;
}

const numChange = async(value, detail) => {     // 修改数量
  const params = {
    cartItemId: detail.name,
    goodsCount: value
  }
  await modifyCart(params)
}

const onSubmit = () => {      // 提交订单
}

const allCheck = () => {
  if(checkALL.value === false){ // 大家都不选中
    result.value = [];
  }else {
    result.value = list.value.map(item => item.cartItemId);
  }
}

const totalPrice = computed(() => {   // 计算总价格,计算属性中的依赖的变量有变动时
  let _list = list.value.filter((item) => result.value.includes(item.cartItemId))
  const allPrice = _list.reduce((pre, item, index, arr) => {
    return pre += item.sellingPrice * item.goodsCount
  }, 0)
  return allPrice
})

const deleteGoods = async(id) => {  // 删除商品
  await deleteCartItem(id)
  store.dispatch('setCartCountAction')
  init()
}
</script>

<style lang="less" scoped>
.cart-body{
  margin: 16px 0 100px 0;
  padding-left: 10px;
}
</style>
<style lang="less" scoped>
.cart-body{
  margin: 16px 0 100px 0;
  padding-left: 10px;
}
</style>
<style>
.van-swipe-cell__wrapper{
  display: flex;
}
.van-card.goods-card{
  width: 100%;
  background-color: #fff;
}
.van-checkbox{
  width: 23px;
}
.delete-button{
  height: 100%;
}
.van-card__footer{
  position: absolute;
  right: 16px;
  bottom: 8px;
}
.van-card__num{
  position: absolute;
  right: 0px;
  top: 0;
}
.submit-bar{
  bottom: 50px;
}
.checkALL{
  width: 60px;
}
</style>