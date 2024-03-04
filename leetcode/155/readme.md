# 最小栈

- O(1) 找到栈中最小元素
    栈顶操作和遍历的矛盾
- 变异数据结构编程题
    class   MinStack
    push    pop    getMin
    不限于一个栈

    min | arr + stack
    最小值出栈后，最小值也要更换

    两个栈解决问题
        普通栈 + 单调递减（上面小，下面打）栈
