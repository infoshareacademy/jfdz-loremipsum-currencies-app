import React from 'react';
import { connect } from 'react-redux'
import { Button, FormGroup, FormControl } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

const CurrencyRow = (props) => (
    <tr>
        <td className="text-center">{ props.num }</td>
        <td>{ props.name }</td>
        <td className="text-center">{ props.code }</td>
        <td className="text-center">{ props.value } zł</td>
        <td className="text-center">
            <form>
                <FormGroup controlId="formInlineName">
                    <FormControl type="text" defaultValue={props.quantity} className="form-count" />
                </FormGroup>
            </form>
        </td>
        <td className="text-center">{ props.value * props.quantity } zł</td>
        <td><Button bsStyle="danger"><FontAwesome name="trash-o" /> Delete</Button></td>
    </tr>
)

export default CurrencyRow;