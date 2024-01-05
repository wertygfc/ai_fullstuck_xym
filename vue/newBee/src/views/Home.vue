<template>
  <div class="home">
    <header class="home-header"  :class="{ 'active': state.headerActive }">
      <router-link to="#">
        <i class="iconfont icon-menu"></i>
      </router-link>

      <div class="header-search">
        <span class="app-name">喜仔超市</span>
        <i>|</i>
        <router-link to="#" class="search-title">欢迎进店</router-link>
      </div>

      <router-link to="/login" class="login">登录</router-link>

    </header>

    <Swiper id="test" :list="state.swiperList" />
    <!-- rest -->
    <div class="category-list">
      <div v-for="item in state.categoryList" :key="item.categoryId" @click="goDetail(item.name)">
        <img :src="item.imgUrl" alt="">
        <span>{{ item.name }}</span>
      </div>
    </div>

    <GoodsList :list="state.newGoodsList" title="新品上线" />
    <GoodsList :list="state.hotGoodsList" title="热门商品" />
    <GoodsList :list="state.recommendGoodsList" title="最新推荐" />

    <!-- footBar -->
    <NavBar />
  </div>
</template>

<script setup>
import Swiper from '../components/swiper.vue'
import { onMounted, reactive, nextTick } from 'vue'
import { getHome } from '@/api/home.js'
import { ref } from 'vue';
import { showToast } from 'vant';
import GoodsList from '../components/GoodsList.vue';
import NavBar from '../components/NavBar.vue';

// ref将基础类型编程响应式的
// reactive将对象（引用类型）变成响应式的
// state 是被 reactive修饰过的对象，也就是响应式对象
const state = reactive({
  swiperList: [],
  newGoodsList: [],
  hotGoodsList: [],
  recommendGoodsList: [],
  headerActive: false,
  categoryList: [
    {
      name: '新蜂超市',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E8%B6%85%E5%B8%82%402x.png',
      categoryId: 100001
    }, {
      name: '新蜂服饰',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E6%9C%8D%E9%A5%B0%402x.png',
      categoryId: 100003
    }, {
      name: '全球购',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%85%A8%E7%90%83%E8%B4%AD%402x.png',
      categoryId: 100002
    }, {
      name: '新蜂生鲜',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E7%94%9F%E9%B2%9C%402x.png',
      categoryId: 100004
    }, {
      name: '新蜂到家',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%88%B0%E5%AE%B6%402x.png',
      categoryId: 100005
    }, {
      name: '充值缴费',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%85%85%E5%80%BC%402x.png',
      categoryId: 100006
    }, {
      name: '9.9元拼',
      imgUrl: 'https://s.yezgea02.com/1604041127880/9.9%402x.png',
      categoryId: 100007
    }, {
      name: '领劵',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E9%A2%86%E5%88%B8%402x.png',
      categoryId: 100008
    }, {
      name: '省钱',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E7%9C%81%E9%92%B1%402x.png',
      categoryId: 100009
    }, {
      name: '全部',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%85%A8%E9%83%A8%402x.png',
      categoryId: 100010
    }
  ],
})
// 请求banner数据
onMounted(async () => {
  const { data } = await getHome()
  console.log(data);
  state.swiperList = data.data.carousels
  state.newGoodsList = data.data.newGoodses
  state.hotGoodsList = data.data.hotGoodses
  state.recommendGoodsList = data.data.recommendGoodses
})
const goDetail = (name) => {
  showToast(name);
}
// 写在nextTick中的逻辑一定会在页面加载完毕后执行
nextTick(() => {
  document.body.addEventListener('scroll', function () {
    this.scrollTop > 100 ? state.headerActive = true : state.headerActive = false
  })
})

</script>

<style lang="less" scoped>
@import '@/common/style/mixin.less';

.home {
  padding-bottom: 100px;

  .home-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex; // 去到一行
    justify-content: space-between;
    align-items: center; // 纵轴居中
    padding: 0 15px;
    box-sizing: border-box; // 让可用面积自动变小
    font-size: 15px;
    z-index: 999;

    &.active {
      background-color: @primary;

      .icon-menu {
        color: #fff;
      }

      .login {
        color: #fff;
      }

    }

    .icon-menu {
      color: @primary;
    }

    .header-search {
      .wh(72%, 20px);
      padding: 5px 0;
      line-height: 20px;
      color: #232326;
      background-color: rgba(255, 255, 255, 0.7);
      border-radius: 20px;
      display: flex;
      align-items: center;

      .app-name {
        color: @primary;
        padding: 0 10px;
        font-size: 20px;
        font-weight: bold;
      }

      .search-title {
        font-size: 14px;
        padding: 10px;
      }
    }

    .login {
      color: @primary;
      font-size: 16px;
    }
  }

  .category-list {
    display: grid; // 网格容器
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-row-gap: 5px; // 网格行之间的间距
    // text-align: center;
    // display: flex;  // 弹性容器默认不换行，都会去到一行
    // flex-wrap: wrap;    // 文字换行
    // div{
    //     // width: 20%;
    //     display: flex;
    //     justify-self: center;
    //     img{
    //         .wh(36px, 36px);
    //         display: block;
    //         margin: 0 auto;
    //     }
    // }

    div {
      display: flex;
      flex-direction: column; // 将主轴变为y轴
      // justify-self: center;    // 控制在主轴上居中
      align-items: center; // 控制在另一个轴上居中

      img {
        .wh(36px, 36px);
        margin: 13px auto 8px auto;
      }
    }
  }
}</style>