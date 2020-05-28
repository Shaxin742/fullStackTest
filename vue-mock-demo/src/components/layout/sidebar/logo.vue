<!--
 * @Author: ShaXin
 * @Date: 2020-05-28 16:42:28
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-05-28 17:01:35
 -->
<template>
  <div class="logo-container">
    <transition name="sidebarLogoFade">
      <router-link
        v-if="collapse"
        key="collapse"
        class="sidebar-logo-link"
        to="/"
      >
        <img
          :src="logo"
          class="sidebar-logo"
        >
      </router-link>
      <router-link
        v-else
        key="expand"
        class="sidebar-logo-link"
        to="/"
      >
        <img
          :src="logo"
          class="sidebar-logo"
        >
        <h1 class="sidebar-title">
          {{ title }}
        </h1>
      </router-link>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "养殖基地",
      collapse: false,
      logo:
        "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1143925357,1051122394&fm=58&s=F1B38B703C33E59C301D49CE0300A0A2"
    };
  }
};
</script>

<style lang='scss' scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.logo-container {
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #2b2f3a;
  overflow: hidden;

  .sidebar-logo-link {
    height: 100%;
    width: 100%;
    display:block;

    .sidebar-logo {
      width: 32px;
      height: 32px;
      vertical-align: middle;
      margin-right: 12px;
    }

    .sidebar-title {
      display: inline-block;
      margin: 0;
      color: #fff;
      font-weight: 600;
      line-height: 50px;
      font-size: 14px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
    }
  }

  .collapse {
    .sidebar-logo {
      margin-right: 0px;
    }
  }
}
</style>
