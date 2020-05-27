const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
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
  }
}
