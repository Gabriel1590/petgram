import { CHANGE_AUTH } from '../types/session'

export const sessionInitialState = {
  isAuth: !!window.sessionStorage.getItem('token')
}

export const sessionReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_AUTH:
      return {
        ...state,
        isAuth: action.isAuth
      }

    default:
      return state
  }
}
