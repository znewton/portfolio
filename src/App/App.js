import React, { Component } from 'react';
import './App.css';

import { Nav, Main, Footer } from 'components';
import views from 'views';

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeView: null
    };
    this.setAppState = this.setAppState.bind(this);
  }

  render() {
    return (
      <div className="App">
        <Nav
          setAppState={this.setAppState}
          activeView={this.state.activeView}
        />
        <Main
          setAppState={this.setAppState}
          activeView={this.state.activeView}
        />
        <Footer setAppState={this.setAppState} />
      </div>
    );
  }

  setAppState(key, val) {
    this.setState({ [key]: val });
  }
}

export default App;
