import React, { Component } from 'react';
import './App.css';

import { Nav, Main, Footer } from 'components';

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeView: null
    };
    this.setAppState = this.setAppState.bind(this);
  }

  componentDidMount() {
    const hash = window.location.hash.replace('#', '');
    if (!hash) return;
    this.setState({ activeView: hash });
  }

  componentDidUpdate() {
    // console.log(this.state);
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
