import React from 'react';
import './AboutMe.css';
import View from '../View';
import { Slideshow } from 'components';
import about from './about.data';

class AboutMe extends View {
  constructor() {
    super();
    this.displayName = 'AboutMe';
    this.cnb.add(this.displayName);
  }
  render() {
    return (
      <div className={this.cnb.className} id={this.props.id}>
        <h1 className="display-font">About Me</h1>
        {about.map(snippet => (
          <div className="AboutMe__snippet" key={snippet.title}>
            <div className="AboutMe__snippet-title display-font">
              {snippet.title}
            </div>
            <Slideshow slides={snippet.slides} />
          </div>
        ))}
      </div>
    );
  }
}

export default AboutMe;
