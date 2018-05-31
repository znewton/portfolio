import React, { Component } from 'react';
import ClassNameBuilder from 'lib/ClassNameBuilder';

class View extends Component {
  constructor() {
    super();
    this.cnb = new ClassNameBuilder('view');
    this.cnb.add(this.displayName);
  }
}

export default View;
