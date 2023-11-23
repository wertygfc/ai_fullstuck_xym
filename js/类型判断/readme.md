# typeof
1. 可以准确的判断除null之外的原始类型
2. 可以判断 function


# instenceof
1. 只能判断引用类型（因为原始类型没有原型）
2. 通过原型链查找来判断


# Object.prototype.toString()
1. 如果this 值未定义，则返回“ [object Undefined] ”
2. 如果this 值为null，则返回“ [object Null] ”
3. 设 O 是 ToObject(this)，如果传的原始类型，那就回调用ToObject将原始类型转换成对象
4. 设 class 是 O 的[[Class]] 的内部属性
5. 返回 String 值，该值是链接三个 String “ [object ”、 class和“ ] ”而成的字符串结果


- xxx.call(原始值)为什么不会报错？
    原因：（上面第三点）
- toString通过读取数据结构内部属性来读取到数据的类型  class


ToObject('hello')   // {'hello'}    // [[Class]]: String


# Array.isArray()
    如：Array.isArray([])