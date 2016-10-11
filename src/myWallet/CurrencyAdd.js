import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import $ from 'jquery';

import './CurrencyAdd.css';

export default class CurrencyAdd extends Component {

    componentWillMount() {
        var context = this;
        context.setState({
            currencies: []
        });

        $.ajax({
            type: 'GET',
            dataType: "json",
            url: 'http://api.nbp.pl/api/exchangerates/tables/A/',
            success: function(data) {
                console.log(data[0].rates);
                context.setState({
                    currencies: data[0].rates
                });
            }
        });
    }

    render() {
        return(
            <Form inline className="form-wallet text-center">
                <FormGroup controlId="formControlsSelect">
                    <FormControl componentClass="select" placeholder="Select">
                        <option value="0">- select currency -</option>
                        {this.state.currencies.map(
                            currency => <option key={currency.code} value={currency.code}>{currency.code} - {currency.currency}</option>
                        )}
                    </FormControl>
                </FormGroup>
                {'   '}
                <Button bsStyle="primary">Add Currency</Button>
                <hr />
            </Form>
        );
    }
}
