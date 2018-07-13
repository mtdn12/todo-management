import { takeLatest, call, put, all } from 'redux-saga/effects'

import { CONSTANTS } from './actions'

import { showNotification } from '../actions'
import { getListHistory } from '../../api/historyApi'

import checkErrors from '../../utils/checkError'

function* getListHistoryWorker({ filter }) {
  try {
    const response = yield call(getListHistory, filter)
    checkErrors(response)
    yield put({
      type: CONSTANTS.GET_LIST_HISTORY_SUCCESS,
      items: response.data.items,
      generalInfo: response.data.generalInfo,
      totalCount: response.data.totalCount,
    })
  } catch (error) {
    yield put({
      type: CONSTANTS.GET_LIST_HISTORY_FAILURE,
    })
    yield put(showNotification(error.message))
  }
}

function* historyWatcher() {
  yield all([
    takeLatest(CONSTANTS.GET_LIST_HISTORY_REQUEST, getListHistoryWorker),
  ])
}

export default historyWatcher
