<template>
  <div class="pdf-preview-container">
    <div
      ref="container"
      class="page-container"
      :style="{
        height: `${pageHeight}px`
      }"
    >
      <canvas />
    </div>
  </div>
</template>

<script>
import pdfJS from 'pdfjs-dist'

export default {
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
      doc: null,
      pageHeight: 0,
      renderList: [],
      notice: ''
    }
  },
  watch: {
    url: {
      immediate: true,
      handler(value) {
        this.getPDFFile()
      }
    }
  },
  methods: {
    getPDFFile() {
      if (!this.url) return
      pdfJS.getDocument(this.url).then(pdf => {
        console.log(pdf)
        this.doc = pdf
        this.$nextTick(() => {
          this.renderPage(this.pageNo)
        })
      })
    },
    // 渲染page
    renderPage(pageNo) {
      this.doc.getPage(pageNo).then(page => {
        const container = this.$refs.container
        if (!container) return
        const canvas = container.querySelector('canvas')
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        const dpr = window.devicePixelRatio || 1
        const bsr = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1
        const ratio = dpr / bsr
        const rect = container.getBoundingClientRect()
        const viewport = page.getViewport(1)
        const width = rect.width
        const height = width / viewport.width * viewport.height
        canvas.style.width = `${width}px`
        canvas.style.height = `${height}px`
        this.pageHeight = height
        canvas.height = height * ratio
        canvas.width = width * ratio
        ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
        page.render({
          canvasContext: ctx,
          viewport: page.getViewport(width / viewport.width)
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.notice {
  position: fixed;
  background: #000;
  color: #fff;
  left: 2rem;
  top: 5rem;
  right: 2rem;
}
</style>
