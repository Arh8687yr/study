<template>
  <div>
    <!--element form  -->
    <div>
      <h2>element From 表单</h2>
      <el-form ref="form" :model="form" :rules="rules">
        <el-form-item label="用户名：" prop="username">
          <el-input v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input type="password" v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit('form')">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
    <hr />
    <!-- 组件设计思路 -->
    <div>
      <h3>组件设计：实现form formItem input</h3>
      <ul>
        <li>input是自定义组件，它是怎么实现双向绑定的？</li>
        <li>formItem是怎么知道校验规则并执行校验的？它是怎么知道input状态的？它是怎么或得对应的数据模型的？label prop 校验和显示错误</li>
        <li>form是怎么进行全局校验的？它用什么办法把数据模型和校验规则传递给内部组件？</li>
      </ul>
    </div>
    <hr />
    <!-- form input 实现 -->
    <div>
      <h3>任务一：实现自定义input组价并实现双向绑定</h3>
      <!-- 只有触发事件为input或change才可 -->
      <my-input :value="inputValue" @input="inputValue = arguments[0]"></my-input>
    </div>
    <hr />
    <!-- form form-item 实现  -->
    <div>
      <h3>任务二：prop绑定检验规则并校验 label显示文字</h3>
      <my-form-item label="用户名：" prop="username">
        <my-input v-model="form.username"></my-input>
      </my-form-item>
      <my-form-item label="密码：" prop="password">
        <my-input type="password" v-model="form.password"></my-input>
      </my-form-item>
    </div>
    <hr />
    <!--form 实现  -->
    <div>
      <h3>任务三：form 绑定数据模型 添加校验规则</h3>
      <!-- input 获取 form 状态 -->
      <!-- 跨级通讯：provide(){ return: {key: value} } inject:['key']-->
      <my-form :model="form" :rules="rules">
        <my-form-item label="用户名：" prop="username">
          <my-input v-model="form.username"></my-input>
        </my-form-item>
        <my-form-item label="密码：" prop="password">
          <my-input type="password" v-model="form.password"></my-input>
        </my-form-item>
      </my-form>
    </div>
  </div>
</template>

<script>
import MyInput from '@/components/MyInput.vue'
import MyFormItem from '@/components/MyFromItem.vue'
import MyForm from '@/components/MyForm.vue'
export default {
  name: 'elementForm',
  components: {
    MyInput,
    MyFormItem,
    MyForm
  },
  data () {
    return {
      // inputValue值
      inputValue: '',
      // 表单数据
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true, message: '请输入用户名' }],
        password: [{ required: true, message: '请输入密码' }]
      }
    }
  },
  methods: {
    submit (form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          alert('请求登录')
        } else {
          alert('检验失败')
        }
      })
    }
  }
}
</script>
<style>
</style>
