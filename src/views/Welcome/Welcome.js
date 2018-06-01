import React from 'react';
import './Welcome.css';
import View from '../View';

class Welcome extends View {
  render() {
    return (
      <div className={this.cnb.className} id={this.props.id}>
        Welcome
      </div>
    );
  }
}

export default Welcome;
