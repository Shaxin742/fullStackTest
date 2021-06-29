'use strict';

// app/service/students.js
const Service = require('egg').Service;

class UserService extends Service {
  async list() {
    const { ctx } = this;
    return ctx.model.Students.find({});
    // ctx.model.Student.find({"title":"111"}) 表示在数据库中查找title 为111的对应数据
  }
}
module.exports = UserService;
