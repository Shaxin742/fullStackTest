/*
 * @Author: ShaXin
 * @Date: 2020-06-12 15:06:20
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-06-15 09:21:39
 */
var jwt = require('jsonwebtoken');
var signkey = 'shaxin';

exports.setToken = function (username, password) {
  return new Promise((resolve, reject) => {
    const token = jwt.sign({
      name: username,
      password: password
    }, signkey, { expiresIn: '1day' });
    resolve(token);
  })
}

exports.verToken = function (token) {
  return new Promise((resolve, reject) => {
    var info = jwt.verify(token.split(' ')[1], 'signkey');
    resolve(info);
  })
}
