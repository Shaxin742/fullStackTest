import {login} from '@/api/user'
const state = () => ({
  userInfo: {},
})
const mutations = {
  setUserInfo(state, text) {
    state.userInfo = text
  },
  deleteUserInfo(state) {
    state.userInfo = ''
  },
}
const actions = {
  login(_, userInfo) {
    console.log(userInfo)
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        const { data } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
