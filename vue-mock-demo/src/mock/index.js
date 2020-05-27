import Mock from 'mockjs'
import user from './user.js'

Mock.mock(/app\/dev-api\/user\/login.*/, 'post', user.login)
Mock.mock(/app\/dev-api\/user\/info.*/, 'get', user.info)
Mock.mock(/app\/dev-api\/user\/logout.*/, 'post', user.logout)

export default Mock
