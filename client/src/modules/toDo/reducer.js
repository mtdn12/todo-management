import { fromJS } from 'immutable'

import { ActionHandler } from './actions'

/**
 * Initial State
 */
const initialState = fromJS({
  isLoadingAdd: false,
  isLoading: false,
  items: [],
})
/**
 * Reducer
 */
export default function toDo(currentState = initialState, action) {
  const handler = ActionHandler[action.type]
  return handler ? handler(currentState, action) : currentState
}
