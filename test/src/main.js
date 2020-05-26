import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './permisson'
import '@/icons' // icon
require('es6-promise').polyfill()
Vue.config.productionTip = false
Vue.use(ElementUI)
import('./mock')
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

