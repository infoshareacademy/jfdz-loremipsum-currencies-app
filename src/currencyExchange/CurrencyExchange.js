import React, { Component } from 'react';
import Heading from '../layout/Heading';
import { connect } from 'react-redux'

var LineChart = require("react-chartjs").Line;


const mapStateToProps = (state) => ({
    data: state.currencyExchange
})


class CurrencyExchange extends Component {
    render() {
        console.log(this.props)
        return (
          <div>
              <Heading>Currency exchange</Heading>
                <LineChart data={this.props.data} width="600" height="300" />

          </div>
        );
    }
}

export default connect(mapStateToProps)(CurrencyExchange)