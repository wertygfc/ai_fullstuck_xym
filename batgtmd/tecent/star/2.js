/** 
*  @func 获得文章的点赞描述
*  @params ( Array )   names 点赞的人的名字数组
*  @returns ( string ) 描述
*  @author cyy 2023/10/31 腾讯商业部
*/
// 驼峰式命名法，强调可读性
function getPostLikes(names){
    // JS var   let const
    const templates = [
        '暂无人点赞',
        '{name}点赞了这篇文章',
        '{name}和{name}点赞了这篇文章',
        '{name}、{name}和{name}点赞了这篇文章',
        '{name}、{name}和{n}个人点赞了这篇文章',
    ]
    //Math js 内置的数学对象
    let idx = Math.min(names.length, 4);
    //用户数量对应的模板
    //正则表达式    规则    / 规则 /
    // g 修饰符 global 全局匹配
    return templates[idx].replace(/{name}|{n}/g, function(val){
        return val === '{name}' ? names.shift() : names.length;
    })
}

// console.log(getPostLikes([]));
// console.log(getPostLikes(['b']));
// console.log(getPostLikes(['b','c']));
// console.log(getPostLikes(['b','c','d']));
// console.log(getPostLikes(['b','c','d','e']));
