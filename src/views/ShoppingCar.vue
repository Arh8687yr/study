<template>
  <div>
    <h1>{{title}}</h1>
    <hr>
    <div>
      <h2>添加课程</h2>
      <div>
        <label for="">课程名称: </label>
        <input type="text" v-model="courseInfo.name"/>
      </div>
      <div>
        <label for="">课程价格: </label>
        <input type="text" v-model="courseInfo.price"/>
      </div>
      <div>
        <button @click="addCourseToList">添加课程到列表</button>
      </div>
    </div>
    <hr>
    <div>
      <h2>课程列表</h2>
      <table>
        <tr>
          <th>课程名称</th>
          <th>课程价格</th>
          <th>操作</th>
        </tr>
        <tr v-for="(item,index) in courseList" :key="item.id">
          <td>{{item.name}}</td>
          <td>{{item.price}}</td>
          <td>
            <button @click="addCourseToCar(index)">添加至购物车</button>
          </td>
        </tr>
      </table>
    </div>
    <hr>
    <car :courseItem="courseItem" @add="add" @sub="sub" @del="del"></car>
  </div>
</template>

<script>
import Car from '@/components/Car'
export default {
  name: 'shoppingCar',
  components: {
    Car
  },
  data () {
    return {
      title: '购物车案例',
      courseInfo: {
        name: '',
        price: null
      },
      courseList: [
        {
          id: 0,
          name: '计算机科学',
          price: 100
        },
        {
          id: 1,
          name: '人工智能与大数据',
          price: 150
        }
      ],
      courseItem: [] // 购物车的
    }
  },
  methods: {
    addCourseToList () {
      this.courseList.push(this.courseInfo)
    },
    addCourseToCar (index) {
      // 添加到购物车的商品
      let item = this.courseList[index]
      // 添加购物车之前先拿到购物车数据，判断购物车内有没有本件商品，如果有，商品数量+1，如果没有再push
      let hasCourse = this.courseItem.find(e => e.id === item.id)
      console.log(hasCourse)
      if (hasCourse) {
        hasCourse.number += 1
      } else {
        this.courseItem.push({
          ...item,
          number: 1,
          isActive: true
        })
      }
    },
    add (index) {
      this.courseItem[index].number += 1
    },
    sub (index) {
      this.courseItem[index].number -= 1
    },
    del (index) {
      this.courseItem.splice(index, 1)
    }
  }
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  text-align: center;
}
</style>
