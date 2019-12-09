import request from '@/utils/request'

export function getCalender(params) {
  return request({
    url: '/dashBoard/getCalendar',
    method: 'get',
    params
  })
}
