<template>
  <div class="pdf-preview-container">
    <div
      v-for="page in docPages"
      ref="container"
      :key="page"
      class="page-container"
      :style="{
        height: `${pageHeight}px`
      }"
    >
      <canvas v-if="renderList.includes(page)" />
    </div>
    <div v-if="show" class="notice">
      {{ notice }}
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
    renderPages: {
      type: Number,
      default: 5
    },
    customScroll: {
      type: Boolean,
      default: false
    },
    offsetHeight: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      doc: null,
      docPages: 0,
      currentPage: 0,
      pageHeight: 0,
      renderList: [],
      show: false,
      notice: '',
      timer: 0
    }
  },
  watch: {
    url: {
      immediate: true,
      handler() {
        this.getPDFFile()
      }
    }
  },
  created() {
    if (!this.customScroll) {
      document.addEventListener('scroll', this.scroll)
    }
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.scroll)
  },
  methods: {
    getPDFFile() {
      if (!this.url) return
      this.currentPage = 0
      this.url = this.getObjectURL(new Blob([this.url]))
      console.log(this.url)
      pdfJS.getDocument(this.url).then(pdf => {
        this.doc = pdf
        this.docPages = pdf.numPages
        this.$nextTick(() => {
          this.docPages && this.scrollToPage(1)
        })
      })
    },
    // 将返回的流数据转换为url
    getObjectURL(file) {
      let url = null
      console.log(window.createObjectURL)
      console.log(window.webkitURL)
      console.log(window.URL)
      if (window.createObjectURL !== undefined) { // basic
        url = window.createObjectURL(file)
      } else if (window.webkitURL !== undefined) { // webkit or chrome
        try {
          url = window.webkitURL.createObjectURL(file)
          console.log(url)
        } catch (error) {
          console.log(error)
        }
      } else if (window.URL !== undefined) { // mozilla(firefox)
        try {
          url = window.URL.createObjectURL(file)
        } catch (error) {
          console.log(error)
        }
      }
      return url
    },
    scrollToPage(pageNo) {
      if (this.currentPage === pageNo) return
      this.currentPage = pageNo
      let list = []
      for (let page = pageNo - this.renderPages; page <= pageNo + this.renderPages; page++) {
        list.push(page)
      }
      list = list.filter(page => page <= this.docPages && page >= 1)
      this.$nextTick(() => {
        this.renderList = list
        this.renderList.forEach(page => {
          this.renderPage(page)
        })
      })
    },
    // 渲染page
    renderPage(pageNo) {
      this.doc.getPage(pageNo).then(page => {
        const container = this.$refs.container[pageNo - 1]
        if (!container) return
        const canvas = container.querySelector('canvas')
        if (!canvas || canvas.__rendered) return
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
        canvas.__rendered = true
      })
    },
    scroll() {
      this.checkRender(document.documentElement)
    },
    checkRender(el) {
      if (!this.pageHeight) return
      let scrollTop = el.scrollTop
      if (el === document.documentElement) {
        scrollTop = el.scrollTop || window.pageYOffset || document.body.scrollTop
      }
      let page = Math.floor((scrollTop - this.offsetHeight) / this.pageHeight)
      page = Math.max(page, 1)
      page = Math.min(page, this.docPages)
      this.scrollToPage(page)
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
