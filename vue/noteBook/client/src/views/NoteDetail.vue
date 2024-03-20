<template>
    <div class="note-detail">
      <div class="note-img">
        <img :src="noteDtail.head_img" alt="">
      </div>
      <div class="note-content">
        <div class="tab">
          <span class="note_type">{{ noteDtail.note_type }}</span>
          <span class="note_title">{{ noteDtail.nickname }}</span> 
        </div>
        <p class="title">{{ noteDtail.title }}</p>
        <div class="content" v-html="noteDtail.note_content"></div>
      </div>
    </div>
</template>

<script setup>
// findNoteDetailById
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import axios from '@/api'

const route = useRoute()
const noteDtail = ref({})

onMounted(async () => {
    // 请求xxx分类的一条数据
    const res = await axios.get('/findNoteDetailById', {
      params: {
        id: route.query.id
      }
    })
    noteDtail.value = res.data
})


</script>

<style lang="less" scoped>
.note-detail {
  .note-img {
    width: 100%;
    height: 5rem;
    overflow: hidden;

    img {
      width: 100%;
    }
  }

  .note-content {
    padding: 0.667rem;

    .tab {
      display: flex;
      justify-content: space-between;
      color: rgba(16, 16, 16, 0.7);
      font-size: 0.48rem;

      span {
        padding-bottom: 4px;
        border-bottom: 2px solid #e51c23;
      }
    }

    .title {
      margin: .5333rem 0;
      line-height: 1.3;
      color: rgba(16, 16, 16, 1);
      font-size: 0.8rem;
    }

    .content {
      line-height: 1.5;
      color: rgba(16, 16, 16, 1);
      font-size: 0.3733rem;
    }
  }
}
</style>