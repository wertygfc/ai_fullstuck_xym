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

a()
.then((res) => {
    return b()
})
.then(() => {
    c()    
})
