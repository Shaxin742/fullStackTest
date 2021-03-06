/*
 * @Author: ShaXin
 * @Date: 2020-05-28 09:41:27
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-06-11 10:51:56
 */
var express = require('express');
var router = express.Router();
var URL = require('url'); //请求url模块
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

function getNewDate(date) {
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  // console.log(year, month, day)
  return { year, month, day }
}
// 转为时间
function getDate(year, month, day = 0) {
  return new Date(year, month, day)
}
function getlocaData(year, month, day = 0) {
  const date = new Date(year, month, day).toLocaleDateString()
  const timestrip = Date.parse(date) + 28800000
  return new Date(timestrip)
}
// 处理日历数据
function getCalender(timeVal) {
  const calendatArr = []
  timeVal = JSON.parse(timeVal)
  console.log(timeVal)
  // 年月日 转换后的
  const { year, month } = getNewDate(
    getDate(timeVal.year, timeVal.month + 1, 0)
  )
  console.log(getlocaData(year, month, 1))
  const firstDay = getlocaData(year, month, 1)
  const lastDay = getlocaData(year, month + 1, 0)

  const firstWeekDay = firstDay.getDay() === 0 ? 7 : firstDay.getDay()
  const lastWeekDay = lastDay.getDay() === 0 ? 7 : lastDay.getDay()
  const curmonthdays =
    new Date(year, month + 1, 0).getDate() + firstWeekDay - lastWeekDay + 6

  const startTime = firstDay - (firstWeekDay - 1) * 24 * 60 * 60 * 1000

  for (let i = 0; i < curmonthdays; i++) {
    calendatArr.push({
      date: new Date(startTime + i * 24 * 60 * 60 * 1000),
      year: year,
      month: month + 1,
      day: new Date(startTime + i * 24 * 60 * 60 * 1000).getDate()
    })
  }
  return calendatArr
}

router.get('/getCalendar', function (req, res) {
  const { date } = req.query
  console.log(date)
  const data = getCalender(date)
  var response
  response = { code: 200, data: data }
  
  res.send(response);
})

module.exports = router;
