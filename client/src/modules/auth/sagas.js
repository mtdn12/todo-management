import { takeLatest, call, put, all } from 'redux-saga/effects'
import jwtDecode from 'jwt-decode'
import { CONSTANTS } from './actions'
import { push } from 'react-router-redux'

import { showNotification } from '../actions'

import { setToken } from '../../utils/token'
import { configureApiSettings } from '../../config/api'



function* authWatcher() {

}

export default authWatcher
