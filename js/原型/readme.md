# 原型（显式原型）
1. 定义：原型是一个函数天生具有的属性 （prototype），它定义了构造函数制造出来的对象的公共祖先。通过该构造函数的对象，可以隐式的继承原型上的属性和方法

2. 意义：可以提取共有属性，简化代码执行
3. 原型上的属性修改只能原型自己操作，实例对象无权修改


# 对象原型（隐式原型）
实例对象的隐式原型一定等于构造函数的显式原型


new 的步骤
1. 创建this对象
2. 执行构造函数里面的逻辑
3. 让this的隐式原型赋值成构造函数的显式原型
4. 返回this

# 原型链
顺着对象的隐式原型不断地向上查找上一级的隐式原型，直到找到目标或者null，这种查找关系叫做原型链


# 网易面试题
所有对象身上都有隐式原型（X）
如：
let c = Object.create(null)
绝大多数的对象身上都有隐式原型


！[https://img2018.cnblogs.com/blog/939316/201809/939316-20180927095306645-1975780154.png]