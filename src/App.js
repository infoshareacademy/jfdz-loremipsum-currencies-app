import React, { Component } from 'react';
import './App.css';

import Signin from './signin/Signin';
import Header from './layout/Header';
import Content from './layout/Content';

class App extends Component {
  render() {
    return (
        <div>
          <Signin />

          <Header />
          <Content />
        </div>
    );
  }
}

export default App;
