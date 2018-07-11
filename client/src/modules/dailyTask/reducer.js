import { fromJS } from 'immutable'

import { ActionHandler } from './actions'

/**
 * Initial State
 */
const initialState = fromJS({
  isLoadingAdd: false,
  isLoading: false,
  item: {},
})
/**
 * Reducer
 */
export default function dailyTask(currentState = initialState, action) {
  const handler = ActionHandler[action.type]
  return handler ? handler(currentState, action) : currentState
}
