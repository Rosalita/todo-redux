import { ADD_TODO } from './actions'

const reducer = (prevState = { tasks: [] }, action) => {
    if (action.type === ADD_TODO) {
        return { tasks: prevState.tasks.concat(action.payload) }
    }
    return prevState
}

export default reducer
