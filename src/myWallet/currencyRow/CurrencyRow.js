import React from 'react';
import { connect } from 'react-redux'
import { Button, FormGroup, FormControl } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import { changeQuantity } from './actionCreators'

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    changeQuantity: (quantity, code) => dispatch(changeQuantity(quantity, code))
})

const CurrencyRow = ({
    num,
    code,
    name,
    value,
    quantity,
    changeQuantity
}) => (
    <tr>
        <td className="text-center">{ num }</td>
        <td>{ name }</td>
        <td className="text-center">{ code }</td>
        <td className="text-center">{ value } zł</td>
        <td className="text-center">
            <form>
                <FormGroup controlId="formInlineName">
                    <FormControl type="text" defaultValue={quantity} className="form-count" onChange={(ev) => changeQuantity(ev.target.value, code)} />
                </FormGroup>
            </form>
        </td>
        <td className="text-center">{ value * quantity } zł</td>
        <td><Button bsStyle="danger"><FontAwesome name="trash-o" /> Delete</Button></td>
    </tr>
)

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyRow);