import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Slideshow.css';
import ClassNameBuilder from 'lib/ClassNameBuilder';

const LEFT = 37;
const RIGHT = 39;

class Slideshow extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
    };
    this.setActive = this.setActive.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(e) {
    switch (e.keyCode) {
      case LEFT:
        this.decrementIndex();
        break;
      case RIGHT:
        this.incrementIndex();
        break;
      default:
        break;
    }
  }

  setActive(index) {
    this.setState({ index });
  }

  incrementIndex() {
    const { slides } = this.props;
    let { index } = this.state;
    index = (index + 1) % slides.length;
    this.setActive(index);
  }

  decrementIndex() {
    const { slides } = this.props;
    let { index } = this.state;
    index = (index + slides.length - 1) % slides.length;
    this.setActive(index);
  }

  render() {
    const { slides } = this.props;
    const { index } = this.state;

    return (
      <React.Fragment>
        <div className="Slideshow" onKeyDown={this.handleKeyDown}>
          {slides.map((slide, i) => {
            const cnb = new ClassNameBuilder('Slideshow__slide');
            cnb.add('active', index === i);
            return (
              <div
                tabIndex="0"
                className={cnb.className}
                key={slide.image.src}
                onClick={() => this.setActive(i)}
                onFocus={() => this.setActive(i)}
                onMouseEnter={() => this.setActive(i)}
              >
                <div className="Slideshow__slide-body">{slide.body}</div>
                <div className="Slideshow__slide-image">
                  <img src={slide.image.src} alt={slide.image.alt} />
                </div>
              </div>
            );
          })}
        </div>
        <div className="Slideshow__indicators">
          {slides.map((slide, i) => {
            const cnb = new ClassNameBuilder('Slideshow__indicator');
            cnb.add('active', index === i);
            return (
              <div
                className={cnb.className}
                key={i}
                onClick={() => this.setActive(i)}
              >
                {i + 1}
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

Slideshow.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      body: PropTypes.any,
      image: PropTypes.shape({
        alt: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
      }),
    })
  ),
};

Slideshow.defaultProps = {
  slides: [],
};

export default Slideshow;
