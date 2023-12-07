// console.log(a);
// var a = 1


// var b = 2
// var b = 3
// console.log(b);


// const a = 1
// a = 2
// console.log(a); // 报错，常量不能修改

// const 定义的原始类型是不能改值的，定义的引用类型是不能改引用地址
const obj = {
    a: 1
}
obj.a = 2   // 这边不报错
console.log(obj.a); // 2