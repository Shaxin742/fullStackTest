const getters = {

  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  roles: state => state.user.roles,

  permission_routes: state => state.permission.routes,
  addRoutes: state => state.permission.addRoutes,

  sidebar: state => state.app.sidebar
}
export default getters
