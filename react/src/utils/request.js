/*
 * @Author: ShaXin
 * @Date: 2020-07-09 10:15:39
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-07-16 17:32:21
 */

import { isAuthenticated } from './Session'
import { message } from 'antd';
export function request(url, options) {
  console.log(url, options)
  if (options.method.toUpperCase() === 'GET' && options.params) {
    let searchStr = '';
    if (options.params instanceof Object) {
      for (let i in options.params) {
        searchStr += (i + '=' + options.params[i]) + '&';
      }
    }
    url = url + '?' + searchStr.substr(0, searchStr.length - 1);;
  }
  console.log('url', url)
  let token = isAuthenticated()
  console.log("token", token)
  let authToken = {}
  if (token) {
    authToken = {
      headers: {
        Authorization: token,
      },
    };
  }
  const defaultOptions = {
    credentials: 'include'
  };

  Object.assign(defaultOptions, options)

  console.log(defaultOptions)
  if (!(options.body instanceof FormData)) {
    defaultOptions.headers = {
      'content-type': 'application/json',
      ...options.headers,
      ...authToken.headers,
    }
  } else {
    defaultOptions.headers = {
      ...options.headers
    }
  }
  console.log(defaultOptions)

  return fetch(url, defaultOptions)
    .then(response => {
      if (response.error) {
        return response;
      }
      return response.json();
    })
    .then(response => {
      if (response.code === 50002) {
        message.error(response.msg)
        window.location.href = '#/login'
        return;
      }
      return response;
    })
    .catch(error => {
      return { error };
    });
}
