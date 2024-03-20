import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Register.vue'),
    meta: {
      title: '注册'
    }
  },
  {
    path: '/noteClass',
    name: 'noteClass',
    component: () => import('@/views/NoteClass.vue'),
    meta: {
      title: '笔记分类'
    }
  },
  {
    path: '/noteList', // /:title 允许加参数
    name: 'noteList',
    component: () => import('@/views/NoteList.vue'),
    meta: {
      title: '笔记列表'
    }
  },
  {
    path: '/noteDetail', // /:title 允许加参数
    name: 'noteDetail',
    component: () => import('@/views/NoteDetail.vue'),
    meta: {
      title: '笔记列表详情'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 全局的路由守卫
// const whitePath = ['/login', '/register']
// router.beforeEach((to, from, next)=>{
//   // console.log(to, from);
//   document.title = to.meta.title
//   if(!whitePath.includes(to.path)){
//     // 看本地存储有没有值
//     if(!localStorage.getItem('userInfo')){
//       router.push('login')
//       return
//     }
//   }
//   next()
// })

export default router