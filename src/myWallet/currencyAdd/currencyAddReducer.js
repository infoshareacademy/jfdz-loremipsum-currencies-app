import { RECEIVE_CURRENCY } from './actionTypes'

const initialState = [];

export default (state = initialState, action) => {
    switch(action.type) {
        case RECEIVE_CURRENCY:
            return action.currency
        default:
            return state;
    }
}