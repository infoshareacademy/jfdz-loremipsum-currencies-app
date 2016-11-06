import React, { Component } from 'react';
import './Heading.css';

export default class Heading extends Component {
    render() {
        return(
            <h2 className="heading">{this.props.children}</h2>
        );
    }
}
