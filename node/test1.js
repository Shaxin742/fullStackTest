const express = require("express");
const app = express();
var bodyParser = require("body-parser");

var mysql = require("mysql");
var fs = require("fs");
var connection = mysql.createConnection({
  host: "localhost", // 主机地址
  port: 3306, // 端口
  user: "root", // 数据库访问账号
  password: "Shaxin74250", // 数据库访问密码
  database: "test", // 要访问的数据库
  charset: "UTF8_GENERAL_CI", // 字符编码 ( 必须大写 )
  typeCast: true, // 是否把结果值转换为原生的 javascript 类型
  supportBigNumbers: true, // 处理大数字 (bigint, decimal), 需要开启 ( 结合 bigNumberStrings 使用 )
  bigNumberStrings: true, // 大数字 (bigint, decimal) 值转换为javascript字符对象串
  multipleStatements: false // 允许每个mysql语句有多条查询, 未防止sql注入不开启
});
connection.connect(function(err) {
  if (err) console.log("与MySQL数据库建立连接失败。");
  else {
    console.log("与MySQL数据库建立连接成功。");
  }
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.all("*", function(req, res, next) {
  //设置跨域访问
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, content-type");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  // res.header("Access-control-max-age", 1000);
  res.header("Content-Type", "application/json;charset=utf-8");
  if (req.method == "OPTIONS") res.sendStatus(200);
  else next();
});
app.use(bodyParser.urlencoded({ extended: false }));
var infor = [
  //传前端的数据
  {
    name: "jay",
    age: 20,
    sex: "男",
    hobby: "basketball"
  },
  {
    name: "贼好玩",
    age: 23,
    sex: "女",
    hobby: "shopping"
  },
  {
    name: "高渐离",
    age: 24,
    sex: "男",
    hobby: "music"
  },
  {
    name: "小红",
    age: 28,
    sex: "男",
    hobby: "game"
  },
  {
    name: "Tony",
    age: 24,
    sex: "男",
    hobby: "no"
  }
];

app.post("/postTest", function(req, res) {
  //配置接口api
  // console.log(req.query);
  // console.log(req.params);
  // console.log(req.body);
  console.log(req.body.name);
  // if (err)
  //     return res.json({ err_code: 1, message: "获取失败", affectedRows: 0 });
    res.json({
      err_code: 0,
      data: infor,
      affectedRows: 0
    });
});
app.get("/getTest", function(req, res) {
  //配置接口api
  console.log(req.query);
  const sqlStr = "select * from node_test";
  connection.query(sqlStr, (err, results) => {
    console.log(results);
    if (err)
      return res.json({ err_code: 1, message: "获取失败", affectedRows: 0 });
    res.json({
      err_code: 0,
      data: results,
      affectedRows: 0
    });
  });
});

//配置服务端口
var server = app.listen(5000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("listen at http://%s:%s", host, port);
});
