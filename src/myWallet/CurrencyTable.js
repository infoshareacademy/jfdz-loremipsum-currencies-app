import React, { Component } from 'react';
import { Table, Button, FormGroup, FormControl } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import $ from 'jquery';

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

                context.setState({
                    myWalletData: filterCurrencyLocalData
                });
            }
        });
    }

    updateSumCurrency(currencyCourse, ev) {
        let updateSum = currencyCourse * ev.target.value;
        console.log(updateSum);
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
                        <tr key={item.code}>
                            <td className="text-center">{index + 1}</td>
                            <td>{item.currency}</td>
                            <td className="text-center">{item.code}</td>
                            <td className="text-center">{item.mid} zł</td>
                            <td className="text-center">
                                <form>
                                    <FormGroup controlId="formInlineName">
                                        <FormControl type="text" defaultValue="1" className="form-count" onChange={this.updateSumCurrency.bind(this, item.mid)} />
                                    </FormGroup>
                                </form>
                            </td>
                            <td className="text-center">{item.mid}</td>
                            <td><Button bsStyle="danger"><FontAwesome name="trash-o" /> Delete</Button></td>
                        </tr>
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
