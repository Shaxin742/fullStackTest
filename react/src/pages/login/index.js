import React, { Component } from "react";
import { Button, Form, Input, Checkbox, Icon, message } from "antd";
import './login.scss'
import { observer, inject } from 'mobx-react';
import { Link } from 'react-router-dom'
import { authenticateSuccess } from '../../utils/Session'
import { login } from '../../api/user'

@inject('userStore')
@observer
class loginPage extends Component {
  state = {
    loading: false
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      loading: true
    })
    const { validateFields } = this.props.form;
    validateFields((err, values) => {
      if (!err) {
        // this.props.userStore.toggleLogin(values)
        login(JSON.stringify(values)).then(res => {
          console.log(res)
          if (res && res.code === 200) {
            this.setState({
              loading: false
            })
            authenticateSuccess(res.data.token)
            this.props.userStore.toggleToken(res.data.token)
            this.props.history.push({
              pathname: '/dash'
            })
          } else {
            this.setState({
              loading: false
            })
            message.error('登录失败:' + res);
          }
        })
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
                <Link className='forgotPw'>忘记密码</Link>
              </div>)}
            </Form.Item>
            <Form.Item>
              <Button loading={this.state.loading} type="primary" htmlType="submit" className="login-form-button">
                登 录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}
export default Form.create()(loginPage)
