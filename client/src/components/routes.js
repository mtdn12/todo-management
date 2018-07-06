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
