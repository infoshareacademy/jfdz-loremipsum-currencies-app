import React, { Component } from 'react';
import Header from './layout/Header';
import Content from './layout/Content';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                {/*<Signin />*/}
                <Header />
                <Content layout={this.props.children} />
            </div>
        );
    }
}

export default App;