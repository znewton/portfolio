import React, { Component } from 'react';

let offset = 0;
export default class Navbar extends Component {
  componentDidMount() {
    if(window.addEventListener) {
      window.addEventListener('hashchange', (e) => {
        e.preventDefault();
        for (offset = 0; offset < this.props.routes.length; offset++) {
          if(this.props.routes[offset].path === window.location.hash.slice(1)) break;
        }
        this.handleRouteChange();
      });
      if(window.location.hash) {
        for (offset = 0; offset < this.props.routes.length; offset++) {
          if(this.props.routes[offset].path === window.location.hash.slice(1)) break;
        }
        this.handleRouteChange();
      } else {
        window.location = '#/';
      }
    }
  }
  handleRouteChange() {
    this.refs.navbarSlider.style.left = 100/this.props.routes.length*offset+'%';
  }
  handleMouseEnter(evt) {
    this.refs.navbarSlider.style.left = evt.target.offsetLeft+'px';
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
              onMouseEnter={this.handleMouseEnter.bind(this)}
              onMouseLeave={this.handleRouteChange.bind(this)}
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
