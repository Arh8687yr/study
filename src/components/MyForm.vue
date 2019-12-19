<template>
  <form action="">
    <slot></slot>
  </form>
</template>

<script>
export default {
  provide () {
    return {
      // 把当前的form对象传递出去，使任意的子级都可以访问form上的数据或方法
      MyForm: this
    }
  },
  props: {
    // 绑定的form表单
    model: {
      type: Object,
      required: true
    },
    // 绑定表单的检验规则
    rules: {
      type: Object
    }
  }
}
</script>

<style>

</style>
