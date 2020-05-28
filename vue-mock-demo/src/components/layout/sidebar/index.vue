<!--
 * @Author: ShaXin
 * @Date: 2020-05-28 15:16:29
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-05-28 17:15:09
 -->
<template>
  <div class="sidebar-container">
    <!-- <logo /> -->
    <el-menu
      class="el-menu-vertical-demo"
      :default-active="activeMenu"
      :collapse="isCollapse"
    >
      <menu-item
        v-for="route in permission_routes"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      />
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import logo from './logo'
import menuItem from "./menuItem";
export default {
  components: {
    menuItem,
    // logo
  },
  data: function() {
    return {  };
  },
  computed: {
    ...mapGetters(["permission_routes", "sidebar"]),
    routes() {
      return this.$router.options.routes
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  methods:{
    
  }
};
</script>

<style lang='scss' scoped>
.sidebar-container{
  height: 100vh;
  border-right: solid 1px #e6e6e6;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
