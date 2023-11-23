let str = 'hello'
console.log(str instanceof String);     // false

// instanceof 是官方专门为引用类型打造的函数，所以原始类型调用会返回false
// instanceof 的原理是a的隐式原型是否等于b的显示原型
let obj = {}
console.log(obj instanceof Object);     // true