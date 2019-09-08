// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueI18n from 'vue-i18n'
import router from './router'
import ElementUI from 'element-ui'
// import '@/assets/css/reset.css'
import 'element-ui/lib/theme-chalk/index.css'

import i18n from './i18n'
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
})
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.use(VueI18n)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App)
})
