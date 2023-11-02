//怎么解决递归带来的内存问题
// 递归的有点是什么？   简单，但性能不好（耗内存）
// 如果不忘执行栈里push太多函数
// 有两种方法
            //          10
            //     9         8
            // 8       7 7       6
// 入栈过的函数是没必要入栈的——记忆法
const f = [];   //全局
const climbStairs = function (n) {
    // 退出条件
    if(n == 1) return 1;
    if(n == 2) return 2;
    if(f[n] === undefined){ //第一次，也就是这个值之前还没算过的时候
        //  函数嵌套函数
        f[n] = climbStairs(n - 1) + climbStairs(n - 2);  //递归公式
    }
    return f[n];
}
