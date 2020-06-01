/*
 * @Author: ShaXin
 * @Date: 2020-05-28 15:38:29
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-06-01 15:24:02
 */
import { asyncRoutes, constantRoutes } from '@/router'

const state = {
  routes: constantRoutes,
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}

const actions = {
  generateRoutes({ commit }) {
    return new Promise(resolve => {
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
