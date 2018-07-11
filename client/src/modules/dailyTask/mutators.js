import { fromJS } from 'immutable'

export const showLoadingAdd = state => state.set('isLoadingAdd', true)
export const hideLoadingAdd = state => state.set('isLoadingAdd', false)

// Get list todo
export const showLoading = state => state.set('isLoading', true)
export const hideLoading = state => state.set('isLoading', false)
export const setItem = action => state => state.set('item', fromJS(action.item))

export const showLoadingSetDaily = state => state.set('isLoadingSetDaily', true)
export const hideLoadingSetDaily = state =>
  state.set('isLoadingSetDaily', false)
