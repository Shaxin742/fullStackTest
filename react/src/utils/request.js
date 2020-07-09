/*
 * @Author: ShaXin
 * @Date: 2020-07-09 10:15:39
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-07-09 13:43:34
 */

import { isAuthenticated } from './Session'
export function request(url, options) {
  console.log(url, options)
  if (options.method.toUpperCase() === 'GET' && options.params) {
    let searchStr = '';
    if (options.params instanceof Object) {
      for (let i in options.params) {
        searchStr += (i + '=' + options.params[i]);
      }
    }
    url = url + '?' + searchStr;
  }
  console.log('url',url)
  let token = isAuthenticated()
  let authToken = {}
  if (token) {
    authToken = {
      headers: {
        Authorization: token,
      },
    };
  }
  const defaultOptions = {
    ...authToken,
    credentials: 'include'
  };

  Object.assign(defaultOptions, options)
 
  if (!(options.body instanceof FormData)) {
    defaultOptions.headers = {
      'content-type': 'application/json',
      ...options.headers
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
      return response;
    })
    .catch(error => {
      return { error };
    });
}
