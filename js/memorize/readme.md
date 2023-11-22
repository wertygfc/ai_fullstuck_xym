# 两数相加

- 伪数组    Arguments
    Object.prototype.toString.call(arguments)   '[Object Arguments]'
    有length属性，可以通过下标访问，但不是真正的数组，没有join()等方法
    永久
    - Array.from(arguments)
    - [...arguments]
    临时
    - Array.prototype.join.call(arguments, '--')

- 永远不要相信用户，要校验参数，代码一定要健壮
- var obj = {a: 1}
    内存存的 头部前三位表示数据类型 000 二进制 刚好null的开头也是000

- 递归
    - 自顶向下解决问题
        依赖不停地函数入函数执行栈解决问题
    - 解决重复计算
        memorize
    - 不能被允许的问题
    - js 优点
        cache 就不在全局了，因为有闭包