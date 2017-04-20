import React, { Component } from 'react';

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      active: '/',
    }
  }
  handleRouteChange(path) {
    this.setState({active: path})
  }
  render() {
    return (
      <section className="Navbar">
        {this.props.routes.map((route) => (
          <a
            href={'#'+route.path}
            key={route.path}
            onClick={() => this.handleRouteChange(route.path)}
          >{route.label}</a>
        ))}
      </section>
    );
  }
}

Navbar.propTypes = {
  routes: React.PropTypes.array.isRequired,
}
