import Vue from 'vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import './element-variables.scss'
import '@/styles/index.scss' // global css
import App from './App'
import store from './store'
import router from './router'
import i18n from './i18n'
import '@/icons' // icon
import '@/permission' // permission control
import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  ak: 'oZNrr2X9Qz082TrGnnLesB1hb8kLED2v'
})

import { mockXHR } from '../mock'
if (process.env.NODE_ENV === 'production') {
  mockXHR()
}

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
