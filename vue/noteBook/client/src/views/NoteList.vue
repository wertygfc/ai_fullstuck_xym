<template>
    <div class="note-list">
      <ul v-if="state.noteList.length">
        <li v-for="item in state.noteList" :key="item.id" @click="goNoteDetail(item.id)">
          <div class="img">
            <img :src="item.head_img" alt="">
          </div>
          <p class="time">{{item.c_time}}</p>
          <p class="title">{{item.title}}</p>
        </li>
      </ul>
      <p class="empty" v-else>当前分类下还没有文章哦~~</p>
    </div>
  </template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { reactive, onMounted } from 'vue';
import axios from '@/api'

const route = useRoute()
const router = useRouter()
const state = reactive({
    noteList: []
})

onMounted(async () => {
    // 请求xxx分类的数据
    const res = await axios.post('/findNoteListByType', {
      note_type: route.query.title
    })
    // 渲染页面
    state.noteList = res.data
})

const goNoteDetail = (id) => {
  // 跳转到文章详情页
  router.push({path: '/noteDetail', query: {id}})
}

console.log(router);
</script>

<style lang="less" scoped>
.note-list{
  width: 100%;
  padding: 1rem 0.667rem 0;
  box-sizing: border-box;
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 50px;
    grid-row-gap: 30px;
    li{
      img{
        width: 100%;
        height: 4rem;
        border-radius: 0.27rem;
      }
      .time{
        font-size: 0.37rem;
        color: rgba(16, 16, 16, 1);
        margin: 10px 0 5px 0;
      }
      .title{
        width: 3.5rem;
        font-size: 0.37rem;
        color: rgba(16, 16, 16, 1);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>