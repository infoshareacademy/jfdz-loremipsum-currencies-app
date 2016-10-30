import React, { Component } from 'react';
import Heading from '../layout/Heading';
import { connect } from 'react-redux'

import {Line} from 'react-chartjs'

const mapStateToProps = (state) => ({
    data: state.currencyExchange
})


class CurrencyExchange extends Component {
    render() {
        console.log(this.props)
        return (
          <div>
              <Heading>Currency exchange</Heading>
                <Line data={this.props.data} width="600" height="300" />

          </div>
        );
    }
}

export default connect(mapStateToProps)(CurrencyExchange)
