# js 是单线程
导致代码是一步执行

# 回调函数
- 回调地狱：不会爆栈，但代码维护异常困难


# Promise
1. Promise 实例对象后面可以接 .then() then中回调的执行取决于promise中的resolve有没有生效
2. resolve(参数) ，参数会传递给then中的回调函数