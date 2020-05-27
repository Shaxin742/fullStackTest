/*
 * @Author: ShaXin
 * @Date: 2020-05-27 09:41:47
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-05-27 09:41:59
 */
// 千分位转换
export function thousandFormatData(num) {
  num += ''
  if (!num.includes('.')) num += '.'
  return num
    .replace(/(\d)(?=(\d{3})+\.)/g, ($0, $1) => {
      return $1 + ','
    })
    .replace(/\.$/, '')
}
// 判断数据类型
export function jungleType(type, target) {
  return `[object ${type}]` === Object.prototype.toString.call(target)
}
// 防抖
export function debounce(fn, wait) {
  let timeout = null
  return function() {
    if (timeout !== null) clearTimeout(timeout)
    timeout = setTimeout(fn, wait)
  }
}
// 节流
export function throttle(func, delay) {
  var timer = null
  var startTime = Date.now()
  return function() {
    var curTime = Date.now()
    var remaining = delay - (curTime - startTime)
    var context = this
    var args = arguments
    clearTimeout(timer)
    if (remaining <= 0) {
      func.apply(context, args)
      startTime = Date.now()
    } else {
      timer = setTimeout(func, remaining)
    }
  }
}

export function shuffle(arr) { // 洗牌算法
  const _arr = []
  while (arr.length) {
    const randomIndex = Math.floor(Math.random() * arr.length)
    _arr.push(arr.splice(randomIndex, 1)[0])
  }
  return _arr
}

