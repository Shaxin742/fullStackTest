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
  var response
  var params = req.body;
  const token = tokens[params.username]
  if(token){
    response = {code:200,data:token};
  }else{
    response = {code:400,data:'用户名或密码错误'};
  }
  res.send(response);
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

  // var params = URL.parse(req.url,true).query;

  var params = req.query
  var response
  const info = users[params.token]
  if (!info) {
    response= {code:400,data:'登录失败'}
  }else{
    response= {code:200,data:info};
  }
  res.send(response);
})

router.post('/logout',function(req,res){
  var response = {code:200,data:'success'};
  res.send(response);
})

module.exports = router;
