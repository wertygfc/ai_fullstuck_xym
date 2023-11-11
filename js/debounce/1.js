//函数 js里函数是一等对象，这个函数只要大写，就是一个构造函数
function Person(name, age) {
    //this
    // console.log(this);
    this.name = name
    this.age = age
}
// 类的方法 静态方法static
Person.sayHello = function(){
    // console.log('hello');
}
Person.prototype.sayHello = function () {

}
// new 和 typeof 都一样，都是运算符
// new 在函数前面，这个函数一构造函数的方式运行，就是在做实例化
// 函数是可以执行的对象，是能进执行栈的
// 数组是可以迭代的对象
// let hu = Person('胡', 18)
// wanwan 是以 Person为原型构造的，Person的原型是object
let wanwan = new Person('万总', 18)
console.log(wanwan.name, wanwan.age)
wanwan.sayHello();
wanwan.toString();
// console.log(hu);
// console.log(wanwan);
// js的数据类型：数值、字符串、布尔、null、undefined 再加上对象
// console.log(wanwan.__proto__.__proto__.__proto__);