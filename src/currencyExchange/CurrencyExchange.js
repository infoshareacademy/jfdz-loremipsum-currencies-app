import React, { Component } from 'react';
import Heading from '../layout/Heading';
import { connect } from 'react-redux'

import { fetchEuro } from './actionCreators'

import {Line} from 'react-chartjs'

const mapStateToProps = (state) => ({
     data: state.currencyExchange,
    // euro: state.euroData.euro,
    // euroIsLoading: state.euroData.isLoading,
})

const mapDispatchToProps = (dispatch) => ({
    fetchEuro: () => dispatch(fetchEuro())
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
        console.log(this.props)
        return (
          <div>
              <Heading>Currency exchange</Heading>
              <button onClick={() => this.props.fetchEuro()}>Fetch</button>
                <Line data={this.props.data} width="600" height="300" />

          </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyExchange)
/*                                     (Euro) */
