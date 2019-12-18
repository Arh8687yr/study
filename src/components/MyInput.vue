<template>
  <div>
    <input :type="type" :value="inputValue" @input="inputChange">
  </div>
</template>
<script>
export default {
  props: {
    inputValue: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  methods: {
    inputChange (e) {
      let value = e.target.value
      this.$emit('input', value)
      // input发生变化的时候给form-item发送一个事件
      this.$parent.$emit('validate')
    }
  }
}
</script>

<style>

</style>
