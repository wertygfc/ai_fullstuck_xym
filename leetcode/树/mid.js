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


function midOrder(root) {
    if(!root) return []
    let res = []

    let resL = midOrder(root.left)
    res.push(root.val)
    
    
    let resR = midOrder(root.right)

    return resL.concat(res, resR)
}

console.log(midOrder(root));