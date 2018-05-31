import React, { Component } from 'react';
import './Experience.css';
import View from '../View';

class Experience extends View {
  render() {
    return (
      <div className={this.cnb.className} id={this.props.id}>
        Experience
      </div>
    );
  }
}

export default Experience;
