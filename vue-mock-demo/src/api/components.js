/*
 * @Author: ShaXin
 * @Date: 2020-06-01 09:54:49
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-06-09 14:56:09
 */
import request from '@/utils/request'

import mockState from '@/utils/mockState'
const serverUrl = mockState.serverUrlMock
const serverName = ''

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

export function deleteTableData(data) {
  return request({
    url: serverUrl(`${serverName}components/deleteTableData`),
    method: 'delete',
    data
  })
}

export function addTableData(data) {
  console.log(data)
  return request({
    url: serverUrl(`${serverName}components/addTableData`),
    method: 'post',
    data
  })
}

export function updateTableData(data) {
  return request({
    url: serverUrl(`${serverName}components/updateTableData`),
    method: 'patch',
    data
  })
}
