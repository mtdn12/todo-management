import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'

import { themeMui } from '../utils/themeMui'

import { ErrorBoundary } from '.'
import * as routes from './routes'
import { PrivateRoute } from '../containers'

const App = () => (
  <MuiThemeProvider theme={themeMui}>
    <ErrorBoundary>
      <CssBaseline />
      <Switch>
        <Redirect exact from="/" to="/welcome" />
        <Route path="/welcome" component={routes.AsyncWelcome} />
        <Route path="/register" component={routes.AsyncRegister} />
        <Route path="/login" component={routes.AsyncLogin} />
        <PrivateRoute path="/todo" component={routes.AsyncToDo} />
        <PrivateRoute path="/daily-task" component={routes.AsyncDailyTask} />
        <PrivateRoute path="/history" component={routes.AsyncHistory} />
      </Switch>
    </ErrorBoundary>
  </MuiThemeProvider>
)

export default App
