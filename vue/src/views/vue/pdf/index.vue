<template>
  <div>
    <div class="contract-modal">
      <div
        id="contractDetail"
        class="contract-detail"
      >
        <div id="mycanvas" ref="mycanvas" />
      </div>
    </div>
  </div>
</template>

<script>
import pdf from './pdf/build/pdf'
export default {
  name: 'PdfView',
  props: {
    showBtns: {
      type: Boolean,
      default: false
    },
    file: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  methods: {
    getPage(pdf, pageNumber, container, numPages) { // 获取pdf
      const _this = this
      console.log('pdffffff', pdf)
      pdf.getPage(pageNumber).then((page) => {
        const scale = (container.offsetWidth / page.view[2])
        const viewport = page.getViewport(scale)
        const canvas = document.createElement('canvas')
        canvas.width = viewport.width
        canvas.height = viewport.height
        container.appendChild(canvas)
        const ctx = canvas.getContext('2d')
        var renderContext = {
          canvasContext: ctx,
          transform: [1, 0, 0, 1, 0, 0],
          viewport: viewport,
          intent: 'print'
        }
        page.render(renderContext).then(() => {
          pageNumber += 1
          if (pageNumber <= numPages) {
            _this.getPage(pdf, pageNumber, container, numPages)
          }
        })
      })
    },
    getPdf() {
      // 此中方式接受流形式返回
      this.$refs.mycanvas.scrollTop = 0
      //    let accessToken = cache.get('TOKEN').Authorization
      //    let url = `${config.baseUrls}/api/fund/v1/contractReports/previewContractContent?access_token=${accessToken}&id=${contractData.id}&contractUrl=${contractData.contractUrl}&.pdf`
      const url = 'http://image.cache.timepack.cn/nodejs.pdf'
      const pdfjsLib = pdf
      pdfjsLib.PDFJS.workerSrc = './pdf/build/pdf.worker.js'
      const loadingTask = pdfjsLib.getDocument({
        url: url,
        withCredentials: true // 允许携带cookie
      })
      console.log(loadingTask)
      loadingTask.promise.then((pdf) => {
        console.log('qqqqqqqqqqqqqqq', pdf)
        const numPages = pdf.numPages
        const container = document.getElementById('mycanvas')
        const pageNumber = 1
        this.getPage(pdf, pageNumber, container, numPages)
      }, function(reason) {
        alert(reason)
      })
    }
  }
}
</script>
