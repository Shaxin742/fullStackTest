import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: '/app/api/dev-api', 
  timeout: 5000 // request timeout
})
let pending = []
let CancelToken = axios.CancelToken

let cancelPending = (config) => {
  pending.forEach((item, index) => {
    if (config) {
      if (item.UrlPath === config.url) {
        item.Cancel() // 取消请求
        pending.splice(index, 1) // 移除当前请求记录
      }
    } else {
      item.Cancel() // 取消请求
      pending.splice(index, 1) // 移除当前请求记录
    }
  })
}
// request interceptor
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['X-Token'] = getToken()
    }
    
    cancelPending(config)
    config.cancelToken = new CancelToken(res => {
      pending.push({'UrlPath': config.url, 'Cancel': res})
    })
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    cancelPending(response.config)
    const res = response.data
    console.log(res)
    if (res.code !== 200) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
        MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
