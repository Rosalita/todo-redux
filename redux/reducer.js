import {ADD_TODO} from './actions'

const reducer = (state = {}, action) => {
    if (action.type === ADD_TODO) {
        // Add to do to the state
    }
    return state
}

export default reducer
