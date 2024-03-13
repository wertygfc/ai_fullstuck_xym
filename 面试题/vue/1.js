function observer(obj){
    new Observer(obj)
}
class Observer{
    constructor(value){
        this.value = value
        this.walk()
    }
    walk(obj){
        Object.keys(obj).forEach(key => {
            definrReactive(obj, key, obj[key])
        })
    }
}

function definrReactive(obj, key, value){
    const dep = new Dep()

    Object.defineProperty(obj, key , {
        get(){
            dep.addDep(Dep.target) // 谁用到了这个key就收集谁  Dep.target === watcher
            return val
        },
        set(newVal){
            if(newVal == val) return
            //修改obj,key的值
            //触发依赖
            dep.notify()    // 通知watcher触发依赖
        }
    })

}

class Dep{
    constructor(){
        this.deps = []  // 存的是watcher实例对象
    }
    addDep(dep){
        this.deps.push(dep)
    }
    notify(){
        this.deps.forEach(deps => deps.update())
    }
}

class Complier{
    constructor(el, vm){
        this.$vmvm = vm
        this.$el = document.querySelector(el)   // '#app'
        if(this.$el){
            this.complier(this.$el)
        }
    }
    complier(el){
        const childNodes = el.childNodes
        Array.from(childNodes).forEach((node) => {
            if(this.isElement(node)) {  // 是否是一个节点
                console.log('编译该元素' + node.nodeName);
                // 后面要更新视图（没写）
            }else if(this.isInterpolation(node)){   // 文本节点
                console.log('编译该元素' + node.textContent);
            }

            if(node.childNodes && node.childNodes.length > 0){ 
                this.complier(node)
            }
        })
    }

    isElement(node){
        return node.nodeType === 1
    }
    isInterpolation(node){
        return node.nodeType === 3
    }
}

class Watcher{  // 统一调配任务，每一个watcher实例就是一个依赖
    constructor(vm, key, updater){
        this.vm = vm
        this.key = key
        this.updaterFn = updater

        Dep.target = null
        Dep.target = this
        vm[key] // 读值
    }

    // 更新视图
    update(){
        this.updaterFn(this.vm, this.vm[key])
    }
}

class Vue {
  constructor(options) {
    this.$options = options;
    this.$data = options.data();

    observer(this.$data)    // 将this.$data变成响应式

    proxy(this)     // 将data代理到this上

    new Complier(options.el, this)
  }
}

new Vue({
    el: '#app',
    data(){
        return{
            a: 1,
            b: 2
        }
    },
    methods:{
        getA(){
            this.a = 2
        }
    }
})