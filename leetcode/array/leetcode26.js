var nums = [1,1,2]
//输出：2, nums = [1,2,_]

// var removeDuplicates = function(nums) {
//     for(let i = 1;i<nums.length;i++){
//         if(nums[i] == nums[i-1]){
//             nums.splice(i,1)
//             i = i-1
//         }
//     }
//     return nums
// };


//双指针（快慢指针）
var removeDuplicates = function(nums) {
    var i = 0
    for(var j = 0;j < nums.length;j++){
        if(nums[i] !== nums[j]){
            i++
            nums[i] = nums[j]
        }
    }
    return i + 1 
};