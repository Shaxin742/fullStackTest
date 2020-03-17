<template>
  <div>
    <div id="bar" style="width:100%;height:600px" />
  </div>
</template>

<script>
import echarts from 'echarts'
import chartMixin from '../mixins/chartMixin'
export default {
  mixins: [chartMixin],
  data() {
    return {
      myChart: null
    }
  },
  mounted() {
    this.myChart = echarts.init(document.getElementById('bar'))
    const data = [
      {
        value: ['1997/10/4', 151]
      },
      {
        value: ['1997/10/5', 147]
      },
      {
        value: ['1997/10/6', 138]
      },
      {
        value: ['1997/10/7', 147]
      },
      {
        value: ['1997/10/8', 144]
      },
      {
        value: ['1997/10/9', 152]
      },
      {
        value: ['1997/10/10', 146]
      },
      {
        value: ['1997/10/11', 137]
      },
      {
        value: ['1997/10/12', 136]
      },
      {
        value: ['1997/10/13', 137]
      }
    ]
    this.myChart.setOption({
      xAxis: {
        type: 'time',
        splitLine: {
          show: false
        }
      },
      yAxis: {
        type: 'value',
        // boundaryGap: [0, '100%'],
        splitLine: {
          show: false
        }
      },
      series: [
        {
          name: '模拟数据',
          type: 'line',
          showSymbol: false,
          hoverAnimation: false,
          data: data
        }
      ]
    })
    // window.addEventListener('resize', () => {
    //   this.myChart.resize()
    // })
  }
}
</script>

<style>
</style>
