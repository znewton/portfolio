import React, { Component } from 'react';
import './Projects.css';
import View from '../View';

class Projects extends View {
  render() {
    return (
      <div className={this.cnb.className} id={this.props.id}>
        Projects
      </div>
    );
  }
}

export default Projects;
