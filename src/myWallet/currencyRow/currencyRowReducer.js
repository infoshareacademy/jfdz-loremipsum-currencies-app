import { CHANGE_SUM_CURRENCY } from './actionTypes'

const initialState = {
    changedValue: ''
}

export default (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_SUM_CURRENCY:
            return Object.assign({}, state, {
                changedValue: action.changedValue
            })
        default:
            return state;
    }
}