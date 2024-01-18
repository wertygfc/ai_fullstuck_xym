<template>
	<view class="content">
		<navigator url="/pages/about/about">去关于页面</navigator>
		<image class="logo" src="/static/logo.png" @click="goAbout()"></image>
		<view class="text-area" @click='changeTitle'>
			<text class="title">{{title}}</text>
			<text>{{reverseTitle}}</text>
		</view>
		<view class="">
			{{name}}
		</view>
		<song :data = 'list.song' />
	</view>
</template>

<script setup>
	import { computed, reactive, ref } from 'vue'
	import song from '../../components/song/song.vue'
	
	const title = ref('你好')
	const name = getApp().globalData.name
	console.log(getApp().globalData.name)
	const changeTitle = () => {
		title.value = title.value === '你好' ? 'Hello' : '你好'
	}
	const reverseTitle = computed(() => {
		return title.value.split('').reverse().join('')
	})
	
	
	const list = reactive({
		song: {
			img: 'https://tse3-mm.cn.bing.net/th/id/OIP-C.6szqS1IlGtWsaiHQUtUOVwHaQC?w=115&h=183&c=7&r=0&o=5&dpr=1.5&pid=1.7',
			title: '背景',
			price: '10',
			market: '13'
		}
	})
	
	const goAbout = () => {
		uni.navigateTo({
			url: '/pages/about/about'
		})
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
