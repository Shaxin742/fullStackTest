'use strict';

// app/service/students.js
const Service = require('egg').Service;

class UserService extends Service {
  async list({ name }) {
    const { ctx } = this;
    return ctx.model.Students.find({ name });
    // ctx.model.Student.find({"title":"111"}) 表示在数据库中查找title 为111的对应数据
  }
  // 添加用户
  async add(req) {
    const { ctx } = this;
    return ctx.model.Students.create(req).then(res => {
      return { success: true, msg: res, code: 0 };
    }).catch(err => {
      return { success: false, err };
    });
  }
}
module.exports = UserService;
