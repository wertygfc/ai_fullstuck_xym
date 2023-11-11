# JS 八股文之防抖节流

## 前端“三清”
- window    BOM 浏览器对象，负责body之外的浏览器功能
- document  DOM body是最外层的DOM ,js和跟DOM进行“深度交流”
- object    js 的顶层对象 new object() 简写 -> {}
wan.__proto__(私有属性，原型)  -> object -> null
- js类
    - 大写的函数
        new + this 完成由空对象 {} 到构造完成的过程
        这样对象就有属性了
    - 对象的方法
        放在构造函数的prototype上
    - wanwan 和 Person 没有血缘关系，也就是实例和类没有血缘关系 例如：女娲和人
    在构造的过程中 new Person  {} 是 new Object 一个空对象      这两者没有关系
    Person.prototype    {}
- Person.prototype 叫做原型
- Object.prototype 原型
- wanwan.__proto__ 原型
- wanwan.__proto__.__proto__.__proto__ 原型链
- 原型的哪一栈上有的方法，对象都能用
- js 面向对象不是血缘的，而是面向对象的
- 函数，在运行的那一瞬间，this的值就被决定了
    this的值由函数的运行方式决定，目前这个函数是做为时间处理函数，所以this指向时间发生的元素本身
- this是什么
    - 指针 函数的需要
    - 函数需要区分定义的时候（闭包就是定义的时候）和执行的时候（this是执行的时候）
    - 函数运行的时候被决定
        运行时以不同的身份，值不一样
    - 有规则
        - 普通函数方式运行，this指向window顶级，因为普通函数没必要指，不需要this
            'use strict'//严格模式   this 的输出是 undefined
        - 如果作为事件的处理函数运行 ，this指向事件发生的元素
        - 当如果函数作为对象的方法被调用 this指向对象本身
        - 函数以构造函数的方式运行 this指向实例