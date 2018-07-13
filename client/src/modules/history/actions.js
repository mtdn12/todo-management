import { pipe } from '../../utils'
import * as mutators from './mutators'

/**
 * Constants
 */

// Get List history
const GET_LIST_HISTORY_REQUEST = 'history/GET_LIST_HISTORY_REQUEST'
const GET_LIST_HISTORY_SUCCESS = 'history/GET_LIST_HISTORY_SUCCESS'
const GET_LIST_HISTORY_FAILURE = 'history/GET_LIST_HISTORY_FAILURE'

const SET_FILTER_PAGE = 'history/SET_FILTER_PAGE'
const SET_FILTER_LIMIT = 'history/SET_FILTER_LIMIT'

// dialog
const OPEN_DAILOG = 'history/OPEN_DAILOG'
const CLOSE_DIALOG = 'history/CLOSE_DIALOG'

export const CONSTANTS = {
  //
  GET_LIST_HISTORY_REQUEST,
  GET_LIST_HISTORY_SUCCESS,
  GET_LIST_HISTORY_FAILURE,
}

/**
 * Actions
 */

export const requestGetListHistory = filter => ({
  type: GET_LIST_HISTORY_REQUEST,
  filter,
})
// dialog
export const openDialog = item => ({
  type: OPEN_DAILOG,
  item,
})

export const closeDialog = () => ({
  type: CLOSE_DIALOG,
})

// set filter

export const setFilterPage = page => ({
  type: SET_FILTER_PAGE,
  page,
})

export const setFilterLimit = limit => ({
  type: SET_FILTER_LIMIT,
  limit,
})

export const ActionHandler = {
  [GET_LIST_HISTORY_REQUEST]: state =>
    pipe(
      [mutators.showLoading],
      state
    ),
  [GET_LIST_HISTORY_SUCCESS]: (state, action) =>
    pipe(
      [mutators.hideLoading, mutators.setItems(action)],
      state
    ),
  [GET_LIST_HISTORY_FAILURE]: state =>
    pipe(
      [mutators.hideLoading],
      state
    ),
  // Dialog
  [OPEN_DAILOG]: (state, action) =>
    pipe(
      [mutators.showDialog, mutators.setDialogItem(action)],
      state
    ),
  [CLOSE_DIALOG]: state =>
    pipe(
      [mutators.hideDialog],
      state
    ),
  // Set Filter
  [SET_FILTER_PAGE]: (state, action) =>
    pipe(
      [mutators.setFilterPage(action)],
      state
    ),
  [SET_FILTER_LIMIT]: (state, action) =>
    pipe(
      [mutators.setFilterLimit(action)],
      state
    ),
}
