// let obj= {
//     namw: ''
// }


// function foo() {
//     var a = 1
//     console.log(this.a);
// }
// foo()





function identify() {
    return this.name.toUpperCase()
}

function speek() {
    var greeting = "Hello, I'm " + identify.call(this)
    console.log(greeting);
}
var me = {
    name: 'Tom'
}
speek.call(me)