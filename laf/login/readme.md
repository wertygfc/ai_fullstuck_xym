- json-server
    npm  node package manager
    npm 包的其中之一


- package.json 的了解
    - 项目描述文件，由 npm init -y 生成
        - dependencies npm i json-server...
        - script 项目可运行的脚本区域
            可用 npm run 运行起来
            "dev": "json-server -w todos.json"
            脚本的名字  


- web server    基于HTTP协议
    - 前端页面的server -> laf
        localhost:3000 -> 线上，在线的域名
    - 后端 server
        json-server  启动api接口


- 请举出耗时的异步任务有哪些？
    setTimeout
    promise
    event listener
    接口请求
    数据库查询
    then  
    async


- fetch 比 xhr 对象更简单的http请求对象
    - 它是Promise 类的一个实例 es6 的异步解决方案
    - xhr ? then ?
        xhr流程比较复杂