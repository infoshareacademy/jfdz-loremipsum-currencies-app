import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

export default class CurrencyAdd extends Component {
    render() {
        return(
            <Form inline>
                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Select Currency</ControlLabel>
                    {' '}
                    <FormControl componentClass="select" placeholder="Select">
                        <option value="select">- select -</option>
                        <option value="other"></option>
                    </FormControl>
                </FormGroup>
                {' '}
                <Button type="submit">Add Currency</Button>
                <hr />
            </Form>
        );
    }
}
