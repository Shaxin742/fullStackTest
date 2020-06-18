import Mock from 'mockjs'

import user from './user.js' // 登录登出
import dashBoard from './dashBoard.js' // 首页
import components from './components.js' // 组件
import socketServer from './socketServer.js'

// 登录登出
Mock.mock(/\/app\/user\/login.*/, 'post', user.login)
Mock.mock(/\/app\/user\/info.*/, 'get', user.info)
Mock.mock(/\/app\/user\/logout.*/, 'post', user.logout)

// 首页
Mock.mock(/\/app\/dashBoard\/getCalendar.*/, 'get', dashBoard.getCalendar)

// 组件 components
Mock.mock(/\/app\/components\/getSongs.*/, 'get', components.getSongs)
Mock.mock(/\/app\/components\/formsubmit.*/, 'post', components.formsubmit)
Mock.mock(/\/app\/components\/getTableData.*/, 'get', components.getTableData)
Mock.mock(/\/app\/components\/deleteTableData.*/, 'post', components.deleteTableData)
Mock.mock(/\/app\/components\/addTableData.*/, 'post', components.addTableData)
Mock.mock(/\/app\/components\/updateTableData.*/, 'post', components.updateTableData)

// socket
Mock.mock(/\/app\/socketServer\/socketServer.*/, 'get', socketServer.socketTest)

export default Mock
