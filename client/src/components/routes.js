import Loadable from 'react-loadable'

import { LoadingPage } from '.'

/* export const AsyncWelcome = Loadable({
  loader: () => import('../containers/WelcomePage'),
  loading: LoadingPage,
}) */

export const AsyncWelcome = Loadable({
  loader: () => import('./pages/Welcome'),
  loading: LoadingPage,
})

// Register page

export const AsyncRegister = Loadable({
  loader: () => import('../containers/Register'),
  loading: LoadingPage,
})

// Login page

export const AsyncLogin = Loadable({
  loader: () => import('../containers/Login'),
  loading: LoadingPage,
})
