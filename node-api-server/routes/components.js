/*
 * @Author: ShaXin
 * @Date: 2020-06-01 16:38:15
 * @LastEditors: ShaXin
 * @LastEditTime: 2020-06-02 09:10:53
 */

var express = require('express');
var router = express.Router();
const app = express();
const multer = require('multer');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
const upload = multer({                     // 实例化multer对象
  dest: './public/uploads'                        // 保存上传文件的目录
});
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.get('/getSongs', function (req, res) {
  const { name } = req.query
  console.log(name)
  const songs = {
    '周': {
      id: 1,
      lrc: '[00:00.00]说好不哭 - 周杰伦 [00:10.00] [00:13.00]作词：方文山 [00:16.00]作曲：周杰伦 [00:19.00] [00:26.59]没有了联络 后来的生活 [00:29.70]我都是听别人说 [00:32.90]说你怎么了 说你怎么过 [00:36.00]放不下的人是我 [00:38.25] [00:39.32]人多的时候 就待在角落 [00:42.37]就怕别人问起我 [00:45.75]你们怎么了 你低着头 [00:48.35]护着我连抱怨都没有 [00:50.83] [00:51.73]电话开始躲 从不对我说 [00:54.88]不习惯一个人生活 [00:58.16]离开我以后 要我好好过 [01:01.19]怕打扰想自由的我 [01:03.45] [01:04.56]都这个时候 你还在意着 [01:07.52]别人是怎么怎么看我的 [01:10.58]拼命解释着 不是我的错 [01:13.15]是你要走 [01:14.85] [01:15.93]眼看着你难过 [01:21.88]挽留的话却没有说 [01:28.31]你会微笑放手 [01:34.55]说好不哭让我走 [01:40.26] [01:55.39]电话开始躲 从不对我说 [01:58.28]不习惯一个人生活 [02:01.32]离开我以后 要我好好过 [02:04.64]怕打扰想自由的我 [02:06.55] [02:07.80]都这个时候 你还在意着 [02:10.83]别人是怎么怎么看我的 [02:13.76]拼命解释着 不是我的错 [02:16.25]是你要走 [02:17.69] [02:18.71]眼看着你难过 [02:24.88]挽留的话却没有说 [02:31.46]你会微笑放手 [02:37.55]说好不哭让我走 [02:44.55] [02:53.91]你什么都没有 [02:59.99]却还为我的梦加油 [03:05.93]心疼过了多久 [03:12.88]还在找理由等我 [03:19.55] [03:20.88]lrc歌词编辑：天龙 QQ：26092798',
      name: '说好不哭',
      url: 'http://qiniudns.shaxin741.vip/%E5%91%A8%E6%9D%B0%E4%BC%A6%20-%20%E8%AF%B4%E5%A5%BD%E4%B8%8D%E5%93%AD%20%5Bmqms2%5D.mp3'
    },
    '李': {
      id: 2,
      lrc: '',
      name: '低空飞行',
      url: 'http://qiniudns.shaxin741.vip/%E5%B0%8F%E5%A4%B4%E8%8F%9C%20-%20%E4%BD%8E%E7%A9%BA%E9%A3%9E%E8%A1%8C%EF%BC%88%E7%BF%BB%E8%87%AA%20%E6%B2%88%E4%BB%A5%E8%AF%9A%EF%BC%89.flac'
    }
  }
  var response = { code: 200, data: songs[name] }

  res.send(response);
})

router.post('/formsubmit', function (req, res) {
// router.post("/formsubmit", upload.single('files',10), (req, res) => {
  console.log(req.fields);
  console.log(req.files);
  console.log(req.body);
  res.send({ code: 200, data: '123123' });
})
// router.post("/formsubmit", multipartMiddleware, function (req, res) {
//   app.use(bodyParser.urlencoded({ extended: false }));
//   console.log(req)
//   let { files } = req
//   console.log(files.file)
//   res.send({ code: 200, data: '123123' });
// })
module.exports = router;
