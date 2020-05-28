<!--
 * @Author: ShaXin
 * @Date: 2020-05-27 17:21:04
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-05-28 17:15:59
 -->
<template>
  <div class="layout">
    <el-container>
      <el-aside>
        <sidebar />
      </el-aside>
      <el-container>
        <el-header>
          <navbar />
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import sidebar from "./sidebar";
import navbar from "./navbar";
export default {
  components: {
    sidebar,
    navbar
  }
};
</script>

<style lang='scss'>
.layout {
  height: 100%;
  .el-container {
    height: 100%;
  }
  .el-header {
    padding: 0;
  }
  .el-menu{
    border-right:0px;
  }
}
</style>
