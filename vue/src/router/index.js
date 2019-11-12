import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
    }]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/tree',
    name: 'Example',
    meta: { title: 'Example', icon: 'example' },
    children: [
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },
  {
    path: '/users',
    component: Layout,
    redirect: '/users/userTable',
    name: 'users',
    meta: { title: 'userTable', icon: 'example' },
    children: [
      {
        path: 'userTable',
        name: 'userTable',
        component: () => import('@/views/users/table/index'),
        meta: { title: 'userTable', icon: 'eye' }
      }
    ]
  },
  {
    path: '/g2',
    component: Layout,
    redirect: '/g2/g2bar',
    name: 'g2',
    meta: { title: 'g2', icon: 'example' },
    children: [
      {
        path: 'bar',
        name: 'bar',
        component: () => import('@/views/g2/bar/index'),
        meta: { title: 'bar', icon: 'eye' }
      },
      {
        path: 'line',
        name: 'line',
        component: () => import('@/views/g2/line/index'),
        meta: { title: 'line', icon: 'eye' }
      }
    ]
  },
  {
    path: '/g6',
    component: Layout,
    redirect: '/g6/g6',
    name: 'g6',
    meta: { title: 'g6', icon: 'example' },
    children: [
      {
        path: 'g6',
        name: 'g6',
        component: () => import('@/views/g6/g6/index'),
        meta: { title: 'g6', icon: 'eye' }
      },
      {
        path: 'g6editor',
        name: 'g6editor',
        component: () => import('@/views/g6/g6editor'),
        meta: { title: 'g6editor', icon: 'eye' }
      }
    ]
  },
  {
    path: '/bdMap',
    component: Layout,
    redirect: '/bdMap/bdMap',
    name: 'bdMap',
    meta: { title: 'bdMap', icon: 'example' },
    children: [
      {
        path: 'bdMap',
        name: 'bdMap',
        component: () => import('@/views/bdMap/bdMap'),
        meta: { title: 'bdMap', icon: 'eye' }
      }, {
        path: 'xiazuan',
        name: 'xiazuan',
        component: () => import('@/views/bdMap/xiazuan'),
        meta: { title: 'xiazuan', icon: 'eye' }
      }
    ]
  },
  {
    path: '/css',
    component: Layout,
    redirect: '/css/allDiv',
    name: 'allDiv',
    meta: { title: 'allDiv', icon: 'example' },
    children: [
      {
        path: 'allDiv',
        name: 'allDiv',
        component: () => import('@/views/css/allDiv'),
        meta: { title: 'allDiv', icon: 'eye' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
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
