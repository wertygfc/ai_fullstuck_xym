// 构造函数上的this和原型上的this是同一个
var MyQueue = function() {
    this.stack1 = []    //  this指向实例对象
    this.stack2 = []
};

MyQueue.prototype.push = function(x) {
    this.stack1.push(x)
};

MyQueue.prototype.pop = function() {
    // 把栈1倒入栈2
    if(!this.stack2.length){
        while(this.stack1.length){
            this.stack2.push(this.stack1.pop())
        }
    }
    return this.stack2.pop()
    
};


MyQueue.prototype.peek = function() {
    // 把栈1倒入栈2
    // if(!this.stack2.length){
    //     while(this.stack1.length){
    //         this.stack2.push(this.stack1.pop())
    //     }
    // }
    // return this.stack2[this.stack2.length - 1]


    const val = this.pop()
    this.stack2.push(val)
    return val

};


MyQueue.prototype.empty = function() {
    return !this.stack1.length && !this.stack2.length
};

let q = new MyQueue
q.push(1)
q.push(2)
q.push(3)
q.pop()

