function getNewDate(date) {
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  // console.log(year, month, day)
  return { year, month, day }
}
// 转为时间
function getDate(year, month, day = 0) {
  // console.log(new Date(year, month, day))
  return new Date(year, month, day)
}

// 处理日历数据
function getCalender(timeVal) {
  const calendatArr = []
  timeVal = JSON.parse(timeVal)
  // console.log(timeVal)
  // 年月日 转换后的
  const { year, month } = getNewDate(
    getDate(timeVal.year, timeVal.month + 1, 0)
  )
  const firstDay = getDate(year, month, 1)
  // console.log('当前月份第一天', firstDay)
  const lastDay = new Date(year, month + 1, 0)
  // console.log('当前月份最后一天', lastDay)

  const firstWeekDay = firstDay.getDay() === 0 ? 7 : firstDay.getDay()
  const lastWeekDay = lastDay.getDay() === 0 ? 7 : lastDay.getDay()
  // console.log('第一天周几', firstWeekDay)
  // console.log('最后一天周几', lastWeekDay)
  const curmonthdays =
    new Date(year, month - 1, 0).getDate() + firstWeekDay - lastWeekDay + 6
  // console.log('月份天数', curmonthdays)

  const startTime = firstDay - (firstWeekDay - 1) * 24 * 60 * 60 * 1000
  // console.log(startTime)

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

export default [
  // user login
  {
    url: '/dashBoard/getCalendar',
    type: 'get',
    response: config => {
      console.log(config)
      const { date } = config.query
      console.log(data)
      const data = getCalender(date)
      //
      return {
        code: 20000,
        data: data
      }
    }
  }
]
