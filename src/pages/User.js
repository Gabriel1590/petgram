import React from 'react'
import { logout } from '../actions/session'
import { SubmitButton } from '../components/SubmitButton'
import { useStateValue } from '../hooks/useStateValue'

export default () => {
  // eslint-disable-next-line no-unused-vars
  const [_, dispatch] = useStateValue()

  const removeAuth = () => {
    dispatch(logout())
  }

  return (
    <>
      <h1>User</h1>
      <SubmitButton onClick={removeAuth}>Cerrar Sesión</SubmitButton>
    </>
  )
}
