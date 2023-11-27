// [1, 2, 3].forEach((item) => {
//     console.log(item);
// })



// 遍历 iterator
// callback 第一个参数
// 执行的时候，默认传给它的第一个参数是我们数组遍历的当前项
console.log([1, 2, 3].map((item) => item*item));    // [ 1, 4, 9 ]
console.log([1,2,3].map((parseInt)));     // [ 1, NaN, NaN ]
