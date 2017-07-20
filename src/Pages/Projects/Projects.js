import React, { Component } from 'react';
import Project from './Project/Project';
import projects from './Projects.data';

export default class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        {projects.map((project) => (
          <Project key={project.name}
            name={project.name}
            description={project.description}
            link={project.link}
            tags={project.tags}
            github={project.github}
            completeness={project.completeness}
            collaborators={project.collaborators}
            image={project.image}
          />
        ))}
      </div>
    );
  }
}
