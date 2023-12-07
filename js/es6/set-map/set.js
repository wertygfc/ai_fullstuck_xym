// set 对象 对象成员是唯一的

// let s = new Set([1,1,2,2,3,3])
// console.log(s);     // {1,2,3}

console.log(s[1]);  // 数组读值 但set不是数组 结果是undefined
console.log(s['1']);  // 对象读值 但set不是对象 结果是undefined
console.log(s.size);    // 3


let arr = [1,1,2,2,3,3]
let newArr = [...new Set(arr)]
console.log(newArr);    // [1, 2, 3]

// set对象有增删查但没有改，还有清空
let s = new Set([1, 2, 3])
s.add(4)    // 增加
s.delete(1) // 删除
s.has(1)    // 判定是否有该值
s.clear()   // 清空
console.log(s);

// set遍历方法有forEach,for没法遍历，因为set介于对象是数组之间没有下标
// dorEach()在es5是数组独有的方法，但现在set也有
s.forEach((value, key, s) => {
    console.log(value, key, s);
})

// for in 用于遍历数组的
// for of 用于遍历具有迭代器属性（Iterator）的结构
// s.value()方法的作用是将里面所有value以类数组的形式返回
for(let value of s.value()){
    console.log(value);
}

// set对象里面key和value是一样的
for(let value of s.key()){
    console.log(value);
}


for(let item of s.entries()){   // s.entries() === [[1,1],[2,2],[3,3]]  // [key, value]
    console.log(value);     
}