import { fromJS } from 'immutable'
import { removeToken } from '../../utils/token'

// LOgin Mutator
export const showLoginLoading = state =>
  state.setIn(['login', 'isLoading'], true)
export const hideLoginLoading = state =>
  state.setIn(['login', 'isLoading'], false)

export const setData = action => state => state.set('data', fromJS(action.data))

// Register Mutator
export const showRegisterLoading = state =>
  state.setIn(['register', 'isLoading'], true)
export const hideRegisterLoading = state =>
  state.setIn(['register', 'isLoading'], false)

// Logout mutator
export const clearUserData = state => {
  removeToken()
  state.set('data', null)
}
