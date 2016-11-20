import React, { Component } from 'react';
import { Link } from 'react-router';
import './Logo.css';

export default class HeaderLogo extends Component {
    render() {
        return(
            <h1>
                <img src="images/logo.svg" alt="Currency Monitor" />
                <Link to="/">Currency Monitor</Link>
            </h1>
        );
    }
}