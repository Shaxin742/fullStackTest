import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon, Button } from 'antd';
import './index.css'
import { logout } from '../../utils/Session'
import ContentMain from '../../components/contentMain'
import { Link, withRouter, Route, Switch } from 'react-router-dom'
import router from '../../routers/index.js'
const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;
class Menus extends Component {
  constructor(props) {
    super(props)
    this.state = {
      routes: []
    }
  }
  renderMenuItem = ({ path, icon, title, }) => {
    return (
      <Menu.Item key={path} style={{ width: '100%' }}>
        <Link to={path}>
          {icon && <Icon type='user' />}
          <span>{title}</span>
        </Link>
      </Menu.Item>
    )
  }
  renderSubMenu = ({ path, icon, title, routers }) => {
    return (
      <SubMenu key={path} title={<span>{icon && <Icon type={icon} />}<span>{title}</span></span>}>
        {
          routers && routers.map(item => {
            return item.routers && item.routers.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
          })
        }
      </SubMenu>
    )
  }
  render() {
    return (
      <Menu theme="dark" mode="inline">
        {
          router && router.map(item => {
            return item.routers && item.routers.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
          })
        }
      </Menu>
    )
  }
}

export default class SiderDemo extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  logout = () => {
    logout()
    this.props.history.push({
      pathname: '/login'
    })
  }
  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed} style={{ height: '100vh' }}>
          <div className="logo" />
          <Menus />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <Button onClick={this.logout}>登出</Button>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
            {/* {router.map(route => {
              return (<PrivateRoute
                exact
                key={route.path}
                path={route.path}
                component={route.component}
              />)
            })} */}
            <ContentMain/>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
