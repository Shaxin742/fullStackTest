/*
 * @Author: ShaXin
 * @Date: 2020-06-01 09:54:49
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-06-08 09:13:36
 */
import request from '@/utils/request'

import mockState from '@/utils/mockState'
const serverUrl = mockState.serverUrl
const serverName = 'dash-api/'

export function getSongs(params) {
  return request({
    url: serverUrl(`${serverName}components/getSongs`),
    method: 'get',
    params
  })
}

export function formsubmit(data) {
  return request({
    url: serverUrl(`${serverName}components/formsubmit`),
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data;boundary = ' + new Date().getTime()
    },
    data
  })
}

export function getTableData(params) {
  return request({
    url: serverUrl(`${serverName}components/getTableData`),
    method: 'get',
    params
  })
}
