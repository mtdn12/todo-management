export const getItems = state => state.getIn(['toDo', 'items']) || []