import React from 'react';
import { connect } from 'react-redux'
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import './CurrencyAdd.css';

const mapStateToProps = (state) => ({
    currency: state.currency,
    myCurrency: state.myCurrency
})

function addCurrencyToLocalStorage() {
    //localStorage.setItem('myCurrency', 'USD');
}

const CurrencyAdd = ({ currency }) => (
    <Form inline className="form-wallet text-center">
        <FormGroup controlId="formControlsSelect">
            <FormControl componentClass="select">
                <option value="0">- select currency -</option>
                {currency.map(
                    currencyVal =>
                        <option key={currencyVal.code}>
                            { currencyVal.code } - { currencyVal.currency }
                        </option>
                )}
            </FormControl>
        </FormGroup>
        {'   '}
        <Button bsStyle="primary" onClick={addCurrencyToLocalStorage}>Add Currency</Button>
        <hr />
    </Form>
)

export default connect(mapStateToProps)(CurrencyAdd);
