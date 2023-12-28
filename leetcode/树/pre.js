let root = {
    val: 'A',
    left: {
        val: 'B',
        let: {
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


function preOrder(root) {
    if(!root) return []

    let res = []
    res.push(root.val)
    let resL = preOrder(root.left)
    let resR = preOrder(root.right)

    return res.concat(resL, resR)
}

console.log(preOrder(root));