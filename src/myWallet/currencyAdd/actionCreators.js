import { REQUEST_CURRENCY, RECEIVE_CURRENCY, SAVE_MY_WALLET, CHANGE_SELECTED_CURRENCY, CHANGE_QUANTITY } from './actionTypes'

function requestCurrency() {
    return {
        type: REQUEST_CURRENCY
    }
}

function receiveCurrency(currency) {
    return {
        type: RECEIVE_CURRENCY,
        currency: currency
    }
}

export function addMyCurrency(myCurrency) {
    return {
        type: SAVE_MY_WALLET,
        myCurrency: myCurrency
    }
}

export function selectCurrency(selectedCurrency) {
    return {
        type: CHANGE_SELECTED_CURRENCY,
        selectedCurrency: selectedCurrency
    }
}

export function changeQuantity(quantity, code) {
    return {
        type: CHANGE_QUANTITY,
        quantity: quantity,
        code: code
    }
}


export function fetchCurrency() {
    return dispatch => {
        dispatch(requestCurrency())
        return fetch(`http://api.nbp.pl/api/exchangerates/tables/A/?format=json`)
            .then(response => response.json())
            .then(currency => dispatch(receiveCurrency(currency[0]['rates'])))
    }
}