import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import element from 'element-ui'

Vue.use(element)
Vue.config.productionTip = false

// 导航守卫（路由的钩子）
// 全局导航守卫
router.beforeEach((to, from, next) => {
  // 在路由跳转前做出判断，如：判断用户是否登录，如果登录，next()，如未登录，强制跳转到登录页，next('/login')
  next()
})
// 生命周期比前置钩子晚一些
router.beforeResolve((to, from, next) => {
  next()
})
router.afterEach((to, from) => {
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
