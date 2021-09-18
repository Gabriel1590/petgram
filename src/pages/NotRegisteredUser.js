import { useMutation } from '@apollo/client'
import React from 'react'
import { authenticate } from '../actions/session'
import { login } from '../apollo/mutations/login'
import { signUp } from '../apollo/mutations/register'
import { UserForm } from '../components/UserForm'
import { useStateValue } from '../hooks/useStateValue'

export default () => {
  // eslint-disable-next-line no-unused-vars
  const [_, dispatch] = useStateValue()
  const [mutateRegister, registerResult] = useMutation(signUp)
  const [mutateLogin, loginResult] = useMutation(login)

  const registerErrorMsg = registerResult.error && 'El usuario ya existe o hay algún problema.'
  const loginErrorMsg = loginResult.error && 'La contraseña no es correcta o el usuario no existe.'

  const activateAuth = ({ data }) => {
    dispatch(authenticate(data?.login || data?.signup))
  }

  const logIn = (input) => {
    mutateLogin({ variables: { input } })
      .then(activateAuth)
  }

  const register = (input) => {
    mutateRegister({ variables: { input } })
      .then(activateAuth)
  }

  return (
    <>
      <UserForm disabled={registerResult.loading} error={registerErrorMsg} onSubmit={register} title='Registrarse' />
      <UserForm disabled={loginResult.loading} error={loginErrorMsg} onSubmit={logIn} title='Iniciar Sesión' />
    </>
  )
}
