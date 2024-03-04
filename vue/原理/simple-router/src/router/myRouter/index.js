import RouterLink from "./RouterLink.vue"

const ROUTER_KEY = 'router'

function userRouter(){
    return ROUTER_KEY
}

function createRouter (options) {
    return new Router(options)
}

function createWebHashHistory(){
    function bindEvents(fn){
        window.addEventListener('hashchange', fn)
    }
    return {
        bindEvents,
        url: window.location.hash.slice(1) || ''
        // pushState: () => {
        //     window.location.hash = this.url
        // }
    }
}  

class Router {
    constructor(options){
        this.history = options.history
        this.routes = options.routes
        this.current = this.history.url // 当前路径

        this.history.bindEvents(() => {
            this.current = window.location.hash.slice(1)
        })
    }
    install(app){  
        console.log(app);
        app.provide(ROUTER_KEY, this)
        // 注册全局组件router-link
        app.component('router-link', RouterLink)
    }
}

export {
    createRouter,
    createWebHashHistory,
    userRouter
}