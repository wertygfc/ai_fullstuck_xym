// let count = 0

var fibonacci = function(n){    // 暴击破解法
    // count++
    return n < 2? n : fibonacci(n - 1) + fibonacci(n - 2)
}
function memorize(f){   // 记忆函数法
    if(typeof f !== 'function') return 
    var cache = {}  // 空间换时间   自由变量（不会被销毁，永远存在）
    return function (){
        var key = arguments.length + Array.prototype.join.call(arguments, ',')
        // add
        if(key in cache){
            return cache[key]
        }else{
            // var res = f.apply(this, arguments)  //  f(...arguments)
            // cache[key] = res
            // return res

            return cache[key] = f.apply(this, arguments)
        }
    }
}
console.time("fibonacci")
fibonacci = memorize(fibonacci)
// console.log(fibonacci(3000))
// console.log(count);
console.timeEnd('fibonacci')