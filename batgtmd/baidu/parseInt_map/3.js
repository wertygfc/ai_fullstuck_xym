const ages = [32, 15, 19, 12]
// 遍历
// 条件筛选 callback 做 符合条件的这一部分
// const adultPerson = ages.some(age => {
//     return age >= 18
// })

const adultPerson = ages.some(age => age >= 18)     // 遍历所有元素只要有一个元素满足条件就返回true
const allOldEnought = ages.every(age => age >= 19)      // 遍历所有元素只要有一个元素不满足条件就返回false
const adultAge = ages.filter(age => age >= 18)  
// 如果该元素小于18岁，则返回true，否则返回false。最终，filter()方法会返回一个新数组，其中包含所有符合条件的元素。

console.log(adultAge);