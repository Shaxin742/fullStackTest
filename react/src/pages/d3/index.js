/*
 * @Author: ShaXin
 * @Date: 2020-07-16 17:46:47
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-07-16 17:51:15
 */
import * as d3 from "d3";
import React, { Component } from "react";
class BarChart extends Component {
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    d3.select("#div").style("color",'blue')
  }

  render() {
    return (<div id={"div"}>2222</div>)
  }
}

export default BarChart;
