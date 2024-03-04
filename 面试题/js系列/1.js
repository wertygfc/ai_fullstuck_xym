// function deepClone(obj) {
//     return new Promise((resolve) => {
//         const {port1, port2} = new MessageChannel();
//         port1.postMessage(obj);
//         port2.onmessage = (e) => {
//             resolve(e.data);
//         };

//     })
// }


// # 10
// 组合继承
Parent.prototype.say = 'say'
function Parent(){
    this.name = 'parent';
}
Child.prototype = new Parent()  // 原型链继承
function Child(){
    Parent.call(this);  // 通过call改变this指向，相当于this.name = 'parent'写在了这
    this.name = 'child';
}
let c = new Child
console.log(c.say);     // 拿不到