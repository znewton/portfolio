import React, { Component } from 'react';
import './AboutMe.css';
import View from '../View';

class AboutMe extends View {
  render() {
    return (
      <div className={this.cnb.className} id={this.props.id}>
        About
      </div>
    );
  }
}

export default AboutMe;
