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
    var xAxisData = []
    var data1 = []
    var data2 = []
    for (var i = 0; i < 50; i++) {
      xAxisData.push('类目' + i)
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5)
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5)
    }
    this.myChart.setOption({
      backgroundColor: '#40415f',
      legend: {
        show: true,
        data: ['bar', 'bar2'],
        align: 'left',
        textStyle: {
          fontSize: 12,
          color: 'white',
          padding: [0, 20, 0, 5]
        }
      },
      tooltip: {
        textStyle: {
          color: 'white'
        }
      },
      xAxis: {
        data: xAxisData,
        silent: false,
        axisLabel: {
          textStyle: {
            color: 'white'
          }
        },
        splitLine: {
          show: false
        }
      },
      yAxis: {
        axisLabel: {
          textStyle: {
            color: 'white'
          }
        }
      },
      series: [
        {
          name: 'bar',
          type: 'bar',
          data: data1,
          itemStyle: {
            normal: {
              color: '#4ad2ff'
            }
          },
          animationDelay: function(idx) {
            return idx * 10
          }
        },
        {
          name: 'bar2',
          type: 'bar',
          itemStyle: {
            normal: {
              color: '#f22111'
            }
          },
          data: data2,
          animationDelay: function(idx) {
            return idx * 10 + 100
          }
        }
      ],
      animationEasing: 'elasticOut',
      animationDelayUpdate: function(idx) {
        return idx * 5
      }
    })
    // window.addEventListener('resize', () => {
    //   this.myChart.resize()
    // })
  }
}
</script>

<style>
</style>
