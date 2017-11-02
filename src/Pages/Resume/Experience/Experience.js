import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Experience extends Component {
  render() {
    return (
      <div className="Experience">
        <div className="title">
          <div className="company">{this.props.company_name}</div>
          <div className="position">{this.props.position}</div>
          <div className="duration">
            ({' '+this.props.start_date+' - '
              +(this.props.end_date.trim() || 'Present')+' '})
          </div>
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
  company_name: PropTypes.string,
  position: PropTypes.string,
  start_date: PropTypes.string,
  end_date: PropTypes.string,
  actions: PropTypes.arrayOf(PropTypes.string),
};

Experience.defaultProps = {
  company_name: '',
  position: '',
  start_date: '',
  end_date: '',
  actions: [],
};
