import React, { Component } from 'react';
//import { Table } from 'react-bootstrap';
import { Table, Button, FormGroup, FormControl } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import $ from 'jquery';

import '../App-Table.css';
import '../App-Buttons.css';
import './CurrencyTable.css';

export default class CurrencyTable extends Component {

    constructor() {
        super();
    }


    componentWillMount() {
        var context = this;
        context.setState({
            storeCurrency: JSON.parse(localStorage.getItem('wallet')) || [],
            myCurrency: [],
            sumVal: 0
        });

        $.ajax({
            type: 'GET',
            dataType: "json",
            url: 'http://api.nbp.pl/api/exchangerates/tables/A/?format=json',
            success: function(data) {
                var myStoreCurrency = data[0].rates.filter( item =>
                    context.state.storeCurrency.find( v =>
                        v === item.code
                    )
                 );
                context.setState({
                    myCurrency: myStoreCurrency
                });
            }
        });

    }

    changeSum(index, ev) {
        console.log(index);
        this.setState({
           sumVal: ev.target.value || 0
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
                        <th className="text-center">Date exchange</th>
                        <th className="text-center">Value</th>
                        <th className="action-currency-exchange"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.myCurrency.map( (item, index) =>
                        <tr key={item.code}>
                            <td className="text-center">{index + 1}</td>
                            <td>{item.currency}</td>
                            <td className="text-center">{item.code}</td>
                            <td className="text-center">{item.mid} zł</td>
                            <td className="text-center">
                                <form>
                                    <FormGroup controlId="formInlineName">
                                        <FormControl type="text" defaultValue="1" className="form-count" onChange={this.changeSum.bind(this, index)} />
                                    </FormGroup>
                                </form>
                            </td>
                            <td className="text-center">2016-11-21</td>
                            <td className="text-center">{this.state.sumVal}</td>
                            <td><Button bsStyle="danger"><FontAwesome name="trash-o" /> Delete</Button></td>
                        </tr>
                    )}
                    </tbody>
                    <tfoot>
                    <tr>
                        <td className="text-right" colSpan="6">Sum</td>
                        <td className="text-center">83,55 zł</td>
                        <td></td>
                    </tr>
                    </tfoot>
                </Table>
            </div>
        );
    }
}

