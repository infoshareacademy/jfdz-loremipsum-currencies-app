import { RECEIVE_CURRENCY, SAVE_MY_WALLET, CHANGE_SELECTED_CURRENCY, CHANGE_QUANTITY } from './actionTypes'
import _ from 'underscore'

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
                myCurrency: _.uniq(
                    state.myCurrency.concat([{code: state.selectedCurrency, quantity: 1}]),
                    function (item) {
                        return item.code;
                    }
                )
            })
        case CHANGE_SELECTED_CURRENCY:
            return Object.assign({}, state, {
                selectedCurrency: action.selectedCurrency
            })
        case CHANGE_QUANTITY:
            return Object.assign({}, state, {
                myCurrency: state.myCurrency.map( currency => currency.code !== action.code ? currency : {
                    code: action.code,
                    quantity: action.quantity
                })
            })
        default:
            return state;
    }
}