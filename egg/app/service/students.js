'use strict';

// app/service/students.js
const Service = require('../core/BaseService');

class UserService extends Service {
  async list({ name }) {
    const { ctx } = this;
    return ctx.model.Students.find({ name });
    // ctx.model.Student.find({"title":"111"}) 表示在数据库中查找title 为111的对应数据

    // const { Students } = this.ctx.model;
    // const student = new Students();
    // student.sort = name;
    // student.save();
  }
  // 添加用户
  async add(req) {
    const { Students } = this.ctx.model;
    // return Students.create(req).then(res => {
    //   return { success: true, msg: res, code: 0 };
    // }).catch(err => {
    //   return { success: false, err };
    // });
    const student = new Students();
    student.name = req.name;
    student.sexy = req.sexy;
    student.address = req.address;
    student.save();
  }
}
module.exports = UserService;
