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
          <div className="name">{data.contact_info.name}</div>
          <div className="address">
            <div className="permanent">{data.contact_info.permanent_address}</div>
            <div className="current">{data.contact_info.current_address}</div>
          </div>
          <div className="phone">
            <span className="fa fa-phone fa-fw" aria-hidden="true" />
            <a href={'tel:'+data.contact_info.phone}>{data.contact_info.phone}</a>
          </div>
          <div className="email">
            <span className="fa fa-envelope fa-fw" aria-hidden="true" />
            <a href={'mailto:'+data.contact_info.email}>{data.contact_info.email}</a>
          </div>
          <div className="github">
            <span className="fa fa-github fa-fw" aria-hidden="true" />
            <a href={'https://github.com/'+data.contact_info.github}>{data.contact_info.github}</a>
          </div>
          <div className="portfolio">
            <span className="fa fa-paper fa-fw" aria-hidden="true" />
            <a href={data.contact_info.portfolio}>{data.contact_info.portfolio}</a>
          </div>
        </div>

        <div id="objective">
          {data.objective}
        </div>

        <div id="educations">
          {data.educations.map((education, i) => (
            <Education key={i}
              name={education.name}
              city={education.city}
              state={education.state}
              start_date={education.start_month+' '+education.start_year}
              end_date={education.end_month+' '+education.end_year}
              earned={education.earned}
              gpa={education.gpa}
            />
          ))}
        </div>

        <div id="skills">
          {Object.keys(data.skills).map((skill, i) => (
            <Skill key={i}
              title={skill.charAt(0).toUpperCase() + skill.slice(1)}
              skills={data.skills[skill]}
            />
          ))}
        </div>

        <div id="experiences">
          {data.experiences.map((experience, i) => (
            <Experience key={i}
              company_name={experience.company_name}
              position={experience.position}
              start_date={experience.start_month+' '+experience.start_year}
              end_date={experience.end_month+' '+experience.end_year}
              actions={experience.actions}
            />
          ))}
        </div>

        <div id="activities">
          {data.activities.map((activity, i) => (
            <Activity key={i}
              name={activity.name}
              dates={activity.dates}
              actions={activity.actions}
            />
          ))}
        </div>

        <div id="achievements">
          {data.achievements.map((achievement, i) => (
            <Achievement key={i}
              name={achievement.name}
              dates={achievement.dates}
            />
          ))}
        </div>
      </div>
    );
  }
}
