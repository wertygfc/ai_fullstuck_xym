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