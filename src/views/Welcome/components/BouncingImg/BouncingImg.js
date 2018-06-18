import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BouncingImg.css';

import { addEndEventListener, removeEndEventListener } from 'lib/Events';

const HOVER_DIAMETER = 150;
const FRAME_PADDING = 5;

class BouncingImg extends Component {
  constructor() {
    super();
    this.id = Math.floor(Math.random() * 10000).toString(16);
    this.state = {
      y: 0,
      x: 0,
      xVel: 0,
      yVel: 0,
      hovered: false,
      lastTick: new Date()
    };
    this.frame = { height: 1000, width: 1000 };
    this.updateParentSize = this.updateParentSize.bind(this);
  }
  componentDidMount() {
    this.updateParentSize();
    addEndEventListener(window, 'resize', this.updateParentSize, 500, this.id);
    const randStartX = Math.floor(
      Math.random() *
        (this.frame.width - (this.props.diameter + this.props.frameXReduction))
    );
    const randStartY = Math.floor(
      Math.random() *
        (this.frame.height - (this.props.diameter + this.props.frameYReduction))
    );
    const rand = () => (Math.random() + 1) * (Math.random() < 0.5 ? 1 : -1);
    this.setState(
      {
        x: randStartX,
        y: randStartY,
        xVel: rand(),
        yVel: rand(),
        lastTick: new Date()
      },
      () => {
        this.animate();
      }
    );
  }
  componentWillUnmount() {
    removeEndEventListener(this.id);
    cancelAnimationFrame(this.raf);
  }
  render() {
    const hoverDiameter = this.props.hoverDiameter || HOVER_DIAMETER;
    const { x, y, hovered } = this.state;
    const diameter = !hovered ? this.props.diameter : hoverDiameter;
    const mainStyles = {
      height: diameter,
      width: diameter,
      transform: `translate(${hovered ? Math.floor(x) : x}px, ${
        hovered ? Math.floor(y) : y
      }px)`,
      zIndex: hovered ? 100 : null
    };
    const switchOpenDir =
      x + hoverDiameter * 3 >= this.frame.width - FRAME_PADDING;
    const borderRadiusStyles = {
      borderTopLeftRadius: switchOpenDir && hovered ? null : diameter,
      borderBottomLeftRadius: switchOpenDir && hovered ? null : diameter,
      borderTopRightRadius: !switchOpenDir && hovered ? null : diameter,
      borderBottomRightRadius: !switchOpenDir && hovered ? null : diameter
    };
    const backdropStyles = {
      ...borderRadiusStyles,
      width: hovered ? 3 * diameter : diameter,
      height: diameter,
      left: !switchOpenDir ? 0 : null,
      right: switchOpenDir ? 0 : null
    };
    const imgStyles = {
      ...borderRadiusStyles,
      height: diameter,
      width: diameter
    };
    const detailWrapperStyles = {
      width: hovered ? 2 * hoverDiameter : 0,
      height: hoverDiameter,
      left: !switchOpenDir ? hoverDiameter : null,
      right: switchOpenDir ? hoverDiameter : null
    };
    const detailStyles = {
      transformOrigin: switchOpenDir ? 'right' : 'left'
    };
    return (
      <div
        ref="img"
        className="BouncingImg"
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.handleMouseLeave()}
        style={mainStyles}
      >
        <div className="BouncingImg__backdrop" style={backdropStyles} />
        <div className="BouncingImg__img" style={imgStyles}>
          {this.props.children}
        </div>
        {this.props.detail && (
          <div
            className="BouncingImg__detail-wrapper"
            style={detailWrapperStyles}
          >
            <div className="BouncingImg__detail" style={detailStyles}>
              {this.props.detail}
            </div>
          </div>
        )}
      </div>
    );
  }
  handleMouseLeave() {
    const now = new Date();
    this.setState({ hovered: false, lastTick: now });
    this.animate();
  }
  updateParentSize() {
    const img = this.refs.img;
    const parentBox = img.parentElement.getBoundingClientRect();
    this.frame = {
      height: parentBox.height,
      width: parentBox.width
    };
    const { width, height } = this.frame;
    const { diameter } = this.props;
    let { x, y } = this.state;
    if (x > width) {
      x = width - diameter;
    } else if (x < 0) {
      x = diameter;
    }
    if (y > height) {
      y = height - diameter;
    } else if (y < 0) {
      y = diameter;
    }
    this.setState({ x, y });
  }
  animate() {
    const now = new Date();
    this.setState(prevState => {
      const nextXVel = this.xVel(prevState);
      const nextYVel = this.yVel(prevState);
      const nextX = this.x(now, prevState);
      const nextY = this.y(now, prevState);
      return {
        x: nextX,
        y: nextY,
        xVel: nextXVel,
        yVel: nextYVel,
        lastTick: now
      };
    });
    this.raf = requestAnimationFrame(() => {
      if (!this.state.hovered) this.animate();
    });
  }
  x(now, { x, xVel, lastTick }) {
    return x + ((now - lastTick) / 1000 / 2) * xVel * this.props.speed;
  }
  xVel({ x, xVel }) {
    const frameOffset = FRAME_PADDING + this.props.frameXReduction;
    const outLeft = x + this.props.diameter >= this.frame.width - frameOffset;
    const outRight = x <= frameOffset;
    if ((outLeft && xVel > 0) || (outRight && xVel < 0)) {
      return -1 * xVel;
    }
    return xVel;
  }
  y(now, { y, yVel, lastTick }) {
    return y + ((now - lastTick) / 1000 / 2) * yVel * this.props.speed;
  }
  yVel({ y, yVel }) {
    const frameOffset = FRAME_PADDING + this.props.frameYReduction;
    const outBottom =
      y + this.props.diameter >= this.frame.height - frameOffset;
    const outTop = y <= frameOffset;
    if ((outBottom && yVel > 0) || (outTop && yVel < 0)) {
      return -1 * yVel;
    }
    return yVel;
  }
}

BouncingImg.propTypes = {
  diameter: PropTypes.number,
  speed: PropTypes.number,
  detail: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  frameYReduction: PropTypes.number,
  frameXReduction: PropTypes.number
};

BouncingImg.defaultProps = {
  diameter: 100,
  speed: 50,
  frameYReduction: 0,
  frameXReduction: 0
};

export default BouncingImg;
