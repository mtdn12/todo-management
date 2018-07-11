import {
  takeLatest,
  call,
  put,
  all,
  select,
  takeEvery,
} from 'redux-saga/effects'

import { CONSTANTS, requestGetListTodo } from './actions'
import { push } from 'react-router-redux'
import { getItems } from './selectors'

import { showNotification } from '../actions'
import {
  addToDo,
  getListToDo,
  deleteToDo,
  checkDoneToDo,
  removeDoneToDo,
} from '../../api/toDoApi'

import checkErrors from '../../utils/checkError'

function* addToDoWorker({ text }) {
  try {
    const response = yield call(addToDo, text)
    checkErrors(response)
    const items = yield select(getItems)
    let newItems = items.toJS()
    newItems.push(response.data.item)
    yield put({
      type: CONSTANTS.ADD_TODO_SUCCESS,
      items: newItems,
    })
    yield put(showNotification(' Add todo succes '))
    // yield put(requestGetListTodo())
  } catch (error) {
    yield put({
      type: CONSTANTS.ADD_TODO_FAILURE,
    })
    yield put(showNotification(error.message))
  }
}
function* deleteToDoWorker({ id }) {
  try {
    const response = yield call(deleteToDo, id)
    checkErrors(response)
    const items = yield select(getItems)
    const newItems = items.toJS().filter(item => item._id !== id)
    yield put({
      type: CONSTANTS.DELETE_TODO_SUCCESS,
      items: newItems,
    })
    yield put(showNotification('Delete Todo success'))
    // yield put(requestGetListTodo())
  } catch (error) {
    yield put({
      type: CONSTANTS.DELETE_TODO_REQUEST,
    })
    yield put(showNotification(error.message))
  }
}

function* getListToDoWorker() {
  try {
    const response = yield call(getListToDo)
    checkErrors(response)
    yield put({
      type: CONSTANTS.GET_LIST_TODO_SUCCESS,
      items: response.data.items,
    })
  } catch (error) {
    yield put({
      type: CONSTANTS.GET_LIST_TODO_FAILURE,
    })
    yield put(showNotification(error.message))
  }
}

function* checkDoneToDoWorker({ id }) {
  try {
    const response = yield call(checkDoneToDo, id)
    checkErrors(response)
    const items = yield select(getItems)
    const newItems = items.toJS().map(item => {
      return item._id === response.data.item._id ? response.data.item : item
    })
    yield put({
      type: CONSTANTS.CHECK_DONE_SUCCESS,
      items: newItems,
    })
  } catch (error) {
    yield put({
      type: CONSTANTS.CHECK_DONE_FAILURE,
    })
    yield put(showNotification(error.message))
  }
}

function* removeDoneToDoWorker({ id }) {
  try {
    const response = yield call(removeDoneToDo, id)
    checkErrors(response)
    const items = yield select(getItems)
    const newItems = items.toJS().map(item => {
      return item._id === response.data.item._id ? response.data.item : item
    })
    yield put({
      type: CONSTANTS.REMOVE_DONE_SUCCESS,
      items: newItems,
    })
  } catch (error) {
    yield put({
      type: CONSTANTS.REMOVE_DONE_FAILURE,
    })
    yield put(showNotification(error.message))
  }
}

function* toDoWatcher() {
  yield all([
    takeLatest(CONSTANTS.ADD_TODO_REQUEST, addToDoWorker),
    takeLatest(CONSTANTS.GET_LIST_TODO_REQUEST, getListToDoWorker),
    takeEvery(CONSTANTS.DELETE_TODO_REQUEST, deleteToDoWorker),
    takeEvery(CONSTANTS.CHECK_DONE_REQUEST, checkDoneToDoWorker),
    takeEvery(CONSTANTS.REMOVE_DONE_REQUEST, removeDoneToDoWorker),
  ])
}

export default toDoWatcher
