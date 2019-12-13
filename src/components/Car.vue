<template>
  <div>
    <h2>购物车</h2>
    <table>
      <tr>
        <th>
          勾选
        </th>
        <th>
          课程名称
        </th>
        <th>
          课程价格
        </th>
        <th>
          数量
        </th>
        <th>
          总价
        </th>
      </tr>
      <tr v-for="(item,index) in courseItem" :key="item.id">
        <td>
          <input type="checkbox" v-model="courseItem[index].isActive">
        </td>
        <td>{{item.name}}</td>
        <td>{{item.price}}</td>
        <td>
          <button @click="sub(index)">-</button>
          <span>{{item.number}}</span>
          <button @click="add(index)">+</button>
        </td>
        <td>{{item.price*item.number}}</td>
      </tr>
      <tr>
        <td></td>
        <td colspan="2">{{isActiveCourse}}/{{allCourse}}</td>
        <td colspan="2">{{allPrice}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ['courseItem'],
  methods: {
    add (index) {
      this.$emit('add', index)
    },
    sub (index) {
      // 判断数量小于1时提示 确定删除 如果确定  通知父组件删除
      if (this.courseItem[index].number > 1) {
        this.$emit('sub', index)
      } else {
        if (confirm('您确定删除吗')) {
          this.$emit('del', index)
        }
      }
    }
  },
  computed: {
    isActiveCourse () {
      return this.courseItem.filter(e => e.isActive).length
    },
    allCourse () {
      return this.courseItem.length
    },
    allPrice () {
      let num = 0
      this.courseItem.forEach(e => {
        if (e.isActive) {
          num += e.price * e.number
        }
      })
      return num
    }
  }
}
</script>
<style>

</style>
