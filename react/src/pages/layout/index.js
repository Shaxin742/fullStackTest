import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon, Button, Dropdown } from 'antd';
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
    let { defaultSelectedKeys, defaultOpenKeys } = this.props
    return (
      <Menu defaultOpenKeys={defaultOpenKeys} defaultSelectedKeys={defaultSelectedKeys} theme="dark" mode="inline">
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
    defaultSelectedKeys: [],
    defaultOpenKeys: [],
  };

  componentWillMount() {
    let pathName = this.props.history.location.pathname
    let paths = pathName.split("/")
    // 菜单
    let defaultSelectedKeys = [pathName]
    let keys = paths.length > 2 ? paths.slice(0, paths.length - 1) : []
    // 菜单
    let defaultOpenKeys = keys.filter(item => { return item }).map(item => item = '/' + item)
    this.setState({
      defaultSelectedKeys,
      defaultOpenKeys
    })
  }

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
    const menu = (
      <Menu>
        <Menu.Item>
          个人中心
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item onClick={this.logout}>
          注销
        </Menu.Item>
      </Menu>
    );
    let { defaultOpenKeys, collapsed, defaultSelectedKeys } = this.state
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} style={{ height: '100vh' }}>
          <div className="logo" />
          <Menus defaultOpenKeys={defaultOpenKeys} defaultSelectedKeys={defaultSelectedKeys} />
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <span className='userAver'>
              <Dropdown overlay={menu}>
                <img onClick={e => e.preventDefault()} src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594635658169&di=f142d0aa478a92f3ebdcd959f45fcd21&imgtype=0&src=http%3A%2F%2Fa1.att.hudong.com%2F62%2F02%2F01300542526392139955025309984.jpg' alt='123'></img>
              </Dropdown>
            </span>
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
            <ContentMain />
          </Content>
        </Layout>
      </Layout>
    );
  }
}
