<!--
 * @Author: ShaXin
 * @Date: 2020-06-10 17:14:08
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-06-11 10:29:55
 -->
<template>
  <div v-if="!route.hidden">
    <template v-if="!route.children">
      <el-menu-item>
        <svg-icon :icon-class="route.meta.icon" />
        <span slot="title">{{ route.meta.title }}</span>
      </el-menu-item>
    </template>
    <el-submenu v-if="route.children" :key="route.path" :index="route.path">
      <template slot="title">
        <svg-icon v-if="route.meta&&route.meta.icon" :icon-class="route.meta.icon" />
        <span slot="title">{{ route.meta.title }}</span>
      </template>

      <menu-item v-for="child in route.children" :key="child.path" :route="child" :is-nest="true" />
    </el-submenu>
  </div>
</template>

<script>
import Item from './Item'
export default {
  name: 'MenuItem',
  components: { Item },
  props: {
    route: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style>
</style>
1
