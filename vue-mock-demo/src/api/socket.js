/*
 * @Author: ShaXin
 * @Date: 2020-06-17 11:07:35
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-06-17 11:25:53
 */
import request from '@/utils/request'
import mockState from '@/utils/mockState'
const serverUrl = mockState.serverUrl
const serverName = ''

export function socketTest(params) {
  return request({
    url: serverUrl(`${serverName}socketServer/socketServer`),
    method: 'get',
    params
  })
}
