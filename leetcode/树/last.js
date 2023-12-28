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


function lastOrder(root) {
    if(!root) return []
    let res = []

    let resL = lastOrder(root.left)
     
    let resR = lastOrder(root.right)
    res.push(root.val)

    return resL.concat(resR, res)
}

console.log(lastOrder(root));