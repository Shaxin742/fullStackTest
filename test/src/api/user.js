/*
 * @Author: ShaXin
 * @Date: 2020-05-26 14:54:25
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-05-26 15:40:58
 */
import request from '@/utils/request'
import $utils from '@/utils/utils'
const serverUrl = $utils.serverUrl
const serverName = 'dev-api/'
export function login(data) {
  return request({
    url: serverUrl(`${serverName}user/login`),
    method: 'post',
    data
  })
}
