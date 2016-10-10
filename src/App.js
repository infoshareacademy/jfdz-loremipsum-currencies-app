import React, { Component } from 'react';

import Header from './layout/Header';
import Content from './layout/Content';

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