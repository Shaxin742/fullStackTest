import Mock from 'mockjs'
import user from './user.js'
Mock.mock(/app\/dev-api\/user\/login/, user.login)
export default Mock
