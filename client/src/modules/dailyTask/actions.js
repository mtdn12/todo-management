import { pipe } from '../../utils'
import * as mutators from './mutators'

/**
 * Constants
 */
// Add daily task
const ADD_DAILY_REQUEST = 'dailyTask/ADD_DAILY_REQUEST'
const ADD_DAILY_SUCCESS = 'dailyTask/ADD_DAILY_SUCCESS'
const ADD_DAILY_FAILURE = 'dailyTask/ADD_DAILY_FAILURE'
// Get List todo in a day
const GET_DAILY_REQUEST = 'dailyTask/GET_DAILY_REQUEST'
const GET_DAILY_SUCCESS = 'dailyTask/GET_DAILY_SUCCESS'
const GET_DAILY_FAILURE = 'dailyTask/GET_DAILY_FAILURE'
// Delete todo
const DELETE_DAILY_REQUEST = 'todo/DELETE_DAILY_REQUEST'
const DELETE_DAILY_SUCCESS = 'todo/DELETE_DAILY_SUCCESS'
const DELETE_DAILY_FAILURE = 'todo/DELETE_DAILY_FAILURE'


export const CONSTANTS = {
  ADD_DAILY_REQUEST,
  ADD_DAILY_SUCCESS,
  ADD_DAILY_FAILURE,
  //
  GET_DAILY_REQUEST,
  GET_DAILY_SUCCESS,
  GET_DAILY_FAILURE,
  //
  DELETE_DAILY_REQUEST,
  DELETE_DAILY_SUCCESS,
  DELETE_DAILY_FAILURE,
  //
}

/**
 * Actions
 */

export const requestAddDaily = text => ({
  type: ADD_DAILY_REQUEST,
  text,
})

export const requestGetDaily = () => ({
  type: GET_DAILY_REQUEST,
})

export const requestDeleteDaily = id => ({
  type: DELETE_DAILY_REQUEST,
  id,
})

export const ActionHandler = {
  [ADD_DAILY_REQUEST]: state =>
    pipe(
      [mutators.showLoadingAdd],
      state
    ),
  [ADD_DAILY_SUCCESS]: (state, action) =>
    pipe(
      [mutators.hideLoadingAdd, mutators.setItem(action)],
      state
    ),
  [ADD_DAILY_FAILURE]: state =>
    pipe(
      [mutators.hideLoadingAdd],
      state
    ),
  [DELETE_DAILY_SUCCESS]: (state, action) =>
    pipe(
      [mutators.setItem(action)],
      state
    ),
  // Get list todo
  [GET_DAILY_REQUEST]: state =>
    pipe(
      [mutators.showLoading],
      state
    ),
  [GET_DAILY_SUCCESS]: (state, action) =>
    pipe(
      [mutators.hideLoading, mutators.setItem(action)],
      state
    ),
  [GET_DAILY_FAILURE]: state =>
    pipe(
      [mutators.hideLoading],
      state
    ),
}
