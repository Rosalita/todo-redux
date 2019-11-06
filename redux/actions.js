// action types
export const ADD_TODO = 'ADD_TODO'

// action creators
export const addToDo = update => ({
  type: ADD_TODO,
  payload: update,
})
