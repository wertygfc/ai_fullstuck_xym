// 引用类型（对象）转原始类型
Object.prototype.toString.call({a: 1})      // '[Object Object]'



// 面试题
// [] == ![]   // true

// [] == !true

// [] == false

// [] == 0

// '' == 0

// 0 == 0



Number({})  // Number('[Object Object]')    // NaN

+'1'    // 转成了数字1


console.log([] + {});    // '' + '[Object Object]'

{} + []     // 在浏览器上，V8会将其识别为两个代码，是声明一个{}，还有一个是 +[] ，+[]是0，所以最后结果是0

({}) + []   // '' + '[Object Object]'

({}) + ({})     // '[Object Object]' + '[Object Object]'