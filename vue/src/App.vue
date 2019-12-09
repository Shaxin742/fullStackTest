<template>
  <div id="app">
    <section class="config">test</section>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="scss" scoped>
#app{
  position: relative;
  .config{
    position: absolute;
    right:0;;
    top: 10px;
  }
}
</style>
