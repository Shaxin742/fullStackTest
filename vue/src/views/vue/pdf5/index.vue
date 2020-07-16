<template>
  <div id="app">
    <div style="width:400px">
      <pdf ref="pdf" :url="url" :page-no="1" />
    </div>
  </div>
</template>

<script>
import pdf from "./pdfView.vue";
const data = require("./jj.json");
// import { getPdf } from '@/api/pdf'
export default {
  name: "App",
  components: {
    pdf
  },
  data() {
    return {
      url: data.data
    };
  },
  mounted() {
    this.$refs.pdf.repaint();
  }
  // created() {
  //   getPdf().then(res => {
  //     console.log(res)
  //   })
  // }
};
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
