// 导入Unocss
import 'uno.css'
import '@/assets/main.css'
// 导入Unocss的TailwindCSS重置样式
import '@unocss/reset/tailwind.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
