import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

// elementUI
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'

// 全局组件
import component from './components'

// 重置全局样式
import './style/reset.scss'

// 全局组件
const app = createApp(App)
// 挂载组件
for (const [key, value] of Object.entries(component)) {
  app.component(key, value)
}

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.mount('#app')
