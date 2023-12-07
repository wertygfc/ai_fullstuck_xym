let arr = [2, 4, 5, 1, 3]

// arr.sort( (a, b) => {
//     return a - b // a-b是升序  b-a是降序 
// })

// 时间复杂度 和 空间复杂度 较大
// function bubbleSort(arr){
//     const res = []
//     while(arr.length){
//         let min = Math.min(...arr)
//         res.push(min)
//         let index = arr.indexOf(min)
//         arr.splice(index, 1)
//     }
//     return res
// }

// 冒泡排序  时间复杂度O(n^2)
function bubbleSort(arr){
    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            if(arr[i] > arr [j]){
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return arr
}


console.log(bubbleSort(arr));