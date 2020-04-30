<template>
  <div id="pdfCentent">
    12312312pdf2
    <div class="parent">
      <button @click="$refs.pdf.print()">打印</button>
      <pdf ref="pdf" :src="src" :page="currentPage" @progress="getProgress" @page-loaded="currentPage=$event" @loaded="loadPdfHandler" />
    </div>
    <el-pagination background layout="prev, pager, next" :page-size="1" :total="numPages" @current-change="changePage" />
  </div>
</template>

<script>
import pdf from 'vue-pdf'
const src = pdf.createLoadingTask('http://image.cache.timepack.cn/nodejs.pdf')
export default {
  components: {
    pdf
  },
  data() {
    return {
      src,
      numPages: 100,
      currentPage: 1
    }
  },
  mounted() {
    this.src.then(pdf => {
      this.numPages = pdf.numPages
    })
  },
  methods: {
    changePage(page) {
      this.currentPage = page
    },

    getProgress(e) {
      console.log('加载进度：', e)
    },

    loadPdfHandler() {
      console.log('PDF加载完成啦')
    }
  }
}

</script>

<style scoped>
  .parent {
    width: 1000px;
    margin: 0 auto;
  }
</style>
