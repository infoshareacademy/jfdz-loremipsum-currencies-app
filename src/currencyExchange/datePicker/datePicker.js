import React, { Component } from 'react';
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'


var Example = React.createClass({
    displayName: 'Pick Date',

    getInitialState: function() {
        return {
            startDate: moment()
        };
    },

    handleChange: function(date) {
        this.setState({
            startDate: date
        });
    },

    render: function() {
        return <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange} />;
    }
});