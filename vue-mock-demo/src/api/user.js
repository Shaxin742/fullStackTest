/*
 * @Author: ShaXin
 * @Date: 2020-05-26 14:54:25
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-05-27 14:32:53
 */
import request from '@/utils/request'
import mockState from '@/utils/mockState'
const serverUrl = mockState.serverUrlMock
const serverName = 'dev-api/'

export function login(data) {
  console.log(data)
  return request({
    url: serverUrl(`${serverName}user/login`),
    method: 'post',
    data
  })
}
