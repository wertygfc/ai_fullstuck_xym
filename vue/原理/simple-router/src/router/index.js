// import { createRouter, createWebHistory } from 'vue-router';
import { createRouter, createWebHashHistory } from './myRouter';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    }
]

const router = createRouter({
  history: createWebHashHistory(),  // histroy模式 hash模式
  routes
})

export default router