import React, { Component } from 'react';

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
  src: React.PropTypes.string.isRequired,
  alt: React.PropTypes.string.isRequired,
  top: React.PropTypes.string,
  left: React.PropTypes.string,
  overlay: React.PropTypes.bool,
  header: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.element
  ]),
  subheader: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.element
  ]),
  hleft: React.PropTypes.number,
  htop: React.PropTypes.number,
  hright: React.PropTypes.number,
  hbottom: React.PropTypes.number,
}
