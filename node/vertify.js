/*
 * @Author: ShaXin
 * @Date: 2020-06-12 16:31:07
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-06-12 17:31:45
 */
var jwt = require('jsonwebtoken');
var signkey = 'shaxin';

exports.setToken = function (data) {
  return new Promise((resolve, reject) => {
    const token = jwt.sign(data, signkey, { expiresIn: '1day' });
    resolve(token);
  })
}

exports.verToken = function (token) {
  let info
  jwt.verify(token, 'signkey', (error, decoded) => {
    if (error) {
      info = error
    } else {
      info = decoded
    }
  })
  return info
}
