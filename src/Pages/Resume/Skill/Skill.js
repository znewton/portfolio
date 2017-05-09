import React, { Component } from 'react';

export default class Skill extends Component {
  render() {
    return (
      <div className="Skill">
        Skill
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
