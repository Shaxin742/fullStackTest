
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

export default connection
