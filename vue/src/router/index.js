import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/layout'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: layout,
      children: [{
        path: '/',
        name: 'home',
        component: () => import('@/pages/home')
      }]
    }
  ]
})
