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
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      }
    ]
  }

  // { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

export const asyncRoutes = [
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
      },
      // {
      //   path: 'userTable2',
      //   name: 'userTable2',
      //   component: () => import('@/views/users/table2/index'),
      //   meta: { title: 'userTable', icon: 'eye' }
      // },
      {
        path: 'userTable3',
        name: 'userTable3',
        component: () => import('@/views/users/table3/index'),
        meta: { title: 'userTable', icon: 'eye' }
      }
    ]
  },
  // {
  //   path: '/antv',
  //   component: Layout,
  //   redirect: '/antv/g2/g2bar',
  //   name: 'antv',
  //   meta: { title: 'antv', icon: 'example' },
  //   children: [
  //     {
  //       path: '/g2',
  //       redirect: '/g2/g2bar',
  //       component: () => import('@/views/routerview'),
  //       name: 'g2',
  //       meta: { title: 'g2', icon: 'example' },
  //       children: [
  //         {
  //           path: 'bar',
  //           name: 'bar',
  //           component: () => import('@/views/antv/g2/bar/index'),
  //           meta: { title: 'bar', icon: 'eye' }
  //         },
  //         {
  //           path: 'bar2',
  //           name: 'bar2',
  //           component: () => import('@/views/antv/g2/bar2/index'),
  //           meta: { title: 'bar2', icon: 'eye' }
  //         },
  //         {
  //           path: 'line',
  //           name: 'line',
  //           component: () => import('@/views/antv/g2/line/index'),
  //           meta: { title: 'line', icon: 'eye' }
  //         }
  //       ]
  //     },
  //     {
  //       path: '/g6',
  //       component: () => import('@/views/routerview'),
  //       redirect: '/g6/g6',
  //       name: 'g6',
  //       meta: { title: 'g6', icon: 'example' },
  //       children: [
  //         {
  //           path: 'g6',
  //           name: 'g6',
  //           component: () => import('@/views/antv/g6/g6/index'),
  //           meta: { title: 'g6', icon: 'eye' }
  //         },
  //         {
  //           path: 'g62',
  //           name: 'g62',
  //           component: () => import('@/views/antv/g6/g62/index'),
  //           meta: { title: 'g62', icon: 'eye' }
  //         },
  //         {
  //           path: 'g63',
  //           name: 'g63',
  //           component: () => import('@/views/antv/g6/g63/index'),
  //           meta: { title: 'g63', icon: 'eye' }
  //         },
  //         {
  //           path: 'g64',
  //           name: 'g64',
  //           component: () => import('@/views/antv/g6/g64/index'),
  //           meta: { title: 'g64', icon: 'eye' }
  //         },
  //         {
  //           path: 'editor',
  //           name: 'editor',
  //           component: () => import('@/views/antv/g6/editor/index'),
  //           meta: { title: 'editor', icon: 'eye' }
  //         }
  //         // {
  //         //   path: 'vueEditor',
  //         //   name: 'vueEditor',
  //         //   component: () => import('@/views/antv/g6/vueEditor/index'),
  //         //   meta: { title: 'vueEditor', icon: 'eye' }
  //         // }
  //         // {
  //         //   path: 'g6editor',
  //         //   name: 'g6editor',
  //         //   component: () => import('@/views/antv/g6/g6editor'),
  //         //   meta: { title: 'g6editor', icon: 'eye' }
  //         // }
  //       ]
  //     }
  //     // {
  //     //   path: '/l7',
  //     //   component: () => import('@/views/routerview'),
  //     //   redirect: '/l7/l7',
  //     //   name: 'l7',
  //     //   meta: { title: 'l7', icon: 'example' },
  //     //   children: [
  //     //     {
  //     //       path: 'l7',
  //     //       name: 'l7',
  //     //       component: () => import('@/views/antv/l7/l7/index'),
  //     //       meta: { title: 'l7', icon: 'eye' }
  //     //     }
  //     //   ]
  //     // }
  //   ]
  // },
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
      },
      {
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
      },
      {
        path: 'xiding',
        name: 'xiding',
        component: () => import('@/views/css/xiding'),
        meta: { title: 'xiding', icon: 'eye' }
      }
    ]
  },
  {
    path: '/vue',
    component: Layout,
    redirect: '/vue/filterComp',
    name: 'vue',
    meta: { title: 'vue', icon: 'example' },
    children: [
      {
        path: 'filterComp',
        name: 'filterComp',
        component: () => import('@/views/vue/filterComp'),
        meta: { title: 'filterComp', icon: 'eye' }
      },
      {
        path: 'tree',
        name: 'tree',
        component: () => import('@/views/vue/tree'),
        meta: { title: 'tree', icon: 'eye' }
      },
      {
        path: 'render',
        name: 'render',
        component: () => import('@/views/vue/render'),
        meta: { title: 'render', icon: 'eye' }
      },
      {
        path: 'typeView',
        name: 'typeView',
        component: () => import('@/views/vue/typeView'),
        meta: { title: 'typeView', icon: 'eye' }
      },
      {
        path: 'elTree',
        name: 'elTree',
        component: () => import('@/views/vue/elTree'),
        meta: { title: 'elTree', icon: 'eye' }
      },
      {
        path: 'test',
        name: 'test',
        component: () => import('@/views/vue/test'),
        meta: { title: 'test', icon: 'eye' }
      },
      {
        path: 'pdf2',
        name: 'pdf2',
        component: () => import('@/views/vue/pdf2'),
        meta: { title: 'pdf', icon: 'eye' }
      },
      {
        path: 'pdf3',
        name: 'pdf3',
        component: () => import('@/views/vue/pdf3'),
        meta: { title: 'pdf', icon: 'eye' }
      },
      {
        path: 'pdf4',
        name: 'pdf4',
        component: () => import('@/views/vue/pdf4'),
        meta: { title: 'pdf', icon: 'eye' }
      },
      {
        path: 'pdf5',
        name: 'pdf5',
        component: () => import('@/views/vue/pdf5'),
        meta: { title: 'pdf', icon: 'eye' }
      },
      {
        path: 'tuozhuai',
        name: 'tuozhuai',
        component: () => import('@/views/vue/tuozhuai'),
        meta: { title: 'tuozhuai', icon: 'eye' }
      },
      {
        path: 'tuozhuai2',
        name: 'tuozhuai2',
        component: () => import('@/views/vue/tuozhuai2'),
        meta: { title: 'tuozhuai', icon: 'eye' }
      },
      {
        path: 'tuozhuai3',
        name: 'tuozhuai3',
        component: () => import('@/views/vue/tuozhuai3'),
        meta: { title: 'tuozhuai', icon: 'eye' }
      },
      {
        path: 'touxiang',
        name: 'touxiang',
        component: () => import('@/views/vue/touxiang'),
        meta: { title: 'touxiang', icon: 'eye' }
      },
      {
        path: 'html2pdf',
        name: 'html2pdf',
        component: () => import('@/views/vue/html2pdf'),
        meta: { title: 'html2pdf', icon: 'eye' }
      }
    ]
  },
  {
    path: '/echarts',
    component: Layout,
    redirect: '/echarts/pie',
    name: 'echarts',
    meta: { title: 'echarts', icon: 'example' },
    children: [
      {
        path: 'pie',
        name: 'pie',
        component: () => import('@/views/echarts/pie'),
        meta: { title: 'pie', icon: 'eye' }
      },
      {
        path: 'bar',
        name: 'bar',
        component: () => import('@/views/echarts/bar'),
        meta: { title: 'bar', icon: 'eye' }
      },
      {
        path: 'radder',
        name: 'radder',
        component: () => import('@/views/echarts/radar'),
        meta: { title: 'radder', icon: 'eye' }
      },
      {
        path: 'kline',
        name: 'kline',
        component: () => import('@/views/echarts/kline'),
        meta: { title: 'kline', icon: 'eye' }
      },
      {
        path: 'liquidfill',
        name: 'liquidfill',
        component: () => import('@/views/echarts/liquidfill'),
        meta: { title: 'liquidfill', icon: 'eye' }
      }
    ]
  },
  {
    path: '/gaode',
    component: Layout,
    redirect: '/gaode/gdLine',
    name: 'gaode',
    meta: { title: 'gaode', icon: 'example' },
    children: [
      {
        path: 'gdLine',
        name: 'gdLine',
        component: () => import('@/views/gaode/line'),
        meta: { title: 'gdLine', icon: 'eye' }
      },
      {
        path: 'keshihua',
        name: 'keshihua',
        component: () => import('@/views/gaode/keshihua'),
        meta: { title: 'keshihua', icon: 'eye' }
      }
    ]
  }
]

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
