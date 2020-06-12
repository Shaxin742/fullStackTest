/*
 * @Author: ShaXin
 * @Date: 2020-05-26 14:54:25
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-06-12 09:03:03
 */
import request from '@/utils/request'
import mockState from '@/utils/mockState'
const serverUrl = mockState.serverUrl
const serverName = ''

export function login(data) {
  return request({
    url: serverUrl(`${serverName}user/login`),
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: serverUrl(`${serverName}user/info`),
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: serverUrl(`${serverName}user/logout`),
    method: 'post'
  })
}
