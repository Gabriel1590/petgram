// Dependencies
import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/react-hooks'

// Components
import { App } from './App'
import { ContextProvider } from './Context'
import { sessionInitialState, sessionReducer } from './reducers/session'
import { client } from './apollo'

ReactDOM.render(
  (
    <ContextProvider initialState={sessionInitialState} reducer={sessionReducer}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </ContextProvider>
  ),
  document.getElementById('app')
)
