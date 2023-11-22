function bubbleSort(){
    let len = arr.length;   // 性能优化，缓存数组长度
    for(let i = 0; i < len; i++) {  // len轮
        // j < len - i - 1  之前轮次的不用进行比较
        for(let j = 0; j < len - i - 1; j++) {  // 本轮的最大值到最右边
        if(arr[j] > arr[j+1]) {     //相邻元素交换位置
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        }
        }
    }
    return arr
}
// 待排序  从小到大
const arr = [5, 8, 6, 3, 9, 2, 1, 7]
bubbleSort()