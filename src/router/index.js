import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import StartView from '../views/StartView.vue'

//路由的配置数组
//path：路由路径 必须以/开头
//component：对应的路由组件
//name：路由名字（可选）
const routes = [
  {
    path: '/',
    name: 'start',
    component: StartView
  },
  {
    path: '/home',
    name: 'home',
    //按需引入
    //如果没有访问/about 就不会加载这个组件 节约性能
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    //按需引入
    //如果没有访问/about 就不会加载这个组件 节约性能
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/detail',
    name: 'detail',
    //按需引入
    //如果没有访问/about 就不会加载这个组件 节约性能
    component: () => import('../views/DetailView.vue')
  }
]

//创建路由对象
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
