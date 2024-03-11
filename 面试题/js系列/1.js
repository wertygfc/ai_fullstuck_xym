// // # 5
// function deepClone(obj) {
//     return new Promise((resolve) => {
//         const {port1, port2} = new MessageChannel();
//         port1.postMessage(obj);
//         port2.onmessage = (e) => {
//             resolve(e.data);
//         };
//     })
// }


// // # 10
// // 组合继承
// Parent.prototype.say = 'say'
// function Parent(){
//     this.name = 'parent';
// }
// Child.prototype = new Parent()  // 原型链继承
// function Child(){
//     Parent.call(this);  // 通过call改变this指向，相当于this.name = 'parent'写在了这
//     this.name = 'child';
// }
// let c = new Child
// console.log(c.say);     // 拿不到

// // 寄生式组合继承
// Parent.prototype.say = 'say'
// function Parent(){
//     this.name = 'parent';
// }
// Child.prototype = Object.create(Parent.prototype)   // {__proto__:Parent.prototype}
// Child.prototype.contructor = Child
// function Child(){
//     Parent.call(this);  
//     this.type = 'type';
// }
// let c = new Child
// console.log(c.say);    

// // class继承
// class Parent{
//     constructor(name){
//         this.name = name;
//     }
// }
// class Child extends Parent{
//     constructor(name){
//         super(name);
//         this.name = 'child';
//     }
// }
// let c = new Child('child', 'Tom');
// console.log(c.name);


// // # 11
// var obj2 = {
//     name: 'a',
//     obj: obj
// }
// var obj = {
//     name: 'b',
//     foo: foo
// }
// function foo(){
//     console.log(this.name);
// }
// obj2.obj.foo()  // 隐式丢失，结果为b


// // # 12
// function myNew (...args) {
//     let obj = {}
//     obj.__proto__ = args[0].prototype
//     let res = args[0].apply(obj, args.slice(1))  // 使实例对象具有构造函数的内部属性
//     return (typeof res === 'Object' && res !== 'null') ? res : obj
// }


// // 手写call函数
// let age = Symbol('key')
// var obj = {
//     name: 'a',
//     [age]: 'b'
// }
// function foo (x, y) {
//     console.log(this.name, x + y);
//     return 'hello'
// }
// Function.prototype.myCall = function(){
//     let obj = arguments[0]
//     let args = [...arguments].slice(1)
//     let key = Symbol('key')
//     obj[key] = this
//     let res = obj[key](...args)    //隐式绑定
//     delete obj[key]
//     return res  // 因为当函数有返回值时也需返回
// }


// // 手写bind函数
// Function.prototype.myBind = function(){
//     let obj = arguments[0]

//     const back = function (){

//     }
//     return back
// }


// // # 16
// <button onclick="ajax">发送请求</button>
// function ajax () {
//     let require = new XMLHttpRequest
//     require.open('GET', '', true)
//     require.send()
//     require.onreadystatechange = () => {
//         if(xhr.readyState === 4 && xhr.status === 200){      
//             console.log(xhr.responseText);
//         }
//     }
// }