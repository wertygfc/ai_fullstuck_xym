
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

var obj = {
    a: 1,
    b: 2,
    c: 3,
}

//我们要把obj立面所有元素都加1
obj.a = 2
obj.b = 3
obj.c = 4


with(obj) {
    a = 2,
    b = 3,
    c = 4
}
function foo(obj) {
    with(obj){
        a = 1
    }    
}
var o1 = {
    b: 3
}
foo(o1)
console.log(o1);

