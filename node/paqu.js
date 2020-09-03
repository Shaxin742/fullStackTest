var https = require('https') // Node.js提供了http模块，用于搭建HTTP服务端和客户端
var url = 'https://www.acfun.cn/' //输入任何网址都可以
var fs = require("fs")
var request = require('request')

var cheerio = require('cheerio') // 抓取页面模块，为服务器特别定制的，快速、灵活、实施的jQuery核心实现

https.get(url, function (res) {  //发送get请求
  var html = ''
  res.on('data', function (data) {
    html += data  //字符串的拼接
  })
  res.on('end', function () {
    var courseData = filterChapters(html)
    console.log('courseData', courseData)
    courseData.map((item, index) => {
      let filename = index　　// 已原网络图片的名称命名本地图片
      request({ url: item.url }).pipe(
        fs.createWriteStream(`./images/${filename}`).on('close', err => { console.log('写入失败', err) })
      )
    })
  })
}).on('error', function () {
  console.log('获取资源出错！')
})

function filterChapters(html) {
  var $ = cheerio.load(html)  // 加载需要的html
  var chapters = $('div')  //在html里寻找需要的资源的class
  var courseData = [] // 创建一个数组，用来保存资源
  console.log(chapters)
  chapters.each(function (item, index) {  //遍历html文档
    var chapter = $(this)
    var url = chapter.find('img').attr('src')
    console.log(url)
    if (url && url.indexOf('http') !== -1) {
      courseData.push({
        url: url,
      })
    }
  })
  return courseData //返回需要的资源
}

// var fs = require('fs');
// var request = require("request");

// const img = [
//   "http://yw-yx.oss-cn-hangzhou.aliyuncs.com/ywwl-jylesson/2019/08/52218400506629423.jpg",
//   "http://yw-yx.oss-cn-hangzhou.aliyuncs.com/ywwl-jylesson/2019/08/52218400540139692.jpg",
// ];

// img.forEach(src => {
//   var writeStream = fs.createWriteStream('./assets/' + src.split('/2019/08/')[1]);
//   var readStream = request(src)
//   readStream.pipe(writeStream);
//   readStream.on('end', function () {
//     console.log('文件下载成功');
//   });
//   readStream.on('error', function () {
//     console.log(1);
//     // console.log("错误信息:" + err)
//   })
//   writeStream.on("finish", function () {
//     console.log("文件写入成功");
//     writeStream.end();
//   });
// });

