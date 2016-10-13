import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import CurrencyHead from './CurrencyHead';
import CurrencyBody from './CurrencyBody';
import CurrencyFoot from './CurrencyFoot';

import '../App-Table.css';
import '../App-Buttons.css';
import './CurrencyTable.css';

export default class CurrencyTable extends Component {
    render() {
        return(
            <div>
                <Table responsive striped hover>
                    <CurrencyHead />
                    <CurrencyBody />
                    <CurrencyFoot />
                </Table>
            </div>
        );
    }
}

