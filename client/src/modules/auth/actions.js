import { pipe } from '../../utils'
import * as mutators from './mutators'

/**
 * Constants
 */

const SEND_LOGIN_REQUEST = 'auth/SEND_LOGIN_REQUEST'
const SEND_LOGIN_SUCCESS = 'auth/SEND_LOGIN_SUCCESS'
const SEND_LOGIN_FAILURE = 'auth/SEND_LOGIN_FAILURE'

// SignUp

const SEND_SIGN_UP_REQUEST = 'auth/SEND_SIGN_UP_REQUEST'
const SEND_SIGN_UP_SUCCESS = 'auth/SEND_SIGN_UP_SUCCESS'
const SEND_SIGN_UP_FAILURE = 'auth/SEND_SIGN_UP_FAILURE'
const SEND_SIGN_UP_ERRORS = 'auth/SEND_SIGN_UP_ERRORS'

// Logout
const LOG_OUT_REQUEST = 'auth/LOG_OUT_REQUEST'

export const CONSTANTS = {
  // Login
  SEND_LOGIN_REQUEST,
  SEND_LOGIN_SUCCESS,
  SEND_LOGIN_FAILURE,
  // Signup
  SEND_SIGN_UP_REQUEST,
  SEND_SIGN_UP_SUCCESS,
  SEND_SIGN_UP_FAILURE,
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

// Signup actions
export const requestSignUp = values => ({
  type: SEND_SIGN_UP_REQUEST,
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
      [
        mutators.hideLoginLoading,
        mutators.clearItemLogin,
        mutators.hideLoginDialog,
        mutators.setData(action),
      ],
      state
    ),
  [SEND_LOGIN_FAILURE]: state =>
    pipe(
      [mutators.hideLoginLoading],
      state
    ),
  // signUp Handler
  [SEND_SIGN_UP_REQUEST]: state =>
    pipe(
      [mutators.showSignUpLoading],
      state
    ),
  [SEND_SIGN_UP_SUCCESS]: state =>
    pipe(
      [
        mutators.hideSignUpDialog,
        mutators.showLoginDialog,
        mutators.setItemLogin,
        mutators.hideSignUpLoading,
      ],
      state
    ),
  [SEND_SIGN_UP_FAILURE]: state =>
    pipe(
      [mutators.hideSignUpLoading],
      state
    ),

  // Logout
  [LOG_OUT_REQUEST]: state =>
    pipe(
      [mutators.clearData],
      state
    ),
}
