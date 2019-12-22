import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history', // 路由模式，默认hash默认(#)
  routes
})

// 导航守卫（路由的钩子）
// 全局导航守卫
router.beforeEach((to, from, next) => {
  // 在路由跳转前做出判断，如：判断用户是否登录，如果登录，next()，如未登录，强制跳转到登录页，next('/login')
  console.log(1)
  next()
})
// 生命周期比前置钩子晚一些
router.beforeResolve((to, from, next) => {
  next()
})
router.afterEach((to, from) => {
})

export default router
