export default {
  'post|/user/login': option => {
    return {
      code: 200,
      message: 'success',
      data: 'admin-token'
    }
  }
}
