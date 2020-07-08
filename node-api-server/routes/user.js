var express = require('express');
var router = express.Router();
var db = require('../db/db'); //引入db
var JwtUtil = require('../token_vertify.js');
// const jwt = require('jsonwebtoken')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function (req, res, next) {
  var response
  var params = req.body;
  console.log('login',params)
  let sqlSelect = 'SELECT * FROM users WHERE username = ? && password=?'
  db.pool.query(sqlSelect, [params.username, params.password], (err, results) => {
    if (err) {
      response = { code: 500, data: '数据库链接错误' };
    } else {
      if (results && results.length) {
        let jwt = new JwtUtil({ name: params.username, id: results[0].id });
        let token = jwt.generateToken();
        response = { code: 200, message: 'success', data: { token: token } };
      } else {
        response = { code: 400, data: '用户名或密码错误' };
      }
    }
    res.send(response);
  });
})


router.get('/info', function (req, res) {
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
  const info = users['admin-token']
  if (!info) {
    response = { code: 400, data: '登录失败' }
  } else {
    response = { code: 200, data: info };
  }
  res.send(response);
})

router.post('/logout', function (req, res) {
  var response = { code: 200, data: 'success' };
  res.send(response);
})

module.exports = router;
