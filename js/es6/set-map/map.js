// map 对象

// let arr = ['a','b','c','d','e']

// // 数组上的map方法，用于将数组中的每一项修饰完毕后存入新的数字并返回
// // forEach()不创建新数组

// let newArr = map((item, index, arr) => {
//     return item + 1
// })



// object对象数据结构中，key只能是字符串
let arr = ['hello']
let obj = {
    a: 1,
    // arr: 2  // 写法错误，不能这样写
}
obj[arr] = 2


// 创建map对象只有new这一个方法，没有创建自变量的方法
// let m = new Map([
//     ['name', 'yy'],
//     ['age', 18]
// ])


let m = new Map()
m.set('a', 1)   //增加
m.get('a')  //读取值，注意set没有读取值的方法
m.delete('a')   // 删除
m.has('a')  // 判定有没有该值
m.size()    // 读取map对象的长度
m.set({}, 1)


// 遍历map对象  四种方法
m.forEach((value, key, m) => {
    console.log(value, key);
})

for(let val of m.values()){
    console.log(val);
}

for(let val of m.keys()){
    console.log(val);
}

for(let item of m.entries()){
    console.log(item);
}