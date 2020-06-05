/*
 * @Author: ShaXin
 * @Date: 2020-06-05 16:57:57
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-06-05 17:02:30
 */
import request from '@/utils/request'

import mockState from '@/utils/mockState'
const serverUrl = mockState.serverUrlMock
const serverName = 'dash-api/'

export function getTableData(params) {
  return request({
    url: serverUrl(`${serverName}userTable/getTableData`),
    method: 'get',
    params
  })
}
