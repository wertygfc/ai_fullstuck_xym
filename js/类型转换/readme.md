# 基本数据类型之间的转换
1. 转布尔
2. 转数字
3. 转字符串
4. 转对象

null和undefined没有构造函数，所以没有toString()方法
# 对象转原始类型    obj.toString()      obj.valueOf()（只能处理包装类）
任何对象转布尔都是true，包括空对象

toString() 在javascript中有多个版本
- 数组的toString()会将数组中的所有元素转换成字符串并以逗号拼接
- 函数的toString()会将整个函数以字符串的形式返回
- Date的toString()会将整个date以字符串形式返回
{}.toString()   // '[Object class]'
[].toString()   // '' （得到空字符串）




## 对象转字符串     ToPrimitive(obj, String)
1. 判断obj是基本类型则返回
2. 否则，调用toString()方法，如果得到原始类型，则返回
3. 否则，调用valueOf()方法，如果得到原始类型，则返回
4. 否则，报错，报类型错误

## 对象转数字   ToPrimitive(obj, Number)
1. 判断obj是基本类型则返回
2. 否则，调用valueOf()方法，如果得到原始类型，则返回
3. 否则，调用toString()方法，如果得到原始类型，则返回
4. 否则，报错，报类型错误



# 一元运算符    +

# 加法运算符
会有隐式类型转换
    v1 + v2 === lprim + rprim
    lprim = ToPrimitive(v1)
    rprim = ToPrimitive(v2)

1. 如果 lprim 是字符串或者 rprim 是字符串，则返回将不是字符串的一方转为字符串，再进行拼接
2. 否则都转成数字，进行加法运算

# 等于运算符
