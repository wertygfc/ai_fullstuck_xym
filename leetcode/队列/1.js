// let arr = [1, 2, 3]
// arr.splice(1, 0, 'abc')


// queue  先进先去  只有push 和shift 方法的数组

const queue = []
queue.push('辣椒炒肉')
queue.push('辣椒炒辣椒')
queue.push('辣椒炒蛋')

while(queue.length){    // length是数组的属性
    const top = queue.shift()
    console.log('今晚吃：' + top);
}
