function add(a, b){
    if(arguments.length !== 2){
        throw new Error('参数有误')
    }
    if(typeof a !== 'number' || typeof b !== 'number'){
        throw new Error('必须是整数')
    }
    return a + b
}

// 记忆函数 百搭的
function memorize(f){
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

const memorizedAdd = memorize(add)
console.log(memorizedAdd(1, 2));
console.log(memorizedAdd(1, 2));
