import React, { Suspense } from 'react'
import { Redirect, Router } from '@reach/router'
import { useStateValue } from './hooks/useStateValue'
import { GlobalStyles } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'

import Home from './pages/Home'

// const Home = React.lazy(() => import('./pages/Home'))
const Detail = React.lazy(() => import('./pages/Detail'))
const Favs = React.lazy(() => import('./pages/Favs'))
const User = React.lazy(() => import('./pages/User'))
const NotRegisteredUser = React.lazy(() => import('./pages/NotRegisteredUser'))
const NotFound = React.lazy(() => import('./pages/NotFound'))

export const App = () => {
  const [{ isAuth }] = useStateValue()

  return (
    <Suspense fallback={<div />}>
      <GlobalStyles />

      <Logo />

      <Router>
        <NotFound default />

        <Home path='/' />
        <Home path='/pet/:id' />
        <Detail path='/detail/:detailId' />

        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect noThrow from='/favs' to='/login' />}
        {!isAuth && <Redirect noThrow from='/user' to='/login' />}
        {isAuth && <Redirect noThrow from='/login' to='/' />}

        <Favs path='/favs' />
        <User path='/user' />
      </Router>

      <NavBar />
    </Suspense>
  )
}
