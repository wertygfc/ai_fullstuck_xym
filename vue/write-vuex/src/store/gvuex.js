import { computed, inject, reactive } from "vue"

const STORE_KEY = '__store__'

function useStore(){
    return inject(STORE_KEY)
}

class Store {
    constructor(options) {
        this.$options = options // 原来的对象，最初的状态   js中用$表示特别的对象  变量前面加地杠表示私有对象
        // 私有的对象 外界不能直接访问
        this._state = reactive({
            data: options.state()
        }) 
        this._mutations = options.mutations
        this._actions = options._actions
        this.getters = {}
        Object.keys(options.getters).forEach(name => {
            const fn = options.getters[name]
            this.getters[name] = computed(() => fn(this.state))
        })
    }
    // 提升易用性
    get state() {
        // 业务
        return this._state.data
    }
    commit = (type, payload) => {
        // 箭头函数缺点：丢失this
        const entry = this._mutations[type]
        return entry && entry(this.state, payload)  // 判断语句，当entery有值的时候才会执行后面那个代码，如果entry值不存在，就会立马返回false，保证这行代码不报错
    }
    dispatch(type, payload){
        const entry = this._actions[type]
        return entry && entry(this, payload)
    }
    install(app) {
        console.log('//////');
        app.provide(STORE_KEY, this)
    }
}

const createStore = (options) => {
    // 实例化
    return new Store(options)
}

export { createStore, useStore }