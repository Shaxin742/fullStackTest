/*
 * @Author: ShaXin
 * @Date: 2020-07-09 13:42:43
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-07-13 09:25:16
 */

import {request} from '../utils/request'
let base ='/components'
export function test(params) {
  return request(`${base}/getTest`,{
    method: 'get',
    params
  })
}
export function getTableData(params) {
  return request(`${base}/getTableData`,{
    method: 'get',
    params
  })
}
