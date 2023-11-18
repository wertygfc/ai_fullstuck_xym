# 前端界面开发之专业性

- 先结构，后样式
    BEM 命名风格 试用起来
    page + hd/bd/ft

- npm i -g stylus
    node 是全栈，是js的后端开发
    npm 是node的包管理器
    stylus 包是用来提升css开发速度的
    i install的简称
    -g 全局
    stylus --version

- common.styl   .styl后缀
    - stylus 是css 的超集 省去：；{} 提高效率
    - tab 缩进
    - 失败，重新运行 stylus -w common.styl -o common.css
        watch 监听styl 文件的改变 自动编译css
    - stylus 嵌套
        BE里写样式的时候，自动补全css前缀

- stylus 的功能
    - 支持变量


- 阿里的适配神器    flexible.js
    - 在移动端不要用px 用rem相对的单位 
        1rem = html font-size
    - 不同的手机 html font-size 会去设置，不一样
        iphone 是设计稿使用的标准尺寸   375pt 750px
        37.5 375 关系？
        100vw = 10rem
        通过设置不一样的html font-size


- 移动端适配手写
    - 立即执行函数
        不影响外界，把功能实现
        (function(){
            // 函数作用域
            // 变量，不会污染外面的作用域
        })()
        因为是匿名函数所以前面要加括号，不然会报错
    - 1rem = vw / 10
        可以兼容所有
        设计稿上 750px = 2 * 350pt photoshop px单位
        1200px / 75px = ?rem
    - onresize  屏幕旋转
    - dry 设计模式原则 封装 复用
    - DOM性能不太好 缓存DOM元素
    - script标签 src属性加载一个资源 是同步的，会阻塞html的下载进程，所以一定要放在头部，放在css之前

- 后端素养
    - requests python的http请求库
        url(ip) + get 请求 响应是 服务器给你返回的财经首页Html的二进制流
        response.text html文本
    - parse一下，BeautifulSoup(response.text, "html.parser")
        python最擅长 文本 数据 解析 .csv .sql
    - find_all dom查询 -> 其实是在内存中查询
        link for link in links if "/news" in link and "/html"...

    - 随机功能