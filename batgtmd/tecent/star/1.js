/** 
*  @func 获得文章的点赞描述
*  @params ( Array )   names 点赞的人的名字数组
*  @returns ( string ) 描述
*  @author cyy 2023/10/31 腾讯商业部
*/
// 驼峰式命名法，强调可读性
function getPostLikes(names) {
    switch(names.length) {   //如何if else超过三个分支，建议用switch
        case 0:
            return '暂无人点赞';
        case 1:
            //es6 字符串模板，可以不用 + 来连接
            //return ``
            return `${names[0]}点赞了这篇文章`;
        case 2:
            return `${names[0]}和${names[1]}点赞了这篇文章`;
        case 3:
            return `${names[0]}、${names[1]}和${names[2]}点赞了这篇文章`;
        default:
            return `${names[0]}、${names[1]}和${names.length - 2}个人点赞了这篇文章`;
    }
}
console.log(getPostLikes([]));
console.log(getPostLikes(['b']));
console.log(getPostLikes(['b','c']));
console.log(getPostLikes(['b','c','d']));
console.log(getPostLikes(['b','c','d','e']));
