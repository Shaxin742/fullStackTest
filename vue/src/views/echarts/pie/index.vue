<template>
  <div>
    <div id="myChart" style="height:280px;flex: 4" />
    <div id="lifeChart" style="height:800px;flex: 4" />
  </div>
</template>
<script>
import echarts from 'echarts'
import axios from 'axios'
import chartMixin from '../mixins/chartMixin'
export default {
  mixins: [chartMixin],
  data: function() {
    return {
      myChart: null,
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
      },
      lifeData: []
    }
  },
  mounted() {
    this.initChart()
    axios.get('./life.json').then(res => {
      console.log(res)
      this.lifeData = res.data
      this.initlifeChart()
    })
  },
  methods: {
    // 统计饼图加载
    initChart() {
      var that = this
      this.myChart = echarts.init(document.getElementById('myChart'))
      this.myChart.setOption(this.option, true)
      this.myChart.on('legendselectchanged', (e) => {
        const arr = Object.values(e.selected)
        const len = arr.filter(v => {
          return v
        })
        if (len.length === 1) {
          that.option.series[0].itemStyle.normal.borderWidth = 0
          this.myChart.setOption(that.option)
        } else {
          that.option.series[0].itemStyle.normal.borderWidth = 1
          this.myChart.setOption(that.option)
        }
      })
    },
    initlifeChart() {
      var $t = this
      const schema = [
        { name: 'Income', index: 0, text: '人均收入', unit: '美元' },
        { name: 'LifeExpectancy', index: 1, text: '人均寿命', unit: '岁' },
        { name: 'Population', index: 2, text: '总人口', unit: '' },
        { name: 'Country', index: 3, text: '国家', unit: '' }
      ]
      const itemStyle = {
        normal: {
          opacity: 0.8,
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
      const options = {
        baseOption: {
          timeline: {
            axisType: 'category',
            orient: 'vertical',
            autoPlay: true,
            inverse: true,
            playInterval: 1000,
            left: null,
            right: 0,
            top: 20,
            bottom: 20,
            width: 55,
            height: null,
            label: {
              normal: {
                textStyle: {
                  color: '#999'
                }
              },
              emphasis: {
                textStyle: {
                  color: '#fff'
                }
              }
            },
            symbol: 'none',
            lineStyle: {
              color: '#555'
            },
            checkpointStyle: {
              color: '#bbb',
              borderColor: '#777',
              borderWidth: 2
            },
            controlStyle: {
              showNextBtn: false,
              showPrevBtn: false,
              normal: {
                color: '#666',
                borderColor: '#666'
              },
              emphasis: {
                color: '#aaa',
                borderColor: '#aaa'
              }
            },
            data: []
          },
          backgroundColor: '#404a59',
          title: [{
            text: $t.lifeData.timeline[0],
            textAlign: 'center',
            left: '63%',
            top: '55%',
            textStyle: {
              fontSize: 100,
              color: 'rgba(255, 255, 255, 0.7)'
            }
          }, {
            text: '各国人均寿命与GDP关系演变',
            left: 'center',
            top: 10,
            textStyle: {
              color: '#aaa',
              fontWeight: 'normal',
              fontSize: 20
            }
          }],
          tooltip: {
            padding: 5,
            backgroundColor: '#222',
            borderColor: '#777',
            borderWidth: 1,
            formatter: function(obj) {
              var value = obj.value
              return schema[3].text + '：' + value[3] + '<br>' +
                            schema[1].text + '：' + value[1] + schema[1].unit + '<br>' +
                            schema[0].text + '：' + value[0] + schema[0].unit + '<br>' +
                            schema[2].text + '：' + value[2] + '<br>'
            }
          },
          grid: {
            top: 100,
            containLabel: true,
            left: 30,
            right: '110'
          },
          xAxis: {
            type: 'log',
            name: '人均收入',
            max: 100000,
            min: 300,
            nameGap: 25,
            nameLocation: 'middle',
            nameTextStyle: {
              fontSize: 18
            },
            splitLine: {
              show: false
            },
            axisLine: {
              lineStyle: {
                color: '#ccc'
              }
            },
            axisLabel: {
              formatter: '{value} $'
            }
          },
          yAxis: {
            type: 'value',
            name: '平均寿命',
            max: 100,
            nameTextStyle: {
              color: '#ccc',
              fontSize: 18
            },
            axisLine: {
              lineStyle: {
                color: '#ccc'
              }
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              formatter: '{value} 岁'
            }
          },
          visualMap: [
            {
              show: false,
              dimension: 3,
              categories: $t.lifeData.counties,
              calculable: true,
              precision: 0.1,
              textGap: 30,
              textStyle: {
                color: '#ccc'
              },
              inRange: {
                color: (function() {
                  var colors = ['#bcd3bb', '#e88f70', '#edc1a5', '#9dc5c8', '#e1e8c8', '#7b7c68', '#e5b5b5', '#f0b489', '#928ea8', '#bda29a']
                  return colors.concat(colors)
                })()
              }
            }
          ],
          series: [
            {
              type: 'scatter',
              itemStyle: itemStyle,
              data: $t.lifeData.series[0],
              symbolSize: function(val) {
                return $t.sizeFunction(val[2])
              }
            }
          ],
          animationDurationUpdate: 1000,
          animationEasingUpdate: 'quinticInOut'
        },
        options: []
      }
      $t.lifeChart = echarts.init(document.getElementById('lifeChart'))
      for (var n = 0; n < $t.lifeData.timeline.length; n++) {
        options.baseOption.timeline.data.push($t.lifeData.timeline[n])
        options.options.push({
          title: {
            show: true,
            'text': $t.lifeData.timeline[n] + ''
          },
          series: {
            name: $t.lifeData.timeline[n],
            type: 'scatter',
            itemStyle: itemStyle,
            data: $t.lifeData.series[n],
            symbolSize: function(val) {
              return $t.sizeFunction(val[2])
            }
          }
        })
      }
      $t.lifeChart.setOption(
        options
      )
    },
    sizeFunction(x) {
      var y = Math.sqrt(x / 5e8) + 0.1
      return y * 80
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
