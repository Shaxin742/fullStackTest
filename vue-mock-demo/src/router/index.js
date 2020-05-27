/*
 * @Author: ShaXin
 * @Date: 2020-05-26 16:50:40
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-05-27 17:23:05
 */
import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/components/layout'

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
    component:layout,
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
    path: '*',
    component: () => import('@/views/404/index'),
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

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
export default router
