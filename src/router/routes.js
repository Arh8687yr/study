const routes = [
  {
    path: '/',
    redirect: '/Router' // 路由的重定向
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
  },
  {
    path: '/Router',
    name: 'Router',
    component: () => import('../views/Router.vue')
  }
]
export default routes
