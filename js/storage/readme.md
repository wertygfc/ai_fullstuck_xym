实现一个Storage（存储），使得该对象为单例（只会被实例化一次的类），基于LocalStorage封装，实现方法setItem(key.value)，和getItem(key)

- localStorage 只要不手动删除，一直在
    属于 domain domain涉及安全问题

- 单例
    class + static
    构造函数 + 闭包

- 在做单例的登录弹窗功能时，不要将login html写在原html里，宁愿在js里多谢代码，推迟到真正登录时，再去添加，有利于首页的加载速度，优化了性能，80%用户可能从来就不登录