<template>
    <div class="bd">
      <ul>
        <li v-for="item in list">{{item}}</li>
      </ul>
    </div>
  </template>
  
  <script setup>
import { defineProps } from 'vue';

const list = ref(['html', 'css'])

  defineProps({
    message:{
        type: String,
        default: () => []
    }
  })
  </script>
  
  <style lang="css" scoped>
  
  </style>