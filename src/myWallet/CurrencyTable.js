import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import $ from 'jquery';
import CurrencyRow from './CurrencyRow';

import '../App-Table.css';
import '../App-Buttons.css';
import './CurrencyTable.css';

export default class CurrencyTable extends Component {

    componentWillMount() {
        var context = this;

        context.setState({
            currencyLocalData: JSON.parse(localStorage.getItem('wallet')) || [],
            myWalletData: [],
        });
    }

    componentDidMount() {
        var context = this;

        $.ajax({
            type: 'GET',
            dataType: "json",
            url: 'http://api.nbp.pl/api/exchangerates/tables/A/?format=json',
            success: function(data) {
                var filterCurrencyLocalData = data[0].rates.filter( item =>
                    context.state.currencyLocalData.find( v =>
                        v === item.code
                    )
                );
                context.setState({myWalletData: filterCurrencyLocalData});
            }
        });
    }

    render() {
        return(
            <div>
                <Table responsive striped hover>
                    <thead>
                    <tr>
                        <th className="text-center">Id</th>
                        <th>Currency</th>
                        <th className="text-center">Code</th>
                        <th className="text-center">Course</th>
                        <th className="text-center">Count</th>
                        <th className="text-center">Value</th>
                        <th className="action-currency-exchange"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.myWalletData.map( (item, index) =>
                        <CurrencyRow key={item.code} id={index + 1} currency={item.currency} code={item.code} mid={item.mid} />
                    )}
                    </tbody>
                    <tfoot>
                    <tr>
                        <td className="text-right" colSpan="5">Sum</td>
                        <td className="text-center">83,55 zł</td>
                        <td></td>
                    </tr>
                    </tfoot>
                </Table>
            </div>
        );
    }
}
