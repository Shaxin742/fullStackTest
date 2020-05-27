var express = require('express');
var router = express.Router();
var URL = require('url'); //请求url模块

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login',function(req,res,next){
  const tokens = {
    admin: {
      token: 'admin-token'
    },
    editor: {
      token: 'editor-token'
    }
  }
  var params = URL.parse(req.url,true).query;

  const token = tokens[params.username]
  if (!token) {
    return {
      code: 400,
      message: '用户名或密码错误'
    }
  }
  var response = {code:200,data:token};
  res.send(JSON.stringify(response));
})

router.get('/info',function(req,res){
  const users = {
    'admin-token': {
      roles: ['admin'],
      introduction: 'I am a super administrator',
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      name: 'Super Admin'
    },
    'editor-token': {
      roles: ['editor'],
      introduction: 'I am an editor',
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      name: 'Normal Editor'
    }
  }
  var params = URL.parse(req.url,true).query;
  const info = users[params.token]
  if (!info) {
    return {
      code: 400,
      message: '登录失败'
    }
  }
  var response = {code:200,data:info};
  res.send(JSON.stringify(response));
})

router.post('/logout',function(res){
  var response = {code:200,data:'success'};
  res.send(JSON.stringify(response));
})

module.exports = router;
