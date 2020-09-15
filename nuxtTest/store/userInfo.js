export const state = () => ({
  userInfo: {},
})
export const mutations = {
  setUserInfo (state, text) {
      state.userInfo = text
  },
  deleteUserInfo (state) {
      state.userInfo = ''
  },
}
