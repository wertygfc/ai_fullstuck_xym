// 该文件完成的是路由配置
// 前端路由的两种形式   #hash  /history
// hash 路由 兼容性更好 url的一部分
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";    // createRouter 创建路由实例

// 路由单例，管理的
const router = createRouter({
    // history 浏览历史
    history: createWebHistory(), //二选一
    // 路由数组
    routes: [
        // 每个路由对象，这个对象不是路由单例
        {
            path: '/',
            name: 'home',
            component: () => import ('../views/Root.vue'),
            redirect: {name: 'discover'},   // 301/discover
            // 子路由 网站一般为三层，最多四层 嵌套路由
            children: [
                {
                    path: 'discover',
                    name: 'discover',
                    component : () => import ('../views/discover/Discover.vue'),
                    // 路由对象 添加属性 meta 媒体信息
                    meta: {
                        menu: 'discover',
                        keepAlice: true
                    }
                },
                {
                    path: 'music',
                    name: 'music',
                    component : () => import ('../views/music/Music.vue'),
                    // 路由对象 添加属性 meta 媒体信息
                    meta: {
                        menu: 'music',
                        keepAlice: true
                    }
                }
            ]
        }
    ]
})

export default router;