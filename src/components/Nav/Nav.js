import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <div className="nav-left">
          <div className="brand display-font">Zach Newton</div>
        </div>
        <div className="nav-right" />
      </div>
    );
  }
}

export default Nav;
