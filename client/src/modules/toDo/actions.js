import { pipe } from '../../utils'
import * as mutators from './mutators'

/**
 * Constants
 */
// Add todo
const ADD_TODO_REQUEST = 'todo/ADD_TODO_REQUEST'
const ADD_TODO_SUCCESS = 'todo/ADD_TODO_SUCCESS'
const ADD_TODO_FAILURE = 'todo/ADD_TODO_FAILURE'
// Get List todo in a day
const GET_LIST_TODO_REQUEST = 'todo/GET_LIST_TODO_REQUEST'
const GET_LIST_TODO_SUCCESS = 'todo/GET_LIST_TODO_SUCCESS'
const GET_LIST_TODO_FAILURE = 'todo/GET_LIST_TODO_FAILURE'
// Delete todo
const DELETE_TODO_REQUEST = 'todo/DELETE_TODO_REQUEST'
const DELETE_TODO_SUCCESS = 'todo/DELETE_TODO_SUCCESS'
const DELETE_TODO_FAILURE = 'todo/DELETE_TODO_FAILURE'

export const CONSTANTS = {
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  //
  GET_LIST_TODO_REQUEST,
  GET_LIST_TODO_SUCCESS,
  GET_LIST_TODO_FAILURE,
  //
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILURE,
}

/**
 * Actions
 */

export const requestAddTodo = text => ({
  type: ADD_TODO_REQUEST,
  text,
})

export const requestGetListTodo = () => ({
  type: GET_LIST_TODO_REQUEST,
})

export const requestDeleteTodo = id => ({
  type: DELETE_TODO_REQUEST,
  id,
})

export const ActionHandler = {
  [ADD_TODO_REQUEST]: state =>
    pipe(
      [mutators.showLoadingAdd],
      state
    ),
  [ADD_TODO_SUCCESS]: state =>
    pipe(
      [mutators.hideLoadingAdd],
      state
    ),
  [ADD_TODO_FAILURE]: state =>
    pipe(
      [mutators.hideLoadingAdd],
      state
    ),
  // Get list todo
  [GET_LIST_TODO_REQUEST]: state =>
    pipe(
      [mutators.showLoading],
      state
    ),
  [GET_LIST_TODO_SUCCESS]: (state, action) =>
    pipe(
      [mutators.hideLoading, mutators.setItems(action)],
      state
    ),
  [GET_LIST_TODO_FAILURE]: state =>
    pipe(
      [mutators.hideLoading],
      state
    ),
}
