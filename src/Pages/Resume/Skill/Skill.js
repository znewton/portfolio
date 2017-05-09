import React, { Component } from 'react';

export default class Skill extends Component {
  render() {
    return (
      <div className="Skill">
        <div className="title">{this.props.title}</div>
        <ul className="skills">
          {this.props.skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </div>
    );
  }
}

Skill.propTypes = {
  title: React.PropTypes.string,
  skills: React.PropTypes.arrayOf(React.PropTypes.string),
};

Skill.defaultProps = {
  title: '',
  skills: [],
};
