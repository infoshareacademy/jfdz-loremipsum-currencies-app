import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import './CurrencyAdd.css';

export default class CurrencyAdd extends Component {
    render() {
        return(
            <Form inline className="form-wallet text-center">
                <FormGroup controlId="formControlsSelect">
                    <FormControl componentClass="select" placeholder="Select">
                        <option value="select">- select currency -</option>
                        <option value="USD">dolar amerykański</option>
                        <option value="EUR">euro</option>
                        <option value="CHF">frank szwajcarski</option>
                        <option value="RUB">rubel rosyjski</option>
                    </FormControl>
                </FormGroup>
                {'   '}
                <Button bsStyle="primary">Add Currency</Button>
                <hr />
            </Form>
        );
    }
}
