//函数体
// function fn(a) {
//     console.log(a); // 
//     var a = 123
//     console.log(a); // 
//     function a() {}
//     console.log(a);  // 
//     var b = function() {}   // 函数表达式
//     console.log(b);  // 
//     function d() {}
//     var d = a
//     console.log(d);  // 
//   }
//   fn(1)

//全局
global = 100
function fn() {
  console.log(global);
  global = 200
  console.log(global);
  var global = 300
}
fn()
var global