import React, { Component } from 'react';
import CurrencyAdd from './CurrencyAdd';
import CurrencyTable from './CurrencyTable';

export default class MyWallet extends Component {
    render() {
        return(
            <div>
                <h2>Currency exchange</h2>
                <CurrencyAdd />
                <CurrencyTable />
            </div>
        );
    }
}
