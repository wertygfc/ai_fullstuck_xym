import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        redirect: 'home'    // 默认来到home页面
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    }
]
// key 不能乱写
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router