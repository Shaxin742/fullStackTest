/*
 * @Author: ShaXin
 * @Date: 2020-06-08 09:35:53
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-06-08 17:24:33
 */

var express = require('express')
var router = express.Router()
var db = require('../db/db') // 引入db

router.post('/sqlInsert', function(req, res) {
  db.pool.query('INSERT INTO users (username,password) values (?,?)', ['admin', '1232456'], (err, results) => {
    console.log(err)
    console.log(results)
    res.send({ code: 200, data: 123 })
  })
})
router.post('/sqlSelect', function(req, res) {
  const sqlSelect = 'SELECT * FROM users WHERE username = ? && password=?'
  db.pool.query(sqlSelect, ['admin', '123456'], (err, results) => {
    console.log(err)
    console.log(results)
    res.send({ code: 200, data: results })
  })
})
router.post('/sqlDelete', function(req, res) {
  const sqlDelete = 'DELETE FROM users WHERE username = ? && password=?'
  db.pool.query(sqlDelete, ['admin', '1232456'], (err, results) => {
    console.log(err)
    console.log(results)
    res.send({ code: 200, data: results })
  })
})

router.post('/sqlUpdate', function(req, res) {
  const sqlUpdate = 'UPDATE users SET username = ?  WHERE  username=?'
  db.pool.query(sqlUpdate, ['admin2222', 'admin'], (err, results) => {
    console.log(err)
    console.log(results)
    res.send({ code: 200, data: results })
  })
})
