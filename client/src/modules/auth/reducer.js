import { fromJS } from 'immutable'

import { ActionHandler } from './actions'

/**
 * Initial State
 */
const initialState = fromJS({
  login: {
    isLoading: false,
    item: {
      email: '',
      password: '',
    },
  },
  register: {
    isLoading: false,
    item: {
      name: '',
      email: '',
      password: '',
      password2: '',
    },
  },
  data: null,
})
/**
 * Reducer
 */
export default function auth(currentState = initialState, action) {
  const handler = ActionHandler[action.type]
  return handler ? handler(currentState, action) : currentState
}
