import { getUrlParams } from './utils.js'
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
  const date = new Date(year, month, day).toLocaleString()
  const timestrip = Date.parse(date) + 28800000
  return new Date(timestrip)
}
// 处理日历数据
function getCalender(timeVal) {
  const calendatArr = []
  timeVal = JSON.parse(timeVal)
  // 年月日 转换后的
  const { year, month } = getNewDate(
    getDate(timeVal.year, timeVal.month + 1, 0)
  )
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

export default {
  getCalendar: option => {
    const { date } = getUrlParams(option.url)
    const data = getCalender(date)
    return {
      code: 200,
      message: 'success',
      data: data
    }
  }
}
