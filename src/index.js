import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import Home from './Home/Home';
import CurrencyExchange from './currencyExchange/CurrencyExchange';
import MyWallet from './myWallet/MyWallet';
import UserList from './userList/UserList';

import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="currency-exchange" component={CurrencyExchange} />
                <Route path="my-wallet" component={MyWallet} />
                <Route path="user-list" component={UserList} />
            </Route>
        </Router>
    </Provider>,
  document.getElementById('root')
);