import { CHANGE_QUANTITY } from './actionTypes'

const initialState = {
    myCurrency: []
}

export default (state = initialState, action) => {

    switch(action.type) {
        case CHANGE_QUANTITY:
            return Object.assign({}, state, {
                myCurrency: state.myCurrency
            })
        default:
            return state;
    }
}