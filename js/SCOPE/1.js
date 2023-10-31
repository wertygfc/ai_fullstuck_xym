
// if(1){
//     var a = 1
// }
// console.log(a);
// //输出：1


// if(1){
//     let a = 1
// }
// console.log(a);
// //输出：报错


// let a=1
// if(true){
//     console.log(a);     //暂时性死区
//     let a = 2
// }
// //输出：报错


// function foo(str){
//     eval(str)   //var b = 2
//     var a = 1
//     console.log(a,b);
// }
// foo('var b = 2')

// var obj = {
//     a: 1,
//     b: 2,
//     c: 3,
// }

// //我们要把obj立面所有元素都加1
// obj.a = 2
// obj.b = 3
// obj.c = 4


// with(obj) {
//     a = 2,
//     b = 3,
//     c = 4
// }
// function foo(obj) {
//     with(obj){
//         a = 1
//     }    
// }
// var o1 = {
//     b: 3
// }
// foo(o1)
// console.log(o1);



/**
 * @param {number[]} nums
 * @return {number[][]}
 */


nums = [-1,0,1,2,-1,-4]
//输出：[[-1,-1,2],[-1,0,1]]
var threeSum = function(nums) {
    var res = []
    for( var i = 0;i<nums.length;i++){
        for(var j = 0;j<nums.length;j++){
            for(var k = 0;k<nums.length;k++){
                if(i != j && i != k && j != k && nums[i] + nums[j] + nums[k] == 0){
                    res.push([i,j,k])
                    return res
                }
                return res
            }
        }
    }


    // nums = nums.sort()
    // for(var i = 0; i < nums.length; i++){
    //     if(i < 3 ){
    //         return undefined
    //     }
    // }

};