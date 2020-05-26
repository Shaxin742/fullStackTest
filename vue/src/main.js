import Vue from 'vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './element-variables.scss'
import '@/styles/index.scss' // global css
import App from './App'
import store from './store'
import router from './router'
import i18n from './i18n'
import '@/icons' // icon
import '@/permission' // permission control
import BaiduMap from 'vue-baidu-map'
import {
  message
} from './resetMessage'

// ExportSavePdf 直接用这个方法 我挂在在vue了

import htmlToPdf from '@/utils/htmlToPdf'
Vue.use(htmlToPdf)
Vue.use(BaiduMap, {
  ak: 'oZNrr2X9Qz082TrGnnLesB1hb8kLED2v'
})

// mock 开服务类型
import { mockXHR } from '../mock'
if (process.env.NODE_ENV === 'production') {
  mockXHR()
}

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})

Vue.prototype.$message = message // 重写message提示框
// 全局重写 element 的message 弹框事件
// Vue.prototype.$message1 = function(msg) {
//   console.log(msg)
//   this.$message.error('111')
// }
// const messagearr = ['success', 'warning', 'info', 'error']
// messagearr.forEach(function(type) {
//   console.log(type)
//   Vue.prototype.$message[type] = function(options) {
//     type = type === 'error' ? 'warning' : type
//     return ElementUI.Message[type](options)
//   }
// })
// Vue.prototype.$message.close = function(id, userOnClose) {
//   return ElementUI.Message.close(id, userOnClose)
// }
// Vue.prototype.$message.closeAll = function() {
//   return ElementUI.Message.closeAll()
// }
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
