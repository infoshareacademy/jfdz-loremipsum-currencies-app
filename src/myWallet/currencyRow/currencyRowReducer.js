import { CHANGE_QUANTITY } from './actionTypes'

const initialState = {
    quantity: ''
}

export default (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_QUANTITY:
            return Object.assign({}, state, {
                quantity: action.quantity
            })
        default:
            return state;
    }
}