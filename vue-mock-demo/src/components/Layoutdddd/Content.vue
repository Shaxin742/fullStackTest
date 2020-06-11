<!--
 * @Author: ShaXin
 * @Date: 2020-06-10 13:16:04
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-06-10 13:17:03
 -->
<template>
  <section class="app-main">
    <transition
      name="fade-transform"
      mode="out-in"
    >
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style>

</style>
