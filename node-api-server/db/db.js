/*
 * @Author: ShaXin
 * @Date: 2020-06-05 11:29:13
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-06-05 11:46:45
 */
var mysql = require("mysql");

var pool = mysql.createConnection({
  host: "localhost", // 主机地址
  port: 3306, // 端口
  user: "root", // 数据库访问账号
  password: "123456", // 数据库访问密码
  database: "test", // 要访问的数据库
  charset: "UTF8_GENERAL_CI", // 字符编码 ( 必须大写 )
  typeCast: true, // 是否把结果值转换为原生的 javascript 类型
  supportBigNumbers: true, // 处理大数字 (bigint, decimal), 需要开启 ( 结合 bigNumberStrings 使用 )
  bigNumberStrings: true, // 大数字 (bigint, decimal) 值转换为javascript字符对象串
  multipleStatements: false // 允许每个mysql语句有多条查询, 未防止sql注入不开启
});

pool.connect(function (err) {
  if (err) {
    console.log("与MySQL数据库建立连接失败。");
    console.log(err);
  } else {
    console.log("与MySQL数据库建立连接成功。");
  }
});


// function query(sql, values, callback) {
//   console.log("db pool");
//   pool.getConnection(function (err, connection) {
//     if (err) throw err;
//     console.log("get connection ");
//     //Use the connection
//     connection.query(sql, values, function (err, results, fields) {
//       console.log(JSON.stringify(results));`
//       //每次查询都会 回调
//       callback(err, results);
//       //只是释放链接，在缓冲池了，没有被销毁
//       connection.release();
//       if (err) throw error;

//     });

//   });
// }
exports.pool = pool;
// exports.query = query;
