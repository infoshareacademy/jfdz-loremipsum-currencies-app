import { REQUEST_EURO, RECEIVE_EURO } from './actionTypes'
import fetch from 'isomorphic-fetch'

function requestEuro() {
    return {
        type: REQUEST_EURO
    }
}

function receiveEuro(euro) {
    return {
        type: RECEIVE_EURO,
        euro: euro
    }
}

export function fetchCurrency(currency) {
    return function (dispatch) {
        dispatch(requestEuro())
        return fetch(`http://api.nbp.pl/api/exchangerates/rates/A/${currency}/2016-10-14/2016-10-20`)
            .then(response => response.json())
            .then(euro => dispatch(receiveEuro(euro)))
    }
}
