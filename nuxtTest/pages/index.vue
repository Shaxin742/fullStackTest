<template>
  <div class="container">
    <div style="font-size:16px;color:green;">
      <Logo />123123
      <svg-icon icon-class="404" class-name="404" />
      <svg-icon icon-class="icon_ellipsis" class-name="icon_ellipsis" />
      {{ userInfoData }}
      <el-button @click="login">
        login
      </el-button>
      <el-button @click="logout">
        logout
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  computed: {
    userInfoData() {
      return this.$store.state.userInfo.userInfo;
    }
  },
  methods: {
    login() {
      const userData = { name: 1 };
      this.$store.commit("userInfo/setUserInfo", userData);
    },
    logout() {
      this.$store.commit("userInfo/deleteUserInfo");
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
