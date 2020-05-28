/*
 * @Author: ShaXin
 * @Date: 2020-05-28 15:38:29
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-05-28 16:11:04
 */
import {asyncRoutes,constantRoutes} from '@/router'

const state = {
  routes: constantRoutes,
  addRoutes:[]
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    console.log(routes)
    console.log(state.addRoutes)
    state.routes = constantRoutes.concat(routes)
  }
}

const actions = {
  generateRoutes({ commit }) {
    return new Promise(resolve => {
      console.log(asyncRoutes)
      // asyncRoutes.push({ path: '*', redirect: '/404', hidden: true })
      commit('SET_ROUTES', asyncRoutes)
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
