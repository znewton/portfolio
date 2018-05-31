import React, { Component } from 'react';
import './Welcome.css';

class Welcome extends View {
  render() {
    return (
      <div className="Welcome view" {...this.props}>
        Welcome
      </div>
    );
  }
}

export default Welcome;
