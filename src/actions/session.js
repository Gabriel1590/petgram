import { client } from '../apollo'
import { CHANGE_AUTH } from '../types/session'

export const authenticate = (token) => {
  window.sessionStorage.setItem('token', token)
  return {
    type: CHANGE_AUTH,
    isAuth: true
  }
}

export const logout = () => {
  window.sessionStorage.removeItem('token')
  client.resetStore()
  return {
    type: CHANGE_AUTH,
    isAuth: false
  }
}
