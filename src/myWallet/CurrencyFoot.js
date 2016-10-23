import React, { Component } from 'react';

export default class CurrencyFoot extends Component {

    render() {
        return(
            <tfoot>
                <tr>
                    <td className="text-right" colSpan="5">Sum</td>
                    <td className="text-center">0 zł</td>
                    <td></td>
                </tr>
            </tfoot>
        );
    }
}
