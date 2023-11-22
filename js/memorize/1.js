function sum(a, b){

    // 让伪数组转成数组
    // console.log([...arguments]);
    // const arr = Array.from(arguments)
    console.log(Array.prototype.join.call(arguments, '-'));

    // 参数数量？  this  arguments   都是在函数运行的时候才有
    console.log(a, b, arguments[0], arguments[1]);
    console.log(typeof arguments,Object.prototype.toString.call(arguments));
    console.log(arguments.join('--'));
    if(arguments.length != 2){
        throw new Error('必须传递两个参数')
    }
    var sum = a + b
    return sum
}
try{
  console.log(sum(1, 2))  
}catch(e){
    console.log(e);
}
console.log('continue....');