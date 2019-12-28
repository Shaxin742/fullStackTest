<template>
  <div id="app">
    <pdf :url="url" :page-no="1" />
  </div>
</template>

<script>
import pdf from './pdf.vue'

export default {
  name: 'App',
  components: {
    pdf
  },
  data() {
    return {
      // url: 'http://image.cache.timepack.cn/nodejs.pdf'
      url: 'http://192.168.98.172:5765/kabala/climb/download?fileName=/climb/yypt/pdf/test.pdf'
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
