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



// DATE RANGE

/*
 https://github.com/Hacker0x01/react-datepicker
https://hacker0x01.github.io/react-datepicker/

<DatePicker
    selected={this.state.startDate}
    selectsStart  startDate={this.state.startDate}
    endDate={this.state.endDate}
    onChange={this.handleChangeStart} />
<DatePicker
selected={this.state.endDate}
selectsEnd  startDate={this.state.startDate}
endDate={this.state.endDate}
onChange={this.handleChangeEnd} />*/
