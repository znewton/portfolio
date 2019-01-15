import React from 'react';
import './Projects.css';
import View from '../View';
import projects from './projects.data';

class Project extends React.Component {
  render() {
    const { title, description, stack, github, live } = this.props;
    return <div className="Project">{title}</div>;
  }
}

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
        {projects.map((project, i) => (
          <Project key={i} {...project} />
        ))}
      </div>
    );
  }
}

export default Projects;
