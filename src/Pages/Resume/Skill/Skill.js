import React, { Component } from 'react';

export default class Skill extends Component {
  compare(prop) {
    return function (a,b) {
      if (a[prop] < b[prop])
        return 1;
      if (a[prop] > b[prop])
        return -1;
      return 0;
    }
  }
  render() {
    let comp = this.compare('competency');
    this.props.skills.sort(comp);
    return (
      <div className="Skill">
        <div className="title">{this.props.title}</div>
        <ul className="skills">
          {this.props.skills.map((skill, i) => (
            <li key={i}>
              <span className="name">{skill.name}</span>
              <span className="competency">{[...Array(5)].map((el, i) => (
                <span className={'bar'+ ((i < skill.competency) ? ' filled' : '') } key={i}/>
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
