import axios from 'axios'

export function configureApiSettings(token) {
  axios.defaults.headers.common['Authorization'] = token
  console.log(token)
}
