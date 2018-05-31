import React, { Component } from 'react';
import ClassNameBuilder from 'lib/ClassNameBuilder';

class View extends Component {
  constructor() {
    super();
    this.cnb = new ClassNameBuilder('view');
    this.cnb.add(this.displayName);
  }
  componentDidMount() {
    const element = document.getElementById(this.props.id);
    this.scrollHandler = () => {
      const elmtBox = element.getBoundingClientRect();
    };
    window.addEventListener('scroll', this.scrollHandler);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandler);
  }
}

export default View;
