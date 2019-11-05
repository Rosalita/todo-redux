// action types
export const ADD_TODO = 'ADD_TODO'

// action creators
export const toggleToDo = update => ({
  type: ADD_TODO,
  payload: update,
})
