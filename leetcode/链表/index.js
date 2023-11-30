let arr = [1, 2, 3, 4, 5, 6, 7, 8]      // 有序、线性且连续

// {
//     val: 1,  // 数据域
//     next: {  // 指针域
//         val: 2,
//         next: ...
//     }
// }

function ListNode(){
    this.val = val
    this.next = null
}
let node1 = new ListNode(1)
node1.next = new ListNode(2)
node.next.next = new ListNode(3)

//增加节点3
node3.next = node1.next
node1.next = node3
let node3 = new ListNode(3)
node.next.next = new ListNode(3)

// 删除中间的节点
const target = node1.next   
node1.next = target.next    // 将节点一的指针指向节点三，并没有删除原先的连个指针，只是重新附上去了


// 数组中增加或删除一个元素会导致n个元素移动，时间复杂度为O(n)
// 链表的增删一个元素时间复杂度为O(1)