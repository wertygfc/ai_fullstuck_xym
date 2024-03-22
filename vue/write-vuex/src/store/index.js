import { createStore } from './gvuex'

const store = createStore({
    // 不会污染组件对象   this.data.count  this.count   
    state() {
        return {
            count:1
        }
    },
    getters: {
        double(state) {
            return state.count * 2
        }
    },
    // 修改 状态的改变可以由mutation来记录
    mutations: {
        add(state) {
            state.count++
        },
        addTodos(state, payload = []) {
            state.todos = [
                ...state.todos,
                ...payload
            ]
        }
    },
    actions: {
        // UI组件 + 数据管理  API请求都在这
        fetchTodos: async({ commit })=>{
            const todos = await getTodos()
            commit('addTodos', todos)
        },
        asyncAdd({ commit, state }) {
            setTimeout(() => {
                // commit('add')
                commit('add')
            }, 1000)
        },
        add({ commit }) {
            commit('add')
        }
    }
})

export default store 