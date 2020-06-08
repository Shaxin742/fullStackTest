import Mock from 'mockjs'

import user from './user.js' // 登录登出
import dashBoard from './dashBoard.js' // 首页
import components from './components.js' // 组件

// 登录登出
Mock.mock(/app\/user-api\/user\/login.*/, 'post', user.login)
Mock.mock(/app\/user-api\/user\/info.*/, 'get', user.info)
Mock.mock(/app\/user-api\/user\/logout.*/, 'post', user.logout)

// 首页
Mock.mock(/app\/dash-api\/dashBoard\/getCalendar.*/, 'get', dashBoard.getCalendar)

// 组件 components
Mock.mock(/app\/dash-api\/components\/getSongs.*/, 'get', components.getSongs)
Mock.mock(/app\/dash-api\/components\/formsubmit.*/, 'post', components.formsubmit)
Mock.mock(/app\/dash-api\/components\/getTableData.*/, 'get', components.getTableData)

export default Mock
