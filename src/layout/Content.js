import React, {Component} from 'react';

export default class Content extends Component {
    render(){
        return (
            <p>Obok powinien być tekst z komponentu po kliknięciu w link - {this.props.children}</p>
        );
    }
}