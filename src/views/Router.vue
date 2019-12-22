<template>
  <div>
    <h1>router篇--组件内的钩子</h1>
  </div>
</template>

<script>
export default {
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不能获取组件的实例 'this' ，因为当守卫执行前，组件实例还没有被创建
    // 触发晚于beforeEnter
    next()
  },

  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件复用时调用（如：动态id发生改变时）注：刷新页面会重置，页面内的路由跳转才会生效
    // 可以访问组件实例 'this'
    next()
  },

  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 'this'
    // 通常用来禁止用户在还未保存修改前突然离开。该导航可以通过 next(false) 来取消
    next()
  }
}
</script>

<style>

</style>
