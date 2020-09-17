const Mock = require('mockjs')

Mock.mock(/\/app\/login/, 'post', (data) => {
  console.log(data)
  return {
    data: {
      token:'123123123'
    },
    code: 200
  }
})
