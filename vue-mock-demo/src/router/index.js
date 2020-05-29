/*
 * @Author: ShaXin
 * @Date: 2020-05-26 16:50:40
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-05-29 11:10:13
 */
import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  // {
  //   path: '/',
  //   component: () => import('@/views/dashBoard/index'),
  //   hidden: true
  // },

  {
    path: '/',
    redirect: '/dashboard',
    hidden: true,
    component: Layout,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashBoard'),
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: "/404",
    name: "notFound",
    component: () => import('@/views/404/index'),
    hidden: true
  }
]
export const asyncRoutes = [
  {
    path: '/vue',
    component: Layout,
    redirect: '/vue/test',
    name: 'vue',
    meta: { title: 'vue', icon: 'example' },
    children: [
      {
        path: 'test',
        name: 'test',
        component: () => import('@/views/vue/test'),
        meta: { title: 'test' }
      },
      {
        path: 'ceshi',
        name: 'test',
        component: () => import('@/views/vue/test'),
        meta: { title: 'test' }
      },
    ]
  },
  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://github.com/PanJiaChen/vue-element-admin',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },
]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })


const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
export default router
