<!--
 * @Author: ShaXin
 * @Date: 2020-05-27 17:21:04
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-05-27 17:29:03
 -->
<template>
  <div class="layout">
    <el-container>
      <el-aside width="200px">
        Aside
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
.layout{
  .el-header{
    padding: 0;
  }
}
</style>
