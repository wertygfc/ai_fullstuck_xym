<template>
    <div>
        <ItemContainer parentComponent="item" />
    </div>
</template>

<script>
import ItemContainer from '@/components/itemContainer.vue';
import { mapActions } from 'vuex';
    export default {
        components: {
            ItemContainer
        },
        created() {  // 生命周期函数：在页面加载过程中自动触发
            this.getQuestionListAction()
        },
        methods: {
            ...mapActions(['getQuestionListAction'])
        }
    }
</script>

<style lang="less" scoped>

</style>