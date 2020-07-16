/*
 * @Author: ShaXin
 * @Date: 2020-07-13 13:52:43
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-07-13 14:03:52
 */
export function delNullKeys(obj){
  for(var key in obj){
    !obj[key]&& delete obj[key]
  }
  return obj
}
