/*
 * @Author: ShaXin
 * @Date: 2020-05-26 16:50:52
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-05-26 16:57:49
 */
import router from './router'
import store from './store'
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth' // get token from cookie
// import getPageTitle from '@/utils/get-page-title'

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  // document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      const hasGetUserInfo = store.getters.name
      if (hasGetUserInfo) {
        next()
      } else {
        try {
          await store.dispatch('user/getInfo')
          await store.dispatch('permission/generateRoutes')
          console.log(store.getters.addRoutes)
          router.addRoutes(store.getters.addRoutes)
          console.log(router)
          next({ ...to, replace: true })
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
})

router.afterEach(() => {
  // finish progress bar
})
