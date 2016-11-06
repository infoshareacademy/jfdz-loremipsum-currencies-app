import React from 'react';
import { connect } from 'react-redux'
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import './CurrencyAdd.css';

import { addMyCurrency, selectCurrency } from './actionCreators'

const mapStateToProps = (state) => ({
    currency: state.currency,
    myCurrency: state.myCurrency,
    selectedCurrency: state.selectedCurrency
})

const mapDispatchToProps = (dispatch) => ({
    selectCurrency: (selectedCurrency) => dispatch(selectCurrency(selectedCurrency)),
    addMyCurrency: (myCurrency) => dispatch(addMyCurrency(myCurrency))
})

const CurrencyAdd = ({
    currency,
    myWallet,
    selectCurrency,
    selectedCurrency,
    addMyCurrency
}) => (
    <Form inline className="form-wallet text-center">
        <FormGroup controlId="formControlsSelect">
            <FormControl componentClass="select"  onChange={(ev) => selectCurrency(ev.target.value)}>
                <option value="0">- select currency -</option>
                {currency.currency.map(
                    currencyVal =>
                        <option key={currencyVal.code} value={currencyVal.code}>
                            { currencyVal.code } - { currencyVal.currency }
                        </option>
                )}
            </FormControl>
        </FormGroup>
        {'   '}
        <Button bsStyle="primary" onClick={ (selectedCurrency) => addMyCurrency(selectedCurrency) }>Add Currency</Button>
        <hr />
    </Form>
)

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyAdd);


