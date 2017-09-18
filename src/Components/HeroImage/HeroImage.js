import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class HeroImage extends Component {
  render() {
    let width = this.props.left ?
          (Math.abs(this.props.left)*2+100)+'vw' :
          null;
    return (
      <div className="HeroImage">
        <img
          src={this.props.src}
          alt={this.props.alt}
          style={{
            top: this.props.top,
            left: this.props.left+'vw',
            width: width,
          }}
        />
        {this.props.overlay && (
          <span className="hero-overlay"></span>
        )}
        {(this.props.header || this.props.subheader) &&
          <div
            className="hero-header"
            style={
              {left: this.props.hleft+'%', top: this.props.htop+'%',
               right: this.props.hright+'%', bottom: this.props.hbottom+'%'}
            }
          >
            <h1>{this.props.header}</h1>
            <h2>{this.props.subheader}</h2>
          </div>
        }
      </div>
    );
  }
}

HeroImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  top: PropTypes.string,
  left: PropTypes.string,
  overlay: PropTypes.bool,
  header: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  subheader: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  hleft: PropTypes.number,
  htop: PropTypes.number,
  hright: PropTypes.number,
  hbottom: PropTypes.number,
}
