import axios from 'axios'

axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded'
axios.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded'

/**
|--------------------------------------------------
| Get list History
|--------------------------------------------------
*/

export const getListHistory = filter =>
  axios.get('/api/history/', {
    params: { ...filter },
  })
