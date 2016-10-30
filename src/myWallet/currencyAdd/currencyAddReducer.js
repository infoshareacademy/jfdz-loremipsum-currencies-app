import { RECEIVE_CURRENCY, SAVE_MY_WALLET, CHANGE_SELECTED_CURRENCY } from './actionTypes'

const initialState = {
    currency: [],
    selectedCurrency: '',
    myCurrency: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case RECEIVE_CURRENCY:
            return Object.assign({}, state, {
                currency: action.currency
            })
        case SAVE_MY_WALLET:
            return Object.assign({}, state, {
                myCurrency: state.myCurrency.concat([state.selectedCurrency])
            })
        case CHANGE_SELECTED_CURRENCY:
            return Object.assign({}, state, {
                selectedCurrency: action.selectedCurrency
            })
        default:
            return state;
    }
}