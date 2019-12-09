<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
import chartMixin from './chartMixin'
export default {
  mixins: [chartMixin],
  props: {
    className: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: '800px'
    },
    width: {
      type: String,
      default: '100%'
    },
    options: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      chart: null
    }
  },

  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el)
      this.chart.setOption(this.options, true)
    }
  }

}
</script>

<style>

</style>
