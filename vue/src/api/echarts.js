import request from '@/utils/request'

export function kline(params) {
  return request({
    url: '/echarts/kline',
    method: 'get',
    params
  })
}
