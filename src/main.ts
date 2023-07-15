// 导入Unocss - 引入自动生成的样式
import 'uno.css'
import '@/assets/main.css'
// 导入Unocss的TailwindCSS重置样式
import '@unocss/reset/tailwind.css'
// 引入vantui组件样式
import 'vant/lib/index.css';
// lib-flexible - 用于自动设置 rem 基准值
// import 'amfe-flexible'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

console.log('main环境配置=',import.meta.env)
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
