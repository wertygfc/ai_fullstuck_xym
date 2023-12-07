// 函数剩余的参数   rest
function bar(...args){  // 三个点叫剩余的参数，这边不是解构，只是刚好一样
    // console.log(arguments[0]);
    console.log(args);
}

// bar(args)