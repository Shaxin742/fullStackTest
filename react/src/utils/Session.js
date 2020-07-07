import Cookies from 'js-cookie'
const LOGIN_COOKIE_NAME = 'username'

export function isAuthenticated() {
  return Cookies.get(LOGIN_COOKIE_NAME)
}

export function authenticateSuccess(token) {
  Cookies.set(LOGIN_COOKIE_NAME, 'sssss')
}

export function logout() {
  Cookies.set(LOGIN_COOKIE_NAME, '')
}
