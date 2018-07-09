import { pipe } from '../../utils'
import * as mutators from './mutators'

/**
 * Constants
 */

const SEND_LOGIN_REQUEST = 'auth/SEND_LOGIN_REQUEST'
const SEND_LOGIN_SUCCESS = 'auth/SEND_LOGIN_SUCCESS'
const SEND_LOGIN_FAILURE = 'auth/SEND_LOGIN_FAILURE'

// Register

const SEND_REGISTER_REQUEST = 'auth/SEND_REGISTER_REQUEST'
const SEND_REGISTER_SUCCESS = 'auth/SEND_REGISTER_SUCCESS'
const SEND_REGISTER_FAILURE = 'auth/SEND_REGISTER_FAILURE'

// Logout
const LOG_OUT_REQUEST = 'auth/LOG_OUT_REQUEST'

export const CONSTANTS = {
  // Login
  SEND_LOGIN_REQUEST,
  SEND_LOGIN_SUCCESS,
  SEND_LOGIN_FAILURE,
  // Signup
  SEND_REGISTER_REQUEST,
  SEND_REGISTER_SUCCESS,
  SEND_REGISTER_FAILURE,
  // Logout
}

/**
 * Actions
 */
// Login action
export const requestLogin = values => ({
  type: SEND_LOGIN_REQUEST,
  values,
})

// Register actions
export const requestRegister = values => ({
  type: SEND_REGISTER_REQUEST,
  values,
})
// Log out action
export const requestLogout = () => ({
  type: LOG_OUT_REQUEST,
})
/**
 * Handler
 */

export const ActionHandler = {
  // Login Handler
  [SEND_LOGIN_REQUEST]: state =>
    pipe(
      [mutators.showLoginLoading],
      state
    ),
  [SEND_LOGIN_SUCCESS]: (state, action) =>
    pipe(
      [mutators.hideLoginLoading, mutators.setData(action)],
      state
    ),
  [SEND_LOGIN_FAILURE]: state =>
    pipe(
      [mutators.hideLoginLoading],
      state
    ),
  // Register Handler
  [SEND_REGISTER_REQUEST]: state =>
    pipe(
      [mutators.showRegisterLoading],
      state
    ),
  [SEND_REGISTER_SUCCESS]: state =>
    pipe(
      [mutators.hideRegisterLoading],
      state
    ),
  [SEND_REGISTER_FAILURE]: state =>
    pipe(
      [mutators.hideRegisterLoading],
      state
    ),
  // Logout
  [LOG_OUT_REQUEST]: state =>
    pipe(
      [mutators.clearData],
      state
    ),
}
