import React, { Component } from 'react';

export default class Experience extends Component {
  render() {
    return (
      <div className="Experience">
        <div className="company-name">{this.props.company_name}</div>
        <div className="position">{this.props.position}</div>
        <div className="time-period">
          {this.props.start_date+' - '
            +(this.props.end_date || 'present')}
        </div>
        <ul className="actions">
          {this.props.actions.map((action, i) => (
            <li key={i}>{action}</li>
          ))}
        </ul>
      </div>
    );
  }
}

Experience.propTypes = {
  company_name: React.PropTypes.string,
  position: React.PropTypes.string,
  start_date: React.PropTypes.string,
  end_date: React.PropTypes.string,
  actions: React.PropTypes.arrayOf(React.PropTypes.string),
};

Experience.defaultProps = {
  company_name: '',
  position: '',
  start_date: '',
  end_date: '',
  actions: [],
};
