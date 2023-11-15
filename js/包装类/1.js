// let a = 1
// let b = a
// a = 2
// console.log(b);
//输出：1

// let a = {
//     age: 18
// }
// let b = a
// a.age = 20
// console.log(b.age);
//输出：20
//原始类型的值直接往栈里存，引用类型的值往堆里存，因为往堆里存，所以会有一个引用地址，栈里引用类型写的是引用地址，所以改的也是引用地址对应的值，而b赋的是a的值，也就是a的引用地址






// let b = {
//     age: 18
// }
// //对象增加值
// b.name = 'lily'
// b['name']= 'lily'

// let n = 'name'
// b[n] = 'lily'

// //对象删除值
// delete obj.n
// delete obj[n]






//对象的创建
// var obj = {}    //对象字面量
// var obj2 = new Object();    //构造函数
// // 上面两种创建没有区别
// // 自定义构造函数
// function Car(color) {    // this也是对象 
//     this.name = 'BMW'
//     this.height = 1400
//     this.lang = 4900
//     this.weight = 1000
//     this.color = color
// }
// let car = new Car('green');    // 实例对象 == this
// let car2 = new Car('pink');
// console.log(car);






// var num = 123
// num.a = 'hello'
// console.log(num.a);     //undefined

// var num = new Number(123)
// num.a = 'hello'
// //但因为原始值不具有属性和方法
// delete num.a 
// console.log(num.a);
// //访问对象身上不存在的属性时，返回值是undefined

var str = 'abcd'
str.length = 2
delete str.length
console.log(new String('abcd').length);    // 4
// str.length