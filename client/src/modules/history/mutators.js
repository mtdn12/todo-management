import { fromJS } from 'immutable'

export const showLoading = state => state.set('isLoading', true)
export const hideLoading = state => state.set('isLoading', false)

//
export const setItems = action => state =>
  state
    .set('items', fromJS(action.items))
    .set('generalInfo', fromJS(action.generalInfo))
    .set('totalCount', action.totalCount)

//
export const showDialog = state => state.setIn(['dialog', 'isOpen'], true)
export const hideDialog = state => state.setIn(['dialog', 'isOpen'], false)

export const setDialogItem = action => state =>
  state.setIn(['dialog', 'item'], action.item)
export const clearDialogItem = state =>
  state.setIn(['dialog', 'item'], fromJS([]))

export const setFilterPage = action => state =>
  state.setIn(['filter', 'page'], action.page)
export const setFilterLimit = action => state =>
  state.setIn(['filter', 'limit'], action.limit)
