/*
 * @Author: ShaXin
 * @Date: 2020-07-09 13:58:04
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-07-09 17:04:01
 */
import { set, observable, action } from "mobx"

class UserStore {
  @observable loginUser = {} //当前登录用户信息

  @action toggleLogin(user = {}) {
    console.log('user', user)
    // this.loginUser = user
    set(this.loginUser, {name:1})
    console.log('loginUser', this.loginUser)
  }
}

export default new UserStore()
