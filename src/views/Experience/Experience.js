import React from 'react';
import './Experience.css';
import View from '../View';

import { Slideshow } from 'components';

const experiences = [
  {
    title: 'Zendesk',
    slides: [
      {
        body: (
          <div>
            <p>
              I spent the summer of 2018 interning at Zendesk in San Francisco
              as a Front-end software engineer
            </p>
          </div>
        ),
        image: {
          src:
            'https://images.pexels.com/photos/1141853/pexels-photo-1141853.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
          alt: 'The golden gate bridge shrouded by fog'
        }
      }
    ]
  },
  {
    title: 'Workiva',
    slides: [
      {
        body: (
          <div>
            <p>
              In the summer of 2017 I interned as a Software Engineer at Workiva
              in Ames, IA.
            </p>
          </div>
        ),
        image: {
          src:
            'http://engineeredcontrols.com/wp-content/uploads/2016/03/Workiva4.jpg',
          alt: 'The back of the Workiva Headquarters in Ames, IA'
        }
      },
      {
        body: (
          <div>
            <p>
              I worked in the Enterprise Product Line on the Workspaces team
              doing primarily front-end, feature development tasks. We used{' '}
              <a href="https://workiva.github.io/over_react/">OverReact</a> (
              <a href="https://reactjs.org">React</a> +{' '}
              <a href="https://www.dartlang.org/">Dart</a>) to quickly and
              confidently build Admin features for the new{' '}
              <a href="https://success.workiva.com/help/workspaces/using-workspaces/introduction-to-workspaces">
                Wdesk Workspaces
              </a>
              .
            </p>
          </div>
        ),
        image: {
          src:
            'https://success.workiva.com/help/assets/img/workspaces/create-a-workspace-1.gif',
          alt: 'Wdesk workspaces in use'
        }
      },
      {
        body: (
          <div>
            One of my favorite projects on the Workspace team was building a
            color picker that allows Workspace admins to choose their theme
            color. This was a fun project for me because it was mostly from
            scratch instead of the usual workflow of coercing the pre-built
            WebSkin React components into what is desired.
          </div>
        ),
        image: {
          src:
            'https://success.workiva.com/help/assets/img/workspaces/workspace-settings-2.png',
          alt: 'A screenshot of the open color picker'
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
