/*
 * @Author: ShaXin
 * @Date: 2020-07-09 10:48:39
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-07-09 13:42:52
 */
import {request} from '../utils/request'
let base ='/user'
export function login(body) {
  return request(`${base}/login`,{
    method: 'post',
    body
  })
}
