import { fromJS } from 'immutable'

// LOgin Mutator
export const showLoginLoading = state =>
  state.setIn(['login', 'isLoading'], true)
export const hideLoginLoading = state =>
  state.setIn(['login', 'isLoading'], false)

export const setData = action => state => state.set('data', fromJS(action.data))
export const clearData = state => state.set('data', null)

// Register Mutator
export const showRegisterLoading = state =>
  state.setIn(['register', 'isLoading'], true)
export const hideRegisterLoading = state =>
  state.setIn(['register', 'isLoading'], false)