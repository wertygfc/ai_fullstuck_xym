# 进程 & 线程
- 进程是指cpu运行指令和保存上下文所需的时间
- 线程是进程中更小的单位指的是一段指令执行所需的时间


# 浏览器新开一个tab页（进程）
- 渲染线程
- http请求线程
- js引擎线程

- 线程之间是可以一起工作的
- 但是渲染线程和js引擎线程一定是互斥的

# JS 是单线程的
优点：
1. 节约内存
2. 没有锁这个概念，节约了上下文切换的时间



# 异步
- 宏任务(macrotask)：script, setTimeout, setInterval, setImmediate, I/O, UI-rendering
- 微任务(microtask)：promise.then(), MutationObeserver, process.nextTicke()



# Event-loop
1. 执行同步代码（这属于宏任务）
2. 当执行栈（调用栈）为空，查询是否有异步需要执行
3. 执行微任务
4. 如果有需要，会渲染页面
5. 执行宏任务（下一次event-loop的开始）

在同一次中，微任务一定优先于宏任务（X）
第一步就是宏任务