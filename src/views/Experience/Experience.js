import React from 'react';
import './Experience.css';
import View from '../View';

class Experience extends View {
  constructor() {
    super();
    this.displayName = 'Experience';
    this.cnb.add(this.displayName);
    this.cnb.add('view-sample');
  }
  render() {
    return (
      <div className={this.cnb.className} id={this.props.id}>
        Experience
      </div>
    );
  }
}

export default Experience;
