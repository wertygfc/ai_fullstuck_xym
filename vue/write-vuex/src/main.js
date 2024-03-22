import { createApp } from 'vue'
// vue 只负责响应式和组件VDOM
// 其他的交给生态
// user
// store.install
import './style.css'
import App from './App.vue'
import store from './store'

createApp(App)
.use(store)
.mount('#app')
