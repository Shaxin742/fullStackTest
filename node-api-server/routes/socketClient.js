/*
 * @Author: ShaXin
 * @Date: 2020-06-17 11:01:15
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-06-19 11:10:50
 */
var express = require('express');

var router = express.Router();

router
  .get('/socketServer', function (req, res, next) {
    res.send('respond with a resource');
  })

module.exports = router;
