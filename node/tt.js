/*
 * @Author: ShaXin
 * @Date: 2020-05-27 15:35:58
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-05-27 15:49:07
 */
var express = require('express');
var router = express.Router();
router.post("/login",function(req,res){
  console.log(req.body.name);
  res.json({
    err_code: 0,
    data: infor,
    affectedRows: 0
  });
})
