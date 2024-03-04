var str = 'hello world' //string 字符串
var num = 123  //number 数字
var flag = false    //boolean 布尔
var un = undefined  //undefined是指有变量但没有值
var n = null    //没有这个变量


//引用类型（复杂类型）  对象
var obj = {
    name: '洋洋',
    age: 18,
};
//console.log(obj.name)

//数组  （可以说是特殊的对象）
var arr = ['a','b',2,'d',{a: 1}]
arr.push(true)  //往数组末尾加值
arr.pop()   //吧数组末尾值去掉
arr.unshift('hrrlo')    //往数组头部加一个字符串
arr.shift()     //往数组头部删除
arr.splice(2,1)    //删除任意一个元素，第一个参数是要删下标为几的元素，第二个参数是要删几个，如果不写第二个参数，则该函数会把这个下标的元素之后的都删了
arr.splice(2,0,false)   //写两个参数是删除，写三个参数是增加
arr.slice(2,4)      // 对数组进行切片（左闭右开） 输出结果：[2, 'd'] 返回的是一个新数组，不会影响原数组
//console.log(arr[0])


for(var i = 0;i<arr.length;i++){  //遍历
    arr[i] = arr[i] + 1
}

arr.forEach(function(item,index,arr){ //回调
    arr[index] = item + 1
})

var arr = new Array(4).fill(1)   //Array()也是函数

