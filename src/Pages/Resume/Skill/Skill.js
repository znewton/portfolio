import React, { Component } from 'react';

export default class Skill extends Component {
  render() {
    return (
      <div className="Skill">
        <div className="title">{this.props.title}</div>
        <ul className="skills">
          {this.props.skills.map((skill, i) => (
            <li key={i}>
              {skill.name}
              <span>{[...Array(5)].map((i) => (
                <span className={'bar'+ ((i <= skill.competency) ? ' filled' : '') } key={i}/>
              ))}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Skill.propTypes = {
  title: React.PropTypes.string,
  skills: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string,
    competency: React.PropTypes.number,
  })),
};

Skill.defaultProps = {
  title: '',
  skills: [],
};
