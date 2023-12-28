let root = {
    val: 'A',
    left: {
        val: 'B',
        left: {
            val: 'D'
        },
        right: {
            val: 'E'
        }
    },
    right: {
        val: 'C',
        left: null,
        right: {
            val: 'F'
        }
    },
}

// 合理安排入栈和出栈的顺序
var preorderTraversal = function(root) {
    if (!root) return []
    const res = []
    let stack = []
    stack.push(root)

    while (stack.length > 0) {
        let cur = stack.pop()
        res.push(cur.val)
        if(cur.right){
            stack.push(cur.right)
        }
        if(cur.left){
            stack.push(cur.left)
        }
    }
    

    return res
};

console.log(preorderTraversal(root));