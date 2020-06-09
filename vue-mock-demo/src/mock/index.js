import Mock from 'mockjs'

import user from './user.js' // 登录登出
import dashBoard from './dashBoard.js' // 首页
import components from './components.js' // 组件

// 登录登出
Mock.mock(/user\/login.*/, 'post', user.login)
Mock.mock(/user\/info.*/, 'get', user.info)
Mock.mock(/user\/logout.*/, 'post', user.logout)

// 首页
Mock.mock(/dashBoard\/getCalendar.*/, 'get', dashBoard.getCalendar)

// 组件 components
Mock.mock(/components\/getSongs.*/, 'get', components.getSongs)
Mock.mock(/components\/formsubmit.*/, 'post', components.formsubmit)
Mock.mock(/components\/getTableData.*/, 'get', components.getTableData)
Mock.mock(/components\/deleteTableData.*/, 'post', components.deleteTableData)
Mock.mock(/components\/addTableData.*/, 'post', components.addTableData)
Mock.mock(/components\/updateTableData.*/, 'post', components.updateTableData)

export default Mock
