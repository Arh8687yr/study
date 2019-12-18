import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/ElementForm' // 路由的重定向
  },
  {
    path: '/ShoppingCar',
    name: 'ShoppingCar',
    component: () => import('../views/ShoppingCar.vue')
  },
  {
    path: '/ElementForm',
    name: 'ElementForm',
    component: () => import('../views/ElementForm.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
