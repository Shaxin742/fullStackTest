'use strict';

// app/model/students.js
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  console.log('mongoose', mongoose);

  const UserSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
    },
    sexy: {
      type: Number,
      // enum: [ '男', '女' ],
    },
    // phone: {
    //   type: String,
    //   validate: {
    //     validator(v) {
    //       if (v.length < 8) {
    //         return false;
    //       }
    //     },
    //     message: '${v} is not a valid phone number!',
    //   },
    // },
  });
  // 以上定义了表数据的类型

  return mongoose.model('test', UserSchema, 'students');
  // model(参数1，参数2，参数3）参数3是你数据表中需要操作的表的名字，
  // 比如我现在要操作的是名字叫mongoTest里面的叫studentInfo的表
};