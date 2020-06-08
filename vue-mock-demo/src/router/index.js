/*
 * @Author: ShaXin
 * @Date: 2020-05-26 16:50:40
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-06-08 18:11:32
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
    path: '/404',
    name: 'notFound',
    component: () => import('@/views/404/index'),
    hidden: true
  }
]
export const asyncRoutes = [
  {
    path: '/components',
    component: Layout,
    redirect: '/components/form',
    name: 'vue',
    meta: { title: 'vue', icon: 'example' },
    children: [
      {
        path: 'form',
        name: 'form',
        component: () => import('@/views/components/form'),
        meta: { title: 'form' }
      },
      {
        path: 'song',
        name: 'song',
        component: () => import('@/views/components/song'),
        meta: { title: 'song' }
      },
      {
        path: 'userTable',
        name: 'userTable',
        component: () => import('@/views/components/userTable'),
        meta: { title: 'userTable' }
      }
    ]
  },
  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://github.com/PanJiaChen/vue-element-admin',
        meta: { title: 'ExternalLink', icon: 'link' }
      }
    ]
  }
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
