import React, { Component } from 'react';

export default class CurrencyFoot extends Component {

    componentWillMount() {
        this.setState({
           sumCurrencyAll: 0
        });
    }

    render() {
        return(
            <tfoot>
                <tr>
                    <td className="text-right" colSpan="5">Sum</td>
                    <td className="text-center">{this.state.sumCurrencyAll} zł</td>
                    <td></td>
                </tr>
            </tfoot>
        );
    }
}
