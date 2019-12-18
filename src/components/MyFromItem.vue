<template>
  <div>
    <label for>{{label}}</label>
    <div>
      <slot></slot>
      <p v-if="errStatus">{{errMessage}}</p>
    </div>
  </div>
</template>

<script>
// 引用element的校验器
import Schema from 'async-validator'
export default {
  inject: ['MyForm'],
  props: ['label', 'prop'],
  data () {
    return {
      // 错误信息
      errMessage: '',
      // 错误状态：校验规则满足时不显示
      errStatus: false
    }
  },
  methods: {
    validator () {
      const rules = this.MyForm.rules[this.prop]
      // const value = this.MyForm.model[this.prop]
      let descriptor = { [this.prop]: rules } // 描述对象
      let schema = new Schema(descriptor)
      schema.validator({}, errors => {
        if (errors) {

        } else {

        }
      })
    }
  },
  mounted () {
    // 监听input 的validate事件 validate触发校验事件
    this.$on('validate', this.validator)
  }
}
</script>

<style>
</style>
