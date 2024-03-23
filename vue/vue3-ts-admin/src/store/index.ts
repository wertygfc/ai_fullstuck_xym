import { createStore } from 'vuex'

const state = {}
const actions = {}
const mutations = {}
const modules = {}

//  返回的是单一状态树  树  分支 store.state.cart.items
export default createStore({
    state,
    mutations,
    actions,
    modules
})