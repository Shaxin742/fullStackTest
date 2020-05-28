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
// 重写message提示框 方式1
// import message from '@/utils/resetMsg/resetMsg.js'
// 重写message提示框 方式2
import { message } from '@/utils/resetMsg/resetMessage'

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

// 重写message提示框 方式1
// Vue.use(message)

// 重写message提示框 方式2 只能用this.$message.xxx
Vue.prototype.$message = message

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
