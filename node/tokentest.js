/*
 * @Author: ShaXin
 * @Date: 2020-06-12 16:01:38
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-06-15 09:58:35
 */
const jwt = require('jsonwebtoken')

var JwtUtil = require('./vertify.js');
var expressJwt = require('express-jwt');
// Token 数据
const payload = {
  name: 'wanghao',
  admin: true
}
let token

JwtUtil.setToken(payload).then((token) => {
  token = token
  console.log(token)
})

JwtUtil.verToken(token).then((err, data) => {
  console.log(err)
  console.log(data)
})

// 密钥
const secret = 'ILOVENINGHAO'

// 签发 Token
const token = jwt.sign(payload, secret, { expiresIn: '1day' })

// 输出签发的 Token
console.log(token)

jwt.verify(token, secret, (error, decoded) => {
  if (error) {
    console.log(error.message)
    return
  }
  console.log(decoded)
})
