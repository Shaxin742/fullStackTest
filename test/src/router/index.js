/*
 * @Author: ShaXin
 * @Date: 2020-05-26 16:50:40
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-05-26 17:00:02
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/',
    component: () => import('@/views/dashBoard/index'),
    hidden: true
  }
]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()
export default router