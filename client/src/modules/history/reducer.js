import { fromJS } from 'immutable'

import { ActionHandler } from './actions'

/**
 * Initial State
 */
const initialState = fromJS({
  isLoading: false,
  items: [],
  generalInfo: {}
})
/**
 * Reducer
 */
export default function history(currentState = initialState, action) {
  const handler = ActionHandler[action.type]
  return handler ? handler(currentState, action) : currentState
}
