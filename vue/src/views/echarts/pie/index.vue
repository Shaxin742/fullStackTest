<template>
  <div>
    <div id="superChart" style="height:280px;flex: 4" />
    <el-button @click="test">123213</el-button>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  data: function() {
    return {
      superChart: null,
      option: {
        legend: {
          show: true,
          left: '52%',
          bottom: '35%',
          height: 80,
          itemGap: 10,
          itemWidth: 8,
          itemHeight: 8,
          orient: 'vertical',
          textStyle: {
            fontSize: 12,
            color: '#3C4455',
            padding: [0, 20, 0, 5]
          },
          data: ['投资收益', '交易费用', '汇兑损益', '清算金额', '清算费用', '收入', '应计利息', '税费']
          // data: []
        },
        tooltip: {},
        series: [
          {
            type: 'pie',
            center: ['30%', '40%'],
            radius: '60%',
            // data: [],
            data: [
              { name: '投资收益', value: 0 },
              { name: '交易费用', value: 0 },
              { name: '税费', value: 0 },
              { name: '汇兑损益', value: 0 },
              { name: '清算金额', value: 0 },
              { name: '清算费用', value: 0 },
              { name: '收入', value: 0 },
              { name: '应计利息', value: 0 }
            ],
            label: {
              show: false
            },
            itemStyle: {
              normal: {
                borderWidth: 1,
                borderColor: '#fff'
              }
            }
          }
        ],
        color: ['#2A76CD', '#2BBCB8', '#44B365', '#EAA926', '#CC3D3D', '#8554C9', '#3C3A9A', '#3A4777']
      }
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    // 统计饼图加载
    initChart() {
      var that = this
      this.superChart = echarts.init(document.getElementById('superChart'))
      this.superChart.setOption(this.option, true)
      this.superChart.on('legendselectchanged', (e) => {
        const arr = Object.values(e.selected)
        const len = arr.filter(v => {
          return v
        })
        if (len.length === 1) {
          that.option.series[0].itemStyle.normal.borderWidth = 0
          this.superChart.setOption(that.option)
        } else {
          that.option.series[0].itemStyle.normal.borderWidth = 1
          this.superChart.setOption(that.option)
        }
      })
    },
    test() {
      const arr = [1, 2, 3, 5, 6]
      for (var i of arr) {
        console.log(i)
        if (i > 4) {
          break
        }
      }
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
