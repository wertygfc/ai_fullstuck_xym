- vue 全家桶
    - vue   负责组件和mvvm（响应式）
    - vue-router    单页页面的切换  两种形式路由    前端路由
        - #/about hash路由
        - /about history路由
    - vuex  状态管理    仓库
        - 为什么需要有这个仓库？
            UI Component + 数据流归store管理
            如何让数据和组件分离？

    - vue 语法演变
        - vue2.0 选项式api data methods computed
        - setup 语法糖 
            export default {
                setup() {
                    return {

                    }
                }
            }
        - vue3.0 组合式api  composition api 最简洁
            script setup
        - 干掉了this vue 开发面向对象进入到了最流行的函数式编程


- 模块化
    - 组件就是一个模块  counter组件
    - counter组件可以把什么东西再模块化
        - 按钮分开  UI组件库  移动端的组件库vant ElementPlus
        - 组件中的数据可以分离出去，为什么？
            - 数据是共享的 兄弟组件之，如登录状态
            - 业务逻辑
                请求 onMounted
            - 干脆把数据和组件分离 



- pinia 的数据管理
    - pinia 是现在最先进的数据管理  vuex落后了
    - pinia 提供了defineStore 方法，用于定义一个store   
        有两个参数，第一个是仓库名字，第二个是函数，函数返回状态及方法，取名以use开头   跟setup语法糖有点像
    - 组件只需要focus UI，不需要打理数据，完成职责分离
        - store 数据模块
        - 组件 UI模块
    - main.js 入口文件中use一下
        createPinia()



- 网易云音乐 幻灯片组件

- 前后端分离 开发人员各司其职 fackbook最开始实行
    - 前端 5173
    - 后端 3000 负责写api
    http://localhost:5173/
    127.0.0.1 ip地址 定位一台机器 可以运行多个程序


    - UI 组件  数据管理 模块化
        - vue 项目中负责请求管理的 axios   api


- api 目录 请求模块，是vue项目的核心模块
    前后端协作
    - /api/index.js
        负责业务，列出来各种请求接口    getBannerData
    - /api/http.js
        负责接口封装
    - 为什么要用api 目录，不用 fetch 和 xhr ?
        fetch 和 xhr 都是流程性的代码，会有很多的重复编写
    - 大型项目中
        可能有几十个，几百个请求， 模块化的需要，因为散落在各个组件里的请求是很难管理的
    - axios 封装
        - xhr, fetch 太弱小了
        - 好处：