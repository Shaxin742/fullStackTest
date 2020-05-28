<!--
 * @Author: ShaXin
 * @Date: 2020-05-28 16:13:27
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-05-28 17:07:50
 -->
<template>
  <div>
    <el-button @click="logout">
      登出
    </el-button>
    <el-button @click="toggleSideBar">
      折叠
    </el-button>
  </div>
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$store.dispatch("user/logout");
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
  }
};
</script>

<style>
</style>
