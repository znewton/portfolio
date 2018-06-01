import React from 'react';
import './Welcome.css';
import View from '../View';

class Welcome extends View {
  constructor() {
    super();
    this.displayName = 'Welcome';
    this.cnb.add(this.displayName);
  }
  render() {
    return (
      <div className={this.cnb.className} id={this.props.id}>
        Welcome
      </div>
    );
  }
}

export default Welcome;
