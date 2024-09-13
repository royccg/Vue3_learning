import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// 第一步：引入 pinia
import { createPinia } from "pinia";

// 创建一个应用
const app = createApp(App)

// 第二步：创建pinia
const pinia = createPinia()
// 第三步：安装pinia
app.use(pinia)

// 挂载整个应用app
app.mount('#app')
