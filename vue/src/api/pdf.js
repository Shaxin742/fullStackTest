import request from '@/utils/request'

export function getPdf(params) {
  return request({
    url: '/getPdf',
    method: 'get',
    params
  })
}
