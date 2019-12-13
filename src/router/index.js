import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/elementForm' // 路由的重定向
  },
  {
    path: '/shoppingCar',
    name: 'shoppingCar',
    component: () => import('../views/ShoppingCar.vue')
  },
  {
    path: '/elementForm',
    name: 'elementForm',
    component: () => import('../views/ElementForm.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
