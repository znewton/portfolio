import React, { Component } from 'react';

export default class Section extends Component {
  render() {
    return (
      <section
        data-path={'#'+this.props.path}
        className="Section"
        style={{backgroundColor: '#'+(Math.random()*0xFFFFFF<<0).toString(16)}}
      >
        {this.props.children}
      </section>
    );
  }
}

Section.propTypes = {
  path: React.PropTypes.string.isRequired,
}
