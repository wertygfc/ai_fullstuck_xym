# vue 开发工作流程

- 得到一个开发的模版
    要开发企业级的项目，不用从零开始
    npm init vite   node package management
    - 基于vite 工作脚手架创建项目
        选择 vue 
        选择 js
    - 项目开发模版 start template
    - npm config set registry https://registry.npmmirror.com/
    - npm i 安装了依赖
        "dependencies"  无论什么时候都需要的依赖
        "devDependencies"   开发依赖，开发完需要拆除

- 工程概念
    vite 工程需要的脚手架
    devDependencies 开发阶段的依赖，上线后不需要
    - 开发阶段
    - 测试阶段
    - 上线阶段
    - npm run  会运行script里面的脚本

- App.vue
    - vite的功劳，vite 支持编译.vue文件
        .style -> .css
    - 三段
        template    模版
        script  数据
        style   样式
    - src/
        开发目录
    - dist/
        上线目录

- vue思想
    - 不再做DOM编程
        获取或重设html 动态编程不再需要操作DOM，DOM性能不好
    - template 数据绑定 {{}} . 绑定script里的变量
        当它需要动态改变时，响应式编程思想  let name = ref(初始值)
        name.value = 更新值  template 所有绑定到它的地方都会热更新
