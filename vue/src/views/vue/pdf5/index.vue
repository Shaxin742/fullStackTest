<template>
  <div id="app">
    <pdf ref="pdf" :url="url" :page-no="1" />
  </div>
</template>

<script>
import pdf from './pdfView.vue'
const data = require('./jj.json')
// import { getPdf } from '@/api/pdf'
export default {
  name: 'App',
  components: {
    pdf
  },
  data() {
    return {
      url: data.data
      // url: 'http://192.168.98.172:8766/api/operation-fund-confirm/getPdf?filePath=/climb/yypt/pdf/h1.pdf'
    }
  },
  mounted() {
    this.$refs.pdf.repaint()
  }
  // created() {
  //   getPdf().then(res => {
  //     console.log(res)
  //   })
  // }
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
