// Koa 是后端框架commonjs
// 来到了服务器端 vite 是用服务器实现的
const Koa = require('koa')  // 第三方提供的
const fs = require('fs')    // node 的文件系统 内置的
// 实例化一个Koa 就是一个后端应用 OOP
const app = new Koa()
// ctx 请求响应，上下文对象， ctx.body 代表响应体
app.use(async ctx =>{
    // Http 是基于请求响应的简单协议
    // index.html 返回给用户就看到首页了
    // 字符串二进制流
    // 冯洛伊曼原理
    // 代码在内存中运行 我们需要读取文件系统里的index.html 需要引入fs模块
    // js 是异步的 node直接支持异步同步化 这边是个I/O操作
    let content = fs.readFileSync('./index.html', 'utf-8')
    ctx.body = content
})

// 后端启动web服务 监听5174端口
app.listen(5174, () => {
    console.log('项目在5174端口启动起来了！');
})