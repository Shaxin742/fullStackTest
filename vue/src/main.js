import Vue from 'vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import 'element-ui/lib/theme-chalk/index.css'
import './element-variables.scss'
import '@/styles/index.scss' // global css
import '@/icons' // icon
import '@/permission' // permission control
import { App, store, router, i18n, message, BaiduMap, ElementUI, htmlToPdf } from './tools'
// import ShaxinCascader from '@/components/ShaxinCascader'
import ShaxinSelect from '@/components/ShaxinSelect/select'
Vue.use(BaiduMap, {
  ak: 'oZNrr2X9Qz082TrGnnLesB1hb8kLED2v'
})

// Vue.use(ShaxinCascader)
Vue.component('el-select', ShaxinSelect);

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})

// 重写message提示框 方式1
Vue.use(message)

// 重写message提示框 方式2 只能用this.$message.xxx
// Vue.prototype.$message = message

// 转换pdf 直接用ExportSavePdf这个方法 我挂在在vue了
Vue.use(htmlToPdf)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
