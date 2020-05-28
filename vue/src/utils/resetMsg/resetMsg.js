/*
 * @Author: ShaXin
 * @Date: 2020-05-28 13:40:12
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-05-28 14:05:07
 */
import { Message } from 'element-ui'
export default {
  install(Vue, options) {
    Vue.prototype.$message = function(obj) {
      Message({
        dangerouslyUseHTMLString: obj.dangerouslyUseHTMLString,
        message: obj.message,
        duration: 7000,
        showClose: true,
        type: obj.type
      })
    }
    const messagearr = ['success', 'warning', 'info', 'error']
    messagearr.forEach(function(type) {
      Vue.prototype.$message[type] = function(options) {
        return Object.prototype.toString.call(options) === '[object String]'
          ? Message[type]({
            message: options,
            duration: 7000,
            showClose: true
          })
          : Message[type](options)
      }
    })
  }
}

