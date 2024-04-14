import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'virtual:windi.css'
import { router } from './router'
// 全局引入图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import store from './store/index.js'
import 'nprogress/nprogress.css'
import './permission.js'
import permission from './directives/permission.js'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(store)

// 图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(permission)
app.mount('#app')
