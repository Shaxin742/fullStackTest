'use strict';

// app/controller/student.js
const Controller = require('egg').Controller;

class UserController extends Controller {
// 这里的 list 就是上面 controller.student.list 里面的 list
  async list() {
    const { ctx } = this;
    console.log(ctx.service.students);
    const aa = await ctx.service.students.list();
    // 为了方便文件的管理，当后续controller的方法变多的时候，操作数据库的语言就不适合都挤在一个文件里面，所以egg框架的service文件夹就起到了分配压力的作用，所有具体的sql操作会写在service文件夹中，我也是为了方便操作的复用。
    // 此处我们调用的是 service 文件夹里面的student.js 文件里面的 list方法
    // 调用玩这个方法后，会返回一个数据库中查找出来的数据，我们用变量 aa 来接收
    ctx.body = aa;
    // 将接收到返回的数据渲染出来，也可以用return的方式放回给前端
  }
}
module.exports = UserController;
