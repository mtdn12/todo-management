import axios from 'axios'

import {
  getToken
} from '../utils/token'

export function configureApiSettings() {
  axios.defaults.headers.common['Authorization'] = getToken()
}