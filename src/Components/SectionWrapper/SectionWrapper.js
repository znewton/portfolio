import React, { Component } from 'react';

let previousHash = '';

export default class SectionWrapper extends Component {
  render() {
    return (
      <section
        className="SectionWrapper"
        style={{
          width: (this.props.children.length*20+80)+'vw'
        }}
      >
        {this.props.children}
      </section>
    );
  }
}
