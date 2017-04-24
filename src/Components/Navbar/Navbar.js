import React, { Component } from 'react';

export default class Navbar extends Component {
  componentDidMount() {
    let offset = 0;
    for (offset; offset < this.props.routes.length; offset++) {
      if(this.props.routes[offset].path === window.location.hash.slice(1)) break;
    }
    this.refs.navbarSlider.style.left = this.props.routes.length/100*offset+'%';
  }
  handleRouteChange(offset) {
    this.refs.navbarSlider.style.left = offset/this.refs.navLinks.offsetWidth*100+'%';
  }
  render() {
    return (
      <nav className="Navbar">
        <div
          ref="navLinks"
          className="nav-links"
        >
          {this.props.routes.map((route) => (
            <a
              href={'#'+route.path}
              key={route.path}
              onClick={(e) => this.handleRouteChange(e.target.offsetLeft)}
            >{route.label}</a>
          ))}
          <span
            ref="navbarSlider"
            id="navbar-slider"
            style={{
              width: (100/this.props.routes.length)+'%'
            }}
          ></span>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  routes: React.PropTypes.array.isRequired,
}
