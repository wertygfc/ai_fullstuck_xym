# 后台管理系统

- 开发的产品类型
   - 用户前台 vue 单页应用
   - 后台api服务 接口
   前后端分离
      - 后端管理系统
         - 开个权限
         - 公司内部系统
            vue3(proxy) + ts(类型约束/严谨/质量) + ElementPlus(UI组件) + 类库(echats\axios\js-cookie\moment\sortable.js...)

- vite 的配置
   - vite 工程化套件
   - 短路径 alias
      @ -> src
      views -> src/views
      interface -> src/interfance
      compoents -> src/components
   - 自动加载elemnet-plus
   - @types/node
      - ts 有类型系统
      - node   path没有的  js时代的产物
      - string number + interface/type
      - 再安装一个 node的类型补丁
      - vue/vuex/vue-router  为什么不用装@types/node  因为是用ts写出来的，自带类型系统  vue3中99%都是ts写出来的，自带系统
