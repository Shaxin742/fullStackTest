<template>
  <div>
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
</template>

<script>

export default {
  name: "Login",
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

</style>
