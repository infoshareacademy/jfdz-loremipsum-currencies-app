import React, { Component } from 'react';
import './App.css';

import Header from './layout/Header';
//import Content from './layout/Content';

class App extends Component {

    componentWillMount() {
        console.log(this.props);
    }

    render() {
    return (
        <div>
            {/*<Signin />*/}
            <Header />
            {this.props.children}
        </div>
    );
  }
}


export default App;