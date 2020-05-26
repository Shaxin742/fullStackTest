<!--
 * @Author: ShaXin
 * @Date: 2020-05-26 16:53:30
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-05-26 17:30:09
 -->
<template>
  <div class="login-container">
    <section class="form-Container">
      <div class="title-container">
        <h3 class="title">登 录</h3>
      </div>
      <el-form ref="ruleForm" :model="ruleForm" status-icon :rules="rules" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username" type="text" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" type="password" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {
  data() {
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          login(this.ruleForm).then(res => {
            console.log(res)
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.login-container{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 100vh;
  .form-Container{
    width: 400px;
    height: 400px;
    padding: 20px;
  }
  .title-container{
    color: green;;
  }
}
</style>
