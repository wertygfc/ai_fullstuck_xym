# 1. js数组身上有哪些方法？
1. 增加：unshift push splice concat
2. 删除：shift pop splice slice(左闭右开)
3. 修改: reverse sort 
4. 查找：indexOf lastIndexOf includes find(接受回调，里面放三个参数 item index array)(允许放查找语句) filter(接受回调，里面放三个参数 item index array)
5. 转换：join
6. 迭代：forEarch map some(判断数组里面是否存在满足条件的元素) every(判断数组里面是否全部满足条件的元素)
7. Array.from(将伪数组(类数组)转换为真数组)


# 2. js字符串上有哪些方法？
1. 增加：concat
2. 删除：slice substr(删除到该下标，该下标不删除，不修改原字符串) substring(左闭右开，原字符串不修改)
3. 修改：replace trim(取消字符串前后的空格) trimLeft trimRight padStart(从前面填充) padEnd toLowerCase toUpperCase
4. 查找：indexOf lastIndexOf includes startsWith(判断字符串是否以某字符串开头) endsWith(判断字符串是否以某字符串结尾) charAt(获取字符串中某下标的字符) charCodeAt(获取字符串中某下标的字符的ascii码)
5. 转换：split(以某字符串为分隔符，返回数组) 


# 3. 谈谈js中的类型转换机制
- 是什么？
js中有原始类型和引用类型，
原始类型有：number string boolean null undefined symbol(用来声明唯一值) BigInt(用来表示大整数)(因为number存在最大安全值2的53次方，所以用BigInt来表示大整数，bigint可以表示任意大小的整数，但是bigint不能用于循环，因为循环是基于number的，所以用bigint来表示大整数，只能用于判断大整数的大小，不能用于循环);
引用类型有：Object Function Array Date RegExp(正则) Map Set WeakMap WeakSet 

通常开发过程中，
会用到一些显示类型转的方法，比如：Numver() String() Boolean() parseInt() parseFloat()

在V8执行过程中还存在另一中类型转换——隐式类型转换，通常发生在判断语句(== != > < if while)和算术运算符(+ - *  / % )中，比如：
[] == ![] //true

valueOf()的作用是将包装类对象转换为原始类型，因为通过new创建的都是对象。


# 4. == 和 === 的区别？
- == 是比较两个值的大小，如果两个值的类型不一致，会先进行类型转换，再比较大小。
- === 是比较两个值的大小和类型，如果两个值的类型不一致，不会进行类型转换，直接返回false。


# 5. 深浅拷贝的区别？如何实现一个深拷贝？
- 深浅拷贝通常只针对引用类型，深浅拷贝一般不拷贝隐式具有的属性(原型上的属性)

- 浅拷贝：只拷贝一层对象，复制这一层对象中的原始值，如果有引用类型的话，就复制它的引用地址
    Object.assign()(跟concat差不多)
    [].concat(Array)
    Array.slice(0, array.length)
    Array = [...array]

- 深拷贝：层层拷贝，所以类型的属性值都会被复制，原对象的修改不会影响拷贝后的对象
    JSON.parse(JSON.stringify(array))
    深拷贝里只有上面一种方法，但存在缺陷，无法处理 undefined symbol function 和 循环引用

    实现深拷贝的函数方法：1、递归 2、structureClone 3.messageChannel(此方法可以处理循环引用) 
    js自带的一个新方法，但兼容性不是很好，不推荐使用
    obj2 = structureClone(obj1) 不能拷贝symbol function
