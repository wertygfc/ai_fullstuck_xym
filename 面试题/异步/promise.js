class myPromise{
    constructor(executor){
        this.state = 'pending'
        this.value = undefined
        this.reason = undefined
        this.onFulfilledCallback = []   // 装.then中的回调
        this.onRejectedCallback = []    // 装.catch中的回调和.then中的第二个回调

        const resolve = (value) => {
            if(this.state === 'pending'){
                this.state = 'fulfilled'
                this.value = value
                // then的回调在这里触发
                this.onFulfilledCallback.forEach(callback => callback(value))
            }
        }
        const reject = (reason) => {
            if(this.state === 'pending'){
                this.state = 'rejected'
                this.reason = reason
                // catch的回调在这里触发
                this.onRejectedCallback.forEach(callback => callback(reason))
            }
        }
        executor(resolve, reject)
    }
    then(onFulfilled, onRejected){
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
        onRejected = typeof onRejected === 'function' ? onRejected : reason => {throw reason}

        const newPromise = new myPromise((resolve, reject) => {
            // 这边this是then的，指向实例对象的
            if(this.state === 'fulfilled'){ // then前面的对象状态已经变更完成
                setTimeout(()=>{    // 这里将then变成了异步中的宏任务，因为官方的微任务过于复杂，没法模拟
                    try {
                        const result = onFulfilled(this.value)
                        resolve(result)
                    } catch (e) {
                        reject(e)
                    }
                })
            }
            if(this.state === 'rejected'){ 
                setTimeout(()=>{    // 这里将then变成了异步中的宏任务，因为官方的微任务过于复杂，没法模拟
                    try {
                        const result = onRejected(this.value)
                        resolve(result)
                    } catch (e) {
                        reject(e)
                    }
                })
            }
            if(this.state === 'pending'){
                this.onFulfilledCallback.push((value) => {
                    setTimeout(() => {
                        try {
                            const result = onFulfilled(this.value)
                            resolve(result)
                        } catch (error) {
                            reject(error)
                        }
                    })
                })
                this.onRejectedCallback.push((reason) => {
                    setTimeout(() => {
                        try {
                            const result = onRejected(this.value)
                            resolve(result)
                        } catch (error) {
                            reject(error)
                        }
                    })
                })
            }
        })
        return newPromise
    }

    catch(onRejected){
        return this.then(null, onRejected)
    }
    // 接受一个数组，数组中的promise对象谁先发生状态变更，race就耕者变更状态
    static race(promises){
        return new myPromise((resolve, reject)=>{
            promises.forEach(promise => {
                // promises的状态是不是fulfilled
                promises.then(
                    (value) => {
                        resolve(value)
                    },
                    (reason) => {
                        reject(reason)
                    }
                )
            })
        })
    }
    static all(promises){
    }
}