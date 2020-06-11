/*
 * @Author: ShaXin
 * @Date: 2020-05-26 14:33:14
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-06-11 11:06:03
 */
export default {
  serverUrl(apiName) {
    return `/app/api/${apiName}`
  },
  serverUrlMock(apiName) {
    return `/${apiName}`
  }
}
