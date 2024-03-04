
nums1 =[1,3]
nums2 =[2]

var findMedianSortedArrays = function(nums1, nums2) {
    let num = (nums1.concat(nums2)).sort()
    console.log(num);
    let index = num.length % 2
    console.log(index);
    let middle = 0
    if(index == 1){
        middle = num[num.length / 2]
    }else{
        middle = (num[num.length / 2 + 1] + num[num.length / 2]) / 2
    }
    console.log(middle);
    return middle
};

console.log(findMedianSortedArrays(nums1, nums2));