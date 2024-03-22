## 海马体

- 2023年AIGC现象级应用
- 以前花99拍海马体照片
    化妆、修片、选风格  证件照
- 海马体App 用AIGC技术完成
    只需9.9，上传自己的一些照片，就能生成
- LLM找到应用场景落地的成功案例
    tokens  赚钱
- 我很想加入海马体，这个团队找到了AI落地的最佳方式
    肯定会在更多的领域，找到AI产品开发的灵感
    再这样的团队里做前端开发会有好未来，因为未来是属于AI的，未来一定是属于知道怎么让AI落地的团队的。


- vuex是数据流管理的设计模式，由state,getters,mutations/actions构成
- UI组件（简单）+数据管理（清晰）  适合大型项目
- 缺点：学习成本高，难理解  特别是mutations
- optionsAPI 太繁琐了，pinia和composition api更搭
- pinia也更好理解  use
- createStore 返回的是store的单例（要确保数据的安全和正确，所有只有一个实例对象）

- 请介绍下自己
    了解你
    破冰
        我平时比较喜欢在掘金写技术文章 -> es6
        通过阅读源码提升代码能力 -> vuex

- vuex 源码学到了哪些？
    - 严谨的代码逻辑
        vuex根据type查找mutation时候 && 找到了才会执行
    - 优秀的代码思想
        提升自己的代码能力
    - createStore 返回了 store 状态树单例，因为它只会被调用一次。
    - provide inject
        use(store)启动了vuex生态
        install方法，传递app
    - es6   class 封装 Store 类
        - 把复杂留给自己，把简单交给别人
            options state函数返回的对象其实是初始数据，使用reactive()变成响应式，而且加上data数据的概念，完成响应式数据的创建 即this._state
        - _私有数据声明，通过get方法 get state 返回this._state.data

- es6 新语法
    class promise 箭头函数 解构 let/const proxy es6模块化 模版字符串 async/await
    - es6 class 语法
        - es6 主要目的让JS适合大型项目企业级开发
            传统的面向对象支持
                class  constructor  extends  static
        - 原型链式的面向对象
        - 只不过class就是语法糖  
    - proxy
        尽量聊到 reactive 源码
    - Map WeakMap  JSON Object
        Set WeakSet