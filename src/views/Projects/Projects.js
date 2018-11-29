import React from 'react';
import './Projects.css';
import View from '../View';

class Projects extends View {
  constructor() {
    super();
    this.displayName = 'Projects';
    this.cnb.add(this.displayName);
    this.cnb.add('view-sample');
  }
  render() {
    return (
      <div className={this.cnb.className} id={this.props.id}>
        Projects
      </div>
    );
  }
}

export default Projects;
