import { fromJS } from 'immutable'

export const showLoading = state => state.set('isLoading', true)
export const hideLoading = state => state.set('isLoading', false)

//
export const setItems = action => state =>
  state
    .set('items', fromJS(action.items))
    .set('generalInfo', fromJS(action.generalInfo))
