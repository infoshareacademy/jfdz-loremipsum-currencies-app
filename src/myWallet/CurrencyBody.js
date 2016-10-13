import React, { Component } from 'react';
import $ from 'jquery';
import CurrencyRow from './CurrencyRow';

export default class CurrencyHead extends Component {

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
            <tbody>
                {this.state.myWalletData.map( (item, index) =>
                    <CurrencyRow key={item.code} id={index + 1} currency={item.currency} code={item.code} mid={item.mid} />
                )}
            </tbody>
        );
    }
}