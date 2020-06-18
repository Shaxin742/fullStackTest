import SockJS from 'sockjs-client'
const Stomp = require('stompjs')

let _instance

/**
 * 将后台传过来的json字符串转换为object
 * @param data
 * @param callback
 */
function transJson(data) {
  if (typeof data === 'string') {
    data = JSON.parse(data)
  }
  return data
}

class SocketClient {
  constructor(socketHost) {
    this.url = socketHost
    this.socket = new SockJS(
      `${this.url}`
    )
  }

  init() {
    return new Promise((resolve) => {
      if (!_instance) {
        _instance = Stomp.over(this.socket)
        _instance.debug = function() {}
        _instance.connect(
          {
          },
          () => {
            console.log('websocket 连接已建立')
            resolve()
          },
          () => {
            console.log('websocket 连接已断开')
            if (_instance) {
              _instance.disconnect()
              if (this.socket) {
                this.socket.close()
              }
            }
          }
        )
      }
    })
  }

  close() {
    if (_instance) {
      _instance.disconnect()
      if (this.socket) {
        this.socket.close()
      }
    }
  }

  getMessage(subscribe, callback) {
    _instance.subscribe(subscribe, (response) =>
      callback(transJson(response.body))
    )
  }

  sendMessage(subscribe, message) {
    const headers = {
    }
    _instance.send(subscribe, headers, message)
  }
}

export default SocketClient
