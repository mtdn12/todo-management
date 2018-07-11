import axios from 'axios'

axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded'
axios.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded'

/**
|--------------------------------------------------
| Add Daily task
|--------------------------------------------------
*/

export const addDaily = text => axios.post('/api/dailys/', { text })

/**
|--------------------------------------------------
| Get daily
|--------------------------------------------------
*/

export const getDaily = () => axios.get('/api/dailys/')

/**
|--------------------------------------------------
| Delete daily task
|--------------------------------------------------
*/

export const deleteDaily = id => axios.delete(`/api/dailys/${id}`)
