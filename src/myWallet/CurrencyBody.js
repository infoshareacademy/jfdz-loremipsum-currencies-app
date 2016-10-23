import React, { Component } from 'react'
import CurrencyRow from './CurrencyRow'

export default class CurrencyBody extends Component {
    render() {
        return(
            <tbody>
                <CurrencyRow />
            </tbody>
        );
    }
}