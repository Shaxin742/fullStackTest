/*
 * @Author: ShaXin
 * @Date: 2020-05-28 14:14:52
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-05-28 14:21:33
 */

import App from './App'
import store from './store'
import router from './router'
import i18n from './i18n'
import ElementUI from 'element-ui'
import htmlToPdf from '@/utils/htmlToPdf'
// mock 开服务类型
import { mockXHR } from '../mock'

// 重写message提示框 方式1
import message from '@/utils/resetMsg/resetMsg.js'
// 重写message提示框 方式2
// import { message } from '@/utils/resetMsg/resetMessage'

import BaiduMap from 'vue-baidu-map'
if (process.env.NODE_ENV === 'production') {
  mockXHR()
}
module.exports = {
  App,
  store,
  router, ElementUI, i18n,
  message,
  htmlToPdf,
  BaiduMap
}
