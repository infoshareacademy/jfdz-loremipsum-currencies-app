import React, { Component } from 'react';
import Heading from '../layout/Heading';
import CurrencyAdd from './CurrencyAdd';
import CurrencyTable from './CurrencyTable';

export default class MyWallet extends Component {
    render() {
        return(
            <div>
                <Heading>Currency exchange</Heading>
                <CurrencyAdd />
                <CurrencyTable />
            </div>
        );
    }
}