import { takeLatest, call, put, all } from 'redux-saga/effects'

import { CONSTANTS } from './actions'
import { push } from 'react-router-redux'

import { showNotification } from '../actions'
import { addDaily, getDaily, deleteDaily } from '../../api/dailyTaskApi'

import checkErrors from '../../utils/checkError'

function* addDailyTaskWorker({ text }) {
  try {
    const response = yield call(addDaily, text)
    checkErrors(response)
    yield put({
      type: CONSTANTS.ADD_DAILY_SUCCESS,
      item: response.data.item,
    })
    yield put(showNotification('Add todo success'))
  } catch (error) {
    yield put({
      type: CONSTANTS.ADD_DAILY_FAILURE,
    })
    yield put(showNotification(error.message))
  }
}

function* getDailyTaskWorker() {
  try {
    const response = yield call(getDaily)
    checkErrors(response)
    yield put({
      type: CONSTANTS.GET_DAILY_SUCCESS,
      item: response.data.item,
    })
  } catch (error) {
    yield put({
      type: CONSTANTS.GET_DAILY_FAILURE,
    })
    yield put(showNotification(error.message))
  }
}

function* deleteDailyTaskWorker({ id }) {
  try {
    const response = yield call(deleteDaily, id)
    checkErrors(response)
    yield put({
      type: CONSTANTS.DELETE_DAILY_SUCCESS,
      item: response.data.item,
    })
    yield put(showNotification('Delete daily task success'))
  } catch (error) {
    yield put({
      type: CONSTANTS.DELETE_DAILY_FAILURE,
    })
    yield put(showNotification(error.message))
  }
}

function* dailyTaskWatcher() {
  yield all([
    takeLatest(CONSTANTS.ADD_DAILY_REQUEST, addDailyTaskWorker),
    takeLatest(CONSTANTS.GET_DAILY_REQUEST, getDailyTaskWorker),
    takeLatest(CONSTANTS.DELETE_DAILY_REQUEST, deleteDailyTaskWorker),
  ])
}

export default dailyTaskWatcher
