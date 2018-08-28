import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Slideshow.css';

class Slideshow extends Component {
  render() {
    const { slides } = this.props;

    return (
      <div className="Slideshow">
        {slides.map(slide => (
          <div className="Slideshow__slide">
            <div className="Slideshow__slide-title">{slide.title}</div>
            <div className="Slideshow__slide-body">{slide.body}</div>
            <div className="Slideshow__slide-image">
              <img src={slide.image.src} alt={slide.image.alt} />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

Slideshow.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.any,
      image: PropTypes.shape({
        alt: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired
      })
    })
  )
};

Slideshow.defaultProps = {
  slides: []
};

export default Slideshow;
