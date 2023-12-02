function a() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('相亲');
            resolve('相亲成功')
        }, 2000) 
    })  
}

function b() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('结婚');
            resolve()
        }, 1000)
    })
    
}

function c() {
    console.log('生娃');
}

// 本质上跟promise.then没有区别
// 一个函数前面加了async === return new Promise((resolve, reject) => {})
// await === .then
async function foo() {
    await a()
    await b()
    c()
}
foo()