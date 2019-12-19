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
      // 通过计算动态获取校验规则
      const rules = this.MyForm.rules[this.prop]
      // 通过计算[]动态获取用户输入的值
      const value = this.MyForm.model[this.prop]
      const descriptor = { [this.prop]: rules } // 描述对象
      const schema = new Schema(descriptor)
      // { [this.prop]: value } 此时校验器触发 this.prop为动态获取的校验规则 与用户输入的value做校验 返回error
      schema.validate({ [this.prop]: value }, errors => {
        if (errors) {
          this.errMessage = errors[0].message
          this.errStatus = true
        } else {
          this.errMessage = ''
          this.errStatus = true
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

<style scoped>
p {
  font-size: 12px;
  color: red;
}
</style>
