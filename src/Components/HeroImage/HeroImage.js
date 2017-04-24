import React, { Component } from 'react';

export default class HeroImage extends Component {
  render() {
    return (
      <div className="HeroImage">
        <img
          src={this.props.src}
          alt={this.props.alt}
          style={{top: this.props.top}}
        />
        {this.props.overlay && (
          <span
            className="hero-overlay"
            style={{}}
          ></span>
        )}
      </div>
    );
  }
}

HeroImage.propTypes = {
  src: React.PropTypes.string.isRequired,
  alt: React.PropTypes.string.isRequired,
  top: React.PropTypes.string
}
