import React, { Component } from 'react';
import './Resume.css';
import View from '../View';

class Resume extends View {
  render() {
    return (
      <div className={this.cnb.className} id={this.props.id}>
        Resume
      </div>
    );
  }
}

export default Resume;
