<!--
 * @Author: ShaXin
 * @Date: 2020-06-10 13:16:04
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-06-11 09:53:52
 -->
<template>
  <el-container>
    <el-aside>
      <Menus />
    </el-aside>
    <el-container :style="{marginLeft:isCollapse?'60px':'200px'}">
      <el-header>
        <Header />
      </el-header>
      <el-main>
        <Content />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { mapGetters } from 'vuex'
import Content from './Content'
import Header from './Header'
import Menus from './Menus'
export default {
  components: {
    Content,
    Header,
    Menus
  },
  computed: {
    ...mapGetters([
      'permission_routes',
      'sidebar'
    ]),
    isCollapse() {
      console.log(this.sidebar)
      return true
      // return !this.sidebar.opened
    }
  }
}
</script>

<style>

</style>
