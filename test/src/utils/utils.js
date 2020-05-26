/*
 * @Author: ShaXin
 * @Date: 2020-05-26 14:33:14
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-05-26 15:51:19
 */
export default {
  serverUrl(apiName) {
    return `/api/${apiName}`
  },
  serverUrlMock(apiName) {
    return `/${apiName}`
  }
}
