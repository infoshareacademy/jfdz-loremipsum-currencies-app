import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import exchangeReducer from './currencyExchange/reducer'
import persistState from 'redux-localstorage'

import currencyReducer from './myWallet/currencyAdd/currencyAddReducer'
import currencyRowReducer from './myWallet/currencyRow/currencyRowReducer'


const reducer = combineReducers({
    currencyExchange: exchangeReducer,
    currency: currencyReducer,
    currencyRow: currencyRowReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(
            thunkMiddleware // lets us dispatch() functions
        ),
        persistState(['currency'])
    )
)

export default store
