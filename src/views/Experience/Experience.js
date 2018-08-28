import React from 'react';
import './Experience.css';
import View from '../View';

import { Slideshow } from 'components';

const experiences = [
  {
    title: 'Workiva',
    slides: [
      {
        title: 'Party Parrot',
        body: (
          <div>
            The <strong>partiest</strong> of parrots.
          </div>
        ),
        image: {
          src: 'https://media.giphy.com/media/l3q2zVr6cu95nF6O4/giphy.gif',
          alt: 'A partying parrot'
        }
      }
    ]
  }
];

class Experience extends View {
  constructor() {
    super();
    this.displayName = 'Experience';
    this.cnb.add(this.displayName);
  }
  render() {
    return (
      <div className={this.cnb.className} id={this.props.id}>
        {experiences.map(experience => (
          <div className="Experience__experience">
            <div className="Experience__experience-title">
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
