import request from '@/utils/request'

import mockState from '@/utils/mockState'
const serverUrl = mockState.serverUrl
const serverName = 'dash-api/'

export function getCalender(params) {
  return request({
    url: serverUrl(`${serverName}dashBoard/getCalendar`),
    method: 'get',
    params
  })
}
