import ApolloClient from 'apollo-boost'

export const client = new ApolloClient({
  uri: 'https://petgram-server-test-mu.vercel.app/graphql',
  request: (operation) => {
    const token = window.sessionStorage.getItem('token')
    const authorization = token ? `Bearer ${token}` : ''
    operation.setContext({
      headers: {
        authorization
      }
    })
  },
  onError: error => {
    const { networkdError } = error
    if (networkdError && networkdError.result.code === 'invalid_token') {
      window.sessionStorage.removeItem('token')
      window.location.href = '/'
    }
  }
})
