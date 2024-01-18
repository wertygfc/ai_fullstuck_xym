# 生命周期
vue 自带的生命周期在uniapp中都能使用


# 页面生命周期
uniapp 提供了页面生命中期，比如上拉加载、下拉刷新、页面渲染等等


# 应用生命周期
整个app应用的状态变化，只能在app.vue里面使用，因为是全局的


# 全局变量
1. Vue.prototype.name = '测试名称' (options API)
2. 在App.vue中设置
```javascript
globalData: {
	name: '全局的名称'
},
```
3. Vuex
