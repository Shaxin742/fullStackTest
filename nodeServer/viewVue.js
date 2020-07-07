/*
 * @Author: ShaXin
 * @Date: 2020-05-26 16:36:58
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-07-07 11:04:26
 * 查看vue打包后文件服务
 */
var express = require('express');
var app = express();

app.use('/static',express.static(__dirname + '/htmlViews/static'));

app.get('/', function(req, res){
   res.sendFile(__dirname+'/htmlViews/index.html');
});

var server = app.listen(9877, function(){
   var host = server.address().address;
   var port = server.address().port;
   
   console.log('App listening at http://%s:%s', host, port);
});
