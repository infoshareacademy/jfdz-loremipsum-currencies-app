import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

export default class CurrencyRow extends Component {
    
    render() {
        return(
            <tr>
                <td className="text-center">1</td>
                <td>dolar amerykański</td>
                <td className="text-center">USD</td>
                <td className="text-center">3.41 zł</td>
                <td className="text-center">
                    <form>
                        <FormGroup controlId="formInlineName">
                            <FormControl type="text" defaultValue="1" className="form-count" />
                        </FormGroup>
                    </form>
                </td>
                <td className="text-center">10 zł</td>
                <td><Button bsStyle="danger"><FontAwesome name="trash-o" /> Delete</Button></td>
            </tr>
        );
    }
}

