import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './App';

import CurrencyExchange from './currencyExchange/CurrencyExchange';
import MyWallet from './myWallet/MyWallet';
import UserList from './userList/UserList';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="currency-exchange" component={CurrencyExchange} />
            <Route path="my-wallet" component={MyWallet} />
            <Route path="user-list" component={UserList} />
        </Route>
    </Router>,
  document.getElementById('root')
);