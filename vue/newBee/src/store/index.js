import { createStore } from 'vuex'
import { getCart } from '../api/cart'

const store = createStore({
    state() {   // 全局公共的数据源 === data的概念
        return {
            cartCount: 0
        }
    },
    mutations:{ // === methods  同步  专职修改state
        setCartCount (state, count) {  // 形参state一直都是在
            state.cartCount = count
        }
    },
    actions:{   // === methods 可以包含任意异步操作  action调用mutations
        async setCartCountAction(context) {
            const {data} =await getCart()
            // console.log(data);
            context.commit('setCartCount', data.length) 
        }
    },
    getters:{   // === computed  

    }
})

export default store