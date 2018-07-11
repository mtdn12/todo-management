import axios from 'axios'

axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded'
axios.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded'

/**
|--------------------------------------------------
| Add Todo
|--------------------------------------------------
*/

export const addToDo = text => axios.post('/api/todos/', { text })

/**
|--------------------------------------------------
| Get list todos in day
|--------------------------------------------------
*/

export const getListToDo = () => axios.get('/api/todos/today')

/**
|--------------------------------------------------
| Delete todo
|--------------------------------------------------
*/

export const deleteToDo = id => axios.delete(`/api/todos/${id}`)
