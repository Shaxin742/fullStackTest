const routers = [
  { path: '/dash', title: 'dash', icon: 'user' },
  { path: '/test', title: '测试', icon: 'user' },
  {
    path: '/user', title: '是是是', icon: 'user', routers: [
      { path: '/user/table', title: 'Table', icon: 'user' },
    ]
  },
  { path: '/editor', title: '富文本', icon: 'user' },
]

export default routers
