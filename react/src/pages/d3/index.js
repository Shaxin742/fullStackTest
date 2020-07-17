/*
 * @Author: ShaXin
 * @Date: 2020-07-16 17:46:47
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-07-17 10:00:07
 */
import * as d3 from "d3";
import React, { Component } from "react";
class BarChart extends Component {
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    // d3.select("#div").style("color",'blue')
    var datax = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    var datay = [120, 200, 150, 80, 70, 110, 130];

    var width = 400,
      height = 400,
      padding = {
        top: 10,
        right: 40,
        bottom: 40,
        left: 40
      };

    var colors = d3.schemeSet2;
    var svg = d3.select("#div")
      .append('svg')
      .attr('width', width + 'px')
      .attr('height', height + 'px');


    // x轴
    var xScale = d3.scaleOrdinal()
      .domain(datax)
      .range([50, 100, 150, 200, 250, 300, 350]);
    var xAxis = d3.axisBottom()
      .scale(xScale)
      .tickSize(10);
    svg.append('g')
      .call(xAxis)
      .attr("transform", "translate(0," + (height - padding.bottom) + ")")
      .selectAll("text")
      .attr("dx", "25px");

    // y轴      
    var yScale = d3.scaleLinear()
      .domain([0, d3.max(datay)])
      .range([height - padding.bottom, padding.top]);
    var yAxis = d3.axisLeft()
      .scale(yScale)
      .ticks(10);
    svg.append('g')
      .call(yAxis)
      .attr("transform", "translate(" + 50 + ",0)");

    var bar = svg.selectAll(".bar")
      .data(datay)
      .enter().append("g")
      .attr("class", "bar")
      .attr("transform", function (d, i) {
        return "translate(" + xScale(i * 50) + "," + yScale(d) + ")";
      });

    bar.append("rect")
      .attr("x", 1)
      .attr("width", 50)
      .attr("height", function (d) {
        return height - yScale(d) - padding.bottom;
      })
      .attr("stroke", "White")
      .attr("fill",
        function (d, i) {
          return colors[i];
        });

    bar.append("text")
      .attr("dy", ".75em")
      .attr("y", 6)
      .attr("x", 25)
      .attr("text-anchor", "middle")
      .attr("font-size", "14px")
      .attr("fill", "White")
      .text(function (d) {
        return d;
      });
  }

  render() {
    return (
      <div>
        <div id={"div"}></div>
      </div>
    )
  }
}

export default BarChart;
