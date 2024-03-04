<template>
    <div class="head">
      <input type="text" v-model="message">
      <button @click="submit">确定</button>
    </div>
  </template>
  
  <script>
    export default {
        data() {
            return {
                message ''
            }
        },
        methods: {
            submit() {
                // 把message  push到父组件的list中
                // 如何把子组件的数据源拿到给父组件使用？
                this.$emit('add', this.message)
            }
        }
    }
  </script>
  
  <style lang="css" scoped>
  
  </style>