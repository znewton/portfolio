import React, { Component } from 'react';
import data from './Resume.data';

import FlexContainer from '../../Components/FlexContainer/FlexContainer';

import Education from './Education/Education';
import Skill from './Skill/Skill';
import Experience from './Experience/Experience';
import Activity from './Activity/Activity';
import Achievement from './Achievement/Achievement';

export default class Resume extends Component {
  render() {
    return (
      <div className="Resume">
        <div id="contact-info">
          <div className="left">
            <div className="name">{data.contact_info.name}</div>
            <div className="address">
              <div className="permanent">
                <span className="fa fa-home fa-fw" />
                {data.contact_info.permanent_address}
                <span className="type">(Permanent)</span>
              </div>
              <div className="current">
                <span className="fa fa-building fa-fw" />
                {data.contact_info.current_address}
                <span className="type">(Current)</span>
              </div>
            </div>
          </div>
          <div className="right">
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
              <span className="fa fa-file fa-fw" aria-hidden="true" />
              <a href={data.contact_info.portfolio}>{data.contact_info.portfolio}</a>
            </div>
          </div>
        </div>

        <div id="objective">
          <div className="section-header">Objective</div>
          <div className="section-content">
            {data.objective}
          </div>
        </div>

        <div id="educations">
          <div className="section-header">Education</div>
          <div className="section-content">
            <FlexContainer cols={(data.educations.length % 2) ? 1 : 2}>
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
            </FlexContainer>
          </div>
        </div>

        <div id="skills">
          <div className="section-header">Skills</div>
          <div className="section-content">
            <FlexContainer>
            {Object.keys(data.skills).map((skill, i) => (
              <Skill key={i}
                title={skill.charAt(0).toUpperCase() + skill.slice(1)}
                skills={data.skills[skill]}
              />
            ))}
            </FlexContainer>
          </div>
        </div>

        <div id="experiences">
          <div className="section-header">Experience</div>
          <div className="section-content">
            {data.experiences.slice(0,-1).map((experience, i) => (
              <Experience key={i}
                company_name={experience.company_name}
                position={experience.position}
                start_date={experience.start_month+' '+experience.start_year}
                end_date={experience.end_month+' '+experience.end_year}
                actions={experience.actions}
              />
            ))}
          </div>
        </div>

        <div id="activities">
          <div className="section-header">Activities</div>
          <div className="section-content">
            {data.activities.map((activity, i) => (
              <Activity key={i}
                name={activity.name}
                dates={activity.dates}
                actions={activity.actions}
              />
            ))}
          </div>
        </div>

        <div id="achievements">
          <div className="section-header">Achievements</div>
          <div className="section-content">
            {data.achievements.map((achievement, i) => (
              <Achievement key={i}
                name={achievement.name}
                dates={achievement.dates}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
