const routers = [
  { path: '/test', title: '测试', icon: 'user' },
  {
    path: '/user', title: '是是是', icon: 'user', routers: [
      { path: '/user/table', title: 'Table', icon: 'user' },
    ]
  },
]

export default routers
