import { createApp } from 'vue'
import App from './App.vue'

import 'lib-flexible/flexible'
import './assets/style/reset.css'
import  router from './router'

// 1. 引入你需要的组件
import { Button, Swipe, SwipeItem } from 'vant';
// 2. 引入组件样式
import 'vant/lib/index.css';

const app = createApp(App);
// 3. 注册你需要的组件
app.use(Button);
app.use(Swipe)
app.use(SwipeItem)

app.use(router)
app.mount('#app')

