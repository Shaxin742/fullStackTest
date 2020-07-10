/*
 * @Author: ShaXin
 * @Date: 2020-07-10 14:18:52
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-07-10 16:57:42
 */
import React, { Component } from "react";
import { test } from '../../api/components'
import { Row, Col } from 'antd';
import ReactEcharts from 'echarts-for-react';

// render echarts option.
export default class dashPage extends Component {
  state = {
    item: '',
    evaporation: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
    precipitation: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
    averageTemp: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]

  };
  componentDidMount() {
    this.loadData()
  }

  loadData = () => {
    test({ name: 1 }).then(res => {
      console.log(res)
    })
  }
  getOptions() {
    return {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      // toolbox: {
      //   feature: {
      //     dataView: { show: true, readOnly: false },
      //     magicType: { show: true, type: ['line', 'bar'] },
      //     restore: { show: true },
      //     saveAsImage: { show: true }
      //   }
      // },
      legend: {
        data: ['蒸发量', '降水量', '平均温度']
      },
      xAxis: [
        {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          axisPointer: {
            type: 'shadow'
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '水量',
          min: 0,
          max: 250,
          interval: 50,
          axisLabel: {
            formatter: '{value} ml'
          }
        },
        {
          type: 'value',
          name: '温度',
          min: 0,
          max: 25,
          interval: 5,
          axisLabel: {
            formatter: '{value} °C'
          }
        }
      ],
      series: [
        {
          name: '蒸发量',
          type: 'bar',
          data: this.state.evaporation
        },
        {
          name: '降水量',
          type: 'bar',
          data: this.state.precipitation
        },
        {
          name: '平均温度',
          type: 'line',
          yAxisIndex: 1,
          data: this.state.averageTemp
        }
      ]
    }
  }

  raderOptions(){
    return {
      color: ['#2A76CD', '#8217aa', '#44B365', '#EAA926', '#CC3D3D', '#8554C9', '#3C3A9A', '#3A4777'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      radar: {
        radius: '60%',
        center: ['30%', '42%'],
        splitNumber: 5,
        name: {
          textStyle: {
            color: '#000'
          }
        },
        splitArea: {
          areaStyle: {
            color: ['#2d8a91', '#4fc5c5', '#9bdce2', '#d6eff3', '#fff'],
            opacity: 1
            // shadowBlur: 4,
            // shadowColor: 'red',
            // shadowOffsetX: 0,
            // shadowOffsetY: 15
          }
        },
        indicator: [
          { name: '击杀', max: 100 },
          { name: '金钱', max: 100 },
          { name: '防御', max: 100 },
          { name: '魔法', max: 100 },
          { name: '物理', max: 100 },
          { name: '助攻', max: 100 },
          { name: '生存', max: 100 }
        ],
        axisLine: {
          lineStyle: {
            color: '#b7d9da'
          }
        }
      },
      legend: {
        show: true,
        left: '52%',
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
        bottom: '45%',
        data: ['我', '大成', '灯泡', '大儿子', '小儿子']
      },
      series: [
        {
          type: 'radar',
          symbolSize: 0,
          areaStyle: {
            normal: {
              shadowBlur: 13,
              shadowColor: 'rgba(0,0,0,.2)',
              shadowOffsetX: 0,
              shadowOffsetY: 10,
              opacity: 0.3
            }
          },
          data: [
            {
              value: [100, 100, 100, 100, 100, 100, 100],
              name: '我'
            },
            {
              value: [80, 74, 50, 74, 70, 60, 60],
              name: '灯泡'
            },
            {
              value: [88, 50, 60, 30, 60, 60, 60],
              name: '小儿子'
            },
            {
              value: [10, 10, 10, 10, 10, 10, 10],
              name: '大儿子'
            },
            {
              value: [20, 20, 20, 20, 20, 20, 20],
              name: '大成'
            }
          ],
          animationDuration: 1000
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <Row gutter={16}>
          <Col span={12}>
            <ReactEcharts option={this.getOptions()} />
          </Col>
          <Col span={12}>
            <ReactEcharts option={this.raderOptions()} />
          </Col>
        </Row>
      </div>
    )
  }
}
