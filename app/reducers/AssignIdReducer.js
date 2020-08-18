import { Action } from 'redux'

const imageId = (state = -2, action) => {
    if (action.type === 'INCREMENT') {
        return Math.pow(state, 2)
    }
    return state
}

export default imageId