// var obj = {
//     a:1
// }
// var foo = () => {   //箭头函数没有this,this是外层的
//     console.log(this.a);    //undefined
// }
// foo.call(obj)

// var bar = function(){
//     console.log(this.a);    //1
// }
// bar.call(obj)


function foo() {
    var bar = () => {
        console.log(this);
    }
    bar()
}
foo.call(obj)