//函数要注意什么？
// 编写一个函数，返回一个美国座机格式的电话号码  （123）4567-890
// 输入是数字数组  [1,2,3,4,5,6,7,8,9,0]
//不要急于写功能，先写注释
//大厂：代码的可读性比功能重要一个等级
// 不用的代码，看完注释可以拿来就用
/**
 * @func 返回美国格式的座机号
 * @param {ARrray} nums [1234567890]
 * @returns {String} (123)4567-890
 * @author 名字 2021/10/31（日期）
*/
function createPhoneNumber(nums) {
    return "(" + nums[0] + nums[1] + nums[2] + ")" +nums[3] + nums[4] + nums[5] + "-" + nums[6] + nums[7] + nums[8] + nums[9]
}

console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]));