import React, { Component } from 'react';
import Heading from '../layout/Heading';
import { connect } from 'react-redux'
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import moment from 'moment'

import { fetchCurrency } from './actionCreators'

import {Line} from 'react-chartjs'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const mapStateToProps = (state) => ({
     data: state.currencyExchange,
    currency: state.currency,

    //currencyExchange: state.currencyExchangeData.currencyExchange,
     //currencyExchangeIsLoading: state.currencyExchangeData.isLoading,
})

const mapDispatchToProps = (dispatch) => ({
    fetchCurrency: ( currency ) => dispatch(fetchCurrency( currency )),
    selectCurrency: () => dispatch({ type: 'NOTHINGNESS' })
})

class CurrencyExchange extends Component {
    constructor() {
        super()

        this.state = {
            selectedCurrency: 'Select Currency',
            startDate: moment()
        }

        this.state = {
            selectedCurrency: 'Select Currency',
            endDate: moment()
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value) {
        this.setState({startDate: value})
    }
    
    

    componentDidMount() {
        this.props.fetchCurrency(this.state.selectedCurrency)
    }

    render() {
        let { currency, selectCurrency, data, fetchCurrency } = this.props
        return (
          <div>
              <Heading>Currency exchange</Heading>
              <Form inline className="form-wallet text-center">
                  <FormGroup controlId="formControlsSelect">
                      <FormControl componentClass="select" defaultValue={this.state.selectedCurrency} onChange={(ev) => fetchCurrency(ev.target.value)}>
                          <option value="0">- select currency -</option>
                          {currency.currency.map(
                              currencyVal =>
                                  <option key={currencyVal.code} value={currencyVal.code}>
                                      { currencyVal.code } - { currencyVal.currency }
                                  </option>
                          )}

                      </FormControl>
                  </FormGroup>
                  <DatePicker
                      selected={this.state.startDate}
                      onChange={this.handleChange}
                  />
                  <DatePicker  
                      selected={this.state.endDate}
                      onChange={this.handleChange}
                      />
                 
                  <hr />
              </Form>


                <Line data={data} options={{responsive: true,
maintainAspectRatio: false}} height="100" />
              

          </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyExchange)
