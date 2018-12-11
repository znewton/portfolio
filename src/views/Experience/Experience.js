import React from 'react';
import './Experience.css';
import View from '../View';

import { Slideshow } from 'components';
import experiences from './experiences';

class Experience extends View {
  constructor() {
    super();
    this.displayName = 'Experience';
    this.cnb.add(this.displayName);
  }

  render() {
    return (
      <div className={this.cnb.className} id={this.props.id}>
        <h1 className="display-font">Experience</h1>
        {experiences.map(experience => (
          <div className="Experience__experience" key={experience.title}>
            <div className="Experience__experience-title display-font">
              {experience.title}
            </div>
            <Slideshow slides={experience.slides} />
          </div>
        ))}
      </div>
    );
  }
}

export default Experience;
