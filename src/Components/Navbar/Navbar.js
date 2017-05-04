import React, { Component } from 'react';

export default class Navbar extends Component {
  componentDidMount() {
    if(window.addEventListener) {
      window.addEventListener('hashchange', (e) => {
        e.preventDefault();
        let offset = 0;
        for (offset = 0; offset < this.props.routes.length; offset++) {
          if(this.props.routes[offset].path === window.location.hash.slice(1)) break;
        }
        this.handleRouteChange(offset);
      });
      if(window.location.hash) {
        let offset = 0;
        for (offset = 0; offset < this.props.routes.length; offset++) {
          if(this.props.routes[offset].path === window.location.hash.slice(1)) break;
        }
        this.handleRouteChange(offset);
      } else {
        window.location = '#/';
      }
    }
  }
  handleRouteChange(offset) {
    this.refs.navbarSlider.style.left = 100/this.props.routes.length*offset+'%';
  }
  render() {
    return (
      <nav className="Navbar">
        <a
          href="#/"
          className="nav-title"
        >znewton</a>
        <div
          ref="navLinks"
          className="nav-links"
        >
          {this.props.routes.map((route, i) => (
            <a
              href={'#'+route.path}
              key={route.path}
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
