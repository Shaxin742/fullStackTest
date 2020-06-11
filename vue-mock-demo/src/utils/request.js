import axios from 'axios'
import Cookies from 'js-cookie'
const pending = []
const CancelToken = axios.CancelToken

const cancelPending = (config) => {
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
// 创建axios实例
const service = axios.create({
  baseURL: '/app', // api的base_url
  timeout: 600000 // 请求超时时间
})

service.interceptors.request.use(
  config => {
    console.log(config)
    if (Cookies.get('Admin-Token')) {
      config.headers['Authorization'] = Cookies.get('Admin-Token')
    }
    cancelPending(config)
    config.cancelToken = new CancelToken(res => {
      pending.push({ 'UrlPath': config.url, 'Cancel': res })
    })
    return config
  },
  (error, response) => {
    console.log(error)
    console.log(response)
  }
)

service.interceptors.response.use(
  response => {
    cancelPending(response.config)
    return response.data
  }, error => {
    console.log(error)
    return Promise.reject(error)
  }
)
export default service
