<!--
 * @Author: ShaXin
 * @Date: 2020-06-10 16:19:14
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-06-11 10:04:04
 -->
<template>
  <div class="menus">
    <el-menu
      mode="vertical"
      :default-active="activeMenu"
      :collapse="!isCollapse"
      :unique-opened="false"
      :collapse-transition="false"
    >
      <menu-item
        v-for="route in permission_routes"
        :key="route.path"
        :route="route"
        :base-path="route.path"
      />
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MenuItem from './MenuItem'
export default {
  components: {
    MenuItem
  },
  data() {
    return {
      data: {}
    }
  },
  computed: {
    ...mapGetters(['permission_routes', 'sidebar']),
    isCollapse() {
      return true
      // return this.sideBar.opened
    },

    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang='scss'>
.menus {
  text-align: left;
}
.el-menu--collapse.el-menu {
  .el-submenu__title {
    .el-icon-arrow-right,
    span {
      display: none;
    }
  }
}
</style>
