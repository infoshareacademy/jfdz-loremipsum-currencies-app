import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import CurrencyAdd from './CurrencyAdd';

export default class MyWallet extends Component {
    render() {
        return(
            <div>
                <h2>Currency exchange</h2>

                <CurrencyAdd />

                <Table responsive striped hover>
                    <thead>
                    <tr>
                        <th className="text-center">Id</th>
                        <th>Currency</th>
                        <th className="text-center">Course</th>
                        <th className="text-center">Count</th>
                        <th className="text-center">Date exchange</th>
                        <th className="text-center">Value</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="text-center">1</td>
                        <td>Euro</td>
                        <td className="text-center">3.49 zł</td>
                        <td className="text-center">15</td>
                        <td className="text-center">2016-11-21</td>
                        <td className="text-center">52,35 zł</td>
                        <td><Button bsStyle="danger">Delete</Button></td>
                    </tr>
                    <tr>
                        <td className="text-center">2</td>
                        <td>Dolar</td>
                        <td className="text-center">3,12 zł</td>
                        <td className="text-center">10</td>
                        <td className="text-center">2016-10-17</td>
                        <td className="text-center">31,20 zł</td>
                        <td><Button bsStyle="danger">Delete</Button></td>
                    </tr>
                    <tr>
                        <td className="text-center">3</td>
                        <td>Euro</td>
                        <td className="text-center">3.49 zł</td>
                        <td className="text-center">15</td>
                        <td className="text-center">2016-11-21</td>
                        <td className="text-center">52,35 zł</td>
                        <td><Button bsStyle="danger">Delete</Button></td>
                    </tr>
                    <tr>
                        <td className="text-center">4</td>
                        <td>Dolar</td>
                        <td className="text-center">3,12 zł</td>
                        <td className="text-center">10</td>
                        <td className="text-center">2016-10-17</td>
                        <td className="text-center">31,20 zł</td>
                        <td><Button bsStyle="danger">Delete</Button></td>
                    </tr>
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


