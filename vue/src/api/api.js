import request from '@/utils/request'

export function getTest (params) {
  return request({
    url: '/getTest',
    method: 'get',
    params
  })
}

export function postTest (data) {
  console.log(data)
  return request({
    url: '/postTest',
    method: 'post',
    data
  })
}
