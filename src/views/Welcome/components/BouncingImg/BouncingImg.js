import React, { Component } from 'react';
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
      xVel: Math.random() < 0.5 ? 1 : -1,
      yVel: Math.random() < 0.5 ? 1 : -1,
      hovered: false,
      lastTick: new Date()
    };
    this.frame = { height: 1000, width: 1000 };
  }
  componentDidMount() {
    this.updateParentSize();
    addEndEventListener(window, 'resize', this.updateParentSize, 100, this.id);
    const randStartX = Math.floor(
      Math.random() * (this.frame.width - this.props.diameter)
    );
    const randStartY = Math.floor(
      Math.random() * (this.frame.height - this.props.diameter)
    );
    this.setState({ x: randStartX, y: randStartY, lastTick: new Date() }, () =>
      this.animate()
    );
  }
  componentWillUnmount() {
    removeEndEventListener(this.id);
    cancelAnimationFrame(this.raf);
  }
  render() {
    const { x, y, hovered } = this.state;
    const diameter = !hovered ? this.props.diameter : HOVER_DIAMETER;
    const mainStyles = {
      height: diameter,
      width: diameter,
      transform: `translate(${x}px, ${y}px)`
    };
    const switchOpenDir =
      x + HOVER_DIAMETER * 3 >= this.frame.width - FRAME_PADDING;
    const backdropStyles = {
      borderTopLeftRadius: switchOpenDir && hovered ? 0 : diameter,
      borderBottomLeftRadius: switchOpenDir && hovered ? 0 : diameter,
      borderTopRightRadius: !switchOpenDir && hovered ? 0 : diameter,
      borderBottomRightRadius: !switchOpenDir && hovered ? 0 : diameter,
      width: hovered ? 3 * diameter : diameter,
      height: diameter,
      left: !switchOpenDir ? 0 : null,
      right: switchOpenDir ? 0 : null
    };
    const imgStyles = {
      height: diameter,
      width: diameter
    };
    return (
      <div
        ref="img"
        className="BouncingImg"
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.handleMouseLeave()}
        style={mainStyles}
      >
        <div className="backdrop" style={backdropStyles} />
        <div className="img" style={imgStyles}>
          {this.props.children}
        </div>
        {this.props.detail && <div className="detail">{this.props.detail}</div>}
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
    return x + (now - lastTick) / 1000 / 1 * xVel * this.props.speed;
  }
  xVel({ x, xVel }) {
    if (x + this.props.diameter >= this.frame.width - FRAME_PADDING) {
      return -1;
    } else if (x <= FRAME_PADDING) {
      return 1;
    }
    return xVel;
  }
  y(now, { y, yVel, lastTick }) {
    return y + (now - lastTick) / 1000 / 1 * yVel * this.props.speed;
  }
  yVel({ y, yVel }) {
    if (y + this.props.diameter >= this.frame.height - FRAME_PADDING) {
      return -1;
    } else if (y <= FRAME_PADDING) {
      return 1;
    }
    return yVel;
  }
}

BouncingImg.defaultProps = {
  diameter: 100,
  speed: 50
};

export default BouncingImg;
