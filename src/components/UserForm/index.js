import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { SubmitButton } from '../SubmitButton'
import { Error, Form, Input, Title } from './styles'

export const UserForm = ({ onSubmit, title, error, disabled }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({
      email: email.value,
      password: password.value
    })
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Title>{title}</Title>

        <Input placeholder='Email' disabled={disabled} {...email} />
        <Input placeholder='Password' type='password' disabled={disabled} {...password} />

        <SubmitButton disabled={disabled}>{title}</SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}
