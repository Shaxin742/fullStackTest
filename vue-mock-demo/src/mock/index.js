import Mock from 'mockjs'

import user from './user.js' // 登录登出
import dashBoard from './dashBoard.js' // 首页

// 登录登出
Mock.mock(/app\/user-api\/user\/login.*/, 'post', user.login)
Mock.mock(/app\/user-api\/user\/info.*/, 'get', user.info)
Mock.mock(/app\/user-api\/user\/logout.*/, 'post', user.logout)

// 首页
Mock.mock(/app\/dash-api\/dashBoard\/getCalendar.*/, 'get', dashBoard.getCalendar)

export default Mock
