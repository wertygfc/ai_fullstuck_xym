function foo(x, y){
    console.log(this.a,x + y);
}
var obj = {
    a: 1
}
// foo.call(obj, 4, 5)
foo.apply(obj,[4, 5])
//call是零散接受参数，apply是用数组接受参数
let bar = foo.bind(obj)
bar(4, 5)
//bind方法会返回一个函数体