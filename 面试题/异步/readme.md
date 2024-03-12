## 说一说异步的发展史
1. 回调 回调地狱（嵌套过深后，代码维护困难，排查错误困难。）

2. Promise

3. generate
- 可以分段执行，可以暂停
- 可以知道是否执行完毕
- 可以控制每个阶段的返回值的

4. async/await === promise + generate
- 原理：generate控制异步的实行是靠promise的状态变更来手动控制next的执行，async/await的优雅型的原理体现在可以自动的执行generate函数中的next，控制yield的释放，主要的实现方式就是递归调用next，next的执行结果需要是一个promise对象，next的递归调用应该在上一个next执行结果的promise状态变更为fulfilled后才递归，这样就能实现上一个yield后面的语句彻底执行出结果后才执行下一个yield，也就是实现了await的效果