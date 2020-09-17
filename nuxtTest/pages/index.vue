<template>
  <div class="container">
    <div class="login-container">
      <el-form ref="loginForm" :model="userInfo" :rules="rules">
        <el-form-item prop="username">
          <el-input v-model="userInfo.username" placeholder="请输入用户名">
            <svg-icon slot="prefix" icon-class="icon_user" class-name="icon_user" />
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="userInfo.password" placeholder="请输入密码">
            <svg-icon slot="prefix" icon-class="icon_lock" class-name="icon_lock" />
          </el-input>
        </el-form-item>
        <el-form-item prop="code">
          <div class="login-code">
            <el-input v-model="userInfo.code" placeholder="请输入验证码">
              <el-button
                slot="suffix"
                type="text"
                class="login-code-btn"
                :disabled="codeBtnDisabled"
                @click="getCode"
              >
                {{ codeText }}
              </el-button>
            </el-input>
          </div>
        </el-form-item>
        <el-button type="primary" class="login-btn" @click="login">
          登 录
        </el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 登录信息
      userInfo: {
        username: "",
        password: "",
        code: ""
      },
      // 校验
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }]
      },
      // 验证码
      codeText: "获取验证码",
      codeBtnDisabled: false,
      // 定时器
      timer: null
    };
  },
  methods: {
    // 验证码定时
    getCode() {
      this.codeBtnDisabled = true;
      let time = 60;
      this.timer = setInterval(() => {
        if (time == 0) {
          clearInterval(this.timer);
          this.resetCode();
        } else {
          this.codeText = `${time}秒后重新发送`;
          time -= 1;
        }
      }, 1000);
    },
    // 验证码重置
    resetCode() {
      this.codeBtnDisabled = false;
      this.codeText = "获取验证码";
      clearInterval(this.timer);
    },
    login() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.resetCode();
          this.$store.dispatch("userInfo/login", this.userInfo).then(res => {
            console.log(res);
            this.$message.success("登录成功");
          });
        } else {
          return false;
        }
      });
    }
  }
};
</script>
<style lang='scss' scoped>
$base_color: #007fff;
.container {
  margin: 0 auto;
  min-height: 100vh;
  background: url("../assets/images/login.jpg") no-repeat;
  background-size: cover;
  .login-container {
    height: 300px;
    width: 400px;
    padding: 30px;
    box-sizing: border-box;
    background: rgba(0, 0, 0, 0.1);
    position: absolute;
    border-radius: 5px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .svg-icon {
      margin: 13px 5px;
    }
    .login-code {
      background: red;
      border-radius: 5px;

      .login-code-btn {
        width: 120px;
        color: $base_color;
        &.el-button.is-disabled,
        .el-button.is-disabled:focus,
        .el-button.is-disabled:hover {
          cursor: default;
          color: #909090;
        }
      }
    }
    .login-btn {
      width: 100%;
      background: $base_color;
      border-color: $base_color;
    }
  }
}
</style>
