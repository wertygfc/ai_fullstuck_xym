let s1 = Symbol(hello)
let s2 = Symbol(hello)

console.log(s1 == s2);  // false
//Symbol 创建独一无二的值


let big = 123n  // bingInt
// 为了解决超出安全值无法计算的问题



let date = new Date()   // date类型 返回的不是字符串就是date类型