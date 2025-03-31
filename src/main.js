import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "@/assets/less/index.less"
import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import "@/api/mock.js"
import api from './api/api'
import { useAllDataStore } from '@/stores'

function isRoute(to) {
  let res = router.getRoutes()
  let resl = res.filter(item => item.path === to.path)
  return resl.length>0
}
router.beforeEach((to, from) => {
  console.log(router.getRoutes());  // 输出所有注册的路由，确认 '404' 是否存在
  console.log('Navigating to:', to.path);
  if (to.path !== '/login' && !store.stata.token) {
    console.log('Redirecting to login');
    return { name: "login" }
  }
  if (!isRoute(to)) {
    console.log('Redirecting to 404');
    return { name: '404' }
  }
})
const pinia = createPinia()
const app = createApp(App)
window.router = router;

app.config.globalProperties.$api = api
app.use(pinia)

const store = useAllDataStore()
//这个动态路由的方法必须要在use(pinia)之后使用，因为这样才可以获取到pinia对象
//必须在use(router)之前使用，因为如果是刷新，use(router)后执行完会直接跳转路由，所以需要在他之前执行动态路由方法
store.addMenu(router, "refresh")

app.use(router).mount('#app')

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
