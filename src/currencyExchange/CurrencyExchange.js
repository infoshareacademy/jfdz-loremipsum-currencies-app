import React, { Component } from 'react';
import Heading from '../layout/Heading';
import { connect } from 'react-redux'

import { fetchCurrency } from './actionCreators'

import {Line} from 'react-chartjs'

const mapStateToProps = (state) => ({
     data: state.currencyExchange,
     //currencyExchange: state.currencyExchangeData.currencyExchange,
     //currencyExchangeIsLoading: state.currencyExchangeData.isLoading,
})

const mapDispatchToProps = (dispatch) => ({
    fetchCurrency: ( currency ) => dispatch(fetchCurrency( currency ))
})


/* -------------------UZUIPELNIC ?-------------------------
map.state/dispatch.to props

const mapStateToProps = (state) => ({
    ...
})
const mapDispatchToProps = (dispatch) => ({
    ...
})
*/


class CurrencyExchange extends Component {
    render() {
        return (
          <div>
              <Heading>Currency exchange</Heading>
              <select name="Currency">
                  <option value="EUR">Euro</option>
                  <option value="USD">United States Dolars</option>
                  <option value="GBP">Great Britain Pounds</option>
              </select>
              <button onClick={() => this.props.fetchCurrency('EUR') }>Get data</button>
                <Line data={this.props.data} options={{responsive: true,
maintainAspectRatio: false}} height="100" />

          </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyExchange)
