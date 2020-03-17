
<template>
  <div>
    <div id="pdfView" class="pdf-preview-container">
      <div
        ref="container"
        class="page-container"
        :style="{
          height: `${pageHeight}px`
        }"
      >
        <canvas id="canvas" class="canvasstyle" />
      </div>
    </div>
  </div>
</template>
<script>
import PDFJS from 'pdfjs-dist'
// PDFJS.disableWorker = true
// PDFJS.cMapPacked = true
PDFJS.GlobalWorkerOptions.workerSrc = require('pdfjs-dist/build/pdf.worker.min')
export default {
  name: 'PdfView',
  props: {
    url: {
      type: String,
      required: true
    },
    pageNo: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      pdfDoc: null, // pdfjs 生成的对象
      pageNum: 1, //
      pageHeight: 0,
      pageRendering: false,
      pageNumPending: null,
      page_num: 0 // 当前页数
    }
  },
  computed: {
    ctx() {
      const id = document.getElementById('canvas')
      return id.getContext('2d')
    }
  },
  methods: {
    repaint() {
      this.$nextTick(() => {
        this.getPDFFile()
      })
    },
    getPDFFile() {
      this.pageNum = this.pageNo || 1
      PDFJS.getDocument({
        data: atob(this.url),
        cMapUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@2.0.288/cmaps/',
        cMapPacked: true
      }).then(pdfDoc => {
        console.log(pdfDoc)
        this.pdfDoc = pdfDoc
        this.$emit('getAllPdfNo', this.pdfDoc.numPages)
        this.renderPage(this.pageNum)
      })
    },
    renderPage(num) {
      // 渲染pdf
      const vm = this
      this.pageRendering = true
      const container = this.$refs.container
      if (!container) return
      const canvas = container.querySelector('canvas')
      if (!canvas) return
      this.pdfDoc.getPage(num).then(page => {
        const ctx = vm.ctx
        const dpr = window.devicePixelRatio || 1
        const bsr =
                  ctx.webkitBackingStorePixelRatio ||
                  ctx.mozBackingStorePixelRatio ||
                  ctx.msBackingStorePixelRatio ||
                  ctx.oBackingStorePixelRatio ||
                  ctx.backingStorePixelRatio ||
                  1
        const ratio = dpr / bsr
        const rect = container.getBoundingClientRect()
        const viewport = page.getViewport(1)
        const width = rect.width
        const height = (width / viewport.width) * viewport.height
        canvas.style.width = `${width}px`
        canvas.style.height = `${height}px`
        this.pageHeight = height
        canvas.height = height * ratio
        canvas.width = width * ratio
        ctx.setTransform(ratio, 0, 0, ratio, 0, 0)

        var renderContext = {
          canvasContext: vm.ctx,
          viewport: page.getViewport(width / viewport.width)
        }
        var renderTask = page.render(renderContext)

        renderTask.promise.then(function() {
          vm.pageRendering = false
          if (vm.pageNumPending !== null) {
            vm.renderPage(vm.pageNumPending)
            vm.pageNumPending = null
          }
        })
      })
      vm.page_num = vm.pageNum
    },
    prev() {
      const vm = this
      if (vm.pageNum <= 1) {
        return
      }
      vm.pageNum--
      vm.queueRenderPage(vm.pageNum)
    },
    next() {
      const vm = this
      vm.pageNum++
      vm.queueRenderPage(vm.pageNum)
    },
    queueRenderPage(num) {
      if (this.pageRendering) {
        this.pageNumPending = num
      } else {
        this.renderPage(num)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.title {
  height: 50px;
  line-height: 45px;
  font-size: 16px;
  color: #3c4455;
  span {
    position: relative;
    padding-left: 30px;
    color: #3c4455;
    &:before {
      height: 14px;
      width: 4px;
      background: #2a76cd;
      content: "";
      display: inline-block;
      position: absolute;
      top: 50%;
      margin-top: -7px;
      left: 20px;
    }
  }
  .buttons {
    float: right;
    width: 45px;
    height: 44px;
    margin-right: 20px;
    font-size: 0;
    em {
      font-style: normal;
      padding: 0;
      padding: 2px;
      font-size: 13px;
      border: 1px solid #dbdcdc;
      cursor: pointer;
      i {
        padding: 0 2px;
      }
    }
    em + em {
      border-left: 0;
    }
  }
}
</style>
