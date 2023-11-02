// 不用递归， for 循环
// 自底向上 递归 dp 动态规划
const climbStairs = function (n) {
    const f = [];   // 记忆优化
    f[1] = 1;
    f[2] = 2;
    for(let i = 3 ; i <= n ; i++){
        // 递归公式
        f[i] = f[i - 1] + f[i - 2];
    }
    return f[n]
}