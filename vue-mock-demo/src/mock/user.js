
import { getUrlParams } from './utils.js'
const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}
export default {
  login: option => {
    const { username } = JSON.parse(option.body)
    const token = tokens[username]
    // mock error
    if (!token) {
      return {
        code: 402,
        message: '账户名或密码错误'
      }
    }

    return {
      code: 200,
      message: 'success',
      data: token
    }
  },

  info: option => {
    const { token } = getUrlParams(option.url)
    const info = users[token]
    if (!info) {
      return {
        code: 50008,
        message: 'Login failed, unable to get user details.'
      }
    }

    return {
      code: 200,
      data: info
    }
  },

  logout: () => {
    return {
      code: 200,
      data: 'success'
    }
  }
}
