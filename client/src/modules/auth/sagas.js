import { takeLatest, call, put, all } from 'redux-saga/effects'
import jwtDecode from 'jwt-decode'
import { CONSTANTS } from './actions'
import { push } from 'react-router-redux'

import { showNotification } from '../actions'
import { register, login } from '../../api/authApi'
import checkErrors from '../../utils/checkError'
import { setToken } from '../../utils/token'
import { configureApiSettings } from '../../config/api'

function* registerWorker({ values }) {
  try {
    const response = yield call(
      register,
      values.name,
      values.email,
      values.password,
      values.password2
    )
    checkErrors(response)
    yield put({
      type: CONSTANTS.SEND_REGISTER_SUCCESS,
    })
    yield put(showNotification(' Register success '))
    yield put(push('/login'))
  } catch (error) {
    yield put({
      type: CONSTANTS.SEND_REGISTER_FAILURE,
    })
    yield put(showNotification(error.message))
  }
}

function* loginWorker({ values }) {
  try {
    const response = yield call(login, values.email, values.password)
    checkErrors(response)
    yield configureApiSettings(response.data.token)
    yield put({
      type: CONSTANTS.SEND_LOGIN_SUCCESS,
      data: jwtDecode(response.data.token),
      token: response.data.token,
    })
    yield put(showNotification(' Login success '))
    yield put(push('/todo'))
  } catch (error) {
    yield put({
      type: CONSTANTS.SEND_LOGIN_FAILURE,
    })
    yield put(showNotification(error.message))
  }
}

function* authWatcher() {
  yield all([
    takeLatest(CONSTANTS.SEND_REGISTER_REQUEST, registerWorker),
    takeLatest(CONSTANTS.SEND_LOGIN_REQUEST, loginWorker),
  ])
}

export default authWatcher
