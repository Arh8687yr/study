<template>
  <div>
    <input type="text" :value="inputValue" @input="inputChange">
    <!-- {{inputValue}} -->
  </div>
</template>
<script>
export default {
  props: ['inputValue'],
  methods: {
    inputChange (e) {
      let value = e.target.value
      this.$emit('input', value)
    }
  }
}
</script>

<style>

</style>
