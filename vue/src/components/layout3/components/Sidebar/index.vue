<template>
  <div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :show-timeout="200"
        :default-active="$route.path"
        :collapse="isCollapse"
        mode="vertical"
        background-color="#304156"
        text-color="#bfcbd9"
        active-text-color="#409EFF"
      >
        <p>
          <img :src="imgUrl" alt="logo">
        </p>
        <sidebar-item v-for="route in permission_routers" :key="route.name" :item="route" :base-path="route.path"/>
        <div style="width:180px;height:80px;background:rgb(48, 65, 86);text-align:center;line-height:80px">
          <el-button style="width:100px" @click="logout">退出</el-button>
        </div>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import logo from '@/assets/img/logo2.jpg'

export default {
  components: { SidebarItem },
  data: function() {
    return {
      imgUrl: logo
    }
  },
  computed: {
    ...mapGetters([
      'permission_routers',
      'sidebar'
    ]),
    routes() {
      return this.$router.options.routes
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    }
  }
}
</script>
