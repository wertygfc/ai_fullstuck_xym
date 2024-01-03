# 网易云音乐

- 组件思维
    - 图标组件库
    - Layout 组件
    - 业务组件
        - Menu 不用自己开发，ElementPlus
        - Swiper
        - Music
- SPA
    Menu -> Router
- 数据接口

## VUE 中大型项目开发流程

- 搭路由    组件思维
    App（根组件） -> router-view（vue-router内置的组件） -> 页面级别组件（views/） -> 子组件

- 样式准备
    - reset 
    - tailwindcss 原子化css
        - 安装
        npm i -D tailwindcss 开发阶段用的库，上线的时候不用
        - 初始化
        npx tailwindcss init -p
        npx 运行
        页面样式也和汽车组装一样的，原子化 不需要写样式
        - w-1 w代表宽度 1个单位代表0.25rem
        - flex flex-col flex-shink-0 items-stretch 原子样式的表达 拼装

- Layout
- 页面级别组件
- 组件（构成页面的组件）

## 项目加分项或难点
    - 多级路由中meta属性一定要添加
    - tailwindcss 加快样式开发速度
        - 适配问题 w-56 w-screen rem vw
    - 区分开发阶段
        dev test product
        npm i -D
    - 单页应用，在组件化开发之前要搭好布局Layout，跟Layout 相关的组件放在/components/layout
## 考点
- flex 布局
    items-stretch align-items:stretch;
    flex-shrink-0
    弹 flex-grow: 1;flex-shrink: 1;flex-basis: 0%;
- VUE 开发思想
    - 组件化思想
        - components
            - layout
            - common
        - views/ pages/
        - ElementPlus
    - 数据驱动思想 状态会改变   数据状态
        - 数据绑定 {{}}
        - :class :style :  动态绑定 响应式
        - props 
        - computed
        - vuex
        - api（你现在的数据需要调用后端接口）
- hash 路由 兼容性更好 url的一部分
    https://www.juejin.com:8080/user/1221?a=1&n=2#/discover
    https://www.juejin.com:8080/user/1221?a=1&n=2#/music
    url的hash部分发生改变 页面不会刷新 页面描点
    缺点：和传统的路由不太一样
    html5 提供了history路由 优点：与传统路由一样，缺点：兼容性有问题

- xue-router js 跳转路由
    - vue-router 提供了 useRouter useRoute 两个函数
    - useRouter() 拿到路由管家对象，在这个对象上有push 方法
    {name 对应 router.name} 配置时name 属性不能少
    - useRoute() 拿到当前路由对象 meta 属性 关于这个路由的所有东西
    - 路由的切换，直接通过分享进入页面        