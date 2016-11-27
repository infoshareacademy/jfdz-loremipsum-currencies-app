import React, { Component } from 'react';

export default class CurrencyHead extends Component {
    render() {
        return(
            <thead>
                <tr>
                    <th className="text-center">Id</th>
                    <th>Currency</th>
                    <th className="text-center">Code</th>
                    <th className="text-center">Course</th>
                    <th className="text-center">Count</th>
                    <th className="text-center">Value</th>
                    {/*<th className="action-currency-exchange"></th>*/}
                </tr>
            </thead>
        );
    }
}