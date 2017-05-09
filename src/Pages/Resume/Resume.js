import React, { Component } from 'react';
import data from './Resume.data';

import Education from './Education/Education';
import Skill from './Skill/Skill';
import Experience from './Experience/Experience';
import Activity from './Activity/Activity';
import Achievement from './Achievement/Achievement';

export default class Resume extends Component {
  render() {
    return (
      <div className="Resume">
        <div id="contact_info">
        </div>

        <div id="objective">
          {data.objective}
        </div>

        <div id="educations">
          {data.educations.map((education, i) => (
            <Education key={i} />
          ))}
        </div>

        <div id="skills">
          {Object.keys(data.skills).map((skill, i) => (
            <Skill key={i} />
          ))}
        </div>

        <div id="experiences">
          {data.experiences.map((experience, i) => (
            <Experience key={i} />
          ))}
        </div>

        <div id="activities">
          {data.activities.map((activity, i) => (
            <Activity key={i} />
          ))}
        </div>

        <div id="achievements">
          {data.achievements.map((achievement, i) => (
            <Achievement key={i} />
          ))}
        </div>
      </div>
    );
  }
}
