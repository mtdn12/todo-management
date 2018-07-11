import { takeLatest, call, put, all } from 'redux-saga/effects'

import { CONSTANTS, requestGetListTodo } from './actions'
import { push } from 'react-router-redux'

import { showNotification } from '../actions'
import { addToDo, getListToDo, deleteToDo } from '../../api/toDoApi'

import checkErrors from '../../utils/checkError'

function* addToDoWorker({ text }) {
  try {
    const response = yield call(addToDo, text)
    checkErrors(response)
    console.log(response)
    yield put({
      type: CONSTANTS.ADD_TODO_SUCCESS,
    })
    yield put(showNotification(' Add todo succes '))
    yield put(requestGetListTodo())
  } catch (error) {
    yield put({
      type: CONSTANTS.ADD_TODO_FAILURE,
    })
    yield put(showNotification(error.message))
  }
}
function* deleteToDoWorker({id}){
  try {
    const response = yield call(deleteToDo, id)
    checkErrors(response)
    yield put({
      type: CONSTANTS.DELETE_TODO_SUCCESS,
    })
    yield put(showNotification("Delete Todo success"))
    yield put(requestGetListTodo())
  } catch (error) {
    yield put({
      type: CONSTANTS.DELETE_TODO_REQUEST
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

function* toDoWatcher() {
  yield all([
    takeLatest(CONSTANTS.ADD_TODO_REQUEST, addToDoWorker),
    takeLatest(CONSTANTS.GET_LIST_TODO_REQUEST, getListToDoWorker),
    takeLatest(CONSTANTS.DELETE_TODO_REQUEST, deleteToDoWorker),
  ])
}

export default toDoWatcher
