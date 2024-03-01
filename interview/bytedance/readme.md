- 终局思维
    - 什么样的题目是字节级别的？
        - 初始化项目过程中发生了什么？
            本质是启动了 http服务 在5173端口 以index.html为首页
            #app 挂载点 

                <!-- js 早期 模块化能力弱 node require commonjs -> es6 import ESModule
                VUE项目是一个应用 不是几个小文件 运行起来是非常复杂的 所以一定要通过模块化组织文件
                vite 是一个现在前端应用的构建工具（跟Webpack的区别，以前的需要有 require 关键字 笨重 慢），
                他基于 ES2015（ES6 ES2016--ES7）  的模块系统，
                使用了新的 ES 标准，
                无需依赖其它工具，同时支持开发环境和胜场环境构建。
                main.js是一个单点入口，引入依赖文件和各个模块，项目就运行起来了 
                type="module" 告诉浏览器以 ESModule 来解析文件的依赖，也就是告诉他这个文件有import
                -->
                <script type="module" src="/src/main.js"></script>