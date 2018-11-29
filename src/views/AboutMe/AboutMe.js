import React from 'react';
import './AboutMe.css';
import View from '../View';

class AboutMe extends View {
  constructor() {
    super();
    this.displayName = 'AboutMe';
    this.cnb.add(this.displayName);
    this.cnb.add('view-sample');
  }
  render() {
    return (
      <div className={this.cnb.className} id={this.props.id}>
        About
      </div>
    );
  }
}

export default AboutMe;
