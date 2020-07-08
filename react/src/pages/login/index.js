import React, { Component } from "react";
import { Button, Form, Input, Checkbox, Icon } from "antd";
import { authenticateSuccess } from '../../utils/Session'
import './login.scss'

class login extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const { validateFields } = this.props.form;
    validateFields((err, values) => {
      if (!err) {
        console.log(values)
        // authenticateSuccess("username", '123123')
        // this.props.history.push({
        //   pathname: '/test'
        // })
        fetch('/api/user/login', {
          method: 'post',
          body: JSON.stringify(values),
          headers: {
            'content-type': 'application/json'
          },
        }).then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(response => console.log('Success:', response));
      } else {
        console.log('errrrrrrrrrrrrrrrrrrrrrrrrrrrror')
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='login-container'>
        <div className="login-form">
          <h4 className='title'>登录</h4>
          <Form onSubmit={this.handleSubmit}>
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: '请输入用户名!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="用户名"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="密码"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
              })(<div>
                <Checkbox>Remember me</Checkbox>
                <a href='javascript:void(0)' className='forgotPw'>忘记密码</a>
              </div>)}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登 录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}
export default Form.create()(login)
