import React, { Component } from "react";
import { Button, Form, Input, Checkbox, Icon } from "antd";
import { authenticateSuccess } from '../../utils/Session'

class login extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    const { validateFields } = this.props.form;
    validateFields((err, values) => {
      if (!err) {
        console.log(values)
        authenticateSuccess("username", '123123')
        this.props.history.push({
          pathname: '/test'
        })
      } else {
        console.log(1)
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        {/* <Button onClick={this.login}>登录</Button> */}
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}
export default Form.create()(login)
