import React from 'react';
import './Welcome.css';
import View from '../View';
import { BouncingImg } from './components';

class Welcome extends View {
  constructor() {
    super();
    this.displayName = 'Welcome';
    this.cnb.add(this.displayName);
  }
  render() {
    return (
      <div className={this.cnb.className} id={this.props.id}>
        <BouncingImg detail="Hi, I'm a test!">Test1</BouncingImg>
        <BouncingImg detail="Hi, I'm also test!">Test2</BouncingImg>
        <BouncingImg detail="Moar test">Test3</BouncingImg>
      </div>
    );
  }
}

export default Welcome;
