// var a = 1
// function foo () {
//     console.log(this.a);    // 1
// }

// function bar() {    // bar 的词法作用域是window
//     var a = 2
//     foo()   // foo 是在bar 的作用域中调用，但是此时必须要知道bar的词法作用域
// }
// bar()




function foo(){

    function bar (){
        console.log(this);
    }
    bar()
}
foo()