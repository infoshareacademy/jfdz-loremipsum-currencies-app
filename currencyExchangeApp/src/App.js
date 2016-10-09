import React, { Component } from 'react';
import './App.css';
import Header from './layout/Header';
import Content from './layout/Content';

class App extends Component {
  render() {
    return (
        <div>
          <Header />
          <Content />
        </div>
    );
  }
}

export default App;
