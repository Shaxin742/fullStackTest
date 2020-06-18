/*
 * @Author: ShaXin
 * @Date: 2020-06-17 11:01:15
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-06-18 17:12:09
 */
var express = require('express');
var router = express.Router();
const app = require('express')();
const expressWs = require('express-ws')
expressWs(router);

router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/socketServer', function (req, ws) {
  ws.send('连接成功')
  let interval
  interval = setInterval(() => {
    if (ws.readyState === ws.OPEN) {
      ws.send(Math.random().toFixed(2))
    } else {
      clearInterval(interval)
    }
  }, 1000)

  ws.on('message', msg => {
    ws.send(msg)
  })
  // io.on('connection', function (socket) { // socket相关监听都要放在这个回调里
  //   console.log('a user connected');
  //   socket.on("disconnect", function () {
  //     console.log("a user go out");
  //   });

  //   socket.on("msg", function (obj) {
  //     //延迟3s返回信息给客户端
  //     setTimeout(function () {
  //       console.log('the websokcet message is' + obj);
  //       io.emit("msg", obj);
  //     }, 3000);
  //   });
  //   ws.send('123')
  });

  let interval
  interval = setInterval(() => {
    if (ws.readyState === ws.OPEN) {
      ws.send(Math.random().toFixed(2))
    } else {
      clearInterval(interval)
    }
  }, 1000)

  ws.on('message', msg => {
    ws.send(msg)
  })
})

router.post('/logout', function (req, res) {
  var response = { code: 200, data: 'success' };
  res.send(response);
})

module.exports = router;
