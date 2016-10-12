import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import $ from 'jquery';

import './CurrencyAdd.css';

export default class CurrencyAdd extends Component {

    constructor() {
        super();
        this.changeCurrency = this.changeCurrency.bind(this);
        this.addCurrency = this.addCurrency.bind(this);
    }

    componentWillMount() {
        var context = this;
        context.setState({
            currencies: [],
            selectedCurrency: ''
        });

        $.ajax({
            type: 'GET',
            dataType: "json",
            url: 'http://api.nbp.pl/api/exchangerates/tables/A/',
            success: function(data) {
                context.setState({
                    currencies: data[0].rates
                });
            }
        });
    }


    changeCurrency(ev) {
        this.setState({
           selectedCurrency: ev.target.value
        });
    }

    addCurrency() {
        let currencyStore;
        let itemStore = this.state.selectedCurrency;


        if(!localStorage.getItem('wallet')) {
            currencyStore = [];
        } else {
            currencyStore = JSON.parse(localStorage.getItem('wallet'));
        }
        currencyStore.push(itemStore);
        localStorage.setItem('wallet', JSON.stringify(currencyStore));
    }


    render() {
        return(
            <Form inline className="form-wallet text-center">
                <FormGroup controlId="formControlsSelect">
                    <FormControl componentClass="select" onChange={this.changeCurrency}>
                        <option value="0">- select currency -</option>
                        {this.state.currencies.map(
                            currency => <option key={currency.code} value={currency.code}>{currency.code} - {currency.currency}</option>
                        )}
                    </FormControl>
                </FormGroup>
                {'   '}
                <Button bsStyle="primary" onClick={this.addCurrency}>Add Currency</Button>
                <hr />
            </Form>
        );
    }
}

