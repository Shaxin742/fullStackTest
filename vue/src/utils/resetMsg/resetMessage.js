
import { Message } from 'element-ui'
const showMessage = Symbol('showMessage')

class ResetMessage {
  [showMessage](type, options) {
    console.log(type)
    typeof options === 'string'
      ? Message[type]({
        message: options,
        duration: 7000,
        showClose: true
      })
      : Message[type](options)
  }
  success(options) {
    this[showMessage]('success', options)
  }
  error(options) {
    this[showMessage]('error', options)
  }
  warning(options) {
    this[showMessage]('warning', options)
  }
  info(options) {
    this[showMessage]('info', options)
  }
}

export const message = new ResetMessage()

