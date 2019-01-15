import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/fontawesome-pro-solid';
import { faGithub } from '@fortawesome/fontawesome-free-brands';

import './Projects.css';
import View from '../View';
import projects from './projects.data';

class Project extends React.Component {
  render() {
    const { description, stack, github, live } = this.props;
    return (
      <div className="Projects__project">
        <div className="Projects__project-description">{description}</div>
        <div className="Projects__project-stack">
          {stack.map(tech => (
            <span className="Projects__project-stack__tag" key={tech}>
              {tech}
            </span>
          ))}
        </div>
        <div className="Projects__project-links">
          <a href={github}>
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
          <a href={live}>
            <FontAwesomeIcon icon={faLink} /> Live Project
          </a>
        </div>
      </div>
    );
  }
}

class Projects extends View {
  constructor() {
    super();
    this.displayName = 'Projects';
    this.cnb.add(this.displayName);
  }
  render() {
    return (
      <div className={this.cnb.className} id={this.props.id}>
        <h1 className="display-font">Projects</h1>
        {projects.map((project, i) => (
          <React.Fragment key={i}>
            <div className="Projects__project-title">{project.title}</div>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default Projects;
