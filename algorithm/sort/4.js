function bubbleSort(){
    console.time('改进冒泡排序')
    const length = arr.length
    if(length <= 1 ) return 
    // 也许不需要执行那么多轮，提前已排好了 优化外层排序
    for(let i = 0; i < length - 1; i++){
        let isSorted = true
        for(let j = 0;j < length - i - 1; j++ ){
            if(arr[j] > arr[j + 1]){
                [arr[j], arr[j + 1] = [arr[j + 1], arr[j]]]
                isSorted = false
            }
        }
        if(isSorted){
            break
        }

    }
    console.time('改进冒泡排序');
    return arr
}
const arr = [5, 8, 6, 3, 9, 2, 1, 7]
bubbleSort(arr)