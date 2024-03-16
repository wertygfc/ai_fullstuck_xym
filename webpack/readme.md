# vite之前的前端工程化脚手架

工程化
- 把项目跑起来
    vue 项目包含 .vue文件 .css(stylus)文件 图片....  —————— 静态资源，如何让静态资源打包一下，让它可执行
    
- 打包
    将src目录下的资源打包到index.html中运行
    - vite/webpack 现代MVVM开啊工具  给予命令行的后端实现
        vite ——— node + go + rust

- vite webpack 比较
    - webpack 配置比较复杂entry output plugin
        webpack 学习成本高 配置复杂
        vite 相对简单
    - vite script type="module" 引入 main.js文件 利用了es6的Module 更快1/10 bundless
        webpack 是早期的没有es6的Module可以用 需要webpack来打理文件的依赖关系（打包） 慢

- dist目录就是我们要上线的目录
- babel
    js语法转换器 js得到新生，最新的语法可以放心的使用，babel会帮我们转译
    @bable/core 核心功能
    @bable/preset-env 预处理 按环境的要求编译成相应的代码 默认 es6+ -> es5
    - webpack 是负责人 总管  babel是车间主任
        将相应后缀的文件拉到babel车间转译 babel-loader
        model test /\.js$/

