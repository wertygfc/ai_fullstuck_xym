# class 和 function 的对比
- JS里面没有类，只有对象，函数是一等对象
- 构造类
    - class es6+？
        es6 的使命之一是让JS像其他语言一样适合企业级开发 面向对象都是class的，所以js新增了这个关键字，只是一颗语法糖。 原型式的面向对象没有改变。都可以对应function
    - 构造函数 + 原型对象 + 实例
        实例和类没有血缘关系   JS没有类
        构造函数执行  this指向实例，完成实例属性的创建
        原型对象 由实例.__proto__  原型关系
        原型对象 constructor 属性 告诉实例这是哪个构造函数的 instanceOf 


    - for ket in 原型对象上那些方法是可以被遍历的
        发现constructor不可被遍历
        Object.keys()  拿到对象身上可以被遍历的方法

    - 语法糖
        class Person    原型式的面向对象
        Person.prototype 和用 es5 方式来声明是一样
        class.Person.prototype 声明的方法不可被遍历（枚举）


        getOwnPropertyNames() 获取的是对象自身的所有属性，包括实例属性和方法。它返回一个包含对象自身的所有属性（不包括原型链上的属性）的数组。

