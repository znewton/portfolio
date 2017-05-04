import React, { Component } from 'react';

let previousHash = '';

export default class SectionWrapper extends Component {
  render() {
    return (
      <section className="SectionWrapper" >
        {this.props.children}
      </section>
    );
  }
}
