import { REQUEST_CURRENCY, RECEIVE_CURRENCY } from './actionTypes'

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

export function fetchCurrency() {
    return dispatch => {
        dispatch(requestCurrency())

        return fetch(`http://api.nbp.pl/api/exchangerates/tables/A/?format=json`)
            .then(response => response.json())
            .then(currency => dispatch(receiveCurrency(currency[0]['rates'])))
    }
}