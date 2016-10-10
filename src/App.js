import React, { Component } from 'react';
import './App.css';
import Header from './layout/Header';

import CurrencyExchange from './currencyExchange/CurrencyExchange';
import MyWallet from './myWallet/MyWallet';
import UserList from './userList/UserList';

class App extends Component {
  render() {
    return (
        <div>
            {/*<Signin />*/}
            <Header />
            <CurrencyExchange />
            <MyWallet />
            <UserList />
        </div>
    );
  }
}

export default App;