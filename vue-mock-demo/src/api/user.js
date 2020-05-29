/*
 * @Author: ShaXin
 * @Date: 2020-05-26 14:54:25
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-05-27 17:27:51
 */
import request from '@/utils/request'
import mockState from '@/utils/mockState'
const serverUrl = mockState.serverUrlMock
const serverName = 'user-api/'

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
