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


# 6. 说说你对闭包的理解？
- 是什么
    当一个函数中的内部函数被拿到函数外面调用，又因为在js中，内层作用域总是能访问外层作用域的，那么内部函数存在对外部函数中变量的引用，这些变量的集合称之为闭包

- 使用场景
1. 创建私有变量。因为全局变量不易维护，例如，当全局的一个变量和一个函数的形参相同时，但你忘了往这个函数里传参数，这是就会把全局的那个变量传进去。
2. 延长变量的生命周期
3. 实现柯里化（颗粒化）

- 缺点：会造成内存泄漏


# 7. 什么是柯里化（颗粒化）？
- 是什么
    将一个接受多个参数的函数转变成多个只接受一个参数的函数

    function add(a, b, c) {
        return a + b + c
    }
    add(1, 2, 3)

    function add(a){    // 柯里化
        return function(b){
            return function(c){
                return a + b + c
            }
        }
    }
    const sum = add(1)(2)(3)


# 8. 说说你对作用域的理解？
- 是什么
    变量和函数能够生效的区域，这个区域叫作用域

- 有哪些
1. 全局作用域
2. 函数作用域
3. 块级作用域

- 作用域链
    作用域只能从内到外的访问，这种访问规则形成的链状关系叫做作用域链

- 词法作用域
    是指变量或函数定义的区域


# 9. 说说你原型的理解？
- 是什么
    显示原型指的是函数身上自带的 prototype 属性（但箭头函数不带这个属性），通常可以将一些属性和方法添加在显示原型上，可供实例对象继承
    隐式原型 __proto__ 是对象这种结构上的属性，其中包含了创建该对象是，隐式继承到的属性

- 原型链
    创建一个实例对象时，实例对象的隐式原型等于创建该对象的构造函数的显示原型，在js中对象的查找规则是先在对象中查找，找不到再去对象的隐式原型上查找，顺着隐式原型一层层往上找，直到找到null为止，这种查找规则叫做原型链

- 可用来实现属性的继承


(Array.from() Array.isArray(*)这两个方法只放在了构造函数身上，不放在原型上，所以实例对象访问不到)


# 10. 说说js中的继承？
- 是什么
    在js中，继承指的是让一个子类可以访问父类的属性和方法

- 有几种方式
    - 函数继承
    1. 原型链继承
        1. 无法给灵活父类传参
        2. 实例对象无法修改父类的属性和方法，但能通过访问从父类继承的属性改属性身上的方法修改值，所以多个实例对象的属性之间可能存在影响。（其实就是多个实例对象共用了同一个原型对象，会存在属性相互影响）
    2. 构造函数继承
        只能继承到父类身上的属性，无法继承父类原型上的属性
    3. 组合继承（经典继承）
        存在多次父类函数的调用，多造成了性能开销。能解决给父类灵活传参的问题
    - 对象继承
    4. 原型式继承
        1. 因为是浅拷贝，父类中的引用类型在子类中共用了，所以会相互影响
        2. 子类无法添加默认属性（就是无法在拷贝中添加属性）
    5. 寄生式继承
        （为了优化上面那个问题）
    6. 寄生式组合继承
    7. ES6 的 class 继承    
        原理跟寄生式继承一样，但需要考虑兼容性问题


# 11. 说说js中的this
- 是什么
    this是函数在运行过程中自动生成的一个对象，用来代指作用域的指向
- 绑定规则
    1. 默认绑定：当函数被独立调用时，函数的this指向window。(函数的词法作用域在哪里，thhis就指向那个词法作用域)
    2. 隐式绑定：当函数被一个对象所调用时，函数的this指向该对象
    3. 隐式丢失：当函数调用前有多个对象，函数的this指向最近的对象
    4. 显示绑定: call,apply,bind
    5. new绑定：this指向实例对象
- 箭头函数：
    箭头函数中的this是它外层的非箭头函数的，指向也按照上述的绑定规则


# 12. 说说new的实现原理
    先创建一个对象，然后把他的隐式原型等于构造函数的显示原型，之后将构造函数的this显示绑定到该对象上，最后返回该对象
    要是构造函数中有返回值，且为引用类型时，会覆盖new当中的返回值


# 13. call,apply,bind的原理


# 14. 说说js中的事件模型
- 什么是事件流

- 分类
    1. DOM0级别     onclick (无法控制事件在捕获冒泡哪个阶段执行)
    2. DOM1级别     addeventListen  (可以控制事件在哪个阶段执行)
    3. IE级别       arrachEvent(无法控制事件在捕获冒泡哪个阶段执行)

    element.addEventListener('click', myFunction, true); // 捕获流
    element.addEventListener('click', myFunction, false); // 冒泡流



# 15. 说说typeof和instanceof的区别
- typeof 
    除了null之外的所以原始类型都能判断，还能判断function
    原理：通过二进制判断，如果前面三个值都是0那就是对象，但因为null的二进制都是0，所以被错误判断
- instanceof
    能判断引用类型但不能判断原始类型，因为原始类型没有原型，所以不能判断原始类型
    原理：通过原型链来判断，判断前者的隐式原型是都等于后者的显示原型，如果不等，会继续顺着前者的原型链往上找，直到找到头
- Object.prototype.toString.call()
    1. [].toString() // '' (数组上的toString方法)
    2. Object.prototype.toString.call([])
    该方法会让变量x调用对象上的的toString，而toString返回值为 '[object Object]'
- Array.isArray()
    只能判断一个变量是不是数组


# 16. 说说Ajax的原理
- 是什么
    Async javaScript and XML ，是一种异步的js和网页交互的技术，可以实现不刷新网页就跟服务器交换数据，更新页面
- 实现过程
    1. 创建XHR对象
    2. 调用实例对象中的open方法与服务器建立连接
    3. 调用实例对象中的send方法发送请求
    4. 监听onreadystatechange事件，通过判断readyState的值来获取最终的数据
    5. 将数据更新到页面


# 17. 怎么实现上拉加载下拉刷新的问题
1. 监听 touchstart touchmove touchend 事件，再记录手指移动的距离，大于临界值时实现刷新操作，其中使用transform : tranlateY 来添加各处的动画
2. 根据手指滑动的方向和容器顶部或底部到屏幕的距离来确定此时该执行上拉加载更多还是下拉刷新


# 18. 防抖节流


# 19. 事件代理（事件委托）
    通常用于多个子容器需要绑定相同的事件时，直接将该事件绑定父容器去，通过事件参数的target来查看是通过哪个子容器冒泡到父容器中


# 20. 事件循环
- 是什么
    js引擎在执行js的过程中，会区分同步和异步代码，先执行同步再执行异步，异步中同样按照先执行同步再执行异步，以此往复的循环
    - 异步
    1. 宏任务 script, setTimeout, setInterval, setImmediate, I/O(input/output), UI-rendering(页面的渲染), postMassage, messageChannel
    2. 微任务 promise(同步)中的.then(),MutationObeserver(js自带，监听一个docment结构是否变更), nextTicke(node)

    - Event-Loop
    1. 执行同步代码（这属于宏任务）
    2. 执行微任务
    3. 如果有需要，会渲染页面
    4. 执行宏任务（下一次Event-Loop的开始）



# WeakMap、Map、Set 和 WeakSet
WeakMap、Map、Set 和 WeakSet 是 JavaScript 中的四种集合类型，它们各自有不同的特点和用途。

1. Map（映射）:
   - Map 对象保存键值对，并且能记住键的原始插入顺序。任何值（对象或者原始值）都可以作为一个键或一个值。
   - Map 中的键是唯一的，如果重复设置相同的键，则后面的值会覆盖前面的值。
   - 与普通的对象相比，Map 提供了更好的性能和更直观的 API。

2. Set（集合）:
   - Set 对象是一组唯一值的集合，其中每个值只能出现一次。
   - 可以用来去除数组中的重复元素，或者用来检查某个值是否存在于集合中。

3. WeakMap（弱映射）:
   - WeakMap 对象是一种特殊的 Map 对象，其中的键只能是对象，而值可以是任意值。
   - 与普通的 Map 不同的是，WeakMap 中的键是弱引用的，这意味着如果一个键不再被引用，它会被垃圾回收机制自动移除，这样有助于防止内存泄漏。

4. WeakSet（弱集合）:
   - WeakSet 对象是一种特殊的 Set 对象，其中的值只能是对象。
   - 与普通的 Set 不同的是，WeakSet 中的值是弱引用的，当值不再被引用时，它也会被垃圾回收机制自动移除。

总的来说，Map 和 Set 是常规的集合数据结构，而 WeakMap 和 WeakSet 则是弱引用版本，用于存储对象的引用并在不再需要时自动清理。弱引用的特性使得它们在某些场景下更加适用，例如缓存或监听器管理等。


# es6 新语法
    - class 
    - promise 
    - 箭头函数 
    - 解构 
    - let/const 
    - proxy 
    - es6模块化 
    - 模版字符串 
    - async/await