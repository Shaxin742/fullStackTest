/*
 * @Author: ShaXin
 * @Date: 2020-07-09 13:58:04
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-07-10 14:10:06
 */
import { observable, action, toJS } from "mobx"

class UserStore {
  @observable loginUser = {} //当前登录用户信息
  @observable token = '' //当前登录用户token

  @action toggleLogin(user = {}) {
    console.log('user', user)
    this.loginUser = user
    console.log('loginUser', toJS(this.loginUser))
  }
  @action toggleToken(token = '') {
    this.token = token
  }
}

export default new UserStore()
